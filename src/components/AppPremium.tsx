
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
  Play,
  FileText,
  Bot,
  Globe,
  Library,
  BookOpen,
  Headphones,
  Lock,
  CheckCircle2
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

  const premiumAreas = [
    { 
      icon: Crown, 
      title: '10.000+ Materiais Exclusivos', 
      desc: 'Biblioteca jurídica premium com petições, contratos, pareceres e modelos atualizados diariamente',
      color: 'from-amber-600 to-yellow-600'
    },
    { 
      icon: Download, 
      title: 'Downloads Ilimitados', 
      desc: 'Baixe quantos materiais quiser, organize sua biblioteca offline sem restrições',
      color: 'from-blue-600 to-cyan-600'
    },
    { 
      icon: Shield, 
      title: '100% Sem Anúncios', 
      desc: 'Experiência profissional completamente limpa, sem interrupções ou distrações',
      color: 'from-green-600 to-emerald-600'
    },
    { 
      icon: Bot, 
      title: 'IA Jurídica Avançada', 
      desc: 'Assistente especializado com recursos exclusivos, análise de casos e sugestões personalizadas',
      color: 'from-purple-600 to-violet-600'
    },
    { 
      icon: Zap, 
      title: 'Atualizações Instantâneas', 
      desc: 'Conteúdo sempre atualizado com as últimas jurisprudências e mudanças legislativas',
      color: 'from-orange-600 to-red-600'
    },
    { 
      icon: Users, 
      title: 'Suporte Prioritário', 
      desc: 'Atendimento especializado com juristas experientes e resposta em até 2 horas',
      color: 'from-indigo-600 to-blue-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23d4af37" fill-opacity="0.05"%3E%3Ccircle cx="7" cy="7" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="relative z-10 p-4 pb-20">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Header Premium com Design Sofisticado */}
          <div className="text-center space-y-6 pt-8">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-amber-500/30 to-yellow-600/30 border border-amber-500/50 backdrop-blur-sm relative">
              <Lock className="h-12 w-12 text-amber-400" />
              <div className="absolute inset-0 rounded-full bg-amber-400/20 animate-pulse"></div>
            </div>
            
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                Biblioteca Premium
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-amber-300">
                Exclusiva
              </h2>
            </div>
            
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500/20 border border-green-500/30 backdrop-blur-sm">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              <span className="text-green-300 font-medium">Mais de 50.000 usuários satisfeitos</span>
            </div>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Desbloqueie acesso completo à maior biblioteca jurídica digital do Brasil com{' '}
              <span className="text-amber-400 font-semibold">milhares de materiais exclusivos</span>{' '}
              para impulsionar sua carreira.
            </p>
          </div>

          {/* Pricing Card Premium */}
          <Card className="border-amber-500/30 bg-gradient-to-br from-slate-800/40 to-gray-800/40 backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-500 to-yellow-500 text-slate-900 px-8 py-4 rounded-bl-3xl">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                <span className="text-sm font-bold">MAIS POPULAR</span>
              </div>
            </div>
            
            <CardContent className="text-center py-12 px-8">
              <Badge className="bg-green-500/20 text-green-300 border-green-500/40 mb-8 px-6 py-3 text-lg">
                <Sparkles className="h-5 w-5 mr-2" />
                Oferta Especial - Tempo Limitado
              </Badge>
              
              <div className="space-y-6 mb-10">
                <div className="text-7xl md:text-8xl font-bold text-amber-400 tracking-tight">
                  R$ 39,99
                </div>
                <div className="text-3xl md:text-4xl text-green-400 font-bold">
                  💎 PAGAMENTO ÚNICO - VITALÍCIO
                </div>
                <div className="text-xl text-gray-300">
                  <span className="line-through text-red-400 text-2xl">R$ 199,99</span>
                  <span className="ml-4 bg-red-500 text-white px-4 py-2 rounded-full text-lg font-bold">80% OFF</span>
                </div>
                <p className="text-gray-300 text-xl">
                  Sem mensalidades! Pague uma vez e tenha acesso para sempre
                </p>
              </div>
              
              <Button 
                onClick={handleDownloadApp}
                className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-900 font-bold py-8 text-2xl rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-2xl mb-6"
                size="lg"
              >
                <Crown className="h-7 w-7 mr-4" />
                Upgrade para Premium Agora
                <ArrowRight className="h-6 w-6 ml-4" />
              </Button>
              
              <p className="text-sm text-gray-400">
                🔒 Pagamento 100% seguro • 📱 Acesso imediato • ⭐ Garantia total
              </p>
            </CardContent>
          </Card>

          {/* Premium Features Grid */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center text-white">Vantagens Premium</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {premiumAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <Card key={index} className="border-gray-700/30 bg-gradient-to-br from-slate-800/20 to-gray-800/20 backdrop-blur-md hover:border-amber-500/40 transition-all duration-500 hover:scale-105 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <CardContent className="p-8 space-y-6 relative">
                      <div className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${area.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-2xl`}>
                        <Icon className="h-10 w-10 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-white mb-3">{area.title}</h3>
                        <p className="text-gray-300 text-base leading-relaxed">{area.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Enhanced Comparison Table */}
          <Card className="border-gray-700/30 bg-gradient-to-br from-slate-800/20 to-gray-800/20 backdrop-blur-md">
            <CardContent className="p-10">
              <h3 className="text-3xl font-bold text-center text-white mb-10">Grátis vs Premium</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between py-6 border-b border-gray-700/30">
                  <span className="text-gray-200 font-medium text-lg">Vade Mecum Digital</span>
                  <div className="flex gap-16 text-center">
                    <Check className="h-6 w-6 text-green-400" />
                    <Check className="h-6 w-6 text-green-400" />
                  </div>
                </div>
                <div className="flex items-center justify-between py-6 border-b border-gray-700/30">
                  <span className="text-gray-200 font-medium text-lg">Publicidade</span>
                  <div className="flex gap-16 text-center">
                    <span className="text-red-400 font-semibold text-lg">Com anúncios</span>
                    <span className="text-green-400 font-semibold text-lg">Zero anúncios</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-6 border-b border-gray-700/30">
                  <span className="text-gray-200 font-medium text-lg">Biblioteca Jurídica</span>
                  <div className="flex gap-16 text-center">
                    <span className="text-red-400 text-lg">Limitada</span>
                    <span className="text-green-400 font-semibold text-lg">10.000+ materiais</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-6 border-b border-gray-700/30">
                  <span className="text-gray-200 font-medium text-lg">Downloads</span>
                  <div className="flex gap-16 text-center">
                    <span className="text-red-400 text-lg">5 por dia</span>
                    <span className="text-green-400 font-semibold text-lg">Ilimitados</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-6">
                  <span className="text-gray-200 font-medium text-lg">Assistente IA</span>
                  <div className="flex gap-16 text-center">
                    <span className="text-gray-400 text-lg">Básico</span>
                    <span className="text-green-400 font-semibold text-lg">Avançado + Análises</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Final CTA */}
          <Card className="border-amber-500/30 bg-gradient-to-br from-slate-800/40 to-gray-800/40 backdrop-blur-md relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent"></div>
            <CardContent className="text-center py-12 relative">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-amber-500/30 to-yellow-600/30 border border-amber-500/50 backdrop-blur-sm mb-8">
                <Crown className="h-10 w-10 text-amber-400" />
              </div>
              <h3 className="text-4xl font-bold mb-6 text-amber-400">
                Transforme sua prática jurídica!
              </h3>
              <p className="text-gray-200 mb-10 max-w-3xl mx-auto text-xl leading-relaxed">
                Mais de 50.000 advogados já escolheram o Direito Premium. 
                Tenha acesso completo aos melhores recursos jurídicos do Brasil.
              </p>
              <Button 
                onClick={handleDownloadApp}
                className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-900 font-bold py-8 text-2xl rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-2xl"
                size="lg"
              >
                <Download className="h-7 w-7 mr-4" />
                Começar Agora - R$ 39,99 Vitalício
              </Button>
              <p className="text-sm text-gray-400 mt-6">
                🔒 Pagamento 100% seguro • 📱 Acesso imediato • ⭐ Garantia total
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
