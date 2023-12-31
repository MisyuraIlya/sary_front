import React, {ChangeEvent, FC, useState, useRef, use} from 'react';

import { useExercise } from '@/providers/exercise/ExerciseProvider';
import { ExercisesService } from '@/services/exercises/Exercises';
import Image from 'next/image';
import { useAuth } from '@/hooks/useAuth';
interface SideLinksProps {
    exercises: any
    register: any
    setValue: any
    tableType: 'exercises' | 'exercises_rows'
    orden?: number
}

const SideLinks:FC <SideLinksProps> = ({exercises,register,setValue, tableType,orden}) => {
    const {isOnlineXml, ExerciseMethods} = useExercise()
    const [openEditPdf, setOpenEditPdf] = useState(false)
    const [openEditVideo, setOpenEditVideo] = useState(false)
    const [localFile, setLocalFile] = useState<string>()
    const [link, setLink] = useState<string>()
    const [isUpdatedLink, setIsUpdatedLink] = useState(false)
    const [isUpdatedPdf, setIsUpdatedPdf] = useState(false)
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);
    const [isInTheBook, setIsInTheBook] = useState(exercises?.isInTheBook ?? true)
    const {user} = useAuth()

    const uploadPdf = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if(file) {
            const data = await ExercisesService.uploadPdf(file)
            setValue(`${tableType == 'exercises' ? 'pdf' : `collectionsRows[${orden}].pdf`}`,data?.path); 
            setLocalFile(data?.path)
            setSelectedFile(file);
        }
    }

    const openNewTab = () => {
        let pdfLink = exercises?.pdf
        
        if(isUpdatedPdf) {
            pdfLink = localFile
        }
        if(exercises?.pdf){
            window.open(`http://3.74.228.194:4000/${pdfLink}`, '_blank', 'noopener');
        }
    }
    
    const openNewTabYoutube = () => {
        let youtubeLink = exercises?.youtube_link  ;
        if(isUpdatedLink) {
            youtubeLink = link
        }
        if (youtubeLink) {
          window.open(youtubeLink, '_blank', 'noopener');
        }
    }

    const handleSavePdf = () => {
        if(exercises?.id && localFile && tableType) {

            let data = {
                pdf: localFile,
                tableType
            }
            ExercisesService.updatePdf(exercises?.id, data)
            
        }

        setIsUpdatedPdf(true)
        setOpenEditPdf(false)

        if(tableType == 'exercises' && localFile) {
            setValue('pdf', localFile); 
            ExerciseMethods.updateExercisesState(tableType,'pdf',localFile, null)
            ExerciseMethods.handleEdits(0)
        } 

        if(tableType == 'exercises_rows' && localFile && orden){
            setValue(`collectionsRows[${orden}].pdf`, link);
            ExerciseMethods.updateExercisesState(tableType,'pdf',localFile,orden)
            ExerciseMethods.handleEdits(orden)
        }
    }

    const handleSaveLink = () => {
        if(exercises?.id && link && tableType) {
            let data = {
                link: link,
                tableType
            }
            ExercisesService.updateLink(exercises?.id, data)
        }

        setIsUpdatedLink(true)
        setOpenEditVideo(false)
        
        if(tableType == 'exercises' && link) {
            setValue('youtube_link', link); 
            console.log('link',link)
            ExerciseMethods.updateExercisesState(tableType,'youtube_link',link, null)
            ExerciseMethods.handleEdits(0)
        } 

        if(tableType == 'exercises_rows' && link && orden){
            setValue(`collectionsRows[${orden}].youtube_link`, link);
            ExerciseMethods.updateExercisesState(tableType,'youtube_link',link,orden)
            ExerciseMethods.handleEdits(orden)
        }

    }

    const closeVideo = () => {
        setSelectedFile(undefined)
        setOpenEditPdf(false)
        setLocalFile('')

    }

    const closeLink = () => {
        setValue(`${tableType == 'exercises' ? 'youtube_link' : `collectionsRows[${orden}].youtube_link`}`, '')
        setLink('')
        setOpenEditVideo(false)
    }

    const removeVideo = () => {
        setIsUpdatedLink(false)
        if(exercises?.id && tableType) {
            let data = {
                link: '',
                tableType
            }
            ExercisesService.updateLink(exercises?.id, data)
        }

        if(tableType == 'exercises') {
            setValue('youtube_link', ''); 
            ExerciseMethods.updateExercisesState(tableType,'youtube_link','', null)
            ExerciseMethods.handleEdits(0)
        } 

        if(tableType == 'exercises_rows'  && orden){
            setValue(`collectionsRows[${orden}].youtube_link`, '');
            ExerciseMethods.updateExercisesState(tableType,'youtube_link','',orden)
            ExerciseMethods.handleEdits(orden)
        }
    }

    const removePdf = () => {
        if(exercises?.id  && tableType) {

            let data = {
                pdf: '',
                tableType
            }
            ExercisesService.updatePdf(exercises?.id, data)
        }

        setIsUpdatedPdf(true)
        setOpenEditPdf(false)

        if(tableType == 'exercises') {
            setValue('pdf', ''); 
            ExerciseMethods.updateExercisesState(tableType,'pdf','', null)
            ExerciseMethods.handleEdits(0)
        } 

        if(tableType == 'exercises_rows' && orden){
            setValue(`collectionsRows[${orden}].pdf`, '');
            ExerciseMethods.updateExercisesState(tableType,'pdf','',orden)
            ExerciseMethods.handleEdits(orden)
        }
    }

    const handleIsInTheBook = () => {
        const currentBook = !isInTheBook
        setIsInTheBook(currentBook)
        try {
            const response = ExercisesService.updateIsInTheBook(exercises?.id!, {isInTheBook: currentBook})
        } catch(e) {
            console.log('response',e)
        }
    }

    return (
        <div className='mb-12'>

            <form >
                {isOnlineXml &&
                    <>
                        <div className='items-center gap-4 mb-2'>
                            {user?.isAdmin &&
                                <button 
                                className='text-white px-6 bord rounded-md py-2 activeShadow w-1/3 mb-4'
                                style={{backgroundColor:'#31B0F2',fontWeight:'600',opacity:`${exercises?.pdf ? '1' : '0.5'}`}}
                                onClick={(e) => {e.preventDefault(); setOpenEditPdf(!openEditPdf)}}
                                >
                                    העלאת קובץ PDF
                                </button>
                            }

                            { openEditPdf &&
                            <div className='flex gap-4'>
                                <div className='fileInput w-full border border-gray rounded-md px-2 cursor-pointer' onClick={() => {fileInputRef.current?.click(); }}>
                                    <input id="pdfInput" ref={fileInputRef} type="file" onChange={uploadPdf} className=''/>
                                    <div className='flex items-center h-full'>
                                    {selectedFile ? (
                                    <p>{selectedFile.name}</p>
                                    ) : (
                                    <p>בחר קובץ</p>    
                                    )}
                                    
                                    </div>    
                                </div>
                                <button onClick={(e) => {e.preventDefault(); handleSavePdf()}} className='px-5 py-2 text-white rounded-md' style={{backgroundColor:'#31B0F2',fontWeight:'600'}}>
                                    אישור
                                </button>
                                <button onClick={(e) => {e.preventDefault(); closeVideo()}} className='px-2 py-1 font-bold'>
                                    ביטול
                                </button>
                            </div>
                            }

                            {exercises?.pdf &&
                                <div className='flex gap-4'>
                                    {user?.isAdmin &&
                                        <Image src={'/images/trash.svg'} width={25} height={25} alt='trash' className='cursor-pointer' onClick={() => removePdf()} />                                    
                                    }
                                    <Image src={'/images/eye.svg'} width={25} height={25} alt='eye' className='cursor-pointer' onClick={() => openNewTab()} />
                                    <p>לינק לPDF</p>
                                </div>        
                            
                            }

                        </div>
                        <div className='items-center gap-4 mb-2'>
                            {user?.isAdmin &&
                                <button  
                                onClick={(e) => {e.preventDefault(); setOpenEditVideo(!openEditVideo)}} 
                                className='text-white px-6 bord rounded-md py-2 activeShadow w-1/3 mb-4' 
                                style={{backgroundColor:'#31B0F2',fontWeight:'600',opacity:`${exercises?.youtube_link ? '1' : '0.5'}`}}>
                                    העלאת סרטון
                                </button>
                            }

                            {openEditVideo &&
                            <div className='flex gap-4'>
                                <input placeholder='לינק ליוטיוב' className='w-full border border-gray rounded-md px-2' value={link} onChange={(e) => setLink(e.target.value) }/>
                                <button onClick={(e) => {e.preventDefault();handleSaveLink()}} className='px-5 py-2 text-white rounded-md' style={{backgroundColor:'#31B0F2',fontWeight:'600'}}>
                                    אישור
                                </button>
                                <button className='px-2 py-1 font-bold' onClick={(e) => {e.preventDefault(); closeLink()}}>
                                    ביטול
                                </button>
                            </div>
                            }
                        </div>
                        {exercises?.youtube_link &&
                            <div className='flex gap-4'>
                                {user?.isAdmin &&
                                <Image src={'/images/trash.svg'} width={25} height={25} alt='trash' className='cursor-pointer' onClick={() => removeVideo()}/>
                                }
                                <Image src={'/images/eye.svg'} width={25} height={25} alt='eye' className='cursor-pointer' onClick={() => openNewTabYoutube()} />
                                {exercises?.youtube_link}
                            </div>        
                        }
                        {
                            tableType == 'exercises' &&
                            <div>
                                <div className='flex gap-4 mt-6'>
                                    <p>קיים בחוברת?</p>
                                    <input className='w-4' type='checkbox' checked={isInTheBook} onChange={() => handleIsInTheBook()}/>
                                </div>
                            </div>
                        }

                    </>
                }

            </form>
        </div>
    );
};

export default SideLinks;