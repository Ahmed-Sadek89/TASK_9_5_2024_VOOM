"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const pathname = usePathname();
    const active = "text-white bg-custom-green"
    const nonActive = "text-custom-white bg-custom-gray transition  duration-300 hover:bg-custom-green hover:text-white"

    return (
        <main className='w-full h-screen flex items-center justify-center bg-custom-green'>
            <div className='px-10 pt-10 pb-5 rounded-2xl shadow-2xl bg-custom-black w-1/3 flex flex-col gap-4'>
                <div className='w-full grid grid-cols-2 text-center items-center gap-x-2'>
                    <Link href={'/register'} className={`rounded-2xl py-2 text-md ${pathname === '/register' ? active : nonActive}`}>Sign up</Link>
                    <Link href={'/login'} className={`rounded-2xl py-2 text-md ${pathname === '/login' ? active : nonActive}`}>Log in</Link>
                </div>
                <div className='flex flex-col gap-4'>{children}</div>
            </div>
        </main>
    )
}

export default Layout
