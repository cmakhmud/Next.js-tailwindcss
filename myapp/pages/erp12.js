import React from 'react'
import erp12 from '../public/assets/erp12.webp'
import Image from 'next/image'
import Link from 'next/link'
export default function proporty() {
    return (
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10' />
                <Image
                    className='absolute z-1'
                    layout='fill'
                    objectFit='contain'
                    src={erp12}
                    alt='/'
                />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Erp12 Programı</h2>
                    <h3>Erp12 şirkətiylə rəsmi əməkdaşlıq</h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p>Proyekt</p>
                    <h2>Haqqında</h2>
                    <p>
                        ERP12 Professional: Restoran sistemlərinin aftomatlaşdırılması üçün nəzərdə tutulub .ERP12 Standart mühasibat proqramlarından daha çox xüsusiyyətləri ehtiva edən inteqrasiya modul paketlərimiz sayəsində pərakəndə satış sənayesində anbar avtomatlaşdırılması,
                        avtomobil sahəsi satışı kimi bir çox modulu birlikdə işlədə biləcəyiniz bir tətbiqdir.
                        <br></br>
                        <br></br>
                        Bu proqramı işlətməyin üstünlükləri ,
                        <br></br>
                        √ Gündəlik pul vəsaitlərinin cəmi
                        <br></br>
                         √ Məhsul satış məlumatı
                        <br></br>
                        √ Ani kassa məlumatı
                        <br></br>
                        √ Silinmiş əməliyyatlar
                        <br></br>
                        √ Catering/Ləğv və s. İstənilən vaxt cibinizdə 📲 İstənilən yerdən ERP12 ilə cari - Fond - Maliyyə biznesinizi asanlıqla idarə edin.
                        <br></br>
                      
                    </p>
                   
                    <Link href='/#projects'>
                        <button className='px-8 py-2 mt-4'>Back</button>
                    </Link>

                </div>
                {/*   <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
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
        </div> */}

            </div>
        </div>
    )
}