
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
  Headphones
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
      icon: FileText, 
      title: '10.000+ Materiais Premium', 
      desc: 'Petições, contratos, pareceres e modelos atualizados',
      color: 'from-emerald-600 to-teal-600'
    },
    { 
      icon: Download, 
      title: 'Downloads Ilimitados', 
      desc: 'Baixe quantos materiais quiser, sem limites',
      color: 'from-blue-600 to-cyan-600'
    },
    { 
      icon: Shield, 
      title: '100% Sem Anúncios', 
      desc: 'Experiência profissional sem interrupções',
      color: 'from-purple-600 to-violet-600'
    },
    { 
      icon: Zap, 
      title: 'Sempre Atualizado', 
      desc: 'Conteúdo revisado por especialistas diariamente',
      color: 'from-amber-600 to-yellow-600'
    },
    { 
      icon: Bot, 
      title: 'IA Jurídica Avançada', 
      desc: 'Assistente especializado com recursos exclusivos',
      color: 'from-indigo-600 to-blue-600'
    },
    { 
      icon: Users, 
      title: 'Suporte Especializado', 
      desc: 'Atendimento prioritário com juristas experientes',
      color: 'from-rose-600 to-pink-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 p-4 pb-20">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Header com gradiente escuro */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-3 p-4 rounded-3xl bg-gradient-to-r from-yellow-500/30 to-orange-500/30 border border-yellow-500/50 backdrop-blur-sm">
            <Crown className="h-10 w-10 text-yellow-400" />
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Direito Premium
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A plataforma mais completa para profissionais do Direito
          </p>
        </div>

        {/* Pricing Card com design escuro */}
        <Card className="border-yellow-500/40 bg-gradient-to-br from-slate-800/80 to-gray-800/80 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-gradient-to-l from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-bl-3xl">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4" />
              <span className="text-sm font-bold">MAIS POPULAR</span>
            </div>
          </div>
          
          <CardContent className="text-center py-10 px-8">
            <Badge className="bg-green-500/30 text-green-300 border-green-500/50 mb-6 px-4 py-2 text-base">
              <Sparkles className="h-5 w-5 mr-2" />
              Oferta Especial - Tempo Limitado
            </Badge>
            
            <div className="space-y-4 mb-8">
              <div className="text-6xl md:text-7xl font-bold text-yellow-400">
                R$ 39,99
              </div>
              <div className="text-2xl md:text-3xl text-green-400 font-bold">
                💎 PAGAMENTO ÚNICO - VITALÍCIO
              </div>
              <div className="text-lg text-gray-300">
                <span className="line-through text-red-400">R$ 199,99</span>
                <span className="ml-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">80% OFF</span>
              </div>
              <p className="text-gray-400 text-lg">
                Sem mensalidades! Pague uma vez e tenha acesso para sempre
              </p>
            </div>
            
            <Button 
              onClick={handleDownloadApp}
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-6 text-xl rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-2xl mb-4"
              size="lg"
            >
              <Crown className="h-6 w-6 mr-3" />
              Upgrade para Premium Agora
              <ArrowRight className="h-5 w-5 ml-3" />
            </Button>
            
            <p className="text-sm text-gray-400">
              ✅ Garantia de 7 dias • ✅ Acesso imediato • ✅ Suporte premium
            </p>
          </CardContent>
        </Card>

        {/* Premium Areas Grid */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-center text-white">Vantagens Premium</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {premiumAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Card key={index} className="border-gray-700/50 bg-gradient-to-br from-slate-800/60 to-gray-800/60 backdrop-blur-sm hover:border-yellow-500/50 transition-all duration-300 hover:scale-105 group">
                  <CardContent className="p-6 space-y-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${area.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white mb-2">{area.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{area.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Comparison Table */}
        <Card className="border-gray-700/50 bg-gradient-to-br from-slate-800/60 to-gray-800/60 backdrop-blur-sm">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-center text-white mb-8">Grátis vs Premium</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-4 border-b border-gray-700/50">
                <span className="text-gray-300 font-medium">Vade Mecum Digital</span>
                <div className="flex gap-12 text-center">
                  <Check className="h-5 w-5 text-green-400" />
                  <Check className="h-5 w-5 text-green-400" />
                </div>
              </div>
              <div className="flex items-center justify-between py-4 border-b border-gray-700/50">
                <span className="text-gray-300 font-medium">Anúncios</span>
                <div className="flex gap-12 text-center">
                  <span className="text-red-400 font-semibold">Com anúncios</span>
                  <span className="text-green-400 font-semibold">Zero anúncios</span>
                </div>
              </div>
              <div className="flex items-center justify-between py-4 border-b border-gray-700/50">
                <span className="text-gray-300 font-medium">Materiais Jurídicos</span>
                <div className="flex gap-12 text-center">
                  <span className="text-red-400">Limitado</span>
                  <span className="text-green-400 font-semibold">10.000+</span>
                </div>
              </div>
              <div className="flex items-center justify-between py-4 border-b border-gray-700/50">
                <span className="text-gray-300 font-medium">Downloads</span>
                <div className="flex gap-12 text-center">
                  <span className="text-red-400">Limitado</span>
                  <span className="text-green-400 font-semibold">Ilimitados</span>
                </div>
              </div>
              <div className="flex items-center justify-between py-4">
                <span className="text-gray-300 font-medium">Assistente IA</span>
                <div className="flex gap-12 text-center">
                  <span className="text-gray-400">Básico</span>
                  <span className="text-green-400 font-semibold">Avançado</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Final CTA */}
        <Card className="border-yellow-500/40 bg-gradient-to-br from-slate-800/80 to-gray-800/80 backdrop-blur-sm">
          <CardContent className="text-center py-10">
            <Crown className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4 text-yellow-400">
              Transforme sua prática jurídica!
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Mais de 50.000 advogados já escolheram o Direito Premium. 
              Tenha acesso completo aos melhores recursos jurídicos do Brasil.
            </p>
            <Button 
              onClick={handleDownloadApp}
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-6 text-xl rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-2xl"
              size="lg"
            >
              <Download className="h-6 w-6 mr-3" />
              Começar Agora - R$ 39,99 Vitalício
            </Button>
            <p className="text-sm text-gray-400 mt-4">
              🔒 Pagamento 100% seguro • 📱 Acesso imediato • ⭐ Garantia total
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
