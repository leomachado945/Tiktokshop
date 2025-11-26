import helmetKeepFighting from "@/assets/helmet-keep-fighting.png";
import helmetRosaGrafite from "@/assets/helmet-rosa-grafite.png";
import helmetAmareloNeon from "@/assets/helmet-amarelo-neon.png";
import helmetBrancoRosa from "@/assets/helmet-branco-rosa.png";
import helmetPretoRosa from "@/assets/helmet-preto-rosa.png";
import helmetBrancoGrafite from "@/assets/helmet-branco-grafite.png";

export interface ProductVariant {
  id: string;
  name: string;
  image: string;
  checkoutUrl: string;
}

export interface Perfume {
  id: number;
  name: string;
  image: string;
  images: string[];
  price: number;
  originalPrice: number;
  discount: number;
  checkoutUrl: string;
  variants?: ProductVariant[];
  rating: number;
  reviewCount: number;
  salesCount: number;
}

export const perfumes: Perfume[] = [
  {
    id: 0,
    name: "Capacete LS2 FF358 Spoiler Moto",
    image: helmetAmareloNeon,
    images: [helmetAmareloNeon],
    price: 58.15,
    originalPrice: 249.83,
    discount: 77,
    checkoutUrl: "https://pay.segurahojes.site/69095462c10ed205737d4a97",
    rating: 4.7,
    reviewCount: 207,
    salesCount: 4473,
    variants: [
      {
        id: "keep-fighting",
        name: "Keep Fighting",
        image: helmetKeepFighting,
        checkoutUrl: "https://pay.segurahojes.site/691fde04c06fe2bfe8ce8d0b",
      },
      {
        id: "rosa-grafite",
        name: "Rosa Grafite",
        image: helmetRosaGrafite,
        checkoutUrl: "https://pay.segurahojes.site/691fde5bdc30a719f8547bee",
      },
      {
        id: "amarelo-neon",
        name: "Amarelo Neon",
        image: helmetAmareloNeon,
        checkoutUrl: "https://pay.segurahojes.site/691fde6a285428f0156460d0",
      },
      {
        id: "branco-rosa",
        name: "Branco Rosa",
        image: helmetBrancoRosa,
        checkoutUrl: "https://pay.segurahojes.site/691fde80dc30a719f8547c31",
      },
      {
        id: "preto-rosa",
        name: "Preto Rosa",
        image: helmetPretoRosa,
        checkoutUrl: "https://pay.segurahojes.site/691fde96285428f0156460e6",
      },
      {
        id: "branco-grafite",
        name: "Branco Grafite",
        image: helmetBrancoGrafite,
        checkoutUrl: "https://pay.segurahojes.site/691fdea9dc30a719f8547c75",
      },
    ],
  },
];
