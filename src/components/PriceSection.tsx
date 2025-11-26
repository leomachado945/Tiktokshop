import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { Perfume } from "@/data/perfumes";

interface PriceSectionProps {
  perfume: Perfume;
}

const PriceSection = ({ perfume }: PriceSectionProps) => {
  const [timeLeft, setTimeLeft] = useState({ hours: 1, minutes: 9, seconds: 48 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (num: number) => String(num).padStart(2, '0');

  return (
    <div className="w-full">
      {/* Flash Sale Banner */}
      <div className="w-full bg-[#FF5722] text-white px-4 py-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col">
            <div className="flex items-end gap-2 mb-1">
              <span className="text-xs line-through opacity-90 leading-none">
                R$ {perfume.originalPrice.toFixed(2).replace('.', ',')}
              </span>
              <span className="text-2xl font-bold leading-none">
                R$ {perfume.price.toFixed(2).replace('.', ',')}
              </span>
            </div>
            <div className="text-xs font-medium">
              Economize até {perfume.discount}%
            </div>
          </div>
          
          <div className="flex flex-col items-end text-right flex-shrink-0">
            <div className="flex items-center gap-1 mb-1">
              <span className="text-xs">⚡</span>
              <span className="text-xs font-bold whitespace-nowrap">Oferta Relâmpago</span>
            </div>
            <div className="text-xs font-normal whitespace-nowrap">
              Termina em {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceSection;
