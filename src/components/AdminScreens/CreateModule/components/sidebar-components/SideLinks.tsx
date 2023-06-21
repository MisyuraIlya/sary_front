import React, {ChangeEvent, FC, useState} from 'react';

import { useExercise } from '@/providers/exercise/ExerciseProvider';
import { CollectionsRow, IExercise } from '@/types/exercise.interface';
import { ExercisesService } from '@/services/exercises/Exercises';
interface SideLinksProps {
    exercises: CollectionsRow | IExercise | undefined
    register: any
    setValue: any
    tableType: 'exercises' | 'exercises_rows'
    orden?: number
}

const SideLinks:FC <SideLinksProps> = ({exercises,register,setValue, tableType,orden}) => {
    const {isOnlineXml} = useExercise()
    const [openEditPdf, setOpenEditPdf] = useState(false)
    const [openEditVideo, setOpenEditVideo] = useState(false)
    const [localFile, setLocalFile] = useState<string>()
    const [link, setLink] = useState<string>()
    const [isUpdatedLink, setIsUpdatedLink] = useState(false)
    const [isUpdatedPdf, setIsUpdatedPdf] = useState(false)

    const uploadPdf = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if(file) {
            const data = await ExercisesService.uploadPdf(file)
            setValue(`${tableType == 'exercises' ? 'pdf' : `collectionsRows[${orden}].pdf`}`,data.path); 
            setLocalFile(data.path)
        }
    }

    const openNewTab = () => {
        let pdfLink = exercises?.pdf
        
        if(isUpdatedPdf) {
            pdfLink = localFile
        }
        if(exercises?.pdf){
            window.open(`http://localhost:4000/${pdfLink}`, '_blank', 'noopener');
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
        
    }

    const embedCode = '<iframe width="560" height="315" src="https://www.youtube.com/embed/rO3F9XQ4hoc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';

    return (
        <div className='mb-12'>

            <form>
                {isOnlineXml ?
                    <>
                        <div className='m-2'>
                        <div className=' items-center flex'>
                            <span className={`${isUpdatedPdf ? isUpdatedPdf : exercises?.pdf ? 'bg-primary text-white' : ' bg-gray text-black'}  p-2 rounded-md material-symbols-outlined fill cursor-pointer`} onClick={openNewTab}>
                                picture_as_pdf 
                            </span>
                            <span className='pr-4'>
                                {exercises?.pdf ? 
                                    <>
                                    לינק ל PDF 
                                    </>
                                    : 
                                    <>
                                    לא קיים קובץ PDF
                                    </>
                                }
                            </span>
                            <button 
                                className='bg-primary text-white rounded-lg py-1 px-2 mr-12 cursor-pointer'   
                                onClick={(event) => {
                                event.preventDefault();
                                setOpenEditPdf(!openEditPdf);
                                }}>
                                עדכן
                            </button>
                        </div>

                        {isUpdatedPdf &&
                            <div className='text-green/60'>
                                עודכן בהצלחה!
                            </div>    
                        }

                        {openEditPdf &&
                        <div className=''>
                            <input type='file' placeholder='עדכן קובץ PDF' className='border border-gray m-2 px-2 rounded-md' onChange={uploadPdf}/>
                            <button className='bg-primary text-white px-2 py-1 rounded-lg' onClick={(event) => {event.preventDefault(), handleSavePdf()}}>שמור</button>
                        </div>  
                        }
                        </div>
                        <div className='m-2'>
                            <div className='flex items-center'>
                            <span className={`${isUpdatedLink ? isUpdatedLink : exercises?.youtube_link ? 'bg-primary text-white' : ' bg-gray text-black'}  p-2 rounded-md material-symbols-outlined fill cursor-pointer`} onClick={openNewTabYoutube}>
                                youtube_activity
                            </span>
                            <span className='pr-4'>
                                {exercises?.youtube_link ?
                                    <>
                                    לינק לסרטון
                                    </>
                                :
                                    <>
                                    לא קיים לינק לסרטון
                                    </>
                                }
                            </span>
                                <button className='bg-primary text-white rounded-lg py-1 px-2 mr-12 cursor-pointer'   onClick={(event) => {
                                        event.preventDefault();
                                        setOpenEditVideo(!openEditVideo);
                                    }}>
                                        עדכן
                                </button>
                            </div>

                            {isUpdatedLink &&
                                <div className='text-green/60'>
                                    עודכן בהצלחה!
                                </div>    
                            }

                            {
                            openEditVideo &&
                            <div className=''>
                                <input type='text' placeholder='עדכן לינק לסרטון' className='border border-gray m-2 px-2 rounded-md' value={link} onChange={(e) => setLink(e.target.value) }/>
                                <button className='bg-primary text-white px-2 py-1 rounded-lg' onClick={(event) => {event.preventDefault(); handleSaveLink()}}>שמור</button>
                            </div>  
                            }
                        </div>
                    </>
                :
                    <>
                        <div className='flex items-center gap-4 mb-2'>
                            <span className={`${isUpdatedLink ? isUpdatedLink : exercises?.youtube_link ? 'bg-primary text-white' : ' bg-gray text-black'}  p-2 rounded-md material-symbols-outlined fill cursor-pointer`} onClick={openNewTabYoutube}>
                                youtube_activity
                            </span>
                            <input placeholder='לינק ליוטיוב' className='w-full border border-gray rounded-md px-2' {...register(`${tableType == 'exercises' ? 'youtube_link' : `collectionsRows[${orden}].youtube_link`}`)} />
                        </div>

                        
                        <div className='flex items-center gap-4 mg-2'>
                            <span className={`${isUpdatedPdf ? isUpdatedPdf : exercises?.pdf ? 'bg-primary text-white' : ' bg-gray text-black'}  p-2 rounded-md material-symbols-outlined fill cursor-pointer`} onClick={openNewTab}>
                                picture_as_pdf 
                            </span>
                            <input  type="file" onChange={uploadPdf} className='w-full border border-gray rounded-md px-2'/>

                        </div>
                    
                    
                    
                    </>
                }

            </form>
        </div>
    );
};

export default SideLinks;