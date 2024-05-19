import { FC } from 'react';
import NotFoundImg from '../../assets/not-found.png';

export const NotFoundPage: FC = () => {
  return (
    <div className="error_wrapper text-teal-500 flex flex-col items-center mt-24">
      <div className="error_code text-6xl mt-3 font-bold">404</div>
      <div className="error_description text-5xl mb-10 font-thin">
        The page you are looking for not found!
      </div>
      <img src={NotFoundImg} alt="Not found" className="h-[400px] w-[600px]" />
    </div>
  );
};
