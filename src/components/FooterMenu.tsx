
import { Home, BookOpen, GraduationCap, Briefcase, Star } from 'lucide-react';
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
    { icon: BookOpen, title: 'Explorar', function: 'Explorar' },
    { icon: GraduationCap, title: 'Videoaulas', function: 'Videoaulas' },
    { icon: Briefcase, title: 'Plataforma', function: 'Plataforma Desktop' },
    { icon: Star, title: 'Favoritos', function: 'Favoritos' },
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
    <div className="fixed bottom-0 left-0 w-full bg-card border-t border-border/30 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-around py-2 px-2 sm:px-4">
        {menuItems.map((menuItem) => {
          const Icon = menuItem.icon;
          const isActive = currentFunction === menuItem.function;

          return (
            <Button
              key={menuItem.title}
              variant={isActive ? 'default' : 'ghost'}
              size="icon"
              onClick={() => handleClick(menuItem)}
              className="flex flex-col items-center justify-center gap-1 rounded-md p-2 hover:bg-secondary/50 transition-colors duration-200"
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs font-medium">{menuItem.title}</span>
            </Button>
          );
        })}
      </div>
    </div>
  );
};
