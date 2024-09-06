import Header from "@/components/Header/Header";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <>
            <Header />
            <div className="min-h-[calc(100vh-1rem)]">
                {children}
            </div>
        </>
    )
}

