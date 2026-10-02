import React from 'react';
import * as LucideIcons from 'lucide-react';

interface DynamicIconProps extends LucideIcons.LucideProps {
  name: string;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, ...props }) => {
  const IconComponent = (LucideIcons as unknown as Record<string, React.FC<LucideIcons.LucideProps>>)[name];
  if (!IconComponent) {
    return <LucideIcons.Sparkles {...props} />;
  }
  return <IconComponent {...props} />;
};

