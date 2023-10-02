import React, {FC, useRef, useState, ChangeEvent} from 'react';
import Image from 'next/image';
import { ISecondModuleExercises, ISecondModuleSubExercises } from '@/types/ModulesTypes.ts/SecondModule.interface';
import { ExercisesService } from '@/services/exercises/Exercises';
import { getImageId, getImageValue } from '../helpers/ImageModuleHelper';
import { onErrorAlert } from '@/utils/sweetAlert';
type ImageModuleProps = {
    data: ISecondModuleSubExercises[]
    CustomImageCol: number
}

const ImageModule:FC<ImageModuleProps> = ({data, CustomImageCol}) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);

    const uploadImage = async (event: ChangeEvent<HTMLInputElement>) => {
        const id = getImageId(data)
        if(id) {
            const file = event.target.files?.[0];
            if(file) {
                setSelectedFile(file);
                ExercisesService.createImage(id, file)
            }
        } else {
            onErrorAlert('ניתן קודם לשמור את הקובץ','')
        }


    }
    const imageLink = getImageValue(data)
    const isThereOnlyOneInLine = (data.length === 1  || data.length === 2)
    console.log('isThereOnlyOneInLine',isThereOnlyOneInLine)

      
    

    return (
        <div className={`col-span-${CustomImageCol}`} >
            <div className={` py-4 h-full ${isThereOnlyOneInLine ? 'mr-16' : 'mr-4'}`}>
                {selectedFile ? (
                    <div className=' h-full flex justify-center items-center bg-white'>
                        <div className='cursor-pointer' onClick={() => {fileInputRef.current?.click()}}> 
                            <img src={URL.createObjectURL(selectedFile)} alt="uploaded image w-full h-full"  />
                            <input id="pdfInput"  ref={fileInputRef} type="file" onChange={uploadImage} className='hidden'/>
                        </div>    
                    </div>
                ) : (

                    imageLink ? 
                        <div className=' h-full flex justify-center items-center bg-white'>
                            <div className='cursor-pointer' onClick={() => {fileInputRef.current?.click()}}> 
                                <img src={`http://3.74.228.194:4000/${imageLink}`} alt="uploaded image w-full h-full"  />
                                <input id="pdfInput"  ref={fileInputRef} type="file" onChange={uploadImage} className='hidden'/>
                            </div>    
                        </div>   
                    :

                    <div className='border-8 border-mainExerciseBg border-dashed h-full flex justify-center items-center bg-white'>
                        <div className='cursor-pointer' onClick={() => {fileInputRef.current?.click()}}> 
                            <Image src={'/images/upload.svg'} alt="upload image" width={100} height={100} />
                            <input id="pdfInput"  ref={fileInputRef} type="file" onChange={uploadImage} className='hidden'/>
                            <h4>העלאת תמונה</h4>
                        </div>    
                    </div>
                )}
            </div>    
        </div>
    );
};

export default ImageModule;