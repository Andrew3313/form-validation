import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '@/shared/styles/globals.css';
import { MainProvider } from '@/shared/providers';
import { ToggleTheme } from '@/shared/components/ui';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin']
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin']
});

export const metadata: Metadata = {
    title: {
        absolute: 'Авторизация',
        template: '%s | Авторизация'
    },
    description: 'Учебный проект'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <MainProvider>
                    <div className='relative flex min-h-screen flex-col'>
                        <ToggleTheme />
                        <div className='flex h-screen w-full items-center justify-center px-4'>
                            {children}
                        </div>
                    </div>
                </MainProvider>
            </body>
        </html>
    );
}
