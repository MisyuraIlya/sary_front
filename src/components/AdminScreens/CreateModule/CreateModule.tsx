import Meta from '@/ui/Meta';
import React, {useEffect, useCallback} from 'react';
import AdminLayout from '../layout/AdminLayout';
import { useState, ChangeEvent, FormEvent } from 'react';
import ReactSelect from 'react-select'
import Button from '@/ui/button/Button';
import Heading from '@/ui/heading/Heading';
import { CourseService } from '@/services/courses/courses';
import { IFirstModule } from '@/types/ModulesTypes.ts/FirstModule.interface';
import FirstModule from './ModuleParser/FirstModule';
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useRouter } from 'next/router';
import { useExercise } from '@/providers/exercise/ExerciseProvider';
import SubHeading from '@/ui/heading/SubHeading';
import ColsCard from './components/ColsCard';
import { onAsk } from '@/utils/sweetAlert';
import { Oval } from 'react-loader-spinner';
const options = [
  { value: 1, label: 'מודול ראשון' }
]

const CreateModule = () => {

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [module, setModule] = useState<IFirstModule>()
  const {ExerciseMethods, exercises, isOnlineXml, loading} = useExercise()
  const router = useRouter();

  const moduleId = router.query.moduleId
  
  const { register, handleSubmit: handleSubmitForm, watch, formState: { errors } , setValue,control} = useForm<any>();
  
  const onSubmit = (data: any) => {
    ExerciseMethods.createMoudle(data)
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedFile) {
      try {
        let res = await onAsk('האם תרצו להריץ את הקובץ?','');
        if (res) {
          ExerciseMethods.uploadXml(selectedFile);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      console.error('No file selected');
    }
  };

  const handleAutoUpload = useCallback(async () => {
    if (selectedFile) {
      let res = await onAsk('האם תרצו להריץ את הקובץ?','');
      if (res) {
        ExerciseMethods.uploadXml(selectedFile);
      }
    }
  }, [ExerciseMethods, selectedFile]);

  useEffect(() => {
    if (exercises) {
      setValue('title', exercises?.title); 
      setValue('description', exercises?.description); 
      setValue('description2', exercises?.description2); 
      setValue('module', exercises?.module);
      setValue('courseId', moduleId); 
    }
  }, [exercises, moduleId, setValue]);


  // useEffect(() => {
  //   handleAutoUpload();
  // }, [handleAutoUpload, selectedFile]);

  const getValue = (value:any) => value ? options.find((option) => option.value === value) : {value:exercises?.module, label:exercises?.module}
    return (
        <Meta title='יצירת מודול'>
            <AdminLayout>
              <div className='mr-12'>
                <Heading>{exercises?.title}</Heading>
                <SubHeading>{exercises?.description}</SubHeading>
                {exercises?.title &&
                  <div className="border-b border-solid border-2 border-gray-400"></div>
                }

                <div className='grid grid-cols-2 py-10 px-2 relative'>
                  <Controller control={control} name={`module`} rules={{required:'צריך לבחור מודול'}} render={
                      ({field:{onChange,value},fieldState:{error}}) => (
                      <>
                      
                      <ReactSelect
                      placeholder={'בחירת מודול'}
                      options={options}
                      value={getValue(value)}
                      onChange={(newValue) => onChange((newValue?.value))}
                      className='w-96'
                      />
                      {error && (
                          <div style={{color:'red',position:'absolute', bottom:'10px', paddingRight:'15px'}}>
                              {error.message}
                          </div>
                      )}
                      </>
                      )
                      }
                  />
                  <form onSubmit={handleSubmit} encType="multipart/form-data" className='justify-end items-end flex gap-12'>
                      {exercises?.title && moduleId && isOnlineXml && 
                        <Button className='bg-red text-white rounded-md' onClick={() => ExerciseMethods.deleteModule(moduleId)}>מחיקה</Button>                    
                      }

                      {!isOnlineXml &&
                        <>
                      <label htmlFor="fileInput" className="w-56 bg-primary flex items-center justify-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md cursor-pointer">
                        בחר קובץ
                      </label>
                      <input id="fileInput" type="file" onChange={handleFileChange} className="hidden" />

                      {selectedFile && 
                        <div className='relative'>
                          <Button className='bg-primary text-white rounded-md '>העלה</Button>      
                          <div className='absolute '>
                            {selectedFile.name}
                          </div>
                        </div>   
                      }
                      {selectedFile &&                     
                        <Button className='bg-green text-white rounded-md' onClick={handleSubmitForm(onSubmit)}>שמור</Button>
                      }
                        </>
                      }

                  </form>
                </div>
              </div>

              {loading ?
              <div className='myCenter' style={{minHeight:'50vh'}}>
              <Oval
                height={80}
                width={80}
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#4fa94d"
                strokeWidth={2}
                strokeWidthSecondary={2}

              />
            </div>

            :
            <form onSubmit={handleSubmitForm(onSubmit)} className='mr-12'>
              <table className='w-full'>
                <tbody className=''>
                  <tr className='heading bg-primary'>
                      <div className='text-center justify-center text-white'>
                      </div>
                      {
                        exercises?.collectionsCols?.map((item,index) => {
                          return(
                            <th key={index} className=''>
                              <ColsCard item={item} index={index+1} register={register} setValue={setValue}/>
                            </th>
                          )
                        })
                      }
                      <div className='text-center justify-center text-white '>
                      </div>
                  </tr>
                  {
                  exercises?.collectionsRows?.map((item,index) => {
                    return(
                      <tr key={index}>
                          <FirstModule 
                          exercises={item} 
                          key={index} 
                          register={register} 
                          orden={item.orden}
                          setValue={setValue}
                          control={control}
                          />
                      </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </form>
              }




            </AdminLayout>
        </Meta>
    );
};

export default CreateModule;