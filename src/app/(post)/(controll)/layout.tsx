import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className='w-full h-screen flex items-center justify-center custom-container'>
            <div className='px-10 pt-10 pb-5 rounded-2xl shadow-2xl bg-custom-black w-full sm:w-1/3 flex flex-col gap-4'>
                <div className='flex flex-col gap-4'>{children}</div>
            </div>
        </main>
    )
}

export default layout
