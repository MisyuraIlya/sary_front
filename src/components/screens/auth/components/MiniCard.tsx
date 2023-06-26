import React, {FC, useState} from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
interface MiniCardProps {
    title: string
    imageLink: string
    link: string
}


const MiniCard: FC<MiniCardProps> = ({title, imageLink, link}) => {
    const [isHovered, setIsHovered] = useState(false);
    const router = useRouter()
    const handleHover = () => {
        setIsHovered(true);
      };
    
      const handleHoverEnd = () => {
        setIsHovered(false);
      };
    return (
        <div className={`border flex items-center justify-center text-center py-8 pb-12 border-auth_card_border rounded-xl cursor-pointer ${isHovered ? 'bg-auth_card_hover' : 'bg-white'}`}
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverEnd}
        onClick={() => router.push(link)}
        style={{width:'184px'}}
        >
            <div>
                <div className={`border border-auth_card_image_border  rounded-xl ${isHovered ? 'bg-bg_link' : ''}`}>
                    <div className='px-4 py-4'>
                        {isHovered ?                    
                            <Image src={imageLink+'_hover.svg'} width={80} height={80} alt='img' priority  className='fill-current text-primary' style={{width:'70px', height:'70px'}}/>
                        :
                            <Image src={imageLink+'.svg'} width={80} height={80} alt='img' priority  className='fill-current text-primary'  style={{width:'70px', height:'70px'}}/>
                        }
                    </div>
                </div>
                <p className='pt-4' style={{fontWeight:'500'}}>
                    {title}
                </p>
            </div>

        </div>
    );
};

export default MiniCard;