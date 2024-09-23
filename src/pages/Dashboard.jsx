import React from 'react'
import { Button, Input } from '@nextui-org/react'

function Dashboard() {
    return (
        <>
            <div id='about' className='w-full md:h-[80vh] h-screen flex md:flex-row flex-col p-5'>
                <div className='h-full md:w-[50%] w-full flex flex-col justify-center items-center md:p-5 p-0 md:mb-0 mb-10'>
                    {/* Shrink */}
                    <h2 className='md:text-4xl text-3xl font-light mb-10'>Shorten Your Link</h2>
                    <div className='md:w-5/6 w-full md:h-[60%] h-[90%] rounded-3xl flex flex-col justify-center bg-slate-200 md:p-10 p-6'>
                        <span>
                            <h3 className='mb-2 font-medium text-lg'>Paste your long link here</h3>
                        </span>
                        <Input type="text" placeholder='https://example.com/my-long-url' size='lg' color='primary' className='mb-4' />
                        <span>
                            <Button color="primary" variant="shadow" size='lg' className='mb-5'>
                                Generate
                            </Button>
                        </span>
                        <p className='mb-5 text-sm'>Enter your long URL in the field above, and with a single click, generate a shorter, more shareable version. It’s quick, easy, and perfect for making your links more manageable!</p>
                        <Input
                            disabled
                            type="text"
                            placeholder="https://shrinkit/ac7Ubk9p0"
                            color='success'
                            size='lg'
                            endContent={
                                <Button color='success' size='sm' radius='md' variant='flat'>COPY</Button>
                            }
                        />
                    </div>
                </div>
                <div className='h-full md:w-[50%] w-full flex flex-col justify-center items-center md:p-5 p-0'>
                    {/* Delete */}
                    <h2 className='md:text-4xl text-3xl font-light mb-10'>Delete Your Link</h2>
                    <div className='md:w-5/6 w-full md:h-[60%] h-[90%] rounded-3xl flex flex-col justify-center bg-slate-200 md:p-10 p-6'>
                        <span>
                            <h3 className='mb-2 font-medium text-lg'>Paste your short link here</h3>
                        </span>
                        <Input type="text" placeholder='https://shrinkit/ac7Ubk9p0' size='lg' color='danger' className='mb-4' />
                        <span>
                            <Button color="danger" variant="shadow" size='lg' className='mb-5'>
                                Delete
                            </Button>
                        </span>
                        <p className='mb-5 text-sm'>Need to remove a shortened URL? Simply enter the link, and we’ll take care of the rest. Once deleted, the URL will no longer be active or accessible.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard