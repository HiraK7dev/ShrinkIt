import React, { useContext, useState } from 'react'
import { Button, Input, Slider } from '@nextui-org/react'
import { linkContextData } from '../context/LinkContext'
import axios from 'axios';

function Dashboard() {

    const { link, setLink } = useContext(linkContextData);
    const [copyButtonColor, setcopyButtonColor] = useState('success');
    const [sliderValue, setSliderValue] = useState(9);
    const [copyLink, setcopyLink] = useState('');
    const [deleteUrl, setdeleteUrl] = useState('');

    function isValidURL(input) {
        try {
            new URL(input);
            return true;
        } catch (error) {
            return false;
        }
    }

    async function getLink() {
        if (isValidURL(link)) {
            try {
                const result = await axios.post('/url', {
                    "size": `${sliderValue}`,
                    "redirectUrl": `${link}`
                });
                setcopyLink('http://localhost:3000/' + result.data.shortId);
                setcopyButtonColor('success');
            } catch (error) {
                console.log('error: ' + error);
                setcopyButtonColor('danger');
                setcopyLink('ERROR');
            }
        } else {
            setcopyButtonColor('danger');
            setcopyLink('ERROR');
        }

    }
    async function deleteLink() {
        if (isValidURL(deleteUrl)) {
            const data = deleteUrl.split('/');
            try {
                const result = await axios.delete(`/url/${data[data.length - 1]}`);
            } catch (error) {
                console.log('error: ' + error);
            }
        } else {
            setcopyButtonColor('danger');
            setcopyLink('ERROR');
        }
    }
    function copyText() {
        if (navigator && navigator.clipboard && navigator.clipboard.writeText)
            return navigator.clipboard.writeText(copyLink);
        return Promise.reject('The Clipboard API is not available.');
    };

    return (
        <>
            <div id='about' className='w-full md:h-[80vh] h-screen flex md:flex-row flex-col p-5'>
                <div className='h-full md:w-[50%] w-full flex flex-col justify-center items-center md:p-5 p-0 md:mb-0 mb-10'>
                    {/* Shrink */}
                    <h2 className='md:text-4xl text-3xl font-light mb-10'>Shorten Your Link</h2>
                    <div className='md:w-5/6 w-full md:h-[64%] h-[90%] rounded-3xl flex flex-col justify-center bg-slate-200 md:p-10 p-6'>
                        <span>
                            <h3 className='mb-2 font-medium text-lg'>Paste your long link here</h3>
                        </span>
                        <Input value={link} onChange={(event) => setLink(event.target.value)} type="text" placeholder='https://example.com/my-long-url' size='lg' color='primary' className='mb-4' />
                        <Slider
                            label="Enter the length:"
                            step={1}
                            maxValue={14}
                            minValue={7}
                            value={sliderValue}
                            onChange={setSliderValue}
                            size='sm'
                            className="max-w-md mb-3"
                        />
                        <span>
                            <Button onClick={getLink} color="primary" variant="shadow" size='lg' className='mb-5'>
                                Generate
                            </Button>
                        </span>
                        <p className='mb-5 text-sm'>Enter your long URL in the field above, and with a single click, generate a shorter, more shareable version. It’s quick, easy, and perfect for making your links more manageable!</p>
                        <Input
                            value={copyLink}
                            disabled
                            type="text"
                            placeholder="https://shrinkit/ac7Ubk9p0"
                            color={copyButtonColor}
                            size='lg'
                            endContent={
                                <Button onClick={copyText} color={copyButtonColor} size='sm' radius='md' variant='flat'>COPY</Button>
                            }
                        />
                    </div>
                </div>
                <div className='h-full md:w-[50%] w-full flex flex-col justify-center items-center md:p-5 p-0'>
                    {/* Delete */}
                    <h2 className='md:text-4xl text-3xl font-light mb-10'>Delete Your Link</h2>
                    <div className='md:w-5/6 w-full md:h-[64%] h-[90%] rounded-3xl flex flex-col justify-center bg-slate-200 md:p-10 p-6'>
                        <span>
                            <h3 className='mb-2 font-medium text-lg'>Paste your short link here</h3>
                        </span>
                        <Input value={deleteUrl} onChange={(event) => setdeleteUrl(event.target.value)} type="text" placeholder='https://shrinkit/ac7Ubk9p0' size='lg' color='danger' className='mb-4' />
                        <span>
                            <Button onClick={deleteLink} color="danger" variant="shadow" size='lg' className='mb-5'>
                                Delete
                            </Button>
                        </span>
                        <p className='mb-5 text-sm'>Need to remove a shortened URL? Simply enter the link, and we’ll take care of the rest. Once deleted, the URL will no longer be active or accessible.</p>
                    </div>
                    <div className='w-full h-7 md:hidden flex'></div>
                </div>
            </div>
        </>
    )
}

export default Dashboard