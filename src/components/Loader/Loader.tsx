import { FC } from 'react';
import './loader.scss';

export const Loader: FC = () => {
  return (
    <div className="lds-ring mt-[300px]">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
