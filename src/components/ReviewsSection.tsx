import { Star } from "lucide-react";
import review1 from "@/assets/review-new-1.png";
import review2 from "@/assets/review-new-2.png";
import review3 from "@/assets/review-new-3.png";
import review4 from "@/assets/review-new-4.png";
import review5 from "@/assets/review-new-5.png";
import review6 from "@/assets/review-new-6.png";
import review7 from "@/assets/review-new-7.png";
import review8 from "@/assets/review-new-8.png";
import review9 from "@/assets/review-new-9.png";
import review10 from "@/assets/review-new-10.png";

const reviews = [
  {
    name: "Cliente 1",
    avatar: review1,
    time: "há 2 horas",
    rating: 5,
    comment: "Produto excelente! Muito satisfeito com a compra.",
    verified: true,
  },
  {
    name: "Cliente 2",
    avatar: review2,
    time: "há 5 horas",
    rating: 5,
    comment: "Qualidade impecável, recomendo!",
    verified: true,
  },
  {
    name: "Cliente 3",
    avatar: review3,
    time: "há 8 horas",
    rating: 5,
    comment: "Superou minhas expectativas, muito bom!",
    verified: true,
  },
  {
    name: "Cliente 4",
    avatar: review4,
    time: "há 12 horas",
    rating: 5,
    comment: "Entrega rápida e produto de qualidade.",
    verified: true,
  },
  {
    name: "Cliente 5",
    avatar: review5,
    time: "há 1 dia",
    rating: 5,
    comment: "Melhor compra que fiz! Vale cada centavo.",
    verified: true,
  },
  {
    name: "Cliente 6",
    avatar: review6,
    time: "há 1 dia",
    rating: 5,
    comment: "Produto conforme anunciado, muito bom!",
    verified: true,
  },
  {
    name: "Cliente 7",
    avatar: review7,
    time: "há 2 dias",
    rating: 5,
    comment: "Excelente custo benefício!",
    verified: true,
  },
  {
    name: "Cliente 8",
    avatar: review8,
    time: "há 2 dias",
    rating: 5,
    comment: "Recomendo de olhos fechados!",
    verified: true,
  },
  {
    name: "Cliente 9",
    avatar: review9,
    time: "há 3 dias",
    rating: 5,
    comment: "Produto de primeira linha!",
    verified: true,
  },
  {
    name: "Cliente 10",
    avatar: review10,
    time: "há 3 dias",
    rating: 5,
    comment: "Muito satisfeito com a compra, produto top!",
    verified: true,
  },
];

const ReviewsSection = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">
          Avaliações dos clientes (591)
        </h2>
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold text-foreground">4.9</span>
          <span className="text-muted-foreground">/5</span>
        </div>
      </div>
      
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-card border border-border rounded-xl p-5 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-shadow"
          >
            <div className="flex items-start gap-4">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-foreground">{review.name}</h3>
                    <span className="text-sm text-muted-foreground">{review.time}</span>
                  </div>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
                {review.verified && (
                  <div className="mb-2">
                    <span className="text-xs text-muted-foreground">Compra Verificada</span>
                  </div>
                )}
                <p className="text-foreground">{review.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
