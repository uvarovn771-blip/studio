import { Award, Code, Rocket, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const benefits = [
  {
    icon: <Rocket className="h-8 w-8 text-accent" />,
    title: 'Быстрый старт',
    description: 'Освойте востребованные технологии с нуля и создайте портфолио за несколько месяцев.',
  },
  {
    icon: <Code className="h-8 w-8 text-accent" />,
    title: 'Практический опыт',
    description: 'Решайте реальные задачи и работайте над проектами, которые не стыдно показать работодателю.',
  },
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    title: 'Поддержка сообщества',
    description: 'Общайтесь с единомышленниками и получайте помощь от наставников в закрытом чате.',
  },
  {
    icon: <Award className="h-8 w-8 text-accent" />,
    title: 'Сертификат',
    description: 'Подтвердите свои знания официальным сертификатом по окончании курса.',
  },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="w-full bg-card py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-5xl space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Что вы получите от курса</h2>
            <p className="text-muted-foreground md:text-xl/relaxed">
              Мы создали программу, которая даст вам все необходимое для успешной карьеры.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <Card key={index} className="flex flex-col border-border/50 transition-transform hover:scale-105 hover:border-primary/50">
                <CardHeader className="flex flex-row items-center gap-4 pb-4">
                  {benefit.icon}
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
