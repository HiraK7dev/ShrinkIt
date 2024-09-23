import React from 'react'

function About() {
    return (
        <div className='w-full md:h-[80vh] h-screen flex justify-center items-center'>
            <div className="about-container md:bg-gray-200 bg-transparent p-8 rounded-2xl shadow-xl max-w-4xl mx-auto mt-10">
                <h1 className="text-5xl font-extrabold md:text-center text-left text-indigo-600 mb-8">About ShrinkIt</h1>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    ShrinkIt is a user-friendly tool designed to make long, messy URLs a thing of the past. With ShrinkIt, you can effortlessly shorten URLs into clean, shareable links, perfect for social media, emails, and more. Our mission is to simplify link management, ensuring that your URLs are easy to use, track, and delete when no longer needed.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Developed by <strong>Hirakjyoti Bhattacharjya</strong>, ShrinkIt is a project built out of passion and a desire to streamline the way we handle links. It provides two main features:
                </p>
                <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
                    <li><strong>Shrink URLs:</strong> Generate short, clean URLs instantly with just a click.</li>
                    <li><strong>Delete URLs:</strong> Remove your shortened URLs whenever you no longer need them, keeping your link management clutter-free.</li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed">
                    ShrinkIt isn't just about shortening links – it's about improving how you manage them. Developed with care, it’s a tool for anyone looking to optimize their digital presence by keeping links tidy and efficient.
                </p>
            </div>
        </div>
    )
}

export default About