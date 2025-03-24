
import React, { useState } from 'react';
import { Save } from 'lucide-react';

interface ImageComparisonProps {
  originalSrc?: string;
  transformedSrc?: string;
  isLoading?: boolean;
}

const ImageComparison: React.FC<ImageComparisonProps> = ({ 
  originalSrc = '/placeholder.svg',
  transformedSrc = '/placeholder.svg',
  isLoading = false
}) => {
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    // Here we would handle actual saving
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  return (
    <div className="w-full flex flex-col gap-8 animate-slide-up">
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-medium">Original</h2>
          <div className="relative aspect-video w-full bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm">
            {isLoading ? (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="w-10 h-10 border-4 border-transformania-pale-purple border-t-transformania-purple rounded-full animate-spin"></div>
              </div>
            ) : (
              <img 
                src={originalSrc} 
                alt="Original" 
                className="w-full h-full object-contain"
              />
            )}
          </div>
        </div>
        
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-medium">Transformed</h2>
          <div className="relative aspect-video w-full bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm">
            {isLoading ? (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="w-10 h-10 border-4 border-transformania-pale-purple border-t-transformania-purple rounded-full animate-spin"></div>
              </div>
            ) : (
              <img 
                src={transformedSrc} 
                alt="Transformed" 
                className="w-full h-full object-contain"
              />
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center gap-4">
        <button
          onClick={handleSave}
          className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 ${
            isSaved 
              ? 'bg-green-500 text-white' 
              : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
          }`}
        >
          <Save className="w-4 h-4" />
          <span>{isSaved ? 'Saved!' : 'Save Image'}</span>
        </button>
        
        <button className="flex-1 py-3 bg-transformania-button-primary text-white rounded-lg hover:bg-transformania-button-hover transition-colors flex items-center justify-center font-medium">
          Download
        </button>
      </div>
    </div>
  );
};

export default ImageComparison;
