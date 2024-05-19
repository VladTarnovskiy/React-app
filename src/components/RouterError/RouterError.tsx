import { FC } from 'react';
import DinoImg from '../../assets/error-dino.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';

export const RouterError: FC = () => {
  const router = useRouter();
  return (
    <div className="m-auto flex flex-col text-teal-500 justify-center items-center w-fit">
      <Image
        src={DinoImg}
        width={256}
        height={256}
        alt="Error dino"
        className="w-64 h-64 mt-[200px] "
      />
      <div className="mt-2">Something went wrong.</div>
      <button
        onClick={() => router.back()}
        className="h-10 rounded-md mt-6 p-2 text-md shadow-teal-500 shadow-sm hover:shadow-yellow-400 bg-gray-800"
      >
        Go back
      </button>
    </div>
  );
};
