
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ImageIcon, 
  Wand2, 
  Scissors, 
  PaintBucket, 
  Eraser, 
  SparkleIcon 
} from 'lucide-react';

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  to 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  to: string; 
}) => {
  return (
    <Link 
      to={to}
      className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4 hover:border-transformania-purple/20 group"
    >
      <div className="w-12 h-12 bg-transformania-pale-purple/30 rounded-lg flex items-center justify-center group-hover:bg-transformania-purple/20 transition-colors">
        <Icon className="w-6 h-6 text-transformania-purple" />
      </div>
      
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
      
      <div className="mt-auto pt-4">
        <span className="text-transformania-purple text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
          Try now
          <SparkleIcon className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
};

const Index = () => {
  const features = [
    {
      icon: ImageIcon,
      title: 'Image Restore',
      description: 'Restore old or damaged images to their former glory with AI enhancement.',
      to: '/restore'
    },
    {
      icon: Wand2,
      title: 'Generative Fill',
      description: 'Add or expand content in your images using powerful AI generation.',
      to: '/generative-fill'
    },
    {
      icon: Scissors,
      title: 'Object Remove',
      description: 'Seamlessly remove unwanted objects from your images.',
      to: '/object-remove'
    },
    {
      icon: PaintBucket,
      title: 'Object Recolor',
      description: 'Change the color of objects in your images with precision.',
      to: '/object-recolor'
    },
    {
      icon: Eraser,
      title: 'Background Remove',
      description: 'Remove backgrounds with a single click for perfect cutouts.',
      to: '/background-remove'
    }
  ];

  return (
    <div className="py-8 px-10 h-full w-full animate-fade-in">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3 tracking-tight">
            Transform Your Images with AI
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Unlock the power of AI-driven image transformation with our cutting-edge tools.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              to={feature.to}
            />
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Get Started Today</h2>
              <p className="text-gray-500 mb-6">
                Join thousands of creators who trust Transformania for their image editing needs. 
                Our AI-powered tools make complex edits simple and accessible to everyone.
              </p>
              <Link 
                to="/profile" 
                className="inline-flex items-center px-5 py-3 bg-transformania-button-primary text-white rounded-lg hover:bg-transformania-button-hover transition-colors gap-2 font-medium"
              >
                Try For Free
                <SparkleIcon className="w-4 h-4" />
              </Link>
            </div>
            <div className="hidden md:block">
              <img 
                src="/placeholder.svg" 
                alt="Transformania Demo" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
