
import React from 'react';
import TransformationWorkspace from '@/components/TransformationWorkspace';

const Restore = () => {
  return (
    <TransformationWorkspace
      title="Restore Image"
      description="Refine images by removing noise and imperfections"
      type="restore"
    />
  );
};

export default Restore;
