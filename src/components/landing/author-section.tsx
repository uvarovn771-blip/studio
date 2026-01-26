import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export default function AuthorSection() {
  return (
    <section id="author" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Об авторе</h2>
            <p className="text-muted-foreground md:text-xl/relaxed">
              Познакомьтесь с вашим наставником и проводником в мир правильной речи.
            </p>
          </div>
          <Card className="overflow-hidden border-2 border-primary/20 shadow-lg">
            <div className="md:grid md:grid-cols-3">
              <div className="relative h-64 w-full md:h-auto">
                <Image
                  src="images/author.png"
                  alt="Professional headshot of the course author, Natalia Uvarova."
                  fill
                  className="object-cover"
                  data-ai-hint="woman phone"
                />
              </div>
              <div className="space-y-4 p-6 md:col-span-2 md:p-8">
                <h3 className="text-2xl font-bold">Наталья Уварова</h3>
                <p className="font-semibold text-primary">Практикующий дефектолог-логопед</p>
                <p className="text-muted-foreground">
                  Наталья Уварова — эксперт с фундаментальным образованием и колоссальным практическим опытом. Её подход сочетает классическую дефектологию и авторские наработки, которые позволяют запустить речь ребенка в игровой и доступной форме.
                </p>
                <p className="text-sm text-muted-foreground">
                  Более 30 лет в профессии, 2 высших образования, более 1000 успешных кейсов.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
