const Footer = () => {
  return (
    <footer className="w-full border-t bg-muted/30 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-foreground mb-3">Atendimento</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Central de Ajuda</li>
              <li>Fale Conosco</li>
              <li>Política de Privacidade</li>
              <li>Termos de Uso</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-foreground mb-3">Sobre</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Quem Somos</li>
              <li>Trabalhe Conosco</li>
              <li>Blog</li>
              <li>Imprensa</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-foreground mb-3">Pagamento</h3>
            <div className="flex gap-2 flex-wrap">
              {["💳", "💰", "🏦", "📱"].map((icon, index) => (
                <div
                  key={index}
                  className="w-12 h-12 rounded-lg bg-background border border-border flex items-center justify-center text-2xl"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Loja Premium. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
