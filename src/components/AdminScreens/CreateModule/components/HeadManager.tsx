import React, {FC, useState, FormEvent, ChangeEvent} from 'react';
import Heading from '@/ui/heading/Heading';
import { useExercise } from '@/providers/exercise/ExerciseProvider';
import { Controller } from "react-hook-form";
import ReactSelect from 'react-select';
import { onAsk, onInfoAlert, onSuccessAlert } from '@/utils/sweetAlert';
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/useAuth';
import Button from '@/ui/button/Button';
import { substring10 } from '@/helpers/Substring10';
import Image from 'next/image';
import { ExerciseDeletionStoredData } from '@/utils/local-storage-exercise-deletion-store';

type HeadManager = {
    control: any
    handleSubmitForm: any
    onSubmit: any
    handleSidebarToggle: any
}

const options = [
    { value: 1, label: 'מודול ראשון' },
    { value: 2, label: 'מודול שני' },
    { value: 3, label: 'מודול שלישי' },
  ]

  

const HeadManager:FC<HeadManager> = ({control, handleSubmitForm,onSubmit, handleSidebarToggle}) => {

    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const {user} = useAuth()

    const [isEmptySelect, setIsEmptySelect] = useState<number>()

    const {ExerciseMethods, exercises, isOnlineXml, handleEditedCheckbox, choosedModule} = useExercise()
    
    const router = useRouter();

    const moduleId = router.query.moduleId
    
    const {pdf, link} = ExerciseDeletionStoredData.isExistData()

    const getValue = (value:any) => value ? options.find((option) => option.value === value) : {value:exercises?.module, label:exercises?.module}


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

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFile(event.target.files[0]);
        }
    };

    return (
        <div className='mr-12'>
            
            <Heading>{exercises?.title}</Heading>
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
                        onChange={(newValue) => {onChange((newValue?.value)); ExerciseMethods.chooseModule(newValue?.value!)}}
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

                        {(pdf || link) &&                    
                            <div className='rounded-x1 font-medium px-10 py-2 shadow border-2 hover:bg-[#1D99FF] hover:text-white border-[#1D99FF]  text-[#1D99FF] rounded-md cursor-pointer' onClick={() => ExerciseMethods.resroteDeletionData()}>שחזור נתונים קודמים</div>
                        }             
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
                        {/* { choosedModule === 1 && */}
                            <div className={`p-2 rounded-lg cursor-pointer`} onClick={() => handleSidebarToggle()} > 
                                <Image src={`${exercises?.pdf && exercises?.youtube_link ? '/images/settings_primary.svg' : '/images/settings_clear.svg'}`} alt='settings' width={25} height={25}/>
                            </div> 
                        {/* } */}

                    </div>
                </form>
            </div>
        </div>
    );
};

export default HeadManager;