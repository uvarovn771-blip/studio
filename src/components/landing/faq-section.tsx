import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Для кого этот курс?',
    answer:
      'Курс подходит как для новичков, желающих войти в IT, так и для действующих разработчиков, которые хотят систематизировать знания и освоить новые технологии.',
  },
  {
    question: 'Какой формат обучения?',
    answer:
      'Обучение проходит онлайн. Вы получите доступ к видеолекциям, практическим заданиям и еженедельным вебинарам с автором курса. Все материалы остаются с вами навсегда.',
  },
  {
    question: 'Нужны ли предварительные знания?',
    answer:
      'Желательно иметь базовое понимание HTML и CSS. Все остальное мы изучим с нуля. Для совсем новичков у нас есть бесплатный подготовительный модуль.',
  },
  {
    question: 'Смогу ли я найти работу после курса?',
    answer:
      'Мы даем все необходимые знания и практические навыки. Успешные выпускники создают сильное портфолио, и мы помогаем с составлением резюме и подготовкой к собеседованиям.',
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="w-full bg-card py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Часто задаваемые вопросы</h2>
            <p className="text-muted-foreground md:text-xl/relaxed">
              Нашли ответ на свой вопрос? Если нет, свяжитесь с нами.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg hover:no-underline">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
