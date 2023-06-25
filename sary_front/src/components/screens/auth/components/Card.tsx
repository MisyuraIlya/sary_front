import Image from 'next/image';
import React, {FC, useState} from 'react';
import { useRouter } from 'next/router';
interface CardProps {
    title: string
    imageLink: string
    link: string
}

const Card: FC<CardProps> = ({title, imageLink, link}) => {
    const [isHovered, setIsHovered] = useState(false);
    const router = useRouter();
    const handleHover = () => {
        setIsHovered(true);
      };
    
      const handleHoverEnd = () => {
        setIsHovered(false);
      };

      
    return (
        <div className={`border  border-auth_card_border rounded-xl cursor-pointer ${isHovered ? 'bg-auth_card_hover' : 'bg-white'}`}
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverEnd}
        onClick={() => router.push(`/${link}`)}
        >
            <div className='px-12 py-6 flex text-center items-center relative'>
                <div className={`border border-auth_card_image_border w-20 rounded-xl ${isHovered ? 'bg-bg_link' : ''}`}>
                    <div className='px-4 py-4'>
                        {isHovered ?                    
                            <Image src={imageLink+'_hover.svg'} width={80} height={80} alt='img' priority  className='fill-current text-primary'/>
                        :
                            <Image src={imageLink+'.svg'} width={80} height={80} alt='img' priority  className='fill-current text-primary'/>
                        }
                    </div>
                </div>
                 <p className='font-medium  pr-12'>{title}</p>
                 { isHovered &&
                    <div className='absolute left-12'>
                        <Image src={'images/auth/arrowLeft.svg'} width={20} height={20} alt='img' priority />
                    </div>
                 }

            </div>
        </div>
    );
};

export default Card;