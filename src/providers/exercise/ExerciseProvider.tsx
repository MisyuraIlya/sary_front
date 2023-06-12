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
    deleteModule: (id: number | string) => void
  };
  exercises: IExercise | undefined;
  loading: boolean
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
    const [exercises, setExercises] = useState<IExercise>()
    const router = useRouter();
    const moduleId = router.query.moduleId;
  // Helpers

  const fetchOnline = async (id: any) => {
    setLoading(true)
    try {
      const response = await ExercisesService.getOne(id)
      if(response){
        setExercises(response)
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
    } catch(e) {
      console.log('error',e)
      onErrorAlert('שגיאה בלפרסס את המודול','אנא פנה לצוות דיגירטייד')
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
      },2000)
    } catch(e) {
      console.log('error',e)
    } finally {
      setLoading(false)
    }
  }
  
  const deleteModule = async (id: number|string) => {
    const res = await onAsk('האם תרצו למחוק את המודול הזה?','')
    if(res){
      setLoading(true)
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


  useEffect(() => {
    const moduleId = router.query.moduleId;
    fetchOnline(moduleId)
  },[router.query.moduleId])

  const ExerciseMethods = {
    setId,
    uploadXml,
    createMoudle,
    deleteModule
  };
  const value: ExerciseContextType = {
    exercises,
    ExerciseMethods,
    loading
  };

  return <ExerciseContext.Provider value={value} {...props} />;
};

export { useExercise, ExerciseProvider };