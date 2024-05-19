import { FC } from 'react';
import DinoImg from '../../assets/error-dino.svg';
import { useNavigate } from 'react-router-dom';

export const RouterError: FC = () => {
  const navigate = useNavigate();
  return (
    <div className="m-auto flex flex-col text-teal-500 justify-center items-center w-fit">
      <img src={DinoImg} alt="Error dino" className="w-64 h-64 mt-[200px] " />
      <div className="mt-2">Something went wrong.</div>
      <button
        onClick={() => navigate(-1)}
        className="h-10 rounded-md mt-6 p-2 text-md shadow-teal-500 shadow-sm hover:shadow-yellow-400 bg-gray-800"
      >
        Go back
      </button>
    </div>
  );
};
