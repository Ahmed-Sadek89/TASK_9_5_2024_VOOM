"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const UserLinks = () => {
    const pathname = usePathname();
    const active = "text-white bg-custom-green"
    const nonActive = "text-custom-white bg-custom-gray transition duration-300 hover:bg-custom-green hover:text-white"
    
    return (
        <div className='w-full grid grid-cols-2 text-center items-center gap-x-2'>
            <Link href={'/register'} className={`rounded-2xl py-2 text-md ${pathname === '/register' ? active : nonActive}`}>Sign up</Link>
            <Link href={'/login'} className={`rounded-2xl py-2 text-md ${pathname === '/login' ? active : nonActive}`}>Log in</Link>
        </div>
    )
}

export default UserLinks
