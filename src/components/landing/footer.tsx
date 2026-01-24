import Link from 'next/link';
import { Mountain } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-card">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <Mountain className="h-6 w-6 text-primary" />
            <p className="text-lg">Dark Ascent</p>
          </Link>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Dark Ascent. Все права защищены.
          </p>
        </div>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="#benefits" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Преимущества
          </Link>
          <Link href="#author" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Автор
          </Link>
          <Link href="#faq" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            FAQ
          </Link>
        </nav>
      </div>
    </footer>
  );
}
