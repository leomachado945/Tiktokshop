import { Star, Bookmark } from "lucide-react";
import { Perfume } from "@/data/perfumes";
interface ProductInfoProps {
  perfume: Perfume;
}
const ProductInfo = ({
  perfume
}: ProductInfoProps) => {
  return <div className="w-full px-4 py-3 space-y-2">
      {/* Product Title */}
      <div className="flex items-start justify-between gap-3">
        <h1 className="font-bold text-foreground leading-tight text-lg">
          {perfume.name}
        </h1>
        <button className="flex-shrink-0 p-1">
          <Bookmark className="w-6 h-6 text-foreground" />
        </button>
      </div>
      
      {/* Rating and Sales */}
      <div className="flex items-center gap-2 text-sm mx-px">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 fill-accent text-accent" />
          <span className="font-semibold text-foreground">{perfume.rating}</span>
          <span className="text-muted-foreground">({perfume.reviewCount})</span>
        </div>
        <span className="text-muted-foreground">{perfume.salesCount} vendidos</span>
      </div>
    </div>;
};
export default ProductInfo;