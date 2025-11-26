const specs = [
  { label: "Material", value: "Madeira Premium MDF" },
  { label: "Dimensões", value: "120cm x 80cm x 45cm" },
  { label: "Peso", value: "8,5 kg" },
  { label: "Cor", value: "Natural com detalhes em preto" },
  { label: "Garantia", value: "3 meses" },
  { label: "Origem", value: "Nacional" },
];

const ProductSpecs = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-foreground mb-6">
        Especificações do Produto
      </h2>
      
      <div className="bg-card border border-border rounded-xl p-6 shadow-[var(--shadow-soft)]">
        <div className="space-y-4">
          {specs.map((spec, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-3 border-b border-border last:border-0"
            >
              <span className="font-medium text-muted-foreground">{spec.label}</span>
              <span className="font-bold text-foreground">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-6 bg-muted/50 border border-border rounded-xl p-5">
        <h3 className="font-bold text-foreground mb-3">Sobre o Produto</h3>
        <p className="text-muted-foreground leading-relaxed">
          Conjunto decorativo premium desenvolvido para transformar ambientes modernos com elegância e 
          sofisticação. Fabricado com materiais de alta qualidade e acabamento impecável, perfeito para 
          salas, quartos e escritórios. Design contemporâneo que se adapta a diferentes estilos de 
          decoração, proporcionando harmonia e personalidade ao seu espaço.
        </p>
      </div>
    </div>
  );
};

export default ProductSpecs;
