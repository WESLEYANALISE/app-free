
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Loader2, User, Mail, CheckCircle, Download, Zap, Shield, Crown, Lock, ArrowRight, Star, Gift, Timer } from 'lucide-react';
import { DesktopPlatformCarousel } from '@/components/DesktopPlatformCarousel';
import { useNavigation } from '@/context/NavigationContext';

const formSchema = z.object({
  nome: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Digite um email válido')
});

type FormData = z.infer<typeof formSchema>;

export const PlataformaDesktop = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  const { setCurrentFunction } = useNavigation();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: '',
      email: ''
    }
  });

  const handlePremiumUpgrade = () => {
    setCurrentFunction('App Premium');
  };

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    const scriptURL = 'https://sheetdb.io/api/v1/29eaz3rsm73qu';
    try {
      console.log('Dados originais do formulário:', data);

      // Formato específico para SheetDB com colunas nomeadas
      const sheetData = {
        Nome: data.nome,
        email: data.email
      };
      console.log('Dados formatados para SheetDB:', sheetData);
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify([sheetData]),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Resposta da API:', response.status, response.statusText);
      if (response.ok) {
        const result = await response.json();
        console.log('Dados enviados com sucesso:', result);
        setIsSuccess(true);
        form.reset();
        toast({
          title: "Cadastro realizado com sucesso!",
          description: "Você receberá o link de acesso da plataforma desktop no seu email em instantes."
        });
      } else {
        const errorText = await response.text();
        console.error('Erro na resposta:', response.status, errorText);
        throw new Error(`Erro ${response.status}: ${errorText}`);
      }
    } catch (error) {
      console.error('Erro ao enviar:', error);
      toast({
        variant: "destructive",
        title: "Erro ao enviar",
        description: "Tente novamente em alguns instantes."
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8">
        <Card className="text-center border-0 bg-card/50 backdrop-blur-sm shadow-2xl">
          <CardHeader className="pb-4">
            <div className="mx-auto w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-6 animate-scale-in">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <CardTitle className="gradient-text-legal text-3xl mb-2">
              🎉 Cadastro Realizado com Sucesso!
            </CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              Perfeito! Seu acesso à plataforma desktop está sendo preparado.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-card/70 rounded-lg p-6 mb-6 border border-border">
              <h3 className="font-bold text-lg mb-4 text-green-400">📧 Próximos passos:</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500/20 border border-blue-500/30 rounded-full flex items-center justify-center text-blue-400 font-bold text-sm">1</div>
                  <p className="text-sm text-muted-foreground">Verifique sua caixa de entrada (e spam) nos próximos minutos</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-500/20 border border-purple-500/30 rounded-full flex items-center justify-center text-purple-400 font-bold text-sm">2</div>
                  <p className="text-sm text-muted-foreground">Clique no link de acesso que você receberá por email</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center text-green-400 font-bold text-sm">3</div>
                  <p className="text-sm text-muted-foreground">Faça o download e comece a usar a plataforma completa!</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 justify-center">
              <Button onClick={() => setIsSuccess(false)} variant="outline" className="border-green-500/30 text-green-400 hover:bg-green-500/10 hover:border-green-500/50">
                Fazer novo cadastro
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 md:p-8 py-[21px]">
      {/* Carrossel de imagens da plataforma */}
      <div className="mb-12">
        <DesktopPlatformCarousel />
      </div>

      {/* Enhanced Premium Banner */}
      <div className="mb-8 relative overflow-hidden">
        <Card className="border-amber-500/50 bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-yellow-500/10 backdrop-blur-md relative">
          <div className="absolute top-0 right-0 bg-gradient-to-l from-red-500 to-orange-500 text-white px-6 py-2 rounded-bl-2xl animate-pulse">
            <div className="flex items-center gap-2">
              <Timer className="h-4 w-4" />
              <span className="text-xs font-bold">OFERTA LIMITADA!</span>
            </div>
          </div>
          
          <CardHeader className="text-center pb-4">
            <div className="mx-auto w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mb-4 animate-pulse">
              <Crown className="h-8 w-8 text-amber-500" />
            </div>
            <CardTitle className="text-2xl text-amber-600 flex items-center justify-center gap-2">
              <Lock className="h-6 w-6" />
              Plataforma Desktop Premium
            </CardTitle>
            <CardDescription className="text-lg">
              Tenha acesso completo à versão desktop com todas as funcionalidades profissionais
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Pricing Highlight */}
            <div className="text-center bg-card/60 rounded-2xl p-6 border border-amber-500/30">
              <div className="flex items-center justify-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
                <span className="text-sm text-muted-foreground ml-2">(12.847+ usuários satisfeitos)</span>
              </div>
              
              <div className="space-y-3">
                <div className="text-4xl font-bold text-amber-600">
                  R$ 39,99
                </div>
                <div className="text-lg text-green-400 font-semibold flex items-center justify-center gap-2">
                  <Gift className="h-5 w-5" />
                  Pagamento Único - Acesso Vitalício
                </div>
                <div className="text-sm text-muted-foreground">
                  <span className="line-through text-red-400">De R$ 297,99</span>
                  <span className="text-green-400 font-bold ml-2">• Economia de R$ 258,00!</span>
                </div>
              </div>
            </div>

            {/* Premium Features Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { icon: Shield, text: "100% Sem Anúncios", color: "text-green-400" },
                { icon: Download, text: "Downloads Ilimitados", color: "text-blue-400" },
                { icon: Zap, text: "Assistente IA Premium", color: "text-purple-400" },
                { icon: Crown, text: "Plataforma Completa", color: "text-amber-400" },
                { icon: User, text: "Suporte Prioritário", color: "text-cyan-400" },
                { icon: CheckCircle, text: "Acesso Vitalício", color: "text-emerald-400" },
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2 p-3 bg-card/40 rounded-xl border border-border/50">
                  <feature.icon className={`w-4 h-4 ${feature.color}`} />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Button 
              onClick={handlePremiumUpgrade}
              className="w-full h-16 text-lg font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:via-orange-600 hover:to-amber-700 transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <Crown className="w-6 h-6 mr-3" />
              🔥 QUERO MEU ACESSO PREMIUM - R$ 39,99
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
            
            <div className="text-center">
              <p className="text-xs text-muted-foreground">
                ⚡ Ativação imediata • 🔒 Pagamento seguro • ✅ Garantia de satisfação
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Formulário Funcional */}
      <Card className="border-0 bg-card/30 backdrop-blur-sm shadow-2xl">
        <CardHeader className="text-center pb-6 py-[12px]">
          <CardTitle className="gradient-text-legal text-3xl sm:text-4xl mb-4">
            Acesse a Versão Desktop Completa
          </CardTitle>
          <CardDescription className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed text-muted-foreground">
            Preencha os dados abaixo e receba o <strong className="text-primary">link da plataforma desktop</strong> diretamente no seu email. 
            Acesso completo a todas as funcionalidades profissionais!
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <FormField 
                  control={form.control} 
                  name="nome" 
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-semibold flex items-center gap-2 text-base">
                        <User className="w-5 h-5 text-primary" />
                        Nome Completo
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Digite seu nome completo" 
                          {...field} 
                          className="h-14 text-base bg-background/50 backdrop-blur-sm border-border focus:border-primary transition-all duration-300" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} 
                />

                <FormField 
                  control={form.control} 
                  name="email" 
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-semibold flex items-center gap-2 text-base">
                        <Mail className="w-5 h-5 text-primary" />
                        E-mail para receber o link
                      </FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="Digite seu melhor e-mail" 
                          {...field} 
                          className="h-14 text-base bg-background/50 backdrop-blur-sm border-border focus:border-primary transition-all duration-300" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} 
                />
              </div>

              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full h-16 text-lg font-bold bg-gradient-to-r from-primary via-blue-600 to-primary hover:from-primary/90 hover:via-blue-600/90 hover:to-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Mail className="w-6 h-6 mr-3" />
                    📧 RECEBER LINK DE ACESSO GRATUITO
                    <ArrowRight className="w-6 h-6 ml-3" />
                  </>
                )}
              </Button>
            </form>
          </Form>

          {/* Info adicional */}
          <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-primary/10 backdrop-blur-sm rounded-xl border border-border">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <h3 className="text-lg font-bold text-primary">
                  Acesso Gratuito Disponível!
                </h3>
              </div>
              
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                Receba o link de acesso da plataforma desktop diretamente no seu email. 
                Cadastro simples e rápido, sem custos iniciais.
              </p>
              
              <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground pt-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>✅ 100% Gratuito</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>⚡ Acesso Imediato</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span>🔒 Dados Seguros</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
