
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Crown, 
  Check, 
  Download,
  Star,
  Shield,
  Sparkles,
  ArrowRight,
  Zap,
  Users,
  Play
} from 'lucide-react';
import { useDeviceDetection } from '@/hooks/useDeviceDetection';

export const AppPremium = () => {
  const { deviceType, isMobile, isTablet, isDesktop } = useDeviceDetection();
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
    { icon: Shield, title: 'Sem Anúncios', desc: 'Experiência livre de interrupções' },
    { icon: Crown, title: 'IA Premium', desc: 'Assistente jurídico avançado' },
    { icon: Download, title: 'Downloads Ilimitados', desc: 'Acesso completo à biblioteca' },
    { icon: Play, title: 'Plataforma Desktop', desc: 'Versão completa profissional' },
    { icon: Users, title: 'Suporte Prioritário', desc: 'Atendimento especializado' },
    { icon: Zap, title: 'Recursos Exclusivos', desc: 'Funcionalidades premium' }
  ];

  return (
    <div className="min-h-screen bg-background p-4 pb-20">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 p-3 rounded-2xl bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30">
            <Crown className="h-8 w-8 text-yellow-500" />
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              Direito Premium
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Acelere sua carreira jurídica com recursos exclusivos
          </p>
        </div>

        {/* Pricing Card */}
        <Card className="border-yellow-500/30 bg-gradient-to-br from-yellow-50/10 to-orange-50/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-gradient-to-l from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-bl-2xl">
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3" />
              <span className="text-sm font-bold">MAIS POPULAR</span>
            </div>
          </div>
          
          <CardContent className="text-center py-8 px-6">
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mb-4">
              <Sparkles className="h-4 w-4 mr-1" />
              Oferta Especial - Tempo Limitado
            </Badge>
            
            <div className="space-y-2 mb-6">
              <div className="text-4xl md:text-5xl font-bold text-yellow-600">
                R$ 39,99
              </div>
              <div className="text-lg md:text-xl text-green-400 font-bold">
                🎉 PAGAMENTO ÚNICO - VITALÍCIO
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="line-through text-red-500">R$ 199,99</span>
                <span className="ml-2 bg-red-500 text-white px-2 py-1 rounded text-xs">80% OFF</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Sem mensalidades! Pague uma vez e tenha acesso para sempre
              </p>
            </div>
            
            <Button 
              onClick={handleDownloadApp}
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-4 text-lg rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg mb-3"
              size="lg"
            >
              <Crown className="h-5 w-5 mr-2" />
              Upgrade para Premium
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
            
            <p className="text-xs text-muted-foreground">
              ✅ Garantia de 7 dias • ✅ Acesso imediato
            </p>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-center">Recursos Premium</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {premiumFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-border/30 hover:border-yellow-500/30 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-4 text-center space-y-3">
                    <div className="mx-auto w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">{feature.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{feature.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Comparison */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-center mb-4">Grátis vs Premium</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2 border-b border-border/30">
                <span className="text-sm">Vade Mecum Digital</span>
                <div className="flex gap-6 text-center">
                  <Check className="h-4 w-4 text-green-500" />
                  <Check className="h-4 w-4 text-green-500" />
                </div>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-border/30">
                <span className="text-sm">Anúncios</span>
                <div className="flex gap-6 text-center">
                  <span className="text-xs text-red-500">Com anúncios</span>
                  <span className="text-xs text-green-500 font-semibold">Sem anúncios</span>
                </div>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-border/30">
                <span className="text-sm">Plataforma Desktop</span>
                <div className="flex gap-6 text-center">
                  <span className="text-xs text-red-500">Não</span>
                  <Check className="h-4 w-4 text-green-500" />
                </div>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-border/30">
                <span className="text-sm">Downloads</span>
                <div className="flex gap-6 text-center">
                  <span className="text-xs text-red-500">Limitado</span>
                  <span className="text-xs text-green-500 font-semibold">Ilimitados</span>
                </div>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-sm">Assistente IA</span>
                <div className="flex gap-6 text-center">
                  <span className="text-xs">Básico</span>
                  <span className="text-xs text-green-500 font-semibold">Avançado</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ */}
        <Card>
          <CardContent className="p-6 space-y-4">
            <h3 className="text-lg font-bold text-center">Perguntas Frequentes</h3>
            <div className="space-y-3 text-sm">
              <div>
                <h4 className="font-semibold mb-1">❓ O que significa "vitalício"?</h4>
                <p className="text-muted-foreground">Pague uma vez e tenha acesso para sempre, sem mensalidades.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">❓ Posso cancelar se não gostar?</h4>
                <p className="text-muted-foreground">Sim! Garantia de 7 dias com devolução de 100% do valor.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">❓ Funciona em todos os dispositivos?</h4>
                <p className="text-muted-foreground">Sim! App móvel, tablet e plataforma desktop com sincronização.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Final CTA */}
        <Card className="border-yellow-500/30 bg-gradient-to-br from-yellow-50/10 to-orange-50/10">
          <CardContent className="text-center py-8">
            <Crown className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-yellow-600">
              Não perca esta oportunidade!
            </h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Mais de 50.000 profissionais já escolheram o Direito Premium. 
              Acelere sua carreira jurídica hoje mesmo.
            </p>
            <Button 
              onClick={handleDownloadApp}
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-4 text-lg rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg"
              size="lg"
            >
              <Download className="h-5 w-5 mr-2" />
              Começar Agora - R$ 39,99 Vitalício
            </Button>
            <p className="text-xs text-muted-foreground mt-3">
              🔒 Pagamento seguro • 📱 Acesso imediato • ⭐ Garantia de satisfação
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
