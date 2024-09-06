import UserLayout from '@/components/UserLayout/UserLayout';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const token = cookies().get("token")?.value;
    if(token) {
        redirect('/')
    }
    return (
        <UserLayout>
            {children}
        </UserLayout>
    )
}

export default layout
