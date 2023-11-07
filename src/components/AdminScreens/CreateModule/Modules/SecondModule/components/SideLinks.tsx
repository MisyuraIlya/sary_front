import React, { ChangeEvent, FC, useRef, useState } from 'react';
import Image from 'next/image';
import { collectionsRows } from '@/types/ModulesTypes.ts/SecondModule.interface';
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { ExercisesService } from '@/services/exercises/Exercises';
import { useExercise } from '@/providers/exercise/ExerciseProvider';
import { onAsk, onErrorAlert, onSuccessAlert } from '@/utils/sweetAlert';
import { useRouter } from 'next/router';
import { Oval } from 'react-loader-spinner';

type Props = {
    rows: collectionsRows
}

const SideLinks:FC<Props> = ({rows}) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [loadingPdf, setLoadingPdf] = useState(false)
    const [loadingLink, setLoadingLink] = useState(false)
    const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);
    const [openEditPdf, setOpenEditPdf] = useState(false)
    const [openEditVideo, setOpenEditVideo] = useState(false)
    const [newPdf, setNewPdf] = useState('')
    const [newLink, setNewLink] = useState('')
    const { register, handleSubmit, watch, formState: { errors } , setValue, control} = useForm<any>();
    const {ExerciseMethods} = useExercise()
    const router = useRouter();
    const moduleId = router.query.moduleId

    const onSubmit = async (data: any) => {

        if(data?.pdf) {
            try {
                setLoadingPdf(true)
                const res = await ExercisesService.updatePdf(rows.id, {tableType:'exercises_rows',pdf:data.pdf})
                setNewPdf(data.pdf)
                setOpenEditPdf(false)
                onSuccessAlert('קובץ התעדכן בהצלחה','')
            } catch(e) {
                console.log('[ERROR] update',e )
                onErrorAlert('שגיאה בהעלאת הקובץ','')
            } finally {
                setLoadingPdf(false)
                setTimeout(async () => {
                    await ExerciseMethods.fetchOnline(moduleId, false)
                },2000)
            }

            
        }

        if(data?.youtube_link){
            try {
                setLoadingLink(true)
                const res = await ExercisesService.updateLink(rows.id, {tableType:'exercises_rows',link:data.youtube_link})
                setNewLink(data?.youtube_link)
                setOpenEditVideo(false)
                onSuccessAlert('לינק התעדכן בהצלחה','')
            } catch(e) {
                console.log('[ERROR] update',e )
                onErrorAlert('שגיאה בהעלאת הקובץ','')
            } finally {
                setLoadingLink(false)
                setTimeout(async () => {
                    await ExerciseMethods.fetchOnline(moduleId, false)
                },1000)
            }

        }
    };

    const uploadPdf = async (event: ChangeEvent<HTMLInputElement>) => {
        try {
            setLoadingPdf(true)
            const file = event.target.files?.[0];
            if(file) {
                const data = await ExercisesService.uploadPdf(file)
                if(data?.path){
                    setValue('pdf', data?.path)
                    setNewPdf(data?.path)
                }
            }
        } catch(e) {
            console.log('[ERROR] create pdf file',e )
        } finally {
            setLoadingPdf(false)
            setTimeout(async () => {
                await ExerciseMethods.fetchOnline(moduleId, false)
            },2000)
        }

    }

    const removePdf = async () => {
        const ask= await onAsk('למחוק לינק זה ?','')
        if(ask) {
            try {
                setLoadingPdf(true)
                const res = await ExercisesService.updatePdf(rows.id, {tableType:'exercises_rows',pdf:''})
                setNewPdf('')
            } catch(e) {
                console.log('[ERROR] remove pdf file',e )
            } finally {
                await setTimeout(async () => {
                    await ExerciseMethods.fetchOnline(moduleId, false)
                    setLoadingPdf(false)
                },2000)
            }
        }
    }

    const removeLink = async () => {
        const ask= await onAsk('למחוק לינק זה ?','')
        if(ask) {
            try {
                setLoadingLink(true)
                const res = await ExercisesService.updateLink(rows.id, {tableType:'exercises_rows',link:''})
                setNewLink('')
                rows.youtube_link = ''
            } catch(e) {
                console.log('[ERROR] remove pdf file',e )
            } finally {
                setTimeout(async () => {
                    await ExerciseMethods.fetchOnline(moduleId, false)
                    setLoadingLink(false)
                },2000)
            }
        }
    }

    const openPdf = () => {
        if(newPdf) {
            window.open(`http://3.74.228.194:4000/${newPdf}`, '_blank', 'noopener');

        } else {
            window.open(`http://3.74.228.194:4000/${rows.pdf}`, '_blank', 'noopener');

        }
    }

    const openLink = () => {
        if(newLink) {
            window.open(newLink, '_blank', 'noopener');

        } else {
            window.open(rows.youtube_link, '_blank', 'noopener');

        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* {isOnlineXml && */}
                    <>
                        <div className='items-center gap-4 mb-2'>
                            <button 
                            className='text-white px-6 bord rounded-md py-2 activeShadow w-1/3 mb-4'
                            style={{backgroundColor:'#31B0F2',fontWeight:'600',opacity:`1`}}
                            onClick={(e) => {e.preventDefault(); setOpenEditPdf(!openEditPdf)}}
                            >
                                העלאת קובץ PDF
                            </button>

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
                                {loadingPdf ?
                                <div>
                                    <Oval
                                    height={30}
                                    width={30}
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

                                <>
                                    <button  type='submit' className='px-5 py-2 text-white rounded-md' style={{backgroundColor:'#31B0F2',fontWeight:'600'}}>
                                        אישור
                                    </button>
                                    <button type='button' className='px-2 py-1 font-bold' onClick={(e) => setOpenEditPdf(false)}>
                                        ביטול
                                    </button>
                                </>
                                }

                            </div>
                            }

                            {(rows?.pdf || newPdf) &&
                                <div className='flex gap-4'>
                                      {loadingPdf ?
                                        <Oval
                                            height={30}
                                            width={30}
                                            color="#4fa94d"
                                            wrapperStyle={{}}
                                            wrapperClass=""
                                            visible={true}
                                            ariaLabel='oval-loading'
                                            secondaryColor="#4fa94d"
                                            strokeWidth={2}
                                            strokeWidthSecondary={2}
                                        />
                                      :
                                        <>
                                        <Image src={'/images/trash.svg'} width={25} height={25} alt='trash' className='cursor-pointer' onClick={() => removePdf()} />                                    
                                        <Image src={'/images/eye.svg'} width={25} height={25} alt='eye' className='cursor-pointer' onClick={() => openPdf()} />
                                        <p>לינק לPDF</p>
                                        </>
                                    }
                    
                                </div>        
                            
                            }

                        </div>
                        <div className='items-center gap-4 mb-2'>
                                <button  
                                onClick={(e) => {e.preventDefault(); setOpenEditVideo(!openEditVideo)}} 
                                className='text-white px-6 bord rounded-md py-2 activeShadow w-1/3 mb-4' 
                                style={{backgroundColor:'#31B0F2',fontWeight:'600',opacity:`1`}}>
                                    העלאת סרטון
                                </button>

                            {openEditVideo &&
                            <div className='flex gap-4'>
                                <input placeholder='לינק ליוטיוב' className='w-full border border-gray rounded-md px-2' {...register('youtube_link')}/>
                                
                                {loadingLink ? 
                                <div>
                                    <Oval
                                    height={30}
                                    width={30}
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
                                <>
                                    <button type='submit' className='px-5 py-2 text-white rounded-md' style={{backgroundColor:'#31B0F2',fontWeight:'600'}}>
                                        אישור
                                    </button>
                                    <button type='button' className='px-2 py-1 font-bold' onClick={(e) => setOpenEditVideo(false)}>
                                        ביטול
                                    </button>
                                </>  
                                }
         
                            </div>
                            }
                        </div>
                        {(rows?.youtube_link || newLink) &&
                            <div className='flex gap-4'>
                                {loadingLink ?
                                    <>
                                    <Oval
                                        height={20}
                                        width={20}
                                        color="#4fa94d"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                        visible={true}
                                        ariaLabel='oval-loading'
                                        secondaryColor="#4fa94d"
                                        strokeWidth={2}
                                        strokeWidthSecondary={2}
                                    />
                                    
                                    </>
                                :
                                    <>
                                    <Image src={'/images/trash.svg'} width={25} height={25} alt='trash' className='cursor-pointer' onClick={() => removeLink()}/>
                                    <Image src={'/images/eye.svg'} width={25} height={25} alt='eye' className='cursor-pointer' onClick={() => openLink()} />
                                    {newLink ? newLink : rows?.youtube_link}
                                    
                                    </>
                                
                                }

                            </div>        
                        }


                    </>
                {/* } */}

            </form>
        </div>
    );
};

export default SideLinks;