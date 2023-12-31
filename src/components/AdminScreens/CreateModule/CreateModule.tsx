import Meta from '@/ui/Meta';
import React, {useEffect, useCallback} from 'react';
import AdminLayout from '../layout/AdminLayout';
import { useState, ChangeEvent, FormEvent } from 'react';
import ReactSelect from 'react-select'
import Button from '@/ui/button/Button';
import Heading from '@/ui/heading/Heading';
import { CourseService } from '@/services/courses/courses';
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
import { ForthModule, ISecondModule } from '@/types/ModulesTypes.ts/SecondModule.interface';

const CreateModule = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const {ExerciseMethods, exercises, choosedModule} = useExercise()
  const router = useRouter();
  const moduleId = router.query.moduleId
  const { register, handleSubmit: handleSubmitForm, reset ,watch, formState: { errors } , setValue,control} = useForm<any>();
  
  const onSubmit = (data: any) => {
    
    if(choosedModule.value === 4) {
      delete data.module
      let arr: any = [];
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          arr.push(data[key])
        }
      }
      ExerciseMethods.createMoudle(arr)
    } else {
      ExerciseMethods.createMoudle(data)
    }
    reset()
  };
  
  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };
  useEffect(() => {
    if (choosedModule.value === 4) {
      (exercises as ForthModule)?.forEach((item, index) => {
        setValue(`[${index}].title`, item.title);
        setValue(`[${index}].description`, item.description);
        setValue(`[${index}].description2`, item.description2);
        setValue(`[${index}].module`, item.module);
        setValue(`[${index}].tab`, item.tab);
        setValue(`[${index}].youtube_link`, item.youtube_link);
        setValue(`[${index}].courseId`, moduleId); 
        setValue(`[${index}].pdf`, item.pdf);
        setValue(`[${index}].xl`, item.xl);
      });
    } else {
      if(exercises){
        setValue(`title`, (exercises as ISecondModule).title);
        setValue(`description`, (exercises as ISecondModule).description);
        setValue(`description2`, (exercises as ISecondModule).description2);
        setValue(`module`, (exercises as ISecondModule).module);
        setValue(`tab`, null);
        setValue(`youtube_link`, (exercises as ISecondModule).youtube_link);
        setValue('courseId', moduleId); 
        setValue(`pdf`, (exercises as ISecondModule).pdf);
        setValue(`xl`, (exercises as ISecondModule).xl);
      }

    }
  }, [exercises, choosedModule, setValue]);

    return (
        <Meta title='יצירת מודול'>
            <AdminLayout>
              <HeadManager control={control} handleSubmitForm={handleSubmitForm} onSubmit={onSubmit} handleSidebarToggle={handleSidebarToggle}/>  
              <div style={{boxShadow: '0px 0px 15px 0px rgba(0, 0, 0, 0.25)', marginLeft:'15px', paddingBottom:'100px'}}>
                <TableManager register={register} setValue={setValue} control={control}/>
              </div>

              {/* {choosedModule === 1 &&
                <SideBar isSidebarOpen={isSidebarOpen} handleSidebarClose={handleSidebarClose} register={register} setValue={setValue}/>            
              } */}

              {choosedModule.value === 2 && 
                <SideBarModuleTwo isSidebarOpen={isSidebarOpen} handleSidebarClose={handleSidebarClose}/>
              }

              {choosedModule.value === 3 && 
                <SideBarModuleTwo isSidebarOpen={isSidebarOpen} handleSidebarClose={handleSidebarClose}/>
              }

              {
                choosedModule.value === 3 &&
                <SideBarModuleTwo isSidebarOpen={isSidebarOpen} handleSidebarClose={handleSidebarClose}/>
              }

            </AdminLayout>
        </Meta>
    );
};

export default CreateModule;