// Global
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { ExercisesService } from '@/services/exercises/Exercises';
import { useQuery } from '@tanstack/react-query';
import { IExercise } from '@/types/exercise.interface';
import { useRouter } from 'next/router';
import { onAsk, onSuccessAlert, onErrorAlert } from '@/utils/sweetAlert';
interface ExerciseContextType {
  ExerciseMethods: {
    setId: (id: number) => void
    uploadXml: (file: File) => void
    createMoudle: (data: any) => void
    deleteModule: (id: any) => void
    updateExercisesState: (tableType: 'exercises' | 'exercises_rows', field: 'youtube_link' | 'pdf', data: string, orden: number | null) => void
    handleEdits: (orden: number) => void
    setIsChanged: (change: boolean) =>void
  };
  exercises: IExercise | undefined;
  loading: boolean,
  isOnlineXml: boolean,
  settingsEdit: number[] | undefined
}

const ExerciseContext = createContext<ExerciseContextType | null>(null);

// React hook
const useExercise = (): ExerciseContextType => {
  const context = useContext(ExerciseContext);
  if (!context) {
    throw new Error('Can not run without "ExerciseProvider"');
  }
  return context;
};

interface ExerciseProviderProps {
    children: ReactNode;
};

  
const ExerciseProvider: React.FC<ExerciseProviderProps> = (props) => {
  // state
    const [id, setId] = useState<number | null>();
    const [loading, setLoading] = useState(false)
    const [exercises, setExercises] = useState<IExercise | undefined>()
    const [isOnlineXml, setIsOnlineXml] = useState(false)
    const [settingsEdit, setSettingsEdit] = useState<number[]>()
    const [isChanged, setIsChanged] = useState(false)
    const router = useRouter();
    const moduleId = router.query.moduleId;
  // Helpers

  const fetchOnline = async (id: any) => {
    setLoading(true)
    try {
      const response = await ExercisesService.getOne(id)
      if(response){
        setExercises(response)
        setIsOnlineXml(true)
      } 
    } catch(e) {
      console.log('error',e)
    } finally {
      setLoading(false)
    }
  }

  const uploadXml = async (file: File) => {
    setLoading(true)
    try {
      const response = await ExercisesService.parseXlFile(file)
      setExercises(response)
      setIsOnlineXml(false)
    } catch(e) {
      console.log('error',e)
      onErrorAlert('שגיאה בלפרסס את המודול','XL אינו תקין')
    } finally {
      setLoading(false)
    }
  }

  const createMoudle = async (data: any) => {
    setLoading(true)
    try {
      const response = await ExercisesService.create(data)
      setTimeout(() => {
        fetchOnline(moduleId)
        onSuccessAlert('תרגיל נשמר בהצלחה!','')
        setLoading(false)

      },2000)
    } catch(e) {
      console.log('error',e)
    } finally {
    }
  }
  
  const deleteModule = async (id: any) => {
    const res = await onAsk('האם תרצו למחוק את המודול הזה?','')
    if(res){
      setLoading(true)
      setExercises(undefined)
      setIsOnlineXml(false)
      try {
        const response = await ExercisesService.delete(id)
        await fetchOnline(moduleId)
      } catch(e) {
        console.log('error',e)
      } finally {
        setLoading(false)
      }
    }

  }
  
  const updateExercisesState = (tableType: 'exercises' | 'exercises_rows', field: 'youtube_link' | 'pdf', data: string, orden: number | null) => {

    if(tableType === 'exercises') {
      if(field === 'youtube_link'){
        setExercises((e) => {
          if (e) {
            return { ...e, youtube_link: data };
          }
          return e;
        });
      }

      if(field === 'pdf'){
        setExercises((e) => {
          if (e) {
            return { ...e, pdf: data };
          }
          return e;
        });
      }
    } 

    if (tableType === 'exercises_rows') {
        if(field === 'youtube_link') {
          setExercises((e) => {
            if (e) {
              const updatedCollectionsRows = e.collectionsRows?.map((i) => {
                if (i.orden === orden) {
                  return { ...i, youtube_link: data };
                }
                return i;
              });
              return { ...e, collectionsRows: updatedCollectionsRows };
            }
            return e;
          });
        }

        if(field === 'pdf'){
          setExercises((e) => {
            if (e) {
              const updatedCollectionsRows = e.collectionsRows?.map((i) => {
                if (i.orden === orden) {
                  return { ...i, pdf: data };
                }
                return i;
              });
              return { ...e, collectionsRows: updatedCollectionsRows };
            }
            return e;
          });
        }
    }
  }

  const handleEdits = (orden: number) => {
    setSettingsEdit((prevSettings: number[] | undefined) => [...(prevSettings || []), orden]);
  }
  


  useEffect(() => {
    const moduleId = router.query.moduleId;
    fetchOnline(moduleId)
  },[router.query.moduleId])

  const ExerciseMethods = {
    setId,
    uploadXml,
    createMoudle,
    deleteModule,
    updateExercisesState,
    handleEdits,
    setIsChanged
  };
  const value: ExerciseContextType = {
    exercises,
    ExerciseMethods,
    loading,
    isOnlineXml,
    settingsEdit
  };

  return <ExerciseContext.Provider value={value} {...props} />;
};

export { useExercise, ExerciseProvider };