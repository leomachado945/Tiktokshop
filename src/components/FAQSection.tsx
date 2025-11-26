import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Qual o prazo de entrega?",
    answer: "O prazo de entrega varia de acordo com sua região. Geralmente entre 7 a 15 dias úteis após a confirmação do pagamento.",
  },
  {
    question: "Posso devolver o produto?",
    answer: "Sim! Oferecemos devolução gratuita em até 7 dias após o recebimento, conforme o Código de Defesa do Consumidor.",
  },
  {
    question: "Como faço o pagamento?",
    answer: "Aceitamos Pix, cartão de crédito e boleto bancário. O pagamento via Pix oferece desconto adicional!",
  },
  {
    question: "O produto vem montado?",
    answer: "O produto vem desmontado com manual de instruções detalhado. A montagem é simples e não requer ferramentas especiais.",
  },
  {
    question: "Tem garantia?",
    answer: "Sim! O produto possui garantia de 3 meses contra defeitos de fabricação, além da garantia legal de 90 dias.",
  },
];

const FAQSection = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-foreground mb-6">
        Perguntas Frequentes
      </h2>
      
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="bg-card border border-border rounded-xl px-5 shadow-[var(--shadow-soft)]"
          >
            <AccordionTrigger className="text-left font-bold hover:text-primary">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQSection;
