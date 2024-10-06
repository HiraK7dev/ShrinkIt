import { Button, Input } from '@nextui-org/react'
import React, { useContext, useState } from 'react'
import { linkContextData } from '../context/LinkContext';
import { useNavigate } from 'react-router-dom';

function Shortner() {

  const { setLink } = useContext(linkContextData);
  const navigate = useNavigate();

  const [text, setText] = useState('');
  const [info, setInfo] = useState({
    placeholder: 'https://example.com/my-long-url',
    color: 'primary',
    isInvalid: false
  });

  function isValidURL(input) {
    try {
      new URL(input);
      return true;
    } catch (error) {
      return false;
    }
  }


  function toDashboard() {
    if (isValidURL(text)) {
      setLink(text);
      navigate('/dashboard');
      setInfo({
        placeholder: 'https://example.com/my-long-url',
        color: 'primary',
        isInvalid: false
      })
    } else {
      setInfo({
        placeholder: 'Enter your long url here',
        color: 'danger',
        isInvalid: true
      });
    }
  }

  return (
    <div id='about' className='w-full h-[70vh] flex md:flex-row flex-col-reverse bg-gradient-to-r from-cyan-500 to-blue-500 p-5'>
      <div className='h-full md:w-[62%] w-full flex justify-center items-center md:p-12 p-0'>
        <div className='md:w-5/6 w-full md:h-[60%] h-[90%] rounded-3xl flex flex-col justify-center bg-white md:p-10 p-6'>
          <span>
            <h3 className='mb-2 font-medium text-lg'>Paste your long link here</h3>
          </span>
          <Input value={text} onChange={(event) => setText(event.target.value)} type="text" placeholder={info.placeholder} size='lg' color={info.color} isInvalid={info.isInvalid} variant='bordered' className='mb-4' />
          <span>
            <Button onClick={toDashboard} color={info.color} variant="shadow" size='lg'>
              Get your link for free
            </Button>
          </span>
        </div>
      </div>
      <div className='h-full md:w-[38%] w-full flex flex-col justify-center items-start p-5'>
        <h2 className='md:text-4xl text-3xl font-extrabold mb-5'>Link to Shorten</h2>
        <p className='md:text-base text-sm'>The Link to Shorten section is designed to simplify the process of transforming long, cumbersome URLs into short, easily shareable links. In this section, you can enter or paste any URL into the input field. Once submitted, the system will instantly generate a concise, custom short link that’s easier to manage and share across various platforms. Whether you're streamlining links for social media, emails, or marketing campaigns, this section makes the task effortless and efficient.</p>
      </div>
    </div>
  )
}

export default Shortner