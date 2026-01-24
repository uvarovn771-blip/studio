import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
      <div className="container px-4 md:px-6">
        <div className="mx-auto grid max-w-4xl gap-8 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Покори Вершины Веб-разработки
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Наш интенсивный курс - это ваш прямой путь к мастерству. Современные технологии, практические задачи и
              поддержка экспертов.
            </p>
          </div>
          <div className="flex justify-center">
            <Button asChild size="lg" className="shadow-lg shadow-primary/20">
              <Link href="#">
                Начать обучение <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
