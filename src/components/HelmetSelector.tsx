import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Perfume } from "@/data/perfumes";

interface HelmetSelectorProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  perfume: Perfume;
}

const sizes = ["54", "56", "58", "60", "62"];

const HelmetSelector = ({ open, onOpenChange, perfume }: HelmetSelectorProps) => {
  const [selectedSize, setSelectedSize] = useState("60");
  const [selectedVariant, setSelectedVariant] = useState(perfume.variants?.[0]);

  const handleBuyNow = () => {
    if (selectedSize && selectedVariant) {
      const params = window.location.search;
      const checkoutUrl = selectedVariant.checkoutUrl || perfume.checkoutUrl;
      window.location.href = checkoutUrl + params;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            Escolha a numeração do seu capacete
          </DialogTitle>
        </DialogHeader>

        {/* Tamanhos */}
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground font-medium">
            Tamanhos rápidos (cm)
          </p>
          <div className="flex gap-2 justify-between">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`flex-1 py-2.5 px-3 rounded-lg text-sm font-medium transition-all ${
                  selectedSize === size
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Produto Selecionado */}
        <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
          <img
            src={selectedVariant?.image || perfume.image}
            alt={perfume.name}
            className="w-20 h-20 object-contain"
          />
          <div className="flex-1">
            <h3 className="font-semibold text-sm">{perfume.name}</h3>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-primary font-bold text-lg">
                R$ {perfume.price.toFixed(2).replace('.', ',')}
              </span>
              <span className="text-muted-foreground text-xs line-through">
                R$ {perfume.originalPrice.toFixed(2).replace('.', ',')}
              </span>
            </div>
            <div className="mt-1 inline-block">
              <span className="text-xs bg-green-500/10 text-green-600 px-2 py-0.5 rounded">
                -{perfume.discount}%
              </span>
            </div>
            <p className="text-xs text-green-600 font-medium mt-1">Frete grátis</p>
          </div>
        </div>

        {/* Variantes */}
        {perfume.variants && perfume.variants.length > 0 && (
          <div className="space-y-3">
            <p className="text-sm font-medium">
              Escolha o modelo do seu capacete
            </p>
            <div className="grid grid-cols-3 gap-3">
              {perfume.variants.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => setSelectedVariant(variant)}
                  className={`flex flex-col items-center gap-2 p-3 rounded-lg border-2 transition-all ${
                    selectedVariant?.id === variant.id
                      ? "border-primary bg-muted/50"
                      : "border-border hover:border-muted-foreground/30"
                  }`}
                >
                  <img
                    src={variant.image}
                    alt={variant.name}
                    className="w-full h-20 object-contain"
                  />
                  <span className="text-[10px] text-center leading-tight">
                    {variant.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Botão Comprar */}
        <Button
          onClick={handleBuyNow}
          className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90"
        >
          Comprar Agora
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default HelmetSelector;
