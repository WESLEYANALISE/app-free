
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  Video, 
  Download, 
  GraduationCap,
  Crown,
  Sparkles
} from 'lucide-react';
import { useNavigation } from '@/context/NavigationContext';

export const QuickAccessSection = () => {
  const { setCurrentFunction } = useNavigation();

  const quickAccessItems = [
    {
      icon: Video,
      title: 'Videoaulas',
      description: 'Aulas em vídeo atualizadas',
      function: 'Videoaulas',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: BookOpen,
      title: 'Explorar',
      description: 'Descubra novos conteúdos',
      function: 'Explorar',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Download,
      title: 'Downloads',
      description: 'Materiais para download',
      function: 'Downloads',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: GraduationCap,
      title: 'Plataforma',
      description: 'Acesso completo desktop',
      function: 'Plataforma Desktop',
      gradient: 'from-purple-500 to-violet-500'
    }
  ];

  return (
    <section className="px-3 sm:px-4 md:px-8 mb-6 sm:mb-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold gradient-text mb-2">
              Acesso Rápido
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Suas ferramentas jurídicas mais utilizadas
            </p>
          </div>
          
          {/* Botão discreto Ser Premium */}
          <Button
            onClick={() => setCurrentFunction('App Premium')}
            variant="outline"
            size="sm"
            className="group border-yellow-500/30 text-yellow-600 hover:bg-yellow-500/10 hover:border-yellow-500/50 transition-all duration-300"
          >
            <Crown className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
            <span className="hidden sm:inline">Ser Premium</span>
            <span className="sm:hidden">Premium</span>
            <Sparkles className="h-3 w-3 ml-1 opacity-70" />
          </Button>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {quickAccessItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index}
                className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border-border/50 hover:border-primary/30 bg-card/80 backdrop-blur-sm"
                onClick={() => setCurrentFunction(item.function)}
              >
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r ${item.gradient} flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-sm sm:text-base mb-1 sm:mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-tight">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
