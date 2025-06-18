
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Smartphone, 
  Monitor, 
  Crown, 
  Check, 
  Download,
  Star,
  Zap,
  Shield,
  X,
  Play,
  CheckCircle,
  Sparkles,
  Infinity,
  Heart
} from 'lucide-react';
import { useDeviceDetection } from '@/hooks/useDeviceDetection';

export const AppPremium = () => {
  const { deviceType, isMobile, isTablet, isDesktop } = useDeviceDetection();
  const [showVideo, setShowVideo] = useState(false);
  const [userAgent, setUserAgent] = useState('');

  useEffect(() => {
    setUserAgent(navigator.userAgent);
  }, []);

  const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream;
  const isAndroid = /Android/.test(userAgent);

  const handleDownloadApp = () => {
    if (isIOS) {
      window.open('https://apps.apple.com/us/app/direito-premium/id6451451647', '_blank');
    } else if (isAndroid) {
      window.open('https://play.google.com/store/apps/details?id=br.com.app.gpu2994564.gpub492f9e6db037057aaa93d7adfa9e3e0&pli=1', '_blank');
    }
  };

  const premiumFeatures = [
    {
      icon: Shield,
      title: 'Sem Anúncios',
      description: 'Experiência totalmente livre de interrupções',
      highlight: true
    },
    {
      icon: Crown,
      title: 'Assistente IA Premium',
      description: 'IA jurídica avançada com recursos exclusivos',
      highlight: true
    },
    {
      icon: Download,
      title: 'Downloads Ilimitados',
      description: 'Acesso completo à biblioteca jurídica',
      highlight: false
    },
    {
      icon: Monitor,
      title: 'Plataforma Desktop',
      description: 'Acesso à versão desktop completa',
      highlight: true
    },
    {
      icon: Zap,
      title: 'Recursos Avançados',
      description: 'Ferramentas profissionais especializadas',
      highlight: false
    },
    {
      icon: Heart,
      title: 'Suporte Prioritário',
      description: 'Atendimento exclusivo e prioritário',
      highlight: false
    }
  ];

  return (
    <div className="min-h-screen bg-background p-3 sm:p-4 md:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Premium */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-4 rounded-2xl bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30">
              <Crown className="h-10 w-10 text-yellow-500" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                Direito Premium
              </h1>
              <div className="flex items-center justify-center gap-2 mt-2">
                <Infinity className="h-5 w-5 text-green-500" />
                <span className="text-green-500 font-semibold">Acesso Vitalício</span>
              </div>
            </div>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transforme sua experiência jurídica com recursos exclusivos e premium
          </p>
        </div>

        {/* Preço em Destaque */}
        <Card className="border-yellow-500/30 bg-gradient-to-r from-yellow-50/10 to-orange-50/10 mb-8">
          <CardContent className="text-center py-8">
            <div className="mb-4">
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-lg px-4 py-2 mb-4">
                <Sparkles className="h-4 w-4 mr-2" />
                Oferta Especial
              </Badge>
            </div>
            <div className="text-6xl font-bold text-yellow-600 mb-2">
              R$ 39,99
            </div>
            <div className="text-2xl text-green-400 font-bold mb-4">
              🎉 Pagamento Único - Vitalício
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              Sem mensalidades! Pague uma vez e tenha acesso para sempre
            </p>
            
            <Button 
              onClick={handleDownloadApp}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-4 px-8 text-xl rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-2xl"
              size="lg"
            >
              <Crown className="h-6 w-6 mr-3" />
              Upgrade para Premium
            </Button>
          </CardContent>
        </Card>

        {/* Recursos Premium */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {premiumFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className={`
                  border transition-all duration-300 hover:scale-105 hover:shadow-xl
                  ${feature.highlight 
                    ? 'border-yellow-500/50 bg-gradient-to-br from-yellow-50/10 to-orange-50/10' 
                    : 'border-border/30'
                  }
                `}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`
                    mx-auto w-16 h-16 rounded-2xl flex items-center justify-center mb-4
                    ${feature.highlight 
                      ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20' 
                      : 'bg-primary/10'
                    }
                  `}>
                    <Icon className={`h-8 w-8 ${feature.highlight ? 'text-yellow-500' : 'text-primary'}`} />
                  </div>
                  <CardTitle className={`text-xl ${feature.highlight ? 'text-yellow-600' : ''}`}>
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                  {feature.highlight && (
                    <Badge className="mt-3 bg-yellow-500/20 text-yellow-600 border-yellow-500/30">
                      Destaque
                    </Badge>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Comparação Grátis vs Premium */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              Grátis vs Premium
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Versão Grátis */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-center text-muted-foreground">Versão Grátis</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Vade Mecum básico</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Audioaulas limitadas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <X className="h-5 w-5 text-red-500" />
                    <span className="line-through text-muted-foreground">Sem anúncios</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <X className="h-5 w-5 text-red-500" />
                    <span className="line-through text-muted-foreground">Plataforma desktop</span>
                  </div>
                </div>
              </div>

              {/* Versão Premium */}
              <div className="space-y-4 border-l-4 border-yellow-500 pl-6">
                <h3 className="text-xl font-bold text-center text-yellow-600">Versão Premium</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="font-medium">Tudo da versão grátis +</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Experiência sem anúncios</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Plataforma desktop completa</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Assistente IA premium</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Downloads ilimitados</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Suporte prioritário</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action Final */}
        <Card className="border-yellow-500/30 bg-gradient-to-r from-yellow-50/10 to-orange-50/10">
          <CardContent className="text-center py-8">
            <Crown className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-yellow-600">
              Pronto para a experiência completa?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Junte-se a milhares de profissionais que já escolheram o Premium
            </p>
            <Button 
              onClick={handleDownloadApp}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-4 px-8 text-xl rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-2xl"
              size="lg"
            >
              <Download className="h-6 w-6 mr-3" />
              Fazer Upgrade Agora - R$ 39,99
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
