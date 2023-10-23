import React from 'react';

export interface HeadCardProps {
  title?: string;
  subtitle?: string;
  className?: string;
  titleStyle?: string;
  subtitleStyle?: string;
}

export const HeadCard: React.FC<HeadCardProps> = ({
  title,
  subtitle,
  className,
  titleStyle,
  subtitleStyle,
}) => {
  return (
    <div
      className={`${className} gap-5 flex flex-col justify-center items-center`}
    >
      <div className="flex flex-col justify-center items-center gap-8">
        <h1 className={`${titleStyle}`}>{title}</h1>
        <span className={`${subtitleStyle}`}>{subtitle}</span>
      </div>
    </div>
  );
};
