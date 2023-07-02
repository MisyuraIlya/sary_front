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
import { onAsk, onInfoAlert, onSuccessAlert } from '@/utils/sweetAlert';
import { Oval } from 'react-loader-spinner';
import Image from 'next/image';
import SideBars from '@/components/SideBars/SideBars';
import TextAreaModule from './components/TextAreaModule';
import TextField from '@mui/material/TextField';
import { ExercisesService } from '@/services/exercises/Exercises';
import SideLinks from './components/sidebar-components/SideLinks';
import { substring10 } from '@/helpers/Substring10';
import { useAuth } from '@/hooks/useAuth';
const options = [
  { value: 1, label: 'מודול ראשון' }
]

const CreateModule = () => {
  const [isEmptySelect, setIsEmptySelect] = useState<number>()
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [module, setModule] = useState<IFirstModule>()
  const {ExerciseMethods, exercises, isOnlineXml, loading,isChanged, handleEditedCheckbox} = useExercise()
  const {user} = useAuth()
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
    if(!isEmptySelect) {
      onInfoAlert('אנא בחרו מודל רצוי','')
    } else {
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
    }

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


  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };
  

  const getValue = (value:any) => value ? options.find((option) => option.value === value) : {value:exercises?.module, label:exercises?.module}
    return (
        <Meta title='יצירת מודול'>
            <AdminLayout>
              <div className='mr-12'>
                <Heading>{exercises?.title}</Heading>
                {/* <SubHeading>{exercises?.description}</SubHeading> */}
                {exercises?.title &&
                  <div className="border-b border-solid border-2 border-gray-400"></div>
                }

                <div className='grid grid-cols-2 py-10 px-2 relative'>
                  <Controller control={control} name={`module`} rules={{required:'צריך לבחור מודול'}} render={
                      ({field:{onChange,value},fieldState:{error}}) => { 
                        
                        setIsEmptySelect(value) 
                        
                        return(
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
                        )}
                      }
                  />
                  <form onSubmit={handleSubmit} encType="multipart/form-data" className='justify-end items-end flex gap-12'>
                      {exercises?.title && moduleId && isOnlineXml && 
                      <>
                        <div className='rounded-x1 font-medium px-10 py-2 shadow bg-red text-white rounded-md cursor-pointer' onClick={() => ExerciseMethods.deleteModule(moduleId)}>מחיקה</div>                    
                      
                        {/* <div className='justify-center items-center h-full flex'> */}
                          {/* here my logs */}
                          {/* <Image src={'/images/xl.svg'} width={45} height={45} alt='xl' className='cursor-pointer flex ' onClick={() =>  window.open(`http://3.74.228.194:4000/${exercises?.xl}`, '_blank')} /> */}
                        {/* </div> */}
                      
                      </>
                      }

                      {!isOnlineXml &&
                        <>
                      <label htmlFor="fileInput" className="w-56 bg-primary flex items-center justify-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md cursor-pointer">
                        בחר קובץ
                      </label>
                      <input id="fileInput" type="file" onChange={handleFileChange} className="hidden" />
                      {selectedFile && 
                        <div className='relative'>
                          {user?.isAdmin &&
                          <>
                          <Button className='bg-primary text-white rounded-md '>העלה</Button>                              
                          <div className='absolute '>
                            {substring10(selectedFile.name)}
                          </div>
                          </>
 
                          }

                        </div>   
                      }
                      {selectedFile &&                     
                        <>
                          {user?.isAdmin &&
                            <Button className='bg-green text-white rounded-md' onClick={handleSubmitForm(onSubmit)}>שמור</Button>                        
                          }
                        </>
                      }
                        </>
                      }
                      {
                        (handleEditedCheckbox.length > 0 &&  isOnlineXml) &&
                        <div className='bg-green text-white rounded-md cursor-pointer px-10 py-2 shadow' onClick={() => ExerciseMethods.handleSaveUpload()}>שמור</div>
                      }

                      <div className='relative flex items-center'>
                        <div className=''>
                          {exercises?.youtube_link && exercises?.pdf && <Image src={`/images/v.svg`} width={15} height={15} alt='v' />}
                        </div>
                        <div className={`p-2 rounded-lg cursor-pointer`} onClick={() => handleSidebarToggle()} > 
                          <Image src={`${exercises?.pdf && exercises?.youtube_link ? '/images/settings_primary.svg' : '/images/settings_clear.svg'}`} alt='settings' width={25} height={25}/>
                        </div> 


                      </div>


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
              <table className=''>
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

              <SideBars anchor="left" isOpen={isSidebarOpen} onClose={handleSidebarClose}>
                  <div style={{width:'700px'}} className='myCenter'>
                    <div className='m-10 w-full'>
                      <div className='text-center'>
                        <Heading>{exercises?.title}</Heading>
                      </div>
                      <h3 className='font-bold text-primary text-right underline'>הוראות תרגיל</h3>
                      <div>
                      <div 
                         
                        // onInput={handleInputChange} 
                        dangerouslySetInnerHTML={{ __html: exercises?.description ?? '' }}
                        className='text-right pr-2'
                        />
                        {/* <SubHeading>{exercises?.description}</SubHeading> */}
                      </div>
                      <div className='pt-12'>
                        <h3 className='font-bold text-primary text-right underline'>הדרכה</h3>
                        {/* <textarea value={exercises?.description2 ?? ''}  readOnly className='w-full h-96 cursor-default'/>  */}
                        <div 
                         
                        // onInput={handleInputChange} 
                        dangerouslySetInnerHTML={{ __html: exercises?.description2 ?? '' }}
                        className='text-right pr-2'
                        />
                      </div>
                      <SideLinks exercises={exercises} register={register} setValue={setValue} tableType={'exercises'}/>
                    </div>

                  </div>
              </SideBars>


            </AdminLayout>
        </Meta>
    );
};

export default CreateModule;