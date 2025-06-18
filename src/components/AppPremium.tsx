
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
  Play
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

  const closeVideo = () => {
    setShowVideo(false);
  };

  const premiumFeatures = [
    {
      icon: Crown,
      title: 'Assistente IA Premium',
      description: 'IA jurídica avançada com recursos exclusivos',
      available: !isDesktop
    },
    {
      icon: Download,
      title: 'Downloads Ilimitados',
      description: 'Acesso a toda biblioteca de materiais jurídicos',
      available: true
    },
    {
      icon: Shield,
      title: 'Suporte Prioritário',
      description: 'Atendimento exclusivo e prioritário',
      available: true
    },
    {
      icon: Zap,
      title: 'Recursos Avançados',
      description: 'Ferramentas profissionais especializadas',
      available: true
    }
  ];

  const desktopPremiumFeatures = [
    'Assistente IA Premium',
    'Downloads Ilimitados',
    'Biblioteca Jurídica Completa',
    'Mapas Mentais Avançados',
    'Flashcards Profissionais',
    'Suporte Prioritário',
    'Relatórios Detalhados',
    'Ferramentas Especializadas'
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
          <p className="text-lg text-muted-foreground">
            Transforme sua experiência jurídica com recursos exclusivos e premium
          </p>
        </div>

        {/* Mobile/Tablet View */}
        {(isMobile || isTablet) && (
          <div className="space-y-6">
            {/* App Download Section */}
            <Card className="border-yellow-500/20 bg-gradient-to-r from-yellow-50/50 to-orange-50/50 dark:from-yellow-900/10 dark:to-orange-900/10">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mb-4">
                  <Smartphone className="h-8 w-8 text-yellow-500" />
                </div>
                <CardTitle className="text-2xl text-yellow-600">App Premium</CardTitle>
                <p className="text-muted-foreground">
                  Baixe o app completo e tenha acesso a todos os recursos premium
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {premiumFeatures.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div 
                        key={index} 
                        className={`p-4 rounded-lg border ${
                          feature.available 
                            ? 'border-green-200 bg-green-50/50 dark:border-green-800 dark:bg-green-900/10' 
                            : 'border-red-200 bg-red-50/50 dark:border-red-800 dark:bg-red-900/10'
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <Icon className={`h-5 w-5 ${feature.available ? 'text-green-500' : 'text-red-500'}`} />
                          <h3 className="font-semibold text-sm">{feature.title}</h3>
                        </div>
                        <p className="text-xs text-muted-foreground">{feature.description}</p>
                        {feature.title === 'Downloads Ilimitados' && (
                          <Button 
                            size="sm" 
                            className="mt-2 w-full" 
                            onClick={() => handlePremiumFeatureClick(feature.title)}
                          >
                            Ver Recursos Premium
                          </Button>
                        )}
                      </div>
                    );
                  })}
                </div>
                
                <Button 
                  onClick={handleDownloadApp} 
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-4"
                  size="lg"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Baixar App Premium
                  {isIOS && ' - App Store'}
                  {isAndroid && ' - Play Store'}
                </Button>
              </CardContent>
            </Card>

            {/* Premium Features Demo */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Play className="h-5 w-5 text-red-500" />
                  Demonstração Premium
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => setShowVideo(true)} 
                  variant="outline" 
                  className="w-full border-red-500/30 text-red-500 hover:bg-red-500/10"
                >
                  <Play className="h-4 w-4 mr-2" />
                  Ver Recursos Premium
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Desktop View */}
        {isDesktop && (
          <div className="space-y-8">
            {/* Desktop Premium Features */}
            <Card className="border-yellow-500/20">
              <CardHeader className="text-center">
                <div className="mx-auto w-20 h-20 bg-yellow-500/10 rounded-full flex items-center justify-center mb-4">
                  <Monitor className="h-10 w-10 text-yellow-500" />
                </div>
                <CardTitle className="text-3xl text-yellow-600">Plataforma Desktop Premium</CardTitle>
                <p className="text-lg text-muted-foreground">
                  Acesso completo a todos os recursos profissionais
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {desktopPremiumFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 rounded-lg border border-green-200 bg-green-50/50 dark:border-green-800 dark:bg-green-900/10">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <Badge className="bg-yellow-500/10 text-yellow-600 border-yellow-500/20 text-lg px-4 py-2 mb-4">
                    <Star className="h-4 w-4 mr-2" />
                    Acesso Premium Ativo
                  </Badge>
                  <p className="text-muted-foreground">
                    Você tem acesso a todos os recursos premium na versão desktop
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Restricted Features Note */}
            <Card className="border-blue-500/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">
                  Recursos Disponíveis no App Mobile
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['Vade Mecum Digital', 'Áudio-aulas', 'Videoaulas', 'Notícias Jurídicas'].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg border border-blue-200 bg-blue-50/50 dark:border-blue-800 dark:bg-blue-900/10">
                      <Smartphone className="h-5 w-5 text-blue-500" />
                      <span className="font-medium">{feature}</span>
                      <Badge variant="outline" className="ml-auto">App Only</Badge>
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
                  Recursos Premium - Demonstração
                </h3>
                <Button variant="ghost" size="icon" onClick={closeVideo}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="p-4 h-full">
                <div className="text-center space-y-4">
                  <Crown className="h-16 w-16 text-yellow-500 mx-auto" />
                  <h3 className="text-2xl font-bold text-yellow-600">Recursos Premium</h3>
                  <p className="text-lg text-muted-foreground">
                    Esta é uma funcionalidade premium. Baixe o app para ter acesso completo a todos os recursos.
                  </p>
                  {(isMobile || isTablet) && (
                    <Button 
                      onClick={handleDownloadApp}
                      className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold"
                      size="lg"
                    >
                      <Download className="h-5 w-5 mr-2" />
                      Baixar App Premium
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
