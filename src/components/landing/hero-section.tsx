'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';

interface HeroSectionProps {
  isOfferAccepted: boolean;
  onOfferAcceptanceChange: (checked: boolean) => void;
}

export default function HeroSection({
  isOfferAccepted,
  onOfferAcceptanceChange,
}: HeroSectionProps) {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
      <div className="container px-4 md:px-6">
        <div className="mx-auto grid max-w-4xl gap-8 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Курс по запуску и развитию речи детей раннего возраста
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Автор курса — Наталья Уварова, практикующий дефектолог-логопед с более чем 30-летним стажем. Два высших образования в сфере педагогики и дефектологии. Через её частную практику прошли тысячи детей, получив устойчивые результаты при использовании данной методики
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <Button
              size="lg"
              className="h-24 w-full text-3xl font-bold shadow-lg shadow-primary/20"
              disabled={!isOfferAccepted}
              onClick={() => {
                if (typeof (window as any).ym === 'function') {
                  (window as any).ym(106830397, 'reachGoal', 'zakaz_click');
                }
                window.location.href = 'https://checkout.paypro.by/v2/confirm_order/prd_d36e0d2d5a8cb241/227';
              }}
            >
              Купить курс <ArrowRight className="ml-4 h-10 w-10" />
            </Button>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="offer"
                checked={isOfferAccepted}
                onCheckedChange={(checked) => onOfferAcceptanceChange(Boolean(checked))}
              />
              <label htmlFor="offer" className="text-xs text-muted-foreground">
                Нажимая кнопку оплаты, я подтверждаю, что ознакомлен и согласен с
                условиями{' '}
                <Link
                  href="https://sites.google.com/view/kursstanovlenierechi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-primary"
                >
                  Оферты
                </Link>
                .
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
