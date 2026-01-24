'use client';

import { useEffect } from 'react';
import Footer from '@/components/landing/footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Speech } from 'lucide-react';

export default function PrivacyPage() {
    useEffect(() => {
        window.location.href = 'https://sites.google.com/view/kursstanovlenierechi/';
    }, []);

    return (
        <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
             <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
                <Link href="/" className="flex items-center gap-2 font-bold">
                    <Speech className="h-6 w-6 text-primary" />
                    <span className="text-lg">Лого-Курс</span>
                </Link>
                <Button asChild>
                    <Link href="/">Назад на главную</Link>
                </Button>
                </div>
            </header>
            <main className="container mx-auto max-w-3xl flex-1 px-4 py-12 md:px-6 md:py-24">
                <div className="space-y-8 text-center">
                    <h1 className="text-4xl font-bold">Перенаправление на страницу оферты...</h1>
                    <p className="text-muted-foreground">
                        Если вас не перенаправило автоматически,{' '}
                        <a 
                            href="https://sites.google.com/view/kursstanovlenierechi/" 
                            className="underline underline-offset-2 hover:text-primary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            нажмите сюда
                        </a>.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
