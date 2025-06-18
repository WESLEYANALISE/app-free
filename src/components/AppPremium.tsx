
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
  Ban,
  Brain,
  BookOpen,
  Users,
  Clock,
  Gift
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

  const handlePremiumFeatureClick = (featureName: string) => {
    setShowVideo(true);
  };

  const premiumAdvantages = [
    {
      icon: Ban,
      title: 'Sem Anúncios',
      description: 'Experiência completa sem interrupções publicitárias',
      highlight: true
    },
    {
      icon: Brain,
      title: 'Assistente IA Premium',
      description: 'IA jurídica avançada com recursos exclusivos e ilimitados',
      highlight: true
    },
    {
      icon: Download,
      title: 'Downloads Ilimitados',
      description: 'Acesso completo à biblioteca de materiais jurídicos',
      highlight: false
    },
    {
      icon: BookOpen,
      title: 'Modelos de Petições',
      description: 'Centenas de modelos profissionais atualizados',
      highlight: false
    },
    {
      icon: Zap,
      title: 'Mapas Mentais',
      description: 'Ferramenta visual para organizar conhecimento jurídico',
      highlight: false
    },
    {
      icon: Users,
      title: 'Cursos Preparatórios',
      description: 'Acesso a cursos especializados para concursos',
      highlight: false
    },
    {
      icon: Shield,
      title: 'Suporte Prioritário',
      description: 'Atendimento exclusivo e prioritário',
      highlight: false
    },
    {
      icon: Clock,
      title: 'Acesso Vitalício',
      description: 'Pague uma vez e tenha acesso para sempre',
      highlight: true
    }
  ];

  const desktopPremiumFeatures = [
    'Experiência sem anúncios',
    'Assistente IA Premium Ilimitado',
    'Downloads Ilimitados',
    'Biblioteca Jurídica Completa',
    'Modelos de Petições Profissionais',
    'Mapas Mentais Avançados',
    'Cursos Preparatórios Exclusivos',
    'Suporte Prioritário',
    'Relatórios Detalhados',
    'Ferramentas Especializadas',
    'Acesso Vitalício'
  ];

  return (
    <div className="min-h-screen bg-background p-3 sm:p-4 md:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Premium */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10">
              <Crown className="h-8 w-8 text-yellow-500" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              Direito Premium
            </h1>
          </div>
          <p className="text-lg text-muted-foreground mb-4">
            Transforme sua experiência jurídica com recursos exclusivos e premium
          </p>
          
          {/* Preço discreto */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full border border-green-500/20">
            <Gift className="h-4 w-4 text-green-500" />
            <span className="text-sm text-green-600 font-medium">
              Por apenas R$ 39,99 • Acesso Vitalício
            </span>
          </div>
        </div>

        {/* Mobile/Tablet View */}
        {(isMobile || isTablet) && (
          <div className="space-y-6">
            {/* Vantagens Premium */}
            <Card className="border-yellow-500/20 bg-gradient-to-r from-yellow-50/50 to-orange-50/50 dark:from-yellow-900/10 dark:to-orange-900/10">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-yellow-600">Vantagens Exclusivas</CardTitle>
                <p className="text-muted-foreground">
                  Descubra tudo que você ganha sendo Premium
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  {premiumAdvantages.map((advantage, index) => {
                    const Icon = advantage.icon;
                    return (
                      <div 
                        key={index} 
                        className={`p-4 rounded-lg border transition-all duration-300 ${
                          advantage.highlight 
                            ? 'border-yellow-300 bg-yellow-50/80 dark:border-yellow-700 dark:bg-yellow-900/20 shadow-md' 
                            : 'border-green-200 bg-green-50/50 dark:border-green-800 dark:bg-green-900/10'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <Icon className={`h-6 w-6 mt-1 flex-shrink-0 ${
                            advantage.highlight ? 'text-yellow-600' : 'text-green-500'
                          }`} />
                          <div>
                            <h3 className="font-semibold text-base mb-1">{advantage.title}</h3>
                            <p className="text-sm text-muted-foreground">{advantage.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                <Button 
                  onClick={handleDownloadApp} 
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-4 text-lg"
                  size="lg"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Adquirir Premium - R$ 39,99
                  {isIOS && ' - App Store'}
                  {isAndroid && ' - Play Store'}
                </Button>
                
                <p className="text-center text-xs text-muted-foreground">
                  🎁 Acesso vitalício • Sem mensalidades • Sem compromisso
                </p>
              </CardContent>
            </Card>

            {/* Premium Features Demo */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Play className="h-5 w-5 text-red-500" />
                  Ver Funcionalidades Premium
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => setShowVideo(true)} 
                  variant="outline" 
                  className="w-full border-red-500/30 text-red-500 hover:bg-red-500/10"
                >
                  <Play className="h-4 w-4 mr-2" />
                  Demonstração das Funcionalidades
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Desktop View */}
        {isDesktop && (
          <div className="space-y-8">
            {/* Vantagens Premium Desktop */}
            <Card className="border-yellow-500/20">
              <CardHeader className="text-center">
                <div className="mx-auto w-20 h-20 bg-yellow-500/10 rounded-full flex items-center justify-center mb-4">
                  <Monitor className="h-10 w-10 text-yellow-500" />
                </div>
                <CardTitle className="text-3xl text-yellow-600">Plataforma Desktop Premium</CardTitle>
                <p className="text-lg text-muted-foreground">
                  Acesso completo a todos os recursos profissionais por R$ 39,99 vitalício
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {desktopPremiumFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 rounded-lg border border-green-200 bg-green-50/50 dark:border-green-800 dark:bg-green-900/10 hover:shadow-md transition-all duration-300">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 text-center space-y-4">
                  <Badge className="bg-yellow-500/10 text-yellow-600 border-yellow-500/20 text-lg px-6 py-3">
                    <Crown className="h-5 w-5 mr-2" />
                    Investimento Único: R$ 39,99
                  </Badge>
                  
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold px-8 py-4 text-lg"
                  >
                    <Gift className="h-5 w-5 mr-2" />
                    Adquirir Acesso Premium Vitalício
                  </Button>
                  
                  <p className="text-muted-foreground text-sm">
                    ✨ Pague uma vez e tenha acesso para sempre • Sem mensalidades
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Recursos Móveis */}
            <Card className="border-blue-500/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">
                  Recursos Disponíveis no App Mobile Premium
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['Vade Mecum Digital', 'Áudio-aulas', 'Videoaulas', 'Notícias Jurídicas', 'Experiência sem anúncios'].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg border border-blue-200 bg-blue-50/50 dark:border-blue-800 dark:bg-blue-900/10">
                      <Smartphone className="h-5 w-5 text-blue-500" />
                      <span className="font-medium">{feature}</span>
                      <Badge variant="outline" className="ml-auto">Premium</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Video Modal */}
        {showVideo && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="bg-background rounded-lg w-full max-w-4xl h-[70vh] relative">
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Crown className="h-5 w-5 text-yellow-500" />
                  Funcionalidades Premium - R$ 39,99 Vitalício
                </h3>
                <Button variant="ghost" size="icon" onClick={() => setShowVideo(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="p-8 h-full flex items-center justify-center">
                <div className="text-center space-y-6">
                  <Crown className="h-20 w-20 text-yellow-500 mx-auto" />
                  <div>
                    <h3 className="text-3xl font-bold text-yellow-600 mb-2">Recursos Premium</h3>
                    <p className="text-lg text-muted-foreground mb-4">
                      Acesso vitalício a todas as funcionalidades profissionais
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full border border-green-500/20 mb-6">
                      <Gift className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-green-600 font-medium">
                        Apenas R$ 39,99 • Acesso Vitalício • Sem Mensalidades
                      </span>
                    </div>
                  </div>
                  {(isMobile || isTablet) && (
                    <Button 
                      onClick={handleDownloadApp}
                      className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold px-8 py-4 text-lg"
                      size="lg"
                    >
                      <Download className="h-5 w-5 mr-2" />
                      Adquirir Premium - R$ 39,99
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
