import React from 'react';
import {
  HeadCard,
  HeadCardProps,
  FooterCard,
  FooterCardProps,
  AvatarCard,
  AvatarCardProps,
} from '@nx-monorepo/atom';

export interface CardProps {
  styleAvatar?: string;
  styleAvatarIcon?: string;
  styleFooter?: string;
  styleHead?: string;
  propsAvatar?: AvatarCardProps;
  propsFooter?: FooterCardProps;
  propsHead?: HeadCardProps;
  children?: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  styleAvatar,
  styleAvatarIcon,
  styleFooter,
  styleHead,
  propsAvatar,
  propsFooter,
  propsHead,
  children,
  className,
}) => {
  return (
    <div
      className={`${className} flex flex-col justify-center items-center relative`}
    >
      <div className={`${styleHead}`}>
        <AvatarCard
          wrapperStyle={`${styleAvatar}`}
          iconStyle={`${styleAvatarIcon}`}
          {...propsAvatar}
        />
        <HeadCard titleStyle="font-bold text-lg" {...propsHead} />
      </div>
      <div className={`${styleFooter}`}>
        <FooterCard {...propsFooter}>{children}</FooterCard>
      </div>
    </div>
  );
};
