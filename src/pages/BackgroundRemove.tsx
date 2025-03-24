
import React from 'react';
import TransformationWorkspace from '@/components/TransformationWorkspace';

const BackgroundRemove = () => {
  return (
    <TransformationWorkspace
      title="Background Remove"
      description="Extract subjects from their backgrounds with perfect edge detection"
      type="background-remove"
    />
  );
};

export default BackgroundRemove;
