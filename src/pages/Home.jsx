import React from 'react'
import Image from '../assets/Image.jpg'
import { Button, Divider } from '@nextui-org/react'
import Shortner from '../components/Shortner'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <div className='w-full h-screen flex md:flex-row flex-col-reverse'>
                <div className='h-full md:w-[38%] w-full flex flex-col justify-center items-end'>

                    <div className='flex justify-start items-center w-11/12 p-6'>
                        <h1 className='md:text-6xl md:leading-tight leading-tight text-4xl font-medium'>Shorten Links, Amplify Reach!</h1>
                    </div>
                    <div className='flex justify-start items-center w-11/12 p-6'>
                        <Button color="primary" variant="shadow" size='lg' onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({
                                top: document.querySelector("#about").offsetTop,
                                behavior: "smooth",
                            });
                        }} className='scroll-smooth'>
                            Get Started
                        </Button>
                        <Divider orientation="vertical" className='mx-6' />
                        <Link to='/dashboard' className='cursor-pointer'>Explore More</Link>
                    </div>

                </div>
                <div className='h-full md:w-[62%] w-full flex justify-center items-center'>

                    <img src={Image} alt='logo' className='md:h-[70%] h-2/3' />

                </div>
            </div>
            <Shortner />
            <Footer />
        </>
    )
}

export default Home