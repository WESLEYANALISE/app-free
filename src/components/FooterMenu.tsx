
import { Home, Scale, Headphones, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigation } from '@/context/NavigationContext';
import { useDeviceDetection } from '@/hooks/useDeviceDetection';
import { useEffect, useState } from 'react';

interface FooterMenuProps {
  isVisible?: boolean;
}

export const FooterMenu = ({ isVisible = false }: FooterMenuProps) => {
  const { setCurrentFunction, currentFunction } = useNavigation();
  const { isMobile, isTablet } = useDeviceDetection();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const menuItems = [
    { icon: Home, title: 'Início', function: 'Dashboard' },
    { icon: Scale, title: 'Vade Mecum', function: 'Vade Mecum Digital' },
    { icon: Headphones, title: 'Audioaulas', function: 'Audio-aulas' },
    { icon: Crown, title: 'Premium', function: 'App Premium' },
  ];

  const handleClick = (menuItem: (typeof menuItems)[0]) => {
    setCurrentFunction(menuItem.function);
  };

  if (!isMounted) {
    return null;
  }

  if (!isVisible && !(isMobile || isTablet)) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-background/95 backdrop-blur-xl border border-border/30 rounded-2xl shadow-2xl p-2">
        <div className="flex items-center justify-center gap-2">
          {menuItems.map((menuItem) => {
            const Icon = menuItem.icon;
            const isActive = currentFunction === menuItem.function;
            const isPremium = menuItem.title === 'Premium';

            return (
              <Button
                key={menuItem.title}
                variant={isActive ? 'default' : 'ghost'}
                size="sm"
                onClick={() => handleClick(menuItem)}
                className={`
                  flex flex-col items-center justify-center gap-1 rounded-xl p-3 min-w-[70px] h-16
                  transition-all duration-300 hover:scale-105
                  ${isActive 
                    ? isPremium 
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg' 
                      : 'bg-primary text-primary-foreground shadow-lg'
                    : 'hover:bg-secondary/80'
                  }
                  ${isPremium && !isActive ? 'hover:bg-yellow-500/10 hover:text-yellow-600' : ''}
                `}
              >
                <Icon className={`h-5 w-5 ${isPremium && !isActive ? 'text-yellow-600' : ''}`} />
                <span className={`text-xs font-medium ${isPremium && !isActive ? 'text-yellow-600' : ''}`}>
                  {menuItem.title}
                </span>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
