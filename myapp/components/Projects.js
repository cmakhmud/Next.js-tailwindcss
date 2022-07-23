import React from 'react'
import ProjectsItem from './ProjectsItem'
import Proporty from '../public/assets/pikkpro.png'
import CryptoImg from '../public/assets/crypto.jpg'
import NetflixImg from '../public/assets/netflix.jpg'
import TwitchImg from '../public/assets/twitch.jpg'
export default function Projects() {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e1]'>
                Komanda Üzvlərİmİzİn İştİrak etdİyİ Layİhələr
            </p>
            <div className='grid md:grid-cols-2 gap-8'>

                <ProjectsItem
                    title='Proporty finder'
                    backGroundImg = {Proporty}
                    projectURL = '/property'
                />
                 <ProjectsItem
                    title='Crypto App'
                    backGroundImg = {CryptoImg}
                    projectURL = '/crypto'
                />
                 <ProjectsItem
                    title='Netflix'
                    backGroundImg = {NetflixImg}
                    projectURL = '/netflix'
                />
                 <ProjectsItem
                    title='Proporty finder'
                    backGroundImg = {TwitchImg}
                    projectURL = '/twitch'
                />

            </div>
        </div>
    </div>
  )
}
