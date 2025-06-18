import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { BookOpen, Search, Filter, Grid, List, Crown, Lock, X, Download } from 'lucide-react';
import { useDownloads } from '@/hooks/useDownloads';
import { BookCard } from '@/components/BookCard';
import { motion } from 'framer-motion';
import { useDeviceDetection } from '@/hooks/useDeviceDetection';

export const Downloads = () => {
  const { downloads, loading, error } = useDownloads();
  const { isMobileOrTablet } = useDeviceDetection();
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
      filtered = filtered.filter(book => 
        book.livro?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.area?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.profissao?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.sobre?.toLowerCase().includes(searchQuery.toLowerCase())
      );
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
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Carregando downloads...</p>
          </div>
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-12">
            <p className="text-red-500">Erro: {error}</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 px-[10px] py-[33px]">
        {/* Premium Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="mb-8 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Crown className="w-4 h-4" />
            <span>Funcionalidade Premium</span>
          </div>
          <h1 className="font-bold gradient-text mb-3 text-center text-2xl">
            Biblioteca de Downloads Premium
          </h1>
          <p className="text-muted-foreground text-base">
            Acesso completo à biblioteca jurídica disponível apenas na versão premium
          </p>
        </motion.div>

        {/* Premium Lock Overlay */}
        <div className="relative">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-10 rounded-lg flex items-center justify-center">
            <Card className="max-w-md mx-auto border-yellow-500/20 bg-card/90">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mb-4">
                  <Lock className="h-8 w-8 text-yellow-500" />
                </div>
                <CardTitle className="text-xl text-yellow-600 flex items-center justify-center gap-2">
                  <Crown className="h-5 w-5" />
                  Conteúdo Premium
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground">
                  Para acessar nossa biblioteca completa de downloads jurídicos, você precisa da versão premium.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <Crown className="h-4 w-4" />
                    <span>Milhares de materiais jurídicos</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <Crown className="h-4 w-4" />
                    <span>Modelos e petições atualizados</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <Crown className="h-4 w-4" />
                    <span>Downloads ilimitados</span>
                  </div>
                </div>

                {isMobileOrTablet ? (
                  <Button 
                    onClick={handleAppDownload}
                    className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Baixar App Premium
                  </Button>
                ) : (
                  <Button 
                    onClick={() => setShowPremiumModal(true)}
                    className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold"
                  >
                    <Crown className="h-4 w-4 mr-2" />
                    Saiba Mais sobre o Premium
                  </Button>
                )}
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
                  <Input 
                    placeholder="Pesquisar livros, áreas ou profissões..." 
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)} 
                    className="pl-10" 
                    disabled
                  />
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

        {/* Premium Info Modal */}
        {showPremiumModal && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="bg-background rounded-lg w-full max-w-2xl relative">
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Crown className="h-5 w-5 text-yellow-500" />
                  Direito Premium
                </h3>
                <Button variant="ghost" size="icon" onClick={() => setShowPremiumModal(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="p-6 text-center space-y-4">
                <Crown className="h-16 w-16 text-yellow-500 mx-auto" />
                <h3 className="text-2xl font-bold text-yellow-600">Biblioteca Premium</h3>
                <p className="text-lg text-muted-foreground">
                  Baixe o app Direito Premium para ter acesso completo à nossa biblioteca jurídica com milhares de materiais.
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Disponível para:</p>
                  <div className="flex gap-4 justify-center">
                    <Badge variant="outline">iOS - App Store</Badge>
                    <Badge variant="outline">Android - Play Store</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
