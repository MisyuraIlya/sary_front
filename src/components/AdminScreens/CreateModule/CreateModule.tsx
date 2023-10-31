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
import SideBarModuleTwo from './Modules/SecondModule/components/SideBarModuleTwo';

const CreateModule = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const {ExerciseMethods, exercises, choosedModule} = useExercise()
  const router = useRouter();
  const moduleId = router.query.moduleId
  const { register, handleSubmit: handleSubmitForm, reset ,watch, formState: { errors } , setValue,control} = useForm<any>();
  
  const onSubmit = (data: any) => {
    ExerciseMethods.createMoudle(data)
    reset()
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
              <div style={{boxShadow: '0px 0px 15px 0px rgba(0, 0, 0, 0.25)', marginLeft:'15px'}}>
                <TableManager handleSubmitForm={handleSubmitForm} onSubmit={onSubmit} register={register} setValue={setValue} control={control}/>
              </div>
              {choosedModule === 1 &&
                <SideBar isSidebarOpen={isSidebarOpen} handleSidebarClose={handleSidebarClose} register={register} setValue={setValue}/>            
              }
              {choosedModule === 21 && 
                <SideBarModuleTwo isSidebarOpen={isSidebarOpen} handleSidebarClose={handleSidebarClose}/>
              }
              {choosedModule === 2 && 
                <SideBarModuleTwo isSidebarOpen={isSidebarOpen} handleSidebarClose={handleSidebarClose}/>
              }
            </AdminLayout>
        </Meta>
    );
};

export default CreateModule;