import { FC } from 'react';
import { Button } from '../../components/Button/Button';
import { Character } from '../../types/types';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

interface IProps {
  characterInfo: Character;
}

export const Details: FC<IProps> = ({ characterInfo }: IProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

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

  const setURL = () => {
    const params = new URLSearchParams(searchParams);
    const href = '/' + '?' + params.toString();
    return href;
  };

  const onClose = () => {
    router.push(setURL());
  };

  return (
    <div>
      <div className="title text-teal-500 text-center text-2xl font-thin mb-2">
        Details
      </div>
      <div
        className="card flex flex-col text-white text-lg justify-start items-center rounded-xl w-[350px] bg-zinc-700 shadow-lg"
        key={characterInfo.id}
      >
        <Image
          src={characterInfo.image}
          width={350}
          height={350}
          alt="episode__img"
          className="rounded-lg w-[350px] h-[350px]"
        />

        <div className="card_description flex-col self-start p-4 pb-2">
          <div className="card__title text-2xl font-bold">
            {characterInfo.name}
          </div>
          <div className="card__status mb-1">
            <span className={getStatusColor(characterInfo.status)}>● </span>
            {characterInfo.species} - {characterInfo.status}
          </div>
          <div className="card__location flex flex-col mb-1">
            <div className="location__title text-md text-zinc-400">
              Last known location:
            </div>
            <div className="location__content">
              {characterInfo.location.name}
            </div>
          </div>
          <div>
            <div className="text-zinc-400">Episodes:</div>
            {characterInfo.episode.map((ep, index) => {
              const episodeNum = ep.split('/').at(-1);
              if (index === characterInfo.episode.length - 1) {
                return <span key={episodeNum}>{episodeNum}</span>;
              }
              return <span key={episodeNum}>{episodeNum}, </span>;
            })}
          </div>
        </div>
        <div className="m-auto mb-2">
          <Button onClick={onClose}>
            <span data-testid="close-details"></span>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};
