import React from 'react';
import { Eye } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <Eye className="h-8 w-8 text-blue-600" />
      <span className="font-bold text-xl text-blue-600">Diabetic<span className="text-teal-600">Eye</span>AI</span>
    </div>
  );
};

export default Logo;