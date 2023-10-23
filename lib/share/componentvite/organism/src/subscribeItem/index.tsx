import React from 'react';
import { Card } from '@nx-monorepo/molecules';
import { Button } from '@nx-monorepo/atom';

export interface SubscribeItemProps {
  data: any[];
  cardStyle?: string;
  styleAvatar?: string;
  styleAvatarIcon?: string;
  styleHead?: string;
  styleFooter?: string;
  className?: string;
}

export const SubscibeItem: React.FC<SubscribeItemProps> = ({
  data,
  cardStyle,
  styleAvatar,
  styleAvatarIcon,
  styleFooter,
  styleHead,
  className,
}) => {
  return (
    <div className={`${className}`}>
      {data.map((item: any, index: number) => (
        <div key={index}>
          <Card
            styleFooter={`${styleFooter}${index === 1 ? ' bg-gray-200 ' : ''}`}
            styleHead={`${styleHead}`}
            styleAvatar={`${styleAvatar}`}
            styleAvatarIcon={`${styleAvatarIcon}`}
            propsAvatar={{ icon: item.icon }}
            propsHead={{ title: item.title, subtitle: item.subtitle }}
            propsFooter={{
              price: item.price,
              priceStyle: 'text-[40px] font-semibold',
              textStyle: 'text-gray-700 px-4',
              subscriptionTypeText: item.subscriptionTypeText,
            }}
            className={`${cardStyle}`}
          >
            <Button
              text="GET STARTED"
              className="bg-black text-white rounded-md px-4 py-2"
            />
          </Card>
        </div>
      ))}
    </div>
  );
};
