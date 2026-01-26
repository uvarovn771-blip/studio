import { Video, Lightbulb, GraduationCap, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const benefits = [
  {
    icon: <Video className="h-8 w-8 text-accent" />,
    title: '18 видеоуроков',
    description: 'Короткие и емкие уроки по 5-10 минут, которые помогут вам легко и просто превратить неговорящего ребенка в болтуна.',
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-accent" />,
    title: 'Практические приемы',
    description: 'Эффективные задачи и упражнения для детей и их родителей для закрепления материала.',
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-accent" />,
    title: 'Авторская методика',
    description: 'Курс основан на уникальной методике, доказавшей свою эффективность в частной практике.',
  },
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    title: 'Поддержка и сообщество',
    description: 'Общайтесь с единомышленниками и получайте ответы на вопросы от автора курса.',
  },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="w-full bg-card py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-5xl space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Что внутри курса</h2>
            <p className="text-muted-foreground md:text-xl/relaxed">
              Все, что нужно для запуска и развития речи вашего ребенка.
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
