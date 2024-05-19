import { FC, ReactNode } from 'react';
import { Loader } from '../Loader/Loader';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import { useGetCharacterInfoQuery } from '@/store/slices/ApiSlice';

export const Details: FC = () => {
  const { detailsId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    data: characterInfo,
    isLoading,
    isSuccess,
  } = useGetCharacterInfoQuery(detailsId!);

  const navigate = useNavigate();
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

  const onClose = () => {
    navigate('/', { replace: false, state: { from: 'current-path' } });
    setSearchParams(searchParams);
  };

  let content: ReactNode;

  if (isLoading) {
    content = (
      <div className="w-[350px] flex justify-center">
        <Loader />
      </div>
    );
  } else if (isSuccess) {
    content = (
      <div
        className="card flex flex-col text-white text-lg justify-start items-center rounded-xl w-[350px] bg-zinc-700 shadow-lg"
        key={characterInfo.id}
      >
        <img
          src={characterInfo.image}
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
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    );
  } else {
    content = (
      <div className="text-white mt-[300px]">Something went wrong.</div>
    );
  }

  return (
    <div>
      <div className="title text-teal-500 text-center text-2xl font-thin mb-2">
        Details
      </div>
      {content}
    </div>
  );
};
