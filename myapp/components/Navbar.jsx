import React , {useEffect, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import Logo from '../public/assets/navLogo.png';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import {BsFillPersonLinesFill } from 'react-icons/bs'
export default function Navbar() {

    const [nav , setNav] = useState(false);
    const [shadow , setShadow] = useState(false)
    const [navBg , setNavBg] = useState('#ecf0f3')
    const [linkColor , setLinkColor] = useState('#1f2937')
    const [scroll , setScroll] = useState()
    const router = useRouter()

    const handleNav = ()=>{
        setNav(!nav)
    }

    useEffect(()=>{
        const handleShadow=()=>{
            if(window.scrollY>90){
                setShadow(true)
            }else{
                setShadow(false)
            }
        }
        window.addEventListener('scroll' ,handleShadow )
    })

    useEffect(()=>{
        if(
            router.asPath === '/property'|| 
            router.asPath === '/crypto'|| 
            router.asPath === '/netflix'|| 
            router.asPath === '/twitch' ||
            router.asPath === '/servicesDetailed'
        ){
            setNavBg('transparent')
            setLinkColor('#ecf0f3')
        }else{
            setNavBg('#ecf0f3')
            setLinkColor('#1f2937')
        }
    },[router])

    useEffect(()=>{
        if(router.asPath ==='/servicesDetailed'){
            if(window.scrollY>90){
                setNavBg('#ecf0f3')
                setLinkColor('#1f2937')
            }else{
                setNavBg('transparent')
                setLinkColor('#ecf0f3')
            }
        }
    })

    return (
        <div style={{backgroundColor:`${navBg}`}}   className={shadow?'fixed w-full h-20 z-[100] shadow-xl px-4':'fixed w-full h-20 z-[100] px-4'}>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Image src={Logo} alt="/" width='125' height='50' />
                <div>
                    <ul style={{color:`${linkColor}`}} className='hidden md:flex'>
                        <Link href="/">
                            <li className='ml-10 text-sm uppercase hover:border-b'>Ana səhİfə</li>
                        </Link>
                        <Link href="/#about">
                            <li className='ml-10 text-sm uppercase hover:border-b'>Haqqımızda</li>
                        </Link>
                        <Link href="/servicesDetailed">
                            <li className='ml-10 text-sm uppercase hover:border-b'>Xİdmətlər</li>
                        </Link>
                        <Link href="/#projects">
                            <li className='ml-10 text-sm uppercase hover:border-b'>Layİhələr</li>
                        </Link>
                        <Link href="/#contact">
                            <li className='ml-10 text-sm uppercase hover:border-b'>Əlaqə</li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className='md:hidden'>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>
            <div className={nav?'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70':''}>
                <div className={nav?'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500':'fixed left-[-100%] top-0 ease-in duration-500'}>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Image src={Logo} alt="/" width={87} height={35} />
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className='border-b border-gray-300 my-4'>
                            <p className='w-[85%] md:w-[90%] py-4'>Rəqəmsal dünyaya bizimlə açılın</p>
                        </div>
                        <div className="py-4 flex flex-col">
                            <ul className='uppercase'>
                                <Link href="/">
                                    <li onClick={()=>setNav(false)} className='py-4 text-sm'>Ana Səhİfə</li>
                                </Link>
                                <Link href="/#about">
                                    <li onClick={()=>setNav(false)} className='py-4 text-sm'>Haqqımızda</li>
                                </Link>
                                <Link href="/#services">
                                    <li onClick={()=>setNav(false)} className='py-4 text-sm'>Xİdmətlər</li>
                                </Link>
                                <Link href="/#projects">
                                    <li onClick={()=>setNav(false)} className='py-4 text-sm'>Layİhələr</li>
                                </Link>
                                <Link href="/#contact">
                                    <li onClick={()=>setNav(false)} className='py-4 text-sm'>Əlaqə</li>
                                </Link>
                            </ul>
                            <div className='pt-10'>
                                <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <FaLinkedinIn />
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <FaGithub />
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <AiOutlineMail />
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <BsFillPersonLinesFill />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
