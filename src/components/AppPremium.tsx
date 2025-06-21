
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
  CheckCircle2,
  Search,
  Calculator,
  Brain,
  MessageSquare,
  Award,
  Briefcase,
  Eye,
  Clock,
  Smartphone,
  Database,
  TrendingUp,
  Timer,
  Gift,
  Medal,
  Rocket
} from 'lucide-react';
import { useDeviceDetection } from '@/hooks/useDeviceDetection';

export const AppPremium = () => {
  const { deviceType, isMobile, isTablet, isDesktop } = useDeviceDetection();
  const [userAgent, setUserAgent] = useState('');
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds

  useEffect(() => {
    setUserAgent(navigator.userAgent);
    
    // Countdown timer
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    
    return () => clearInterval(timer);
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

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const premiumFeatures = [
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
    },
    { 
      icon: Search, 
      title: 'Busca Inteligente', 
      desc: 'Sistema de busca avançado com filtros por área, tribunal, data e relevância',
      color: 'from-teal-600 to-cyan-600'
    },
    { 
      icon: Calculator, 
      title: 'Calculadoras Jurídicas', 
      desc: 'Ferramentas especializadas para cálculos trabalhistas, tributários e previdenciários',
      color: 'from-pink-600 to-rose-600'
    },
    { 
      icon: Brain, 
      title: 'Análise de Jurisprudência', 
      desc: 'IA analisa precedentes e sugere estratégias baseadas em casos similares',
      color: 'from-violet-600 to-purple-600'
    },
    { 
      icon: MessageSquare, 
      title: 'Consultoria Especializada', 
      desc: 'Acesso direto a especialistas em diferentes áreas do direito via chat',
      color: 'from-slate-600 to-gray-600'
    },
    { 
      icon: Award, 
      title: 'Certificados Profissionais', 
      desc: 'Cursos certificados e trilhas de aprendizado para desenvolvimento contínuo',
      color: 'from-emerald-600 to-green-600'
    },
    { 
      icon: Briefcase, 
      title: 'Gestão de Casos', 
      desc: 'Sistema completo para organizar clientes, prazos, audiências e documentos',
      color: 'from-amber-600 to-orange-600'
    },
    { 
      icon: Eye, 
      title: 'Monitoramento de Processos', 
      desc: 'Acompanhamento automático de processos com notificações em tempo real',
      color: 'from-red-600 to-pink-600'
    },
    { 
      icon: Clock, 
      title: 'Controle de Prazos', 
      desc: 'Agenda inteligente com alertas automáticos para prazos processuais',
      color: 'from-blue-600 to-indigo-600'
    },
    { 
      icon: Smartphone, 
      title: 'App Mobile Completo', 
      desc: 'Versão mobile com todas as funcionalidades sincronizadas em tempo real',
      color: 'from-green-600 to-teal-600'
    },
    { 
      icon: Database, 
      title: 'Backup na Nuvem', 
      desc: 'Todos os seus dados seguros e sincronizados automaticamente na nuvem',
      color: 'from-cyan-600 to-blue-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-900 relative overflow-hidden">
      {/* Enhanced Background with Legal Patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent"></div>
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.08'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='53' cy='53' r='1'/%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      ></div>
      
      <div className="relative z-10 p-4 pb-20">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Urgent Timer Banner */}
          <div className="text-center animate-bounce">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-red-600/90 text-white font-bold rounded-full shadow-2xl border-2 border-red-400">
              <Timer className="h-6 w-6 animate-pulse" />
              <span className="text-lg">OFERTA EXPIRA EM: {formatTime(timeLeft)}</span>
              <Timer className="h-6 w-6 animate-pulse" />
            </div>
          </div>

          {/* Enhanced Header with Social Proof */}
          <div className="text-center space-y-6 pt-4">
            <div className="flex justify-center items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
              <span className="text-white font-semibold ml-2">4.9/5 (12.847 avaliações)</span>
            </div>

            <div className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-gradient-to-br from-amber-500/40 to-yellow-600/40 border-2 border-amber-500/60 backdrop-blur-sm relative animate-pulse">
              <Crown className="h-16 w-16 text-amber-300" />
              <div className="absolute inset-0 rounded-full bg-amber-400/30 animate-ping"></div>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400 bg-clip-text text-transparent animate-pulse">
                BIBLIOTECA PREMIUM
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-amber-200">
                🚀 TURBINE SUA CARREIRA JURÍDICA
              </h2>
            </div>
            
            {/* Social Proof Badges */}
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/40 rounded-full backdrop-blur-sm">
                <TrendingUp className="h-5 w-5 text-green-400" />
                <span className="text-green-200 font-medium">+50.000 advogados ativos</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/40 rounded-full backdrop-blur-sm">
                <Medal className="h-5 w-5 text-blue-400" />
                <span className="text-blue-200 font-medium">98% de satisfação</span>
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-medium">
              <span className="text-amber-300 font-bold">ATENÇÃO:</span> Esta é sua única chance de obter acesso{' '}
              <span className="text-amber-300 font-bold underline">VITALÍCIO</span> com 85% de desconto!
            </p>
          </div>

          {/* Enhanced Pricing Card with Urgency */}
          <Card className="border-amber-500/50 bg-gradient-to-br from-slate-800/60 to-gray-800/60 backdrop-blur-md relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 bg-gradient-to-l from-red-500 to-orange-500 text-white px-8 py-4 rounded-bl-3xl animate-pulse">
              <div className="flex items-center gap-2">
                <Rocket className="h-5 w-5" />
                <span className="text-sm font-bold">ÚLTIMAS VAGAS!</span>
              </div>
            </div>
            
            <CardContent className="text-center py-12 px-8">
              <Badge className="bg-red-500/30 text-red-200 border-red-500/50 mb-6 px-8 py-4 text-xl animate-bounce">
                <Gift className="h-6 w-6 mr-3" />
                🔥 PROMOÇÃO RELÂMPAGO - SÓ HOJE! 🔥
              </Badge>
              
              <div className="space-y-8 mb-12">
                <div className="relative">
                  <div className="text-8xl md:text-9xl font-black text-amber-300 tracking-tight animate-pulse">
                    R$ 39,99
                  </div>
                  <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full text-lg font-bold animate-bounce">
                    85% OFF
                  </div>
                </div>
                
                <div className="text-4xl md:text-5xl text-green-300 font-bold animate-pulse">
                  💎 PAGAMENTO ÚNICO = ACESSO ETERNO
                </div>
                
                <div className="text-2xl text-gray-200 space-y-2">
                  <div className="line-through text-red-400 text-3xl font-bold">De R$ 297,99</div>
                  <div className="text-green-400 font-bold">
                    👉 Economia de R$ 258,00 hoje!
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-600/30 to-emerald-600/30 border border-green-500/50 rounded-2xl p-6">
                  <p className="text-green-200 text-xl font-semibold">
                    ✅ Zero mensalidades • Zero taxas ocultas • Zero arrependimento
                  </p>
                </div>
              </div>
              
              <Button 
                onClick={handleDownloadApp}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-black py-8 text-2xl md:text-3xl rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-2xl mb-8 animate-pulse"
                size="lg"
              >
                <Download className="h-8 w-8 mr-4" />
                🚀 QUERO MINHA VAGA PREMIUM AGORA!
                <ArrowRight className="h-8 w-8 ml-4" />
              </Button>
              
              <div className="space-y-4">
                <p className="text-lg font-semibold text-yellow-300">
                  ⚡ Acesso liberado em menos de 2 minutos
                </p>
                <div className="flex justify-center items-center gap-6 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-400" />
                    <span>Pagamento 100% Seguro</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-400" />
                    <span>Garantia Total</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-yellow-400" />
                    <span>Ativação Imediata</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What You Get Section */}
          <div className="bg-gradient-to-br from-slate-800/40 to-gray-800/40 backdrop-blur-md rounded-3xl p-8 border border-amber-500/30">
            <h2 className="text-4xl font-bold text-center text-amber-300 mb-8">
              🎯 O QUE VOCÊ VAI RECEBER HOJE:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {premiumFeatures.slice(0, 8).map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">{feature.title}</h3>
                      <p className="text-gray-300 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Testimonial Section */}
          <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 backdrop-blur-md rounded-3xl p-8 border border-blue-500/30">
            <h3 className="text-3xl font-bold text-center text-blue-300 mb-8">
              💬 O QUE DIZEM NOSSOS USUÁRIOS PREMIUM:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 p-6 rounded-2xl">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-200 mb-4">"Triplicou minha produtividade! Os materiais são de altíssima qualidade."</p>
                <div className="text-sm text-gray-400">- Dr. Carlos Silva, Advogado Trabalhista</div>
              </div>
              <div className="bg-white/10 p-6 rounded-2xl">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-200 mb-4">"A IA jurídica mudou completamente minha forma de trabalhar. Incrível!"</p>
                <div className="text-sm text-gray-400">- Dra. Ana Costa, Criminalista</div>
              </div>
              <div className="bg-white/10 p-6 rounded-2xl">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-200 mb-4">"Melhor investimento que fiz na minha carreira. Vale cada centavo!"</p>
                <div className="text-sm text-gray-400">- Dr. Pedro Santos, Civilista</div>
              </div>
            </div>
          </div>

          {/* Final CTA with Scarcity */}
          <Card className="border-red-500/50 bg-gradient-to-br from-red-900/40 to-orange-900/40 backdrop-blur-md relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent"></div>
            <CardContent className="text-center py-12 relative">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-red-500/40 to-orange-600/40 border-2 border-red-500/60 backdrop-blur-sm mb-8 animate-pulse">
                <Timer className="h-12 w-12 text-red-300" />
              </div>
              <h3 className="text-4xl md:text-5xl font-black mb-6 text-red-300">
                ⚠️ ÚLTIMAS HORAS! ⚠️
              </h3>
              <p className="text-gray-200 mb-10 max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed font-semibold">
                <span className="text-red-300 font-bold">ATENÇÃO:</span> Restam apenas{' '}
                <span className="text-yellow-300 font-bold">147 vagas</span> para o desconto de 85%!
                <br />Não perca esta oportunidade única.
              </p>
              <Button 
                onClick={handleDownloadApp}
                className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-black py-10 text-2xl md:text-3xl rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-2xl animate-pulse"
                size="lg"
              >
                <Crown className="h-8 w-8 mr-4" />
                🔥 GARANTIR MINHA VAGA AGORA - R$ 39,99
              </Button>
              <p className="text-sm text-gray-400 mt-6">
                ⏰ Oferta válida por tempo limitado • 🔒 Compra segura • ✅ Satisfação garantida
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
