import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const SectionContainer: React.FC<ContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`mx-auto w-[80%] max-w-[1100px] ${className}`}>
      {children}
    </div>
  );
};

export default SectionContainer;
