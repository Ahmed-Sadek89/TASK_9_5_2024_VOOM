import { Metadata } from 'next';
import React from 'react'

type props = {
    params: {
        id: string
    }
}

export async function generateMetadata({ params }: props): Promise<Metadata> {
    return {
        title: `Voom Posts | Post #${params.id}`,
        description: "Generated by create next app",
    }
}

const page = ({ params }: props) => {
    return (
        <div>
            post number {params.id}
        </div>
    )
}

export default page
