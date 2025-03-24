
import React, { useState } from 'react';
import { toast } from '@/components/ui/sonner';
import TransformationTools from './TransformationTools';
import ImageComparison from './ImageComparison';

type TransformationType = 'restore' | 'generative-fill' | 'object-remove' | 'object-recolor' | 'background-remove';

interface TransformationWorkspaceProps {
  title: string;
  description: string;
  type: TransformationType;
}

const TransformationWorkspace: React.FC<TransformationWorkspaceProps> = ({ title, description, type }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isTransformed, setIsTransformed] = useState(false);

  const handleApplyTransformation = () => {
    setIsLoading(true);
    
    // Simulate transformation process
    setTimeout(() => {
      setIsLoading(false);
      setIsTransformed(true);
      toast.success('Transformation applied successfully!');
    }, 2000);
  };

  return (
    <div className="py-8 px-10 h-full w-full animate-fade-in overflow-auto">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">{title}</h1>
          <p className="text-gray-500">{description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <TransformationTools 
              type={type} 
              onApplyTransformation={handleApplyTransformation} 
            />
          </div>
          
          <div className="lg:col-span-2">
            <ImageComparison 
              isLoading={isLoading}
              transformedSrc={isTransformed ? "/lovable-uploads/0b9b978d-ca85-4b36-a843-b0647bfaed6a.png" : undefined}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransformationWorkspace;
