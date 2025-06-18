
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
  Heart,
  BookOpen,
  Brain,
  FileText,
  Users,
  Clock,
  Award,
  Headphones,
  Search,
  Database,
  Gavel,
  ChevronRight,
  ArrowRight
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
      description: 'Experiência totalmente livre de interrupções publicitárias',
      highlight: true,
      details: 'Estude e trabalhe sem distrações. Foque no que realmente importa.'
    },
    {
      icon: Crown,
      title: 'Assistente IA Premium',
      description: 'Inteligência artificial jurídica avançada com recursos exclusivos',
      highlight: true,
      details: 'IA especializada em direito com análise de casos, sugestões e redação jurídica.'
    },
    {
      icon: Download,
      title: 'Downloads Ilimitados',
      description: 'Acesso completo à biblioteca jurídica com milhares de materiais',
      highlight: true,
      details: 'Modelos de petições, contratos, pareceres e documentos sempre atualizados.'
    },
    {
      icon: Monitor,
      title: 'Plataforma Desktop',
      description: 'Acesso à versão desktop completa com todas as funcionalidades',
      highlight: true,
      details: 'Interface profissional otimizada para trabalho intensivo e produtividade.'
    },
    {
      icon: BookOpen,
      title: 'Biblioteca Jurídica Completa',
      description: 'Acervo completo de livros, códigos e legislação atualizada',
      highlight: false,
      details: 'Mais de 10.000 materiais jurídicos organizados por área de atuação.'
    },
    {
      icon: Headphones,
      title: 'Audioaulas Premium',
      description: 'Conteúdo exclusivo de professores renomados',
      highlight: false,
      details: 'Aulas práticas, casos reais e preparação para concursos e OAB.'
    },
    {
      icon: Brain,
      title: 'Mapas Mentais Avançados',
      description: 'Visualização de conceitos jurídicos complexos',
      highlight: false,
      details: 'Metodologia visual para memorização e compreensão de matérias.'
    },
    {
      icon: FileText,
      title: 'Modelos Premium',
      description: 'Petições, contratos e documentos profissionais',
      highlight: false,
      details: 'Templates exclusivos validados por especialistas em cada área.'
    },
    {
      icon: Search,
      title: 'Busca Inteligente',
      description: 'Pesquisa avançada em toda base de conhecimento',
      highlight: false,
      details: 'Encontre rapidamente jurisprudências, artigos e precedentes relevantes.'
    },
    {
      icon: Users,
      title: 'Suporte Prioritário',
      description: 'Atendimento exclusivo e especializado',
      highlight: false,
      details: 'Canal direto com nossa equipe jurídica para dúvidas e orientações.'
    },
    {
      icon: Award,
      title: 'Certificados',
      description: 'Certificação em cursos e especializações',
      highlight: false,
      details: 'Comprove seu conhecimento com certificados reconhecidos pelo mercado.'
    },
    {
      icon: Clock,
      title: 'Acesso 24/7',
      description: 'Disponível a qualquer hora, em qualquer lugar',
      highlight: false,
      details: 'Estude e trabalhe quando for mais conveniente para você.'
    }
  ];

  const testimonials = [
    {
      name: "Dr. Ana Silva",
      role: "Advogada Criminalista",
      content: "O Direito Premium revolucionou minha prática. A IA jurídica me economiza horas de pesquisa diariamente.",
      rating: 5
    },
    {
      name: "Dr. Carlos Santos",
      role: "Procurador Municipal",
      content: "A biblioteca de modelos e a plataforma desktop são excepcionais. Vale cada centavo do investimento.",
      rating: 5
    },
    {
      name: "Dra. Maria Oliveira",
      role: "Advogada Trabalhista",
      content: "Passei na OAB usando apenas o conteúdo premium. Recomendo para todos os colegas.",
      rating: 5
    }
  ];

  const stats = [
    { number: "50.000+", label: "Profissionais Ativos" },
    { number: "10.000+", label: "Materiais Jurídicos" },
    { number: "500+", label: "Horas de Conteúdo" },
    { number: "98%", label: "Satisfação dos Usuários" }
  ];

  return (
    <div className="min-h-screen bg-background p-3 sm:p-4 md:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-4 rounded-2xl bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30">
              <Crown className="h-12 w-12 text-yellow-500" />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                Direito Premium
              </h1>
              <div className="flex items-center justify-center gap-2 mt-2">
                <Infinity className="h-6 w-6 text-green-500" />
                <span className="text-green-500 font-bold text-lg">Acesso Vitalício</span>
                <Sparkles className="h-5 w-5 text-yellow-500" />
              </div>
            </div>
          </div>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A plataforma jurídica mais completa do Brasil. Tudo que você precisa para acelerar sua carreira em um só lugar.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Card */}
        <Card className="border-yellow-500/30 bg-gradient-to-r from-yellow-50/10 to-orange-50/10 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-gradient-to-l from-yellow-500 to-orange-500 text-white px-6 py-2 rounded-bl-2xl">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4" />
              <span className="font-bold">MAIS POPULAR</span>
            </div>
          </div>
          <CardContent className="text-center py-12">
            <div className="mb-6">
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xl px-6 py-3 mb-6">
                <Sparkles className="h-5 w-5 mr-2" />
                Oferta Especial - Tempo Limitado
              </Badge>
            </div>
            <div className="mb-8">
              <div className="text-7xl font-bold text-yellow-600 mb-2">
                R$ 39,99
              </div>
              <div className="text-3xl text-green-400 font-bold mb-4">
                🎉 PAGAMENTO ÚNICO - VITALÍCIO
              </div>
              <div className="text-lg text-muted-foreground mb-2">
                <span className="line-through text-red-500">R$ 199,99</span>
                <span className="ml-2 bg-red-500 text-white px-2 py-1 rounded text-sm">80% OFF</span>
              </div>
              <p className="text-xl text-muted-foreground">
                Sem mensalidades! Pague uma vez e tenha acesso para sempre
              </p>
            </div>
            
            <Button 
              onClick={handleDownloadApp}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-6 px-12 text-2xl rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-2xl mb-4"
              size="lg"
            >
              <Crown className="h-8 w-8 mr-3" />
              Upgrade para Premium Agora
              <ArrowRight className="h-6 w-6 ml-3" />
            </Button>
            
            <p className="text-sm text-muted-foreground">
              ✅ Garantia de 7 dias • ✅ Suporte especializado • ✅ Acesso imediato
            </p>
          </CardContent>
        </Card>

        {/* Premium Features Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Recursos Exclusivos Premium
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {premiumFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index} 
                  className={`
                    border transition-all duration-300 hover:scale-105 hover:shadow-xl group
                    ${feature.highlight 
                      ? 'border-yellow-500/50 bg-gradient-to-br from-yellow-50/10 to-orange-50/10' 
                      : 'border-border/30 hover:border-primary/30'
                    }
                  `}
                >
                  <CardHeader className="text-center pb-4">
                    <div className={`
                      mx-auto w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110
                      ${feature.highlight 
                        ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20' 
                        : 'bg-primary/10 group-hover:bg-primary/20'
                      }
                    `}>
                      <Icon className={`h-8 w-8 ${feature.highlight ? 'text-yellow-500' : 'text-primary'}`} />
                    </div>
                    <CardTitle className={`text-xl mb-2 ${feature.highlight ? 'text-yellow-600' : ''}`}>
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-3">
                    <p className="text-muted-foreground font-medium">
                      {feature.description}
                    </p>
                    <p className="text-sm text-muted-foreground/80">
                      {feature.details}
                    </p>
                    {feature.highlight && (
                      <Badge className="bg-yellow-500/20 text-yellow-600 border-yellow-500/30">
                        <Star className="h-3 w-3 mr-1" />
                        Destaque
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            O que nossos usuários Premium dizem
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border/30 hover:border-yellow-500/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-3xl text-center">
              Grátis vs Premium - Comparação Detalhada
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4">Recursos</th>
                    <th className="text-center p-4 text-muted-foreground">Grátis</th>
                    <th className="text-center p-4 text-yellow-600">Premium</th>
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  <tr className="border-b border-border/30">
                    <td className="p-4 font-medium">Vade Mecum Digital</td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-border/30">
                    <td className="p-4 font-medium">Audioaulas Básicas</td>
                    <td className="p-4 text-center">Limitado</td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-border/30">
                    <td className="p-4 font-medium">Anúncios</td>
                    <td className="p-4 text-center"><X className="h-5 w-5 text-red-500 mx-auto" /></td>
                    <td className="p-4 text-center text-green-600 font-semibold">Sem anúncios</td>
                  </tr>
                  <tr className="border-b border-border/30">
                    <td className="p-4 font-medium">Plataforma Desktop</td>
                    <td className="p-4 text-center"><X className="h-5 w-5 text-red-500 mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-border/30">
                    <td className="p-4 font-medium">Downloads</td>
                    <td className="p-4 text-center"><X className="h-5 w-5 text-red-500 mx-auto" /></td>
                    <td className="p-4 text-center text-green-600 font-semibold">Ilimitados</td>
                  </tr>
                  <tr className="border-b border-border/30">
                    <td className="p-4 font-medium">Assistente IA</td>
                    <td className="p-4 text-center">Básico</td>
                    <td className="p-4 text-center text-green-600 font-semibold">Avançado</td>
                  </tr>
                  <tr className="border-b border-border/30">
                    <td className="p-4 font-medium">Suporte</td>
                    <td className="p-4 text-center">Comunidade</td>
                    <td className="p-4 text-center text-green-600 font-semibold">Prioritário</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              Perguntas Frequentes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2">❓ O que significa "vitalício"?</h4>
              <p className="text-muted-foreground">Significa que você paga apenas uma vez e tem acesso para sempre, sem mensalidades ou taxas recorrentes.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">❓ Posso cancelar se não gostar?</h4>
              <p className="text-muted-foreground">Sim! Oferecemos garantia de 7 dias. Se não ficar satisfeito, devolvemos 100% do valor pago.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">❓ Funciona em todos os dispositivos?</h4>
              <p className="text-muted-foreground">Sim! Acesse via app móvel, tablet ou plataforma desktop. Sincronização automática entre todos os dispositivos.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">❓ O conteúdo é atualizado?</h4>
              <p className="text-muted-foreground">Sim! Nossa equipe jurídica atualiza constantemente todo o conteúdo com as últimas mudanças na legislação.</p>
            </div>
          </CardContent>
        </Card>

        {/* Final CTA */}
        <Card className="border-yellow-500/30 bg-gradient-to-r from-yellow-50/10 to-orange-50/10">
          <CardContent className="text-center py-12">
            <Crown className="h-20 w-20 text-yellow-500 mx-auto mb-6" />
            <h3 className="text-4xl font-bold mb-4 text-yellow-600">
              Não perca esta oportunidade!
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Mais de 50.000 profissionais já escolheram o Direito Premium. 
              Junte-se a eles e acelere sua carreira jurídica hoje mesmo.
            </p>
            <div className="space-y-4">
              <Button 
                onClick={handleDownloadApp}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-6 px-12 text-2xl rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-2xl"
                size="lg"
              >
                <Download className="h-8 w-8 mr-3" />
                Começar Agora - R$ 39,99 Vitalício
                <ChevronRight className="h-6 w-6 ml-3" />
              </Button>
              <p className="text-sm text-muted-foreground">
                🔒 Pagamento seguro • 📱 Acesso imediato • ⭐ Garantia de satisfação
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
