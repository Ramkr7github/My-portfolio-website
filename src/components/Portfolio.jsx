import React from 'react'

import youtube from '../assets/portfolio/you-tube.png'
import paytmUI from '../assets/portfolio/paytm-UI.png'
import webservices from '../assets/portfolio/web-services.png'
import Ecommerce from '../assets/portfolio/E-commerce.png'
import TicTacToe from '../assets/portfolio/tic-tac-toe.png'
import monsters from '../assets/portfolio/monsters.png'

const Portfolio = () => {

    const portfolios = [
        {
            id:1,
            src: youtube,
            git: "https://github.com/Ramkr7github/video_sharing_website" ,
            Deplink: "https://video-sharing-website.vercel.app/"
        },

        {
            id:2,
            src: paytmUI,
            git: "https://github.com/Ramkr7github/Paytmweb_clone" ,
            Deplink: "https://paytmweb-clone.vercel.app/"
        },

        {
            id:3,
            src: webservices,
            git: "https://github.com/Ramkr7github/Web-cloud-services-website" ,
            Deplink: "https://web-cloud-services-website.vercel.app/"
        },

        {
            id:4,
            src: Ecommerce,
            git: "https://github.com/Ramkr7github/E-commerce-app" ,
            Deplink: "https://e-commerce-app-six-sigma.vercel.app/"
        },
        {
            id:5,
            src: TicTacToe,
            git: "https://github.com/Ramkr7github/TicTacToeGame" ,
            Deplink: "https://tic-tac-toe-game-five-delta.vercel.app/"
        },

        {
            id:6,
            src: monsters,
            git: "https://github.com/Ramkr7github/Project_1" ,
            Deplink: "https://project-1-nine-livid.vercel.app/"
        },
    ]

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white
    md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
            <p className='py-6'>Check Out Some of my work right here</p>
        </div>
       
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

        {portfolios.map(({id, src, git, Deplink}) =>
        (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg '>
                <img src={src} alt="" 
                className='rounded-md duration-200 hover:scale-105'/>
                <div className='flex items-center justify-center'>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' onClick={() => window.open(Deplink)}>Demo</button>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'onClick={() => window.open(git)}>Code</button>
                </div>
            </div>
        
        ))}
</div>
    </div>
    </div>
  )
}

export default Portfolio