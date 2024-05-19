import { FC } from 'react';

interface MyProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const Button: FC<MyProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="h-10 flex justify-center items-center rounded-md p-2 text-md shadow-teal-500 shadow-sm hover:shadow-yellow-400 bg-gray-800 text-teal-500"
    >
      {children}
    </button>
  );
};
