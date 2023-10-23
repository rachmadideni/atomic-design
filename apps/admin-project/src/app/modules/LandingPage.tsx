import { SubscibeItem } from '@nx-monorepo/organism';
import { Button, HeadCard, PromoTag } from '@nx-monorepo/atom';
import { Navbar } from '@nx-monorepo/molecules';
import { BiSolidUser, BiBuildings } from 'react-icons/bi';
import { FaUserFriends } from 'react-icons/fa';

export const LandingPageModules = () => {
  const data = [
    {
      id: 1,
      title: 'Basic',
      subtitle:
        'Add a summary of the plan,its key features, its main benefit,and its deal customer.',
      price: '$9.99',
      subscriptionTypeText: 'per month',
      icon: BiSolidUser,
    },
    {
      id: 2,
      title: 'Premium',
      subtitle:
        'Add a summary of the plan,its key features, its main benefit,and its deal customer.',
      price: '$19.99',
      subscriptionTypeText: 'per month',
      icon: FaUserFriends,
    },
    {
      id: 3,
      title: 'Ultimate',
      subtitle:
        'Add a summary of the plan,its key features, its main benefit,and its deal customer.',
      price: '$39.99',
      subscriptionTypeText: 'per month',
      icon: BiBuildings,
    },
  ];
  return (
    <div className="w-screen">
      <div className="container mx-auto border-gray-200">
        <Navbar title="Logo" className="border-b-2 px-20" />
      </div>
      <div className="py-[100px] px-[400px] border-b-2">
        <HeadCard
          titleStyle="text-[55px] font-semibold text-center text-center leading-none"
          subtitleStyle="text-center text-gray-500 px-20 text-[20px]"
          title="Choose a Plan to Grow Your Bussines"
          subtitle="Supporting statement for you headline that extends your value proposition and propmt users to select one of your plans."
        />
      </div>
      <div className="w-full flex justify-center items-center my-20 relative">
        <Button
          className="px-4 py-2 bg-black text-white rounded-l-md"
          text="MONTHLY"
        />
        <Button
          className="border-2 border-black text-black px-4 py-[6.4px] rounded-r-md"
          text="ANNUALY"
        />
        <PromoTag text="save up to 20%" />
      </div>
      <div className="flex justify-center mb-20 items-center">
        <SubscibeItem
          className="flex gap-8"
          styleHead="pt-20 pb-28 px-14 flex relative justify-center"
          styleFooter="px-14 py-8 w-full border-t-2 border-gray-200"
          styleAvatar="absolute -top-10 w-20 h-20 rounded-full bg-gray-100 flex justify-center items-center"
          styleAvatarIcon="text-gray-500 w-8 h-8"
          cardStyle="border-2 border-gray-200 rounded-md w-[300px]"
          data={data}
        />
      </div>
    </div>
  );
};
