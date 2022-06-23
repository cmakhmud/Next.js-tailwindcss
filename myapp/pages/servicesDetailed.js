import React from 'react'
import Image from 'next/image'
import propertyImg from '../public/assets/property.jpg'
import {FaDesktop , FaSearchengin} from 'react-icons/fa'
import {FcSmartphoneTablet , FcAdvertising} from 'react-icons/fc'
import {BiTransfer} from 'react-icons/bi'
import {IoIosPeople} from 'react-icons/io'
export default function servicesDetailed() {
    return (
        <div className='w-full min-h-[165vh] flex flex-col justify-between items-center'>
            <div className='w-full h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10' />
                <Image
                    className='absolute z-1'
                    layout='fill'
                    objectFit='cover'
                    src={propertyImg}
                    alt='/'
                />
                {/* <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    
                </div> */}
            </div>
            
            <div className='max-w-[1240px] mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                <div className='shadow-xl shadow-gray-400 rounded-xl p-8 cursor-pointer hover:scale-105 ease-in duration-300 max-w-[360px]'>
                    <div className='flex flex-row justify-between items-center'>
                        <FaDesktop size={100} color='#FAB8C4'/>
                        <h3 className='p-5'>Web Səhifələrin/Mobile programların Yığılması</h3>
                    </div>                    
                    <p>Biznesinizi tanıtmaq üçün ən ideal yollardan biri web sayt və mobile programlardır . Web saytlarınızı müştərilərinizdə məhsullarınıza maraq oyadacaq şəkildə onlar üçün anlaşıqlı formada hazırlayırıq </p>
                </div>
                <div className='shadow-xl shadow-gray-400 rounded-xl p-8 cursor-pointer hover:scale-105 ease-in duration-300 max-w-[360px]'>
                    <div className='flex flex-row justify-between items-center'>
                        <FaSearchengin size={100} color='#FAB8C4'/>
                        <h3 className='p-5'>SEO xidmətləri</h3>
                    </div>                    
                    <p>Saytınızı google standartlarına uyğun hazırlayırıq və Google kimi arama motorlarında ilk sıralarda görsənməsini təmin edirik . Buda məhsullarınızın axtaran şəxsə daha rahat görsənməsini və alıcı sayının artmasını təmin edir</p>
                </div>
                <div className='shadow-xl shadow-gray-400 rounded-xl p-8 cursor-pointer hover:scale-105 ease-in duration-300 max-w-[360px]'>
                    <div className='flex flex-row justify-between items-center'>
                        <FcSmartphoneTablet size={100} color='#FAB8C4'/>
                        <h3 className='p-5'>Mob/Laptop/Desktop uyumlu dizayn</h3>
                    </div>                    
                    <p>Saytlarınız istənilən dizaynda hazırlayırıq . Hazırladığımız saytlar həm mobile , həm tablet , həm desktop cihazlara uyumlu olur . </p>
                </div>
                <div className='shadow-xl shadow-gray-400 rounded-xl p-8 cursor-pointer hover:scale-105 ease-in duration-300 max-w-[360px]'>
                    <div className='flex flex-row justify-between items-center'>
                        <BiTransfer size={100} color='#FAB8C4'/>
                        <h3 className='p-5'>Ödəmə sistemlərinin qurulması</h3>
                    </div>
                    <p>Saytınıza ödəmə sistemi inteqrasiya edirik ve ya şirkətiniz üçün ödəniş sistemlərini 0 - dan qururuq</p>
                </div>
                <div className='shadow-xl shadow-gray-400 rounded-xl p-8 cursor-pointer hover:scale-105 ease-in duration-300 max-w-[360px]'>
                    <div className='flex flex-row justify-between items-center'>
                        <FcAdvertising size={100} color='#FAB8C4'/>
                        <h3 className='p-5'>Reklam xidmətləri</h3>
                    </div>
                    <p>Hal hazırda hərkəs biznesini və saytını tanıtmaq üçün sosial şəbəkə reklamlarından istifadə edir . Önəmli olan reklamınızın kontentinin , məhsulunuzu tam dolğun ifadə etməsi , müştərini cəlb edən tərzdə olmasıdır . Biz sizin üçün dolğun reklam hazırlayırıq</p>
                </div>
                <div className='shadow-xl shadow-gray-400 rounded-xl p-8 cursor-pointer hover:scale-105 ease-in duration-300 max-w-[360px]'>
                    <div className='flex flex-row justify-between items-center'>
                        <IoIosPeople size={100} color='#FAB8C4'/>
                        <h3 className='p-5'>SMM xidmətləri</h3>
                    </div>
                    <p>Sosial şəbəkə reklamlarında yaranan problemlər , Facebook İnstagram profillərinin bərpası , Sosial şəbəkə postlarının hazırlanması və s. kimi xidmətlərimiz mövcuddur</p>
                </div>
            </div>
        </div>
    )
}
