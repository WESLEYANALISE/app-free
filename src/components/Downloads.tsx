import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { BookOpen, Search, Filter, Grid, List, Crown, Lock, X, Download, Star, Zap, Shield } from 'lucide-react';
import { useDownloads } from '@/hooks/useDownloads';
import { BookCard } from '@/components/BookCard';
import { motion } from 'framer-motion';
import { useDeviceDetection } from '@/hooks/useDeviceDetection';
export const Downloads = () => {
  const {
    downloads,
    loading,
    error
  } = useDownloads();
  const {
    isMobileOrTablet
  } = useDeviceDetection();
  const [selectedArea, setSelectedArea] = useState<string>('');
  const [selectedProfession, setProfession] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showPremiumModal, setShowPremiumModal] = useState(false);
  const handleDownloadClick = () => {
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

  // Cores únicas para cada área
  const areaColors = {
    'Direito Civil': 'bg-blue-100 text-blue-800 border-blue-200',
    'Direito Penal': 'bg-red-100 text-red-800 border-red-200',
    'Direito Administrativo': 'bg-green-100 text-green-800 border-green-200',
    'Direito Constitucional': 'bg-purple-100 text-purple-800 border-purple-200',
    'Direito Tributário': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'Direito do Trabalho': 'bg-orange-100 text-orange-800 border-orange-200',
    'Direito Processual': 'bg-indigo-100 text-indigo-800 border-indigo-200',
    'Direito Empresarial': 'bg-pink-100 text-pink-800 border-pink-200',
    'Direito Ambiental': 'bg-emerald-100 text-emerald-800 border-emerald-200',
    'Direito Internacional': 'bg-cyan-100 text-cyan-800 border-cyan-200'
  };
  const getAreaColor = (area: string) => {
    return areaColors[area as keyof typeof areaColors] || 'bg-gray-100 text-gray-800 border-gray-200';
  };
  const getAreaColorValue = (area: string) => {
    const colorMap = {
      'Direito Civil': '#3b82f6',
      'Direito Penal': '#ef4444',
      'Direito Administrativo': '#10b981',
      'Direito Constitucional': '#8b5cf6',
      'Direito Tributário': '#f59e0b',
      'Direito do Trabalho': '#f97316',
      'Direito Processual': '#6366f1',
      'Direito Empresarial': '#ec4899',
      'Direito Ambiental': '#059669',
      'Direito Internacional': '#06b6d4'
    };
    return colorMap[area as keyof typeof colorMap] || '#6b7280';
  };
  const areas = useMemo(() => {
    return Array.from(new Set(downloads.map(d => d.area))).filter(Boolean);
  }, [downloads]);
  const professions = useMemo(() => {
    const allProfessions = downloads.map(d => d.profissao ? d.profissao.split(',').map(p => p.trim()) : []).flat().filter(Boolean);
    return Array.from(new Set(allProfessions));
  }, [downloads]);
  const getFilteredBooks = useMemo(() => {
    let filtered = downloads;
    if (searchQuery) {
      filtered = filtered.filter(book => book.livro?.toLowerCase().includes(searchQuery.toLowerCase()) || book.area?.toLowerCase().includes(searchQuery.toLowerCase()) || book.profissao?.toLowerCase().includes(searchQuery.toLowerCase()) || book.sobre?.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    return filtered;
  }, [downloads, searchQuery]);
  const getProfessionLogo = (profession: string) => {
    const download = downloads.find(d => d['proficao do logo'] && d['proficao do logo'].toLowerCase() === profession.toLowerCase());
    return download?.logo || null;
  };
  const getBooksByArea = (area: string) => {
    return getFilteredBooks.filter(d => d.area === area);
  };
  const getBooksByProfession = (profession: string) => {
    return getFilteredBooks.filter(d => d.profissao && d.profissao.toLowerCase().includes(profession.toLowerCase()));
  };
  if (loading) {
    return <div className="min-h-screen bg-background p-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Carregando downloads...</p>
          </div>
        </div>
      </div>;
  }
  if (error) {
    return <div className="min-h-screen bg-background p-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-12">
            <p className="text-red-500">Erro: {error}</p>
          </div>
        </div>
      </div>;
  }
  return <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 px-[10px] py-[33px]">
        {/* Enhanced Premium Header */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="mb-8 text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-600 px-6 py-3 rounded-full text-lg font-bold mb-6 border border-yellow-500/30">
            <Crown className="w-6 h-6" />
            <span>Biblioteca Premium Exclusiva</span>
            <Star className="w-5 h-5 text-yellow-500" />
          </div>
          <h1 className="font-bold gradient-text mb-4 text-center text-3xl">
            Downloads Jurídicos Premium
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
            Acesso completo à maior biblioteca jurídica digital do Brasil com mais de <span className="font-bold text-primary">10.000 materiais</span> exclusivos
          </p>
          
          {/* Premium Benefits Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
            <div className="flex items-center justify-center gap-2 bg-card/50 rounded-lg p-3 border border-yellow-500/20">
              <Shield className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium">Sem Anúncios</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-card/50 rounded-lg p-3 border border-yellow-500/20">
              <Download className="h-5 w-5 text-blue-500" />
              <span className="text-sm font-medium">Downloads Ilimitados</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-card/50 rounded-lg p-3 border border-yellow-500/20">
              <Zap className="h-5 w-5 text-purple-500" />
              <span className="text-sm font-medium">Sempre Atualizado</span>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Premium Lock Overlay */}
        <div className="relative">
          <div className="absolute inset-0 bg-background/90 backdrop-blur-sm z-10 rounded-lg flex items-center justify-center">
            <Card className="max-w-2xl mx-auto border-yellow-500/30 bg-gradient-to-br from-yellow-50/10 to-orange-50/10 shadow-2xl">
              <CardHeader className="text-center pb-6">
                <div className="mx-auto w-20 h-20 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full flex items-center justify-center mb-6 border-2 border-yellow-500/30">
                  <Lock className="h-10 w-10 text-yellow-500" />
                </div>
                <CardTitle className="text-2xl text-yellow-600 flex items-center justify-center gap-3 mb-2">
                  <Crown className="h-6 w-6" />
                  Biblioteca Premium Exclusiva
                  <Crown className="h-6 w-6" />
                </CardTitle>
                <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-600 px-4 py-2 rounded-full text-sm font-medium">
                  <Star className="w-4 h-4" />
                  <span>Mais de 50.000 usuários satisfeitos</span>
                </div>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Desbloqueie acesso completo à maior biblioteca jurídica digital do Brasil com 
                  <span className="font-bold text-primary"> milhares de materiais exclusivos</span> 
                  para impulsionar sua carreira.
                </p>
                
                {/* Enhanced Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                  <div className="flex items-start gap-3 text-left p-4 bg-card/30 rounded-lg border border-green-500/20">
                    <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Crown className="h-4 w-4 text-green-500" />
                    </div>
                    <div>
                      <div className="font-semibold text-green-600 mb-1">10.000+ Materiais</div>
                      <div className="text-sm text-muted-foreground">Petições, contratos, pareceres e modelos atualizados</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-left p-4 bg-card/30 rounded-lg border border-blue-500/20">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Download className="h-4 w-4 text-blue-500" />
                    </div>
                    <div>
                      <div className="font-semibold text-blue-600 mb-1">Downloads Liberdade Total</div>
                      <div className="text-sm text-muted-foreground">Baixe quantos materiais quiser, sem limites</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-left p-4 bg-card/30 rounded-lg border border-purple-500/20">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="h-4 w-4 text-purple-500" />
                    </div>
                    <div>
                      <div className="font-semibold text-purple-600 mb-1">100% Sem Anúncios</div>
                      <div className="text-sm text-muted-foreground">Experiência profissional sem interrupções</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-left p-4 bg-card/30 rounded-lg border border-yellow-500/20">
                    <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Zap className="h-4 w-4 text-yellow-500" />
                    </div>
                    <div>
                      <div className="font-semibold text-yellow-600 mb-1">Sempre Atualizado</div>
                      <div className="text-sm text-muted-foreground">Conteúdo revisado por especialistas diariamente</div>
                    </div>
                  </div>
                </div>

                {/* Pricing Highlight */}
                <div className="bg-gradient-to-r from-green-50/50 to-blue-50/50 rounded-2xl p-6 border border-green-500/20 bg-white">
                  <div className="text-3xl font-bold text-green-600 mb-2">R$ 39,99</div>
                  <div className="text-lg font-semibold text-green-700 mb-2">💎 Pagamento Único - Vitalício</div>
                  <div className="text-sm text-muted-foreground bg-zinc-50">
                    Sem mensalidades! Acesso para sempre a todos os materiais
                  </div>
                </div>

                {isMobileOrTablet ? <Button onClick={handleAppDownload} className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" size="lg">
                    <Download className="h-5 w-5 mr-2" />
                    Baixar App Premium - R$ 39,99
                  </Button> : <Button onClick={() => setShowPremiumModal(true)} className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" size="lg">
                    <Crown className="h-5 w-5 mr-2" />
                    Upgrade para Premium - R$ 39,99
                  </Button>}
                
                <p className="text-xs text-muted-foreground">
                  ✅ Garantia de 7 dias • ✅ Acesso imediato • ✅ Suporte especializado
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Blurred Content Preview */}
          <div className="blur-sm pointer-events-none">
            {/* ... keep existing code (controles, tabs, etc) but simplified for preview */}
            <div className="mb-8 space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input placeholder="Pesquisar livros, áreas ou profissões..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="pl-10" disabled />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Badge variant="secondary" className="text-sm">
                  {downloads.length} livros disponíveis
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  {areas.length} áreas do direito
                </Badge>
              </div>
            </div>

            <Tabs defaultValue="areas" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="areas" className="text-sm" disabled>
                  <Filter className="h-4 w-4 mr-2" />
                  Por Área
                </TabsTrigger>
                <TabsTrigger value="profissoes" className="text-sm" disabled>
                  <Filter className="h-4 w-4 mr-2" />
                  Por Profissão
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* Enhanced Premium Info Modal */}
        {showPremiumModal && <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="bg-background rounded-2xl w-full max-w-4xl relative max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between p-6 border-b border-yellow-500/20">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <Crown className="h-7 w-7 text-yellow-500" />
                  Direito Premium
                  <Badge className="bg-green-500/20 text-green-600 border-green-500/30">Vitalício</Badge>
                </h3>
                <Button variant="ghost" size="icon" onClick={() => setShowPremiumModal(false)} className="rounded-full">
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <div className="p-8 text-center space-y-8">
                <div className="space-y-4">
                  <Crown className="h-24 w-24 text-yellow-500 mx-auto" />
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                    Biblioteca Premium Completa
                  </h3>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Transforme sua prática jurídica com acesso total à maior biblioteca digital do Brasil
                  </p>
                </div>
                
                {/* Pricing */}
                <div className="bg-gradient-to-r from-green-50/20 to-blue-50/20 rounded-2xl p-8 border border-green-500/20">
                  <div className="text-5xl font-bold text-green-600 mb-2">R$ 39,99</div>
                  <div className="text-2xl font-bold text-green-700 mb-4">🎉 Pagamento Único - Para Sempre</div>
                  <div className="text-lg text-muted-foreground">
                    Sem mensalidades! Investimento único com retorno garantido
                  </div>
                </div>

                <div className="text-left max-w-2xl mx-auto space-y-4">
                  <h4 className="text-xl font-bold text-center mb-6">🎯 O que você recebe:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-3 bg-card/30 rounded-lg">
                      <Crown className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                      <span className="text-sm">10.000+ materiais jurídicos</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-card/30 rounded-lg">
                      <Download className="h-5 w-5 text-blue-500 flex-shrink-0" />
                      <span className="text-sm">Downloads ilimitados</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-card/30 rounded-lg">
                      <Shield className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Experiência sem anúncios</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-card/30 rounded-lg">
                      <Zap className="h-5 w-5 text-purple-500 flex-shrink-0" />
                      <span className="text-sm">Atualizações constantes</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-bold">📱 Como obter o Premium:</h4>
                  <div className="bg-card/30 rounded-lg p-4 text-left max-w-md mx-auto">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs text-white font-bold">1</div>
                        <span>Baixe o app Direito Premium</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs text-white font-bold">2</div>
                        <span>Faça o upgrade por R$ 39,99</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs text-white font-bold">3</div>
                        <span>Aproveite acesso vitalício!</span>
                      </div>
                    </div>
                  </div>
                </div>

                <Button onClick={handleAppDownload} className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-4 px-8 text-xl rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" size="lg">
                  <Download className="h-6 w-6 mr-3" />
                  Baixar App Premium Agora
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </div>;
};