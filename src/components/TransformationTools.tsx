
import React from 'react';
import { Settings2, Sliders, Upload } from 'lucide-react';

type TransformationType = 'restore' | 'generative-fill' | 'object-remove' | 'object-recolor' | 'background-remove';

interface TransformationToolsProps {
  type: TransformationType;
  onApplyTransformation: () => void;
}

const getToolsForType = (type: TransformationType) => {
  switch (type) {
    case 'restore':
      return [
        { id: 'noise', label: 'Noise Reduction', icon: Sliders },
        { id: 'sharpen', label: 'Sharpness', icon: Sliders },
        { id: 'enhance', label: 'Enhancement Level', icon: Sliders },
      ];
    case 'generative-fill':
      return [
        { id: 'prompt', label: 'Text Prompt', icon: Settings2 },
        { id: 'style', label: 'Style Control', icon: Sliders },
      ];
    case 'object-remove':
      return [
        { id: 'brush', label: 'Brush Size', icon: Sliders },
        { id: 'sensitivity', label: 'Sensitivity', icon: Sliders },
      ];
    case 'object-recolor':
      return [
        { id: 'color', label: 'Color Selection', icon: Settings2 },
        { id: 'intensity', label: 'Intensity', icon: Sliders },
      ];
    case 'background-remove':
      return [
        { id: 'edge', label: 'Edge Refinement', icon: Sliders },
        { id: 'transparency', label: 'Transparency', icon: Sliders },
      ];
    default:
      return [];
  }
};

const TransformationTools: React.FC<TransformationToolsProps> = ({ type, onApplyTransformation }) => {
  const tools = getToolsForType(type);

  return (
    <div className="w-full flex flex-col gap-6 animate-slide-up">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-medium text-gray-500">Image Title</h3>
        </div>
        <div>
          <input
            type="text" 
            placeholder="Enter a title for your image"
            className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-transformania-purple/20"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-full p-6 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center gap-3 hover:border-transformania-purple/50 transition-colors duration-200">
          <Upload className="w-6 h-6 text-gray-400" />
          <p className="text-sm text-gray-500">Drag & drop an image or click to browse</p>
          <button className="text-sm text-transformania-purple hover:text-transformania-button-hover transition-colors">
            Upload Image
          </button>
        </div>
      </div>

      {tools.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-500">Adjustment Tools</h3>
          <div className="space-y-3">
            {tools.map((tool) => (
              <div key={tool.id} className="flex flex-col gap-1">
                <div className="flex justify-between items-center">
                  <label className="text-sm">{tool.label}</label>
                  <tool.icon className="w-4 h-4 text-gray-500" />
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  defaultValue="50"
                  className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-transformania-purple"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={onApplyTransformation} 
        className="w-full py-3 bg-transformania-button-primary text-white rounded-lg hover:bg-transformania-button-hover transition-colors mt-4 flex items-center justify-center font-medium"
      >
        Apply Transformation
      </button>
    </div>
  );
};

export default TransformationTools;
