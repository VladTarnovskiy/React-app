import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Character } from '../../types/types';

interface MyProps {
  character: Character;
}

export const Card: FC<MyProps> = ({ character }) => {
  const { name, location, image, species, status, id } = character;
  const getStatusColor = (value: string) => {
    let color = 'text-sky-500';

    if (value === 'Alive') {
      color = 'text-green-500';
    } else if (value === 'Dead') {
      color = 'text-red-500';
    } else {
      color = 'text-blue-500';
    }

    return color;
  };
  const color = getStatusColor(status);

  return (
    <Link to={`details/${id}`}>
      <div
        className="card flex text-white text-lg justify-start items-center rounded-xl w-[450px] h-[180px] bg-zinc-700 shadow-lg"
        data-testid="card"
      >
        <img
          src={image}
          alt="episode__img"
          className="h-[180px] w-[180px] rounded-lg mr-3"
        />

        <div className="card_description flex-col">
          <div className="card__title text-2xl font-bold ">{name}</div>
          <div className="card__status mb-1">
            <span className={color}>● </span>
            {species} - {status}
          </div>
          <div className="card__location flex flex-col mb-1">
            <div className="location__title text-md text-zinc-400">
              Last known location:
            </div>
            <div className="location__content">{location.name}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};
