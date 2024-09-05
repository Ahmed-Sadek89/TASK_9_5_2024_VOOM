import React from 'react'

const page = () => {
    return (
        <>
            <h2 className='text-2xl text-center text-white'>Register</h2>
            <form className="flex flex-col gap-y-8">
                <input required className='w-full bg-transparent border border-custom-green rounded-md p-1 text-white' type="text" name="username" placeholder='Username' />
                <input required className='w-full bg-transparent border border-custom-green rounded-md p-1 text-white' type="email" name="email" placeholder='Email address' />
                <input required className='w-full bg-transparent border border-custom-green rounded-md p-1 text-white' type="password" name="password" placeholder='Password' />
                <input className='w-full bg-custom-green rounded-xl py-2 text-white cursor-pointer transition duration-300 hover:bg-custom-green2' type="submit" value='sign up' />
            </form>
        </>
    )
}

export default page
