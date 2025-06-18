
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Monitor, Play, X, Brain, Zap, ArrowRight, Crown, Download } from 'lucide-react';
import { useAppFunctions } from '@/hooks/useAppFunctions';
import { useNavigation } from '@/context/NavigationContext';
import { useDeviceDetection } from '@/hooks/useDeviceDetection';

export const AssistenteIA = () => {
  const { functions } = useAppFunctions();
  const { setCurrentFunction } = useNavigation();
  const { isMobileOrTablet } = useDeviceDetection();
  const [showVideo, setShowVideo] = useState(false);
  const [showPremiumModal, setShowPremiumModal] = useState(false);

  const assistenteIAFunction = functions.find(func => 
    func.funcao.toLowerCase().includes('assistente') && func.funcao.toLowerCase().includes('ia')
  );

  const handleWhatsAppClick = () => {
    setShowPremiumModal(true);
  };

  const handleAppClick = () => {
    setShowPremiumModal(true);
  };

  const handleAppDownload = () => {
    const userAgent = navigator.userAgent;
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream;
    const isAndroid = /Android/.test(userAgent);

    if (isIOS) {
      window.open('https://apps.apple.com/us/app/direito-premium/id6451451647', '_blank');
    } else if (isAndroid) {
      window.open('https://play.google.com/store/apps/details?id=br.com.app.gpu2994564.gpub492f9e6db037057aaa93d7adfa9e3e0&pli=1', '_blank');
    }
  };

  const handleVideoClick = () => {
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
  };

  const closePremiumModal = () => {
    setShowPremiumModal(false);
  };

  return (
    <div className="min-h-screen bg-background p-3 sm:p-4 md:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header com badge premium */}
        <div className="mb-6 sm:mb-8 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Crown className="w-4 h-4" />
            <span>Funcionalidade Premium</span>
          </div>
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10">
              <Brain className="h-6 w-6 sm:h-8 md:h-10 text-primary" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Assistente IA Jurídico Premium
            </h1>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            Inteligência artificial especializada em Direito brasileiro - Versão Premium
          </p>
        </div>

        {/* Video Demo Button */}
        <div className="mb-6 sm:mb-8 text-center">
          <Button 
            onClick={handleVideoClick} 
            variant="outline" 
            className="flex items-center gap-2 mx-auto border-red-500/30 text-red-500 hover:bg-red-500/10 text-sm sm:text-base" 
            size="sm"
          >
            <Play className="h-3 w-3 sm:h-4 sm:w-4" />
            Ver Demonstração Premium
          </Button>
        </div>

        {/* Options Grid - Agora com overlay premium */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {/* WhatsApp IA - Premium */}
          <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer border border-yellow-500/20 hover:border-yellow-500/40 bg-card/50 backdrop-blur-sm relative" onClick={handleWhatsAppClick}>
            <div className="absolute top-3 right-3 z-10">
              <Crown className="h-5 w-5 text-yellow-500" />
            </div>
            <CardHeader className="text-center pb-3 sm:pb-4">
              <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-green-500/20 transition-colors relative">
                <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8 text-green-500" />
                <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <Brain className="h-2 w-2 sm:h-3 sm:w-3 text-white" />
                </div>
              </div>
              <CardTitle className="text-lg sm:text-xl text-green-600 flex items-center justify-center gap-2">
                <span>WhatsApp IA Premium</span>
                <Crown className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500" />
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <p className="text-muted-foreground mb-4 sm:mb-6 text-xs sm:text-sm">
                <strong>Evelyn IA Premium</strong> - Assistente jurídica avançada via WhatsApp
              </p>
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-500 rounded-full"></div>
                  <span>IA Jurídica Especializada Premium</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-500 rounded-full"></div>
                  <span>Recursos avançados exclusivos</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-500 rounded-full"></div>
                  <span>Suporte prioritário 24/7</span>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white group text-xs sm:text-sm" size="sm">
                <Crown className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                Acessar Premium
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          {/* App IA - Premium */}
          <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer border border-yellow-500/20 hover:border-yellow-500/40 bg-card/50 backdrop-blur-sm relative" onClick={handleAppClick}>
            <div className="absolute top-3 right-3 z-10">
              <Crown className="h-5 w-5 text-yellow-500" />
            </div>
            <CardHeader className="text-center pb-3 sm:pb-4">
              <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-blue-500/20 transition-colors relative">
                <Monitor className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500" />
                <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-blue-500 rounded-full flex items-center justify-center">
                  <Brain className="h-2 w-2 sm:h-3 sm:w-3 text-white" />
                </div>
              </div>
              <CardTitle className="text-lg sm:text-xl text-blue-600 flex items-center justify-center gap-2">
                <span>IA Premium App</span>
                <Crown className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500" />
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <p className="text-muted-foreground mb-4 sm:mb-6 text-xs sm:text-sm">
                <strong>IA Completa Premium</strong> - Interface avançada com recursos exclusivos
              </p>
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-500 rounded-full"></div>
                  <span>Interface profissional completa</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-500 rounded-full"></div>
                  <span>Histórico avançado de conversas</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-500 rounded-full"></div>
                  <span>Recursos exclusivos premium</span>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white group text-xs sm:text-sm" size="sm">
                <Crown className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                Acessar Premium
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Info Section Premium */}
        <Card className="border-yellow-500/20 bg-card/30 backdrop-blur-sm">
          <CardContent className="p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-center flex items-center justify-center gap-2">
              <Crown className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500" />
              IA Premium Especializada em Direito Brasileiro
            </h3>
            <p className="text-muted-foreground text-center text-xs sm:text-sm">
              Nossa <strong>IA Premium especializada em Direito brasileiro</strong> oferece recursos avançados
              e exclusivos para profissionais e estudantes de Direito. Acesse via app para experiência completa.
            </p>
          </CardContent>
        </Card>

        {/* Video Modal */}
        {showVideo && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-3 sm:p-4">
            <div className="bg-background rounded-lg w-full max-w-4xl h-[70vh] relative">
              <div className="flex items-center justify-between p-3 sm:p-4 border-b py-[7px] px-[10px]">
                <h3 className="text-base sm:text-lg font-semibold flex items-center gap-2">
                  <Crown className="h-4 w-4 text-yellow-500" />
                  Demonstração da IA Premium
                </h3>
                <Button variant="ghost" size="icon" onClick={closeVideo}>
                  <X className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>
              <div className="p-3 sm:p-4 h-full px-0 py-[3px]">
                <iframe 
                  src="https://www.youtube.com/embed/HlE9u1c_MPQ" 
                  className="w-full h-full rounded" 
                  title="Demonstração da IA Premium" 
                  frameBorder="0" 
                  allowFullScreen 
                />
              </div>
            </div>
          </div>
        )}

        {/* Premium Modal */}
        {showPremiumModal && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-3 sm:p-4">
            <div className="bg-background rounded-lg w-full max-w-2xl relative">
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Crown className="h-5 w-5 text-yellow-500" />
                  Assistente IA Premium
                </h3>
                <Button variant="ghost" size="icon" onClick={closePremiumModal}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="p-6 text-center space-y-4">
                <Brain className="h-16 w-16 text-yellow-500 mx-auto" />
                <h3 className="text-2xl font-bold text-yellow-600">Funcionalidade Premium</h3>
                <p className="text-lg text-muted-foreground">
                  Este é um recurso premium. Para ter acesso ao Assistente IA completo, baixe o app Direito Premium.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-2 text-sm text-yellow-600">
                    <Crown className="h-4 w-4" />
                    <span>IA Jurídica Avançada</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-yellow-600">
                    <Crown className="h-4 w-4" />
                    <span>Recursos Exclusivos</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-yellow-600">
                    <Crown className="h-4 w-4" />
                    <span>Suporte Prioritário</span>
                  </div>
                </div>

                {isMobileOrTablet && (
                  <Button 
                    onClick={handleAppDownload}
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
        )}
      </div>
    </div>
  );
};
