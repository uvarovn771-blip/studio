import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Speech } from 'lucide-react';
import Footer from '@/components/landing/footer';

export default function PrivacyPage() {
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
        <div className="space-y-8">
          <h1 className="text-4xl font-bold">Публичная оферта</h1>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Настоящий документ является публичной офертой (далее – «Оферта») Индивидуального
              предпринимателя Уваровой Натальи Николаевны (далее – «Исполнитель») и адресован
              любому физическому лицу, достигшему 18-летнего возраста (далее – «Заказчик»),
              выразившему готовность воспользоваться услугами Исполнителя.
            </p>
            <h2 className="pt-4 text-2xl font-semibold text-foreground">1. Предмет Оферты</h2>
            <p>
              1.1. Исполнитель обязуется предоставить Заказчику доступ к онлайн-курсу
              «Становление речи для детей дошкольного возраста» (далее – «Курс»), а Заказчик
              обязуется оплатить услуги Исполнителя в соответствии с условиями настоящей Оферты.
            </p>
            <h2 className="pt-4 text-2xl font-semibold text-foreground">2. Стоимость и порядок оплаты</h2>
            <p>
              2.1. Стоимость Курса указывается на странице продажи. Оплата производится в размере
              100% предоплаты через предложенные платежные системы.
            </p>
            <h2 className="pt-4 text-2xl font-semibold text-foreground">3. Права и обязанности сторон</h2>
            <p>
              3.1. Исполнитель обязан предоставить доступ к материалам Курса после получения
              оплаты.
            </p>
            <p>
              3.2. Заказчик имеет право на доступ к материалам Курса в течение срока, указанного
              на странице продажи.
            </p>
            <p>
              3.3. Заказчику запрещается копировать, распространять или передавать третьим лицам
              материалы Курса.
            </p>
            <h2 className="pt-4 text-2xl font-semibold text-foreground">4. Ответственность сторон</h2>
            <p>
              4.1. Стороны несут ответственность за неисполнение или ненадлежащее исполнение своих
              обязательств в соответствии с законодательством РФ.
            </p>
            <h2 className="pt-4 text-2xl font-semibold text-foreground">5. Заключительные положения</h2>
            <p>
              5.1. Акцептом настоящей Оферты является совершение Заказчиком оплаты услуг
              Исполнителя. С момента акцепта Оферты договор считается заключенным.
            </p>
            <p>
              5.2. Исполнитель оставляет за собой право вносить изменения в настоящую Оферту, в
              связи с чем Заказчик обязуется регулярно отслеживать изменения.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
