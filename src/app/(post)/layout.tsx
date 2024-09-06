import Header from "@/components/Header/Header";
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
        <>
            <Header />
            <div className="min-h-[calc(100vh-1rem)]">
                {children}
            </div>
        </>
    )
}

