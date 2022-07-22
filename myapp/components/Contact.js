import React from 'react'
import Link from 'next/link';
import { FaLinkedinIn, FaGithub , FaDesktop} from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import {RiArrowDropRightLine } from 'react-icons/ri'
import {BsTelephoneInbound , BsWhatsapp} from 'react-icons/bs'
export default function Contact() {
    return (
        <div id='contact' className='w-full lg:h-screen'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
                    Bizimlə əlaqə
                </p>
                <h2 className='py-4'></h2>
                <div className='grid lg:grid-cols-5 gap-8'>
                    <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                        <div className='lg:p-4 h-full rounded-xl'>
                            <div>
                                <img className="rounded-xl hover:scale-105 ease-in duration-300" src='https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80' alt='ss' />
                            </div>
                            <div>
                                <h2 className='py-2'>BetaDev</h2>
                                <p className='uppercase'>SMM | SEO | Website | Branding</p>
                                <p className='py-4'>İstənilən dizaynda saytların yığılmasını , Saytlarınızın google kimi arama motorlarında ilk sıralarda görünməsini , SMM xidmətlərimizi sizlərə sunuruq</p>
                            </div>
                            <div>
                                <p className='uppercase pt-8'>Sosİal Şəbəkələrdən bİzə yazın</p>
                                <div className='flex items-center justify-between py-4'>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <FaLinkedinIn />
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <FaGithub />
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <AiOutlineMail />
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <BsFillPersonLinesFill />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                        <div className='p-6 flex flex-col justify-between h-[700px] shadow-xl rounded-xl hover:scale-105 ease-in duration-300 '>
                            <div className='flex flex-col justify-around items-center rounded-xl bg-[#27272E] h-[300px] '>
                                <h2 className='text-[white]'>Telefon</h2>
                                <h4 className='text-[#999FAE]'>Telefonumuz hər gün sizin zənginizə və suallarınıza açıqdır</h4>
                                <h1 className='text-[#FAB8C4]'>077 570 21 36</h1>
                            </div>
                            <div className='flex flex-col justify-around items-center rounded-xl bg-[#27272E] h-[300px] '>
                                <h2 className='text-[white]'>Email</h2>
                                <h4 className='text-[#999FAE]'>Bizə email yazmaqdan çəkinməyin</h4>
                                <h1 className='text-[#FAB8C4]'>infobeta@inbox.ru</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center py-12'>
                    <Link href='/'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <HiOutlineChevronDoubleUp
                                className='text-[#5651e5]'
                                size={30}
                            />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
