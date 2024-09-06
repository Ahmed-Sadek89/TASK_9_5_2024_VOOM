import Header from "@/components/Header/Header";
import PostLayout from "@/components/PostLayout/PostLayout";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const token = cookies().get("token")?.value;
    if (!token) {
        redirect('/login')
    }
    return (
        <PostLayout>
            {children}
        </PostLayout >
    )
}

