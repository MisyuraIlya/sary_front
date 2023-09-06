import React, { ChangeEvent, FC, useRef, useState } from 'react';
import Image from 'next/image';
import { collectionsRows } from '@/types/ModulesTypes.ts/SecondModule.interface';
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { ExercisesService } from '@/services/exercises/Exercises';
type Props = {
    rows: collectionsRows
}

const SideLinks:FC<Props> = ({rows}) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);
    const [openEditPdf, setOpenEditPdf] = useState(false)
    const [openEditVideo, setOpenEditVideo] = useState(false)
    const [newPdf, setNewPdf] = useState('')
    const [newLink, setNewLink] = useState('')
    const { register, handleSubmit, watch, formState: { errors } , setValue, control} = useForm<any>();

    const onSubmit = async (data: any) => {
        if(data?.pdf) {
            const res = await ExercisesService.updatePdf(rows.id, {tableType:'exercises_rows',pdf:data.pdf})
            setNewPdf(data.pdf)
        }

        if(data?.youtube_link){
            const res = await ExercisesService.updateLink(rows.id, {tableType:'exercises_rows',link:data.youtube_link})
            setNewLink(data?.youtube_link)
        }
    };

    const uploadPdf = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if(file) {
            const data = await ExercisesService.uploadPdf(file)
            if(data?.path){
                setValue('pdf', data?.path)
                setNewPdf(data?.path)
            }
        }
    }

    const removePdf = async () => {
        const res = await ExercisesService.updatePdf(rows.id, {tableType:'exercises_rows',pdf:''})
        setNewPdf('')
    }

    const removeLink = async () => {
        const res = await ExercisesService.updateLink(rows.id, {tableType:'exercises_rows',link:''})
        setNewLink('')
        rows.youtube_link = ''
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
    console.log('newLink',newLink)
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
                                <button  type='submit' className='px-5 py-2 text-white rounded-md' style={{backgroundColor:'#31B0F2',fontWeight:'600'}}>
                                    אישור
                                </button>
                                <button type='button' className='px-2 py-1 font-bold' onClick={(e) => setOpenEditPdf(false)}>
                                    ביטול
                                </button>
                            </div>
                            }

                            {(rows?.pdf || newPdf) &&
                                <div className='flex gap-4'>
                                    <Image src={'/images/trash.svg'} width={25} height={25} alt='trash' className='cursor-pointer' onClick={() => removePdf()} />                                    
                                    <Image src={'/images/eye.svg'} width={25} height={25} alt='eye' className='cursor-pointer' onClick={() => openPdf()} />
                                    <p>לינק לPDF</p>
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
                                <button type='submit' className='px-5 py-2 text-white rounded-md' style={{backgroundColor:'#31B0F2',fontWeight:'600'}}>
                                    אישור
                                </button>
                                <button type='button' className='px-2 py-1 font-bold' onClick={(e) => setOpenEditVideo(false)}>
                                    ביטול
                                </button>
                            </div>
                            }
                        </div>
                        {(rows?.youtube_link || newLink) &&
                            <div className='flex gap-4'>
                                <Image src={'/images/trash.svg'} width={25} height={25} alt='trash' className='cursor-pointer' onClick={() => removeLink()}/>
                                <Image src={'/images/eye.svg'} width={25} height={25} alt='eye' className='cursor-pointer' onClick={() => openLink()} />
                                {newLink ? newLink : rows?.youtube_link}
                            </div>        
                        }


                    </>
                {/* } */}

            </form>
        </div>
    );
};

export default SideLinks;