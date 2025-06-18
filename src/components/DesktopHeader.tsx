
import { Search, Bell, Settings, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
export const DesktopHeader = () => {
  const [searchQuery, setSearchQuery] = useState('');
  return <header className="fixed top-0 right-0 left-72 z-30 bg-background/95 backdrop-blur-xl border-b border-border/20">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title for Desktop */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shadow-md overflow-hidden">
              <img src="https://imgur.com/AG6iOQz.png" alt="Direito Premium" className="w-full h-full object-contain" />
            </div>
            <h1 className="text-xl font-bold gradient-text">Direito Premium</h1>
          </div>
          
          {/* Right side actions can be added here in the future */}
          <div className="flex items-center gap-2">
            {/* Reserved for future features */}
          </div>
        </div>
      </div>
    </header>;
};
