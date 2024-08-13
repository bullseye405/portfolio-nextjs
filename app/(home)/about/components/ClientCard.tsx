import Image from 'next/image';
import { IClient } from './clientsData';

const ClientCard = ({ title, img }: IClient) => {
  return (
    <Image
      src={img}
      className="
          w-64 py-5 px-10 border 
          bg-secondary-light border-ternary-light dark:border-ternary-dark 
          shadow-sm rounded-lg mb-8 cursor-pointer
        "
      alt={title}
      height={100}
      width={100}
    />
  );
};

export default ClientCard;
