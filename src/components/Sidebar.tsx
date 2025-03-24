
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Wand2, Scissors, PaintBucket, Eraser, UserCircle2, ImageIcon } from 'lucide-react';

const SidebarItem = ({ 
  icon: Icon, 
  label, 
  to, 
  isActive 
}: { 
  icon: React.ElementType, 
  label: string, 
  to: string, 
  isActive: boolean 
}) => {
  return (
    <Link 
      to={to} 
      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 
        ${isActive 
          ? 'bg-transformania-sidebar-active text-transformania-purple font-medium' 
          : 'text-gray-600 hover:bg-transformania-sidebar-hover'
        }`}
    >
      <Icon className={`w-5 h-5 ${isActive ? 'text-transformania-purple' : 'text-gray-500'}`} />
      <span>{label}</span>
    </Link>
  );
};

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: ImageIcon, label: 'Image Restore', path: '/restore' },
    { icon: Wand2, label: 'Generative Fill', path: '/generative-fill' },
    { icon: Scissors, label: 'Object Remove', path: '/object-remove' },
    { icon: PaintBucket, label: 'Object Recolor', path: '/object-recolor' },
    { icon: Eraser, label: 'Background Remove', path: '/background-remove' },
  ];

  return (
    <div className="min-h-screen w-64 bg-transformania-sidebar-bg border-r border-gray-200 flex flex-col animate-fade-in">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-transformania-purple rounded-md flex items-center justify-center">
            <Wand2 className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-bold text-transformania-purple tracking-tight">TRANSFORMANIA</h1>
        </div>
      </div>
      
      <div className="flex-1 py-6 px-3 space-y-1">
        {menuItems.map((item) => (
          <SidebarItem 
            key={item.path}
            icon={item.icon}
            label={item.label}
            to={item.path}
            isActive={
              item.path === '/' 
                ? currentPath === '/' 
                : currentPath.startsWith(item.path)
            }
          />
        ))}
      </div>
      
      <div className="mt-auto border-t border-gray-200 py-3 px-3">
        <SidebarItem 
          icon={UserCircle2}
          label="Profile"
          to="/profile"
          isActive={currentPath === '/profile'}
        />
      </div>
    </div>
  );
};

export default Sidebar;
