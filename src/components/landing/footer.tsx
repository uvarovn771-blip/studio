import Link from 'next/link';
import { Speech, Mail, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-card">
      <div className="container flex flex-col items-center justify-between gap-6 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <Speech className="h-6 w-6 text-primary" />
            <p className="text-lg">Лого-Курс</p>
          </Link>
          <div className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            <p>© {new Date().getFullYear()} Наталья Уварова. Все права защищены.</p>
            <p>наше местонахождение: Г. Жабинка Ул. Советская 6А</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
            <nav className="flex gap-4 sm:gap-6">
                <a href="mailto:uvarovn771@gmail.com" className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                    <Mail className="h-5 w-5" />
                    <span>Email</span>
                </a>
                <a href="https://www.instagram.com/defektologuvarova?igsh=NnJzaTd2OWdxNXdv" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                    <Instagram className="h-5 w-5" />
                    <span>Instagram</span>
                </a>
            </nav>
             <Link href="https://sites.google.com/view/kursstanovlenierechi/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-muted-foreground underline-offset-4 hover:underline">
                Политика конфиденциальности
            </Link>
        </div>
      </div>
    </footer>
  );
}
