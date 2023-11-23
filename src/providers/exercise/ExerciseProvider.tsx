// Global
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { ExercisesService } from '@/services/exercises/Exercises';
import { useQuery } from '@tanstack/react-query';
import { IFirstModule } from '@/types/ModulesTypes.ts/FirstModule.interface';
import { useRouter } from 'next/router';
import { onAsk, onSuccessAlert, onErrorAlert } from '@/utils/sweetAlert';
import { ISecondModule } from '@/types/ModulesTypes.ts/SecondModule.interface';
import { ExerciseDeletionStoredData } from '@/utils/local-storage-exercise-deletion-store';
interface ExerciseContextType {
  ExerciseMethods: {
    setId: (id: number) => void
    uploadXml: (file: File) => void
    createMoudle: (data: any) => void
    deleteModule: (id: any) => void
    updateExercisesState: (tableType: 'exercises' | 'exercises_rows', field: 'youtube_link' | 'pdf', data: string, orden: number | null) => void
    handleEdits: (orden: number) => void
    setIsChanged: (change: boolean) =>void
    handleEditCheckBox: (id: number, cheked: boolean) => void
    handleSaveUpload: () => void
    chooseModule: (number: number) => void
    setChoosedTab: (number: number) => void
    resroteDeletionData: () => void
    fetchOnline: (id: string | string[] | undefined, bool: boolean) => void
  };
  exercises: IFirstModule | ISecondModule |undefined;
  loading: boolean,
  isOnlineXml: boolean,
  settingsEdit: number[] | undefined
  isChanged: boolean,
  handleEditedCheckbox: { id: number, checked: boolean }[],
  choosedModule: number | null,
  choosedTab: number,
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
    const [exercises, setExercises] = useState<IFirstModule | ISecondModule | undefined>()
    const [isOnlineXml, setIsOnlineXml] = useState(false)
    const [settingsEdit, setSettingsEdit] = useState<number[]>()
    const [isChanged, setIsChanged] = useState(false)
    const [handleEditedCheckbox, setHandleEditedCheckbox] = useState<{ id: number, checked: boolean }[]>([]);
    const [choosedModule, setChoosedModule] = useState<number | null>(null)
    const router = useRouter();
    const moduleId = router.query.moduleId;
    const [choosedTab, setChoosedTab] = useState(1)
    // Helpers

    const fetchOnline = async (id: any, useLoading = true) => {
      if(useLoading){
        setLoading(true)
      }
      try {
        const response = await ExercisesService.getOne(id)
        if(response){
          setExercises(response)
          setIsOnlineXml(true)
          setChoosedModule(response.module)
        } 
      } catch(e) {
        console.log('error',e)
      } finally {
        if(useLoading){
          setLoading(false)
        }
      }
    }

    const uploadXml = async (file: File) => {
      if(choosedModule) {
        setLoading(true)
        try {
          const response = await ExercisesService.parseXlFile(file,choosedModule)
          // console.log(response)
          setExercises(response)
          setIsOnlineXml(false)
        } catch(e) {
          console.log('error',e)
          onErrorAlert('שגיאה בלפרסס את המודול','XL אינו תקין')
        } finally {
          setLoading(false)
        }
      }
    }

    const createMoudle = async (data: any) => {
      setLoading(true)
      try {
        if(choosedModule === 1) {
          const response = await ExercisesService.createFirstModule(data)

        }

        if(choosedModule === 2) {
          const response = await ExercisesService.createSecondModule(data, 2)

        }

        if(choosedModule === 21) {
          const response = await ExercisesService.createSecondModule(data, 21)

        }

        if(choosedModule === 3) {
          const response = await ExercisesService.createSecondModule(data, 3)

        }
        setTimeout(() => {
          fetchOnline(moduleId)
          onSuccessAlert('תרגיל נשמר בהצלחה!','')
          setLoading(false)

        },2000)
      } catch(e) {
        console.log('error',e)
      } finally {
        location.reload()
      }
    }
    
    const deleteModule = async (id: any) => {
      const res = await onAsk('האם תרצו למחוק את המודול הזה?','')
      if(res){
        if(exercises){
          const {pdf, youtube_link} = exercises
            ExerciseDeletionStoredData.saveExerciseDeletionStore(pdf, youtube_link)
        }
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
                const updatedCollectionsRows = (e as IFirstModule).collectionsRows?.map((i) => {
                  if (i.orden === orden) {
                    return { ...i, youtube_link: data };
                  }
                  return i;
                });
                return { ...(e as IFirstModule), collectionsRows: updatedCollectionsRows };
              }
              return e;
            });
          }

          if(field === 'pdf'){
            setExercises((e) => {
              if (e) {
                const updatedCollectionsRows = (e as IFirstModule).collectionsRows?.map((i) => {
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

    const handleEditCheckBox = (id: number, checked: boolean) => {
      setHandleEditedCheckbox(prevState => {
        // Check if there is an existing entry with the same ID
        const existingIndex = prevState.findIndex(item => item.id === id);
    
        if (existingIndex !== -1) {
          // Remove the entry with the same ID
          prevState.splice(existingIndex, 1);
        } else {
          // Add the new entry with the provided ID and checked value
          prevState.push({ id, checked });
        }
    
        return [...prevState]; // Create a new array to trigger state update
      });
    }

    const handleSaveUpload = async() => {
      const res = await onAsk('האם לשמור את הנתונים?','')
      if(res) {
        const response = await ExercisesService.updateMultipleChecked(handleEditedCheckbox)
        if(response) {
          onSuccessAlert('נתונים נשמרו בהצלחה!','');
        }
        setHandleEditedCheckbox([])
      }
    }

    const chooseModule = (number: number) => {
      setChoosedModule(number)
    }

    const resroteDeletionData = async () => {
      const ask = await onAsk('לעדכן נתונים קודמים?','');
      if(ask){
        try {
          setLoading(true)
          const {pdf, link} = ExerciseDeletionStoredData.isExistData()
          if(link && exercises) {
            await ExercisesService.updateLink(exercises.id, {link,tableType:'exercises'})
          }  
  
          if(pdf && exercises) {
            await ExercisesService.updatePdf(exercises.id, {pdf, tableType:'exercises'})
          }
          onSuccessAlert('נתונים עודכנו בהצלחה','');
        } catch(e) {
          console.log('[ExerciseProvier] resoreDeletionData error: ',e)
        } finally {
          setLoading(false)
          ExerciseDeletionStoredData.deleteExerciseDeletionStore()
        }

        setTimeout(() => {
          fetchOnline(moduleId)
        },1000)
      }
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
    setIsChanged,
    handleEditCheckBox,
    handleSaveUpload,
    chooseModule,
    setChoosedTab,
    resroteDeletionData,
    fetchOnline
  };
  const value: ExerciseContextType = {
    exercises,
    ExerciseMethods,
    loading,
    isOnlineXml,
    settingsEdit,
    isChanged,
    handleEditedCheckbox,
    choosedModule,
    choosedTab,
  };

  return <ExerciseContext.Provider value={value} {...props} />;
};

export { useExercise, ExerciseProvider };