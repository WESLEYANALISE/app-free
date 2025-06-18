
import { Search, Bell, Settings, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
export const DesktopHeader = () => {
  const [searchQuery, setSearchQuery] = useState('');
  return <header className="fixed top-0 right-0 left-72 z-30 bg-background/95 backdrop-blur-xl border-b border-border/20">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden">
              <img src="https://imgur.com/AG6iOQz.png" alt="Direito Premium" className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="text-lg font-bold gradient-text">Direito Desktop</h1>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Pesquisar..." 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)} 
                className="pl-10 bg-background/50 border-border/30" 
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
              <User className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>;
};
