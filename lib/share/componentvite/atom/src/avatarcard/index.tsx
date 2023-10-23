import * as React from 'react';

export interface AvatarCardProps {
  wrapperStyle?: string;
  iconStyle?: string;
  icon?: React.ElementType<{ className: string }>;
}

export const AvatarCard: React.FC<AvatarCardProps> = ({
  wrapperStyle,
  iconStyle,
  icon: Icon,
}) => {
  const iconElement = Icon ? <Icon className={`${iconStyle}`} /> : null;
  return <div className={`${wrapperStyle}`}>{iconElement}</div>;
};
