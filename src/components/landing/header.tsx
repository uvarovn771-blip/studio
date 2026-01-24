import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Speech } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <Speech className="h-6 w-6 text-primary" />
          <span className="text-lg">Лого-Курс</span>
        </Link>
        <div className="hidden items-center gap-4 md:flex">
          <Button asChild>
            <Link href="https://uvarovn771-blip.github.io/studio-success/">Купить курс</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
