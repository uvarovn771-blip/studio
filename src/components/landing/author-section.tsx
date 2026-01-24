import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AuthorSection() {
  const authorImage = PlaceHolderImages.find((p) => p.id === 'author-headshot');

  return (
    <section id="author" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Об авторе</h2>
            <p className="text-muted-foreground md:text-xl/relaxed">
              Познакомьтесь с вашим наставником и проводником в мир разработки.
            </p>
          </div>
          <Card className="overflow-hidden border-2 border-primary/20 shadow-lg">
            <div className="md:grid md:grid-cols-3">
              <div className="relative h-64 w-full md:h-auto">
                {authorImage && (
                  <Image
                    src={authorImage.imageUrl}
                    alt={authorImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={authorImage.imageHint}
                  />
                )}
              </div>
              <div className="space-y-4 p-6 md:col-span-2 md:p-8">
                <h3 className="text-2xl font-bold">Алексей Иванов</h3>
                <p className="font-semibold text-primary">Ведущий разработчик, архитектор ПО</p>
                <p className="text-muted-foreground">
                  Алексей — опытный full-stack разработчик с более чем 10-летним стажем в индустрии. Он работал в
                  ведущих IT-компаниях, создавая высоконагруженные системы и менторя команды. Его страсть — делиться
                  знаниями и помогать начинающим специалистам расти.
                </p>
                <p className="text-sm text-muted-foreground">
                  Сертифицированный специалист по AWS, Google Cloud. Спикер на IT-конференциях.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
