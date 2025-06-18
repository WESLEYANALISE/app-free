
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const desktopImages = [
  {
    id: 1,
    url: "https://i.imgur.com/zeUZfy9.png",
    title: "Interface Principal",
    description: "Acesso completo ao sistema jurídico desktop"
  },
  {
    id: 2,
    url: "https://i.imgur.com/uMMd0la.png",
    title: "Biblioteca Jurídica",
    description: "Milhares de livros e materiais organizados"
  },
  {
    id: 3,
    url: "https://i.imgur.com/qQdODwE.png",
    title: "Pesquisa Avançada",
    description: "Busca inteligente em toda base de dados"
  },
  {
    id: 4,
    url: "https://i.imgur.com/gZSFBe3.png",
    title: "Vade Mecum Digital",
    description: "Códigos e leis sempre atualizados"
  },
  {
    id: 5,
    url: "https://i.imgur.com/TvM0QhE.png",
    title: "Assistente IA",
    description: "Inteligência artificial especializada"
  },
  {
    id: 6,
    url: "https://i.imgur.com/MkYTUjg.png",
    title: "Jurisprudência",
    description: "Acervo completo de decisões judiciais"
  },
  {
    id: 7,
    url: "https://i.imgur.com/9LPSlKC.png",
    title: "Mapas Mentais",
    description: "Visualização de conceitos jurídicos"
  },
  {
    id: 8,
    url: "https://i.imgur.com/u7fTR5K.png",
    title: "Relatórios Avançados",
    description: "Análises detalhadas e estatísticas"
  },
  {
    id: 9,
    url: "https://i.imgur.com/XKCvzsj.png",
    title: "Ferramentas Especializadas",
    description: "Recursos exclusivos para profissionais"
  }
];

export const DesktopPlatformCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % desktopImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % desktopImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + desktopImages.length) % desktopImages.length);
  };

  const currentItem = desktopImages[currentSlide];

  return (
    <div className="relative">
      {/* Header com texto persuasivo */}
      <div className="text-center mb-8 animate-fade-in">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
          <Play className="w-4 h-4" />
          <span>Versão Completa Desktop</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">
          Acesse a Plataforma Desktop Completa
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Receba o link de acesso direto no seu email e tenha acesso a todas as funcionalidades 
          profissionais da nossa plataforma jurídica desktop.
        </p>
      </div>

      {/* Carrossel de imagens */}
      <div 
        className={`relative h-[400px] sm:h-[500px] w-full overflow-hidden rounded-2xl shadow-2xl transition-all duration-1000 ${
          isLoaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
        }`}
        onMouseEnter={() => setIsAutoPlaying(false)} 
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Imagem principal */}
        <div className="absolute inset-0 transition-all duration-700 ease-in-out">
          <img 
            src={currentItem.url}
            alt={currentItem.title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            style={{ filter: 'brightness(0.9) contrast(1.1)' }}
          />
        </div>

        {/* Overlay com gradiente */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent-legal/20" />

        {/* Conteúdo sobre a imagem */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
          <div className="max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2 animate-fade-in-up">
              {currentItem.title}
            </h3>
            <p className="text-lg text-gray-200 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {currentItem.description}
            </p>
            
            {/* Barra de progresso animada */}
            <div className="mt-4 w-24 h-1 bg-gradient-to-r from-primary to-accent-legal rounded-full animate-fade-in-up" 
                 style={{ animationDelay: '0.4s' }} />
          </div>
        </div>

        {/* Navegação */}
        <Button
          variant="ghost"
          size="sm"
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white border-0 rounded-full w-12 h-12 p-0 transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white border-0 rounded-full w-12 h-12 p-0 transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        {/* Indicadores */}
        <div className="absolute bottom-20 left-6 sm:left-8 flex gap-2 z-20">
          {desktopImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/80 w-2'
              }`}
            />
          ))}
        </div>

        {/* Contador */}
        <div className="absolute top-6 right-6 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
          {currentSlide + 1} / {desktopImages.length}
        </div>
      </div>

      {/* Call to action abaixo do carrossel */}
      <div className="text-center mt-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <div className="bg-gradient-to-r from-primary/10 to-accent-legal/10 rounded-2xl p-6 border border-primary/20">
          <h3 className="text-xl font-bold mb-2 gradient-text">
            🚀 Pronto para começar?
          </h3>
          <p className="text-muted-foreground mb-4">
            Preencha os dados abaixo e receba o link de acesso da plataforma desktop no seu email
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Acesso imediato</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <span>Link por email</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <span>Sem compromisso</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
