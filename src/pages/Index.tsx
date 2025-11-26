import { useState } from "react";
import Header from "@/components/Header";
import ProductGallery from "@/components/ProductGallery";
import PriceSection from "@/components/PriceSection";
import ProductInfo from "@/components/ProductInfo";
import ProductTabs from "@/components/ProductTabs";
import BottomActions from "@/components/BottomActions";
import { perfumes } from "@/data/perfumes";

const Index = () => {
  const [selectedPerfume, setSelectedPerfume] = useState(perfumes[0]);

  const handleVariantChange = (variantImage: string) => {
    setSelectedPerfume({
      ...selectedPerfume,
      image: variantImage,
      images: [variantImage]
    });
  };

  return (
    <div className="min-h-screen bg-background pb-32">
      <Header />
      
      <main>
        <ProductGallery 
          onPerfumeSelect={(index) => setSelectedPerfume(perfumes[index])}
          onVariantChange={handleVariantChange}
        />
        <PriceSection perfume={selectedPerfume} />
        <ProductInfo perfume={selectedPerfume} />
        <ProductTabs />
      </main>
      
      <BottomActions perfume={selectedPerfume} />
    </div>
  );
};

export default Index;
