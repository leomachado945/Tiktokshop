import { Truck, ChevronRight, Check, Store, Package, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import reviewerLucasSouza from "@/assets/reviewer-lucas-souza.png";
import reviewerMarceloCosta from "@/assets/reviewer-marcelo-costa.png";
import reviewerJoelLima from "@/assets/reviewer-joel-lima.png";
import reviewerKarina from "@/assets/reviewer-karina.png";
import reviewerBrunaSilva from "@/assets/reviewer-bruna-silva.png";
import reviewProduct1 from "@/assets/review-product-1.png";
import reviewProduct2 from "@/assets/review-product-2.png";
import reviewProduct3 from "@/assets/review-product-3.png";
import reviewProduct4 from "@/assets/review-product-4.png";
import reviewProduct5 from "@/assets/review-product-5.png";
import ls2Logo from "@/assets/ls2-logo-new.jpeg";

const ProductTabs = () => {
  return (
    <div className="w-full space-y-0">
      {/* Shipping and Returns */}
      <div className="p-4 space-y-3 border-b">
        <div className="flex items-center gap-3">
          <Truck className="w-5 h-5 text-success flex-shrink-0" />
          <div>
            <span className="text-sm font-semibold text-success">Frete grátis</span>
            <span className="text-sm text-muted-foreground ml-2">Receba até 28-02 de novembro</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Package className="w-5 h-5 text-muted-foreground flex-shrink-0" />
          <span className="text-sm text-muted-foreground">Devoluções gratuitas em até 30 dias...</span>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="p-4 border-b">
        {/* Reviews Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-semibold text-foreground">Avaliações dos clientes (591)</h3>
          <div className="flex items-center gap-1">
            <span className="text-xl font-bold text-foreground">4.7</span>
            <div className="flex ml-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
          </div>
        </div>

        {/* Individual Reviews */}
        <div className="space-y-4">
          {/* Review 1 - Lucas Souza */}
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <img src={reviewerLucasSouza} alt="Lucas Souza" className="w-12 h-12 rounded-full object-cover" />
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">Lucas Souza</h4>
                    <p className="text-xs text-muted-foreground">São Paulo - SP • publicado há 5 horas</p>
                  </div>
                  <button className="text-xs text-muted-foreground hover:text-foreground">Seguir</button>
                </div>
                <div className="flex mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-sm text-foreground">
              Chegou no prazo, capacete de qualidade!! O acabamento é impecável e o ajuste é perfeito. Muito confortável
              mesmo em viagens longas.
            </p>
            <img src={reviewProduct1} alt="Capacete do cliente" className="w-48 h-48 rounded-lg object-cover" />
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <button className="hover:text-foreground">👍 Útil</button>
              <span>127 pessoas acharam útil</span>
            </div>
          </div>

          {/* Review 2 - Marcelo Costa */}
          <div className="space-y-3 pt-4 border-t">
            <div className="flex items-start gap-3">
              <img src={reviewerMarceloCosta} alt="Marcelo Costa" className="w-12 h-12 rounded-full object-cover" />
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">Marcelo Costa</h4>
                    <p className="text-xs text-muted-foreground">Brasília - DF • publicado há 4 horas</p>
                  </div>
                  <button className="text-xs text-muted-foreground hover:text-foreground">Seguir</button>
                </div>
                <div className="flex mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-sm text-foreground">
              Produto excelente! A entrega foi rápida e o capacete veio muito bem embalado. Qualidade excepcional pelo
              preço!
            </p>
            <img src={reviewProduct2} alt="Capacete do cliente" className="w-48 h-48 rounded-lg object-cover" />
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <button className="hover:text-foreground">👍 Útil</button>
              <span>98 pessoas acharam útil</span>
            </div>
          </div>

          {/* Review 3 - Joel Lima */}
          <div className="space-y-3 pt-4 border-t">
            <div className="flex items-start gap-3">
              <img src={reviewerJoelLima} alt="Joel Lima" className="w-12 h-12 rounded-full object-cover" />
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">Joel Lima</h4>
                    <p className="text-xs text-muted-foreground">Rio de Janeiro - RJ • publicado há 3 horas</p>
                  </div>
                  <button className="text-xs text-muted-foreground hover:text-foreground">Seguir</button>
                </div>
                <div className="flex mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-sm text-foreground">
              Comprei meio na dúvida, mas a qualidade surpreendeu! O sistema de ventilação funciona muito bem e a
              viseira é excelente. Recomendo demais!
            </p>
            <img src={reviewProduct3} alt="Capacete do cliente" className="w-48 h-48 rounded-lg object-cover" />
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <button className="hover:text-foreground">👍 Útil</button>
              <span>94 pessoas acharam útil</span>
            </div>
          </div>

          {/* Review 4 - Carla Santos */}
          <div className="space-y-3 pt-4 border-t">
            <div className="flex items-start gap-3">
              <img src={reviewerKarina} alt="Carla Santos" className="w-12 h-12 rounded-full object-cover" />
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">Carla Santos</h4>
                    <p className="text-xs text-muted-foreground">Belo Horizonte - MG • publicado há 2 horas</p>
                  </div>
                  <button className="text-xs text-muted-foreground hover:text-foreground">Seguir</button>
                </div>
                <div className="flex mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-sm text-foreground">
              De todos os capacete que tive esse é o melhor! Leve, confortável e com ótima proteção. O design é
              esportivo e moderno. Vale cada centavo!
            </p>
            <img src={reviewProduct4} alt="Capacete do cliente" className="w-48 h-48 rounded-lg object-cover" />
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <button className="hover:text-foreground">👍 Útil</button>
              <span>108 pessoas acharam útil</span>
            </div>
          </div>

          {/* Review 5 - Fernanda Oliveira */}
          <div className="space-y-3 pt-4 border-t">
            <div className="flex items-start gap-3">
              <img src={reviewerBrunaSilva} alt="Fernanda Oliveira" className="w-12 h-12 rounded-full object-cover" />
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">Fernanda Oliveira</h4>
                    <p className="text-xs text-muted-foreground">Curitiba - PR • publicado há 1 hora</p>
                  </div>
                  <button className="text-xs text-muted-foreground hover:text-foreground">Seguir</button>
                </div>
                <div className="flex mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-sm text-foreground">
              Chegou rápido e muito bem embalado! O capacete é de excelente qualidade, forro interno removível e
              lavável. Estou muito satisfeita com a compra!
            </p>
            <img src={reviewProduct5} alt="Capacete do cliente" className="w-48 h-48 rounded-lg object-cover" />
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <button className="hover:text-foreground">👍 Útil</button>
            </div>
          </div>
        </div>

        {/* Rating Distribution */}
        <div className="mt-6 pt-4 border-t">
          <h4 className="text-sm font-semibold text-foreground mb-3">Distribuição das avaliações</h4>
          <div className="space-y-2">
            {[
              { stars: 5, count: 155 },
              { stars: 4, count: 22 },
              { stars: 3, count: 0 },
              { stars: 2, count: 0 },
              { stars: 1, count: 0 },
            ].map((item) => (
              <div key={item.stars} className="flex items-center gap-2">
                <div className="flex items-center gap-1 w-20">
                  <div className="flex">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-accent" style={{ width: `${(item.count / 177) * 100}%` }} />
                </div>
                <span className="text-xs text-muted-foreground w-8 text-right">{item.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Store Trust */}
        <div className="mt-6 pt-4 border-t">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-sm font-semibold text-foreground">Confiança na loja</h4>
            <span className="text-sm font-semibold text-success">Excelente</span>
          </div>
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden mb-4">
            <div className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-success" style={{ width: "95%" }} />
          </div>
          <div className="grid grid-cols-3 gap-4 text-center text-xs">
            <div>
              <div className="text-muted-foreground mb-1">+5000 vendas</div>
              <div className="font-semibold text-foreground">concluídas</div>
            </div>
            <div>
              <div className="text-muted-foreground mb-1">Oferece um bom</div>
              <div className="font-semibold text-foreground">atendimento</div>
            </div>
            <div>
              <div className="text-muted-foreground mb-1">Entrega dentro do</div>
              <div className="font-semibold text-foreground">prazo</div>
            </div>
          </div>
        </div>

        {/* Store Info */}
        <div className="mt-6 pt-4 border-t">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
              <img src={ls2Logo} alt="Loja Oficial LS2" className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-bold text-foreground">Loja Oficial LS2</span>
                <div className="flex items-center gap-1 text-xs text-success">
                  <Check className="w-3 h-3" />
                  <span>Loja Oficial</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mb-2">2.847 produtos</p>
              <p className="text-xs text-muted-foreground">Vendedor desde abril de 2022 no site</p>
            </div>
            <button className="text-sm font-semibold text-foreground px-4 py-1.5 border border-border rounded-md hover:bg-muted/30">
              Seguir
            </button>
          </div>
        </div>
      </div>

      {/* About Product */}
      <div className="p-4">
        <h3 className="text-base font-semibold text-foreground mb-3">Sobre esse produto</h3>

        <div className="space-y-3">
          <div className="flex items-start gap-2">
            <Package className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-foreground mb-2">Capacete LS2 FF358 Spoiler</p>
              <h4 className="text-sm font-semibold text-foreground mb-2">Características</h4>
              <p className="text-sm text-muted-foreground mb-2">
                O capacete LS2 FF358 Spoiler é um capacete full face de alta performance, projetado para oferecer máxima
                proteção e conforto. Com design aerodinâmico e acabamento premium, é ideal para quem busca segurança e
                estilo.
              </p>
              <p className="text-sm text-muted-foreground mb-3">
                Desenvolvido com materiais de primeira qualidade e tecnologia avançada, o FF358 garante ventilação
                eficiente, visibilidade ampla e ajuste perfeito para longas jornadas.
              </p>
              <div className="bg-muted/30 p-3 rounded-md border-l-4 border-primary">
                <p className="text-sm text-foreground italic">
                  "Feito para quem leva a segurança a sério" – Proteção premium com estilo esportivo para todos os tipos
                  de pilotagem.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-primary">🏍️</span>
              <h4 className="text-sm font-semibold text-foreground">MODELOS DISPONÍVEIS</h4>
            </div>

            <ul className="space-y-2 text-sm text-muted-foreground ml-6">
              <li className="list-disc">LS2 FF358 Spoiler - Keep Fighting (Preto/Rosa/Amarelo)</li>
              <li className="list-disc">LS2 FF358 Spoiler - Rosa/Grafite</li>
              <li className="list-disc">LS2 FF358 Spoiler - Amarelo Neon/Rosa</li>
              <li className="list-disc">LS2 FF358 Spoiler - Branco/Rosa/Amarelo</li>
              <li className="list-disc">LS2 FF358 Spoiler - Preto/Rosa/Ciano</li>
              <li className="list-disc">LS2 FF358 Spoiler - Branco/Vermelho</li>
            </ul>
          </div>

          <div className="mt-4 pt-4 border-t">
            <h4 className="text-sm font-semibold text-foreground mb-3">Tamanhos Disponíveis</h4>
            <div className="flex flex-wrap gap-2">
              {["54 cm", "56 cm", "58 cm", "60 cm", "62 cm"].map((size) => (
                <div key={size} className="px-3 py-2 bg-muted rounded-md text-sm text-foreground font-medium">
                  {size}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTabs;
