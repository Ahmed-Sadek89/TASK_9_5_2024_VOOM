import UserLinks from '@/components/UserLinks/UserLinks';

const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {

    return (
        <main className='w-full h-screen flex items-center justify-center bg-custom-green container'>
            <div className='px-10 pt-10 pb-5 rounded-2xl shadow-2xl bg-custom-black w-full sm:w-1/3 flex flex-col gap-4'>
                <UserLinks />
                <div className='flex flex-col gap-4'>{children}</div>
            </div>
        </main>
    )
}

export default layout
