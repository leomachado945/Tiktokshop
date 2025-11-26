import { useState } from "react";
import { perfumes } from "@/data/perfumes";

interface ProductGalleryProps {
  onPerfumeSelect: (index: number) => void;
  onVariantChange?: (variantImage: string) => void;
}

const ProductGallery = ({ onPerfumeSelect, onVariantChange }: ProductGalleryProps) => {
  const product = perfumes[0];
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants ? product.variants[2].id : null
  );
  const [mainImage, setMainImage] = useState(
    product.variants ? product.variants[2].image : product.image
  );

  const handleVariantClick = (variantId: string, variantImage: string) => {
    setSelectedVariant(variantId);
    setMainImage(variantImage);
    onVariantChange?.(variantImage);
  };

  return (
    <div className="w-full space-y-3">
      {/* Main Image */}
      <div className="relative aspect-square overflow-hidden bg-background">
        <img
          src={mainImage}
          alt={product.name}
          className="w-full h-full object-contain p-4"
        />
      </div>

      {/* Variants Section */}
      {product.variants && (
        <div className="px-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {product.variants.map((variant) => (
              <button
                key={variant.id}
                onClick={() => handleVariantClick(variant.id, variant.image)}
                className={`flex-shrink-0 flex flex-col items-center gap-1.5 p-2 rounded-lg border-2 transition-all ${
                  selectedVariant === variant.id
                    ? "border-primary bg-muted/50"
                    : "border-border hover:border-muted-foreground"
                }`}
              >
                <div className="w-16 h-16 rounded-md overflow-hidden bg-muted">
                  <img
                    src={variant.image}
                    alt={variant.name}
                    className="w-full h-full object-contain p-1"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
