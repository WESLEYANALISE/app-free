
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Loader2, User, Mail, CheckCircle, Download, Lock, ArrowLeft, Star, Crown, BookOpen, FileText } from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header com botão voltar */}
      <div className="flex items-center gap-4 p-6 text-white">
        <Button
          variant="ghost" 
          size="sm"
          onClick={() => window.history.back()}
          className="text-white hover:bg-white/10 p-2"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <h1 className="text-2xl font-bold">Plataforma Desktop</h1>
          <p className="text-slate-300 text-sm">Aplicativo para computador</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-8">
        {/* Card principal da Biblioteca Premium */}
        <Card className="bg-gradient-to-br from-slate-800/90 to-slate-700/90 border-amber-500/30 backdrop-blur-sm mb-8">
          <CardContent className="p-8 text-center">
            {/* Ícone de cadeado */}
            <div className="mx-auto w-20 h-20 bg-gradient-to-br from-amber-600/20 to-amber-500/20 rounded-full flex items-center justify-center mb-6 border-2 border-amber-500/30">
              <Lock className="w-10 h-10 text-amber-400" />
            </div>

            {/* Título com coroas */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <Crown className="w-8 h-8 text-amber-400" />
              <h2 className="text-3xl font-bold text-amber-400">
                Biblioteca Premium Exclusiva
              </h2>
              <Crown className="w-8 h-8 text-amber-400" />
            </div>

            {/* Badge de usuários satisfeitos */}
            <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-green-500/30">
              <Star className="w-4 h-4" />
              <span>Mais de 50.000 usuários satisfeitos</span>
            </div>

            {/* Descrição principal */}
            <p className="text-xl text-slate-300 mb-2 max-w-2xl mx-auto leading-relaxed">
              Desbloqueie acesso completo à maior biblioteca jurídica digital do Brasil com{' '}
              <span className="text-amber-400 font-bold">milhares de materiais exclusivos</span>{' '}
              para impulsionar sua carreira.
            </p>

            {/* Cards de recursos */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-slate-700/50 rounded-xl p-6 border border-slate-600/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-green-400">10.000+ Materiais</h3>
                    <p className="text-sm text-slate-400">
                      Petições, contratos, pareceres e modelos atualizados
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-700/50 rounded-xl p-6 border border-slate-600/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Download className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-blue-400">Downloads Liberdade Total</h3>
                    <p className="text-sm text-slate-400">
                      Baixe quantos materiais quiser, sem limites
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Botão Premium */}
            <Button 
              onClick={handlePremiumUpgrade}
              className="w-full mt-8 h-16 text-lg font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:via-orange-600 hover:to-amber-700 transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-2xl text-white"
            >
              <Crown className="w-6 h-6 mr-3" />
              🔥 DESBLOQUEAR BIBLIOTECA PREMIUM - R$ 39,99
            </Button>

            <div className="text-center mt-4">
              <p className="text-xs text-slate-400">
                ⚡ Acesso vitalício • 🔒 Pagamento único • ✅ Garantia de satisfação
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Carrossel de imagens */}
        <div className="mb-8">
          <DesktopPlatformCarousel />
        </div>

        {/* Formulário de acesso gratuito */}
        <Card className="border-0 bg-card/30 backdrop-blur-sm shadow-2xl">
          <CardHeader className="text-center pb-6">
            <CardTitle className="gradient-text-legal text-2xl mb-4">
              Ou Experimente a Versão Gratuita
            </CardTitle>
            <CardDescription className="text-lg max-w-2xl mx-auto leading-relaxed text-muted-foreground">
              Preencha os dados abaixo e receba o <strong className="text-primary">link da plataforma desktop</strong> diretamente no seu email. 
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField 
                    control={form.control} 
                    name="nome" 
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-semibold flex items-center gap-2">
                          <User className="w-4 h-4 text-primary" />
                          Nome Completo
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Digite seu nome completo" 
                            {...field} 
                            className="h-12 bg-background/50 backdrop-blur-sm border-border focus:border-primary transition-all duration-300" 
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
                        <FormLabel className="text-foreground font-semibold flex items-center gap-2">
                          <Mail className="w-4 h-4 text-primary" />
                          E-mail para receber o link
                        </FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="Digite seu melhor e-mail" 
                            {...field} 
                            className="h-12 bg-background/50 backdrop-blur-sm border-border focus:border-primary transition-all duration-300" 
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
                  className="w-full h-14 text-lg font-bold bg-gradient-to-r from-primary via-blue-600 to-primary hover:from-primary/90 hover:via-blue-600/90 hover:to-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Mail className="w-5 h-5 mr-3" />
                      📧 RECEBER LINK GRATUITO
                    </>
                  )}
                </Button>
              </form>
            </Form>

            <div className="mt-6 p-4 bg-gradient-to-r from-blue-500/10 to-primary/10 backdrop-blur-sm rounded-xl border border-border">
              <div className="text-center space-y-3">
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <h3 className="font-bold text-primary">
                    Acesso Gratuito Disponível!
                  </h3>
                </div>
                
                <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
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
    </div>
  );
};
