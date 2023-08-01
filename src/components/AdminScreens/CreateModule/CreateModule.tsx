import Meta from '@/ui/Meta';
import React, {useEffect, useCallback} from 'react';
import AdminLayout from '../layout/AdminLayout';
import { useState, ChangeEvent, FormEvent } from 'react';
import ReactSelect from 'react-select'
import Button from '@/ui/button/Button';
import Heading from '@/ui/heading/Heading';
import { CourseService } from '@/services/courses/courses';
import { IFirstModule } from '@/types/ModulesTypes.ts/FirstModule.interface';
import FirstModule from './Modules/FirstModule/FirstModule';
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useRouter } from 'next/router';
import { useExercise } from '@/providers/exercise/ExerciseProvider';
import SubHeading from '@/ui/heading/SubHeading';
import ColsCard from './components/ColsCard';
import { onAsk, onInfoAlert, onSuccessAlert } from '@/utils/sweetAlert';
import { Oval } from 'react-loader-spinner';
import Image from 'next/image';
import SideBars from '@/components/SideBars/SideBars';
import TextAreaModule from './components/models/TextAreaModule';
import TextField from '@mui/material/TextField';
import { ExercisesService } from '@/services/exercises/Exercises';
import SideLinks from './components/sidebar-components/SideLinks';
import { substring10 } from '@/helpers/Substring10';
import { useAuth } from '@/hooks/useAuth';
import HeadManager from './components/HeadManager';
import TableManager from './components/TableManager';
import SideBar from './components/SideBar';

const CreateModule = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const {ExerciseMethods, exercises} = useExercise()
  const router = useRouter();
  const moduleId = router.query.moduleId
  const { register, handleSubmit: handleSubmitForm, watch, formState: { errors } , setValue,control} = useForm<any>();
  
  const onSubmit = (data: any) => {
    ExerciseMethods.createMoudle(data)
    // console.log('data',data)
  };
  
  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  
  
  useEffect(() => {
    if (exercises) {
      setValue('title', exercises?.title); 
      setValue('description', exercises?.description); 
      setValue('description2', exercises?.description2); 
      setValue('module', exercises?.module);
      setValue('courseId', moduleId); 
      setValue('youtube_link', exercises?.youtube_link); 
      setValue('pdf', exercises?.pdf); 
      setValue('xl', exercises?.xl); 
    }
  }, [exercises, moduleId, setValue]);



  
    return (
        <Meta title='יצירת מודול'>
            <AdminLayout>
              <HeadManager control={control} handleSubmitForm={handleSubmitForm} onSubmit={onSubmit} handleSidebarToggle={handleSidebarToggle}/>  
              <TableManager handleSubmitForm={handleSubmitForm} onSubmit={onSubmit} register={register} setValue={setValue} control={control}/>
              <SideBar isSidebarOpen={isSidebarOpen} handleSidebarClose={handleSidebarClose} register={register} setValue={setValue}/>
            </AdminLayout>
        </Meta>
    );
};

export default CreateModule;