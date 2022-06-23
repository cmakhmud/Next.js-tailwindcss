import React from 'react'
import Link from 'next/link'
import {FaDesktop , FaSearchengin} from 'react-icons/fa'
import {RiArrowDropRightLine} from 'react-icons/ri'
import {FcSmartphoneTablet , FcAdvertising} from 'react-icons/fc'
import {IoIosPeople} from 'react-icons/io'
import {BiTransfer} from 'react-icons/bi'
export default function Services() {
  return (
    <div id='services' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Xİdmətlərİmİz</p>
            <h2 className='py-4'>Biz Nə edirik ?</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer'>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 justify-center items-center'>
                        <div className='m-auto'>
                            <FaDesktop size={50} color='#FAB8C4'/>
                        </div>
                        <div className='flex flex-row justify-center items-center cursor-pointer'>
                        <Link href='/servicesDetailed'>
                            <h3 className='mr-[25px] hover:mr-0 ease-in duration-300'>Web Səhifələr</h3>
                            </Link>
                            <RiArrowDropRightLine size={30}/>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 justify-center items-center'>
                        <div className='m-auto'>
                            <FaSearchengin size={50} color='#5956E9'/>
                        </div>
                        <div className='flex flex-row justify-center items-center cursor-pointer'>
                        <Link href='/servicesDetailed'>
                            <h3 className='mr-[25px] hover:mr-0 ease-in duration-300'>Seo xidmətləri</h3>
                        </Link>
                            <RiArrowDropRightLine size={30}/>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 justify-center items-center'>
                        <div className='m-auto'>
                            <FcSmartphoneTablet size={50} color='#FAB8C4'/>
                        </div>
                        <div className='flex flex-row justify-center items-center cursor-pointer'>
                        <Link href='/servicesDetailed'>
                            <h3 className='mr-[25px] hover:mr-0 ease-in duration-300'>Desk/Lap/Mobile dizayn</h3>
                            </Link>
                            <RiArrowDropRightLine size={30}/>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 justify-center items-center'>
                        <div className='m-auto'>
                            <BiTransfer size={50} color='#FAB8C4'/>
                        </div>
                        <div className='flex flex-row justify-center items-center cursor-pointer'>
                        <Link href='/servicesDetailed'>
                            <h3 className='mr-[25px] hover:mr-0 ease-in duration-300'>Ödəmə sistemləri</h3>
                        </Link>
                            <RiArrowDropRightLine size={30}/>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 justify-center items-center'>
                        <div className='m-auto'>
                            <FcAdvertising size={50} color='#FAB8C4'/>
                        </div>
                        <div className='flex flex-row justify-center items-center cursor-pointer'>
                        <Link href='/servicesDetailed'>
                            <h3 className='mr-[25px] hover:mr-0 ease-in duration-300'>Reklam xidmətləri</h3>
                        </Link>
                            <RiArrowDropRightLine size={30}/>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 justify-center items-center'>
                        <div className='m-auto'>
                            <IoIosPeople size={50} color='#FDDA5F'/>
                        </div>
                        <div className='flex flex-row justify-center items-center cursor-pointer'>
                            <Link href='/servicesDetailed'>
                                <h3 className='mr-[25px] hover:mr-0 ease-in duration-300'>SMM xidmətlər</h3>
                            </Link>
                                <RiArrowDropRightLine size={30}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
