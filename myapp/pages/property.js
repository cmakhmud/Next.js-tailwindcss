import React from 'react'
import propertyImg from '../public/assets/pikkpro.png'
import Image from 'next/image'
import Link from 'next/link'
import { RiRadioButtonFill } from 'react-icons/ri'
export default function proporty() {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='contain'
          src={propertyImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Pikkpro app</h2>
          <h3>React-Native</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Proyekt</p>
          <h2>Haqqında</h2>
          <p>
            Bu mobil proqramın dizayn ve front-end development hissəsi bizim komanda tərəfindən react-native istifadə olunaraq düzəldilib . 
            Proqram haqqında qısaca məlumat versək , freelancing saytıdır . Sayta Buyer yəni alıcı və freelancer yəni Buyerlərin işin görən biri kimi daxil olmaq olar.
            Buyerler öz təkliflərini bu app də yerləşdirir və freelancerlər müraciət edərək onların işini görür . Burdan program sahibinin qazancı isə freelancerləri va buyerləri
            elaqələndirərək onlardan müəyyən faiz hissəsi tutur.
          </p>
         {/*  <a
            href='https://github.com/fireclint/property-finder'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a> */}
          {/* <a
            href='https://property-finder-development.web.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a> */}

        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Texnalogiyalar</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React-native
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Css
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <button className='px-8 py-2 mt-4'>Back</button>
        </Link>
      </div>
    </div>
  )
}
