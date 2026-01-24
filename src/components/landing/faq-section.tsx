import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Для какого возраста подходит курс?',
    answer:
      'Курс идеально подходит для детей от 3 до 7 лет. Методика адаптирована для дошкольного возраста.',
  },
  {
    question: 'Как долго будет доступен курс?',
    answer:
      'Доступ к курсу предоставляется навсегда. Вы сможете возвращаться к материалам в любое удобное время.',
  },
  {
    question: 'Нужен ли специальный инвентарь?',
    answer:
      'Нет, все упражнения можно выполнять с помощью подручных средств, которые найдутся в каждом доме.',
  },
  {
    question: 'Поможет ли курс, если у ребенка серьезные нарушения?',
    answer:
      'Курс является отличной базой и дополнением к работе со специалистом. При сложных нарушениях рекомендуется очная консультация.',
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
