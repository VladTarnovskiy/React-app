import { ChangeEvent, FC, useState } from 'react';
import Image from 'next/image';
import SearchImg from '../../assets/search.svg';
import { useRouter } from 'next/router';
import { usePathname, useSearchParams } from 'next/navigation';
import { checkRouterQuery } from '../../utils/routerQuery';

export const SearchBar: FC = () => {
  const router = useRouter();
  const { search } = router.query;
  const [inputValue, setInputValue] = useState(checkRouterQuery(search) || '');
  const [error, setError] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);
  };

  const setURL = () => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    params.set('search', inputValue);
    const href = pathname + '?' + params.toString();
    return href;
  };

  const handleSubmit = () => {
    router.push(setURL());
  };

  const onError = () => {
    throw new Error('new Error');
  };

  return (
    <div className="py-4 bg-gray-900">
      {error && onError()}
      <div className="search flex justify-center items-center">
        <input
          type="search"
          onChange={handleChange}
          value={inputValue}
          className="h-full w-72 rounded-[7px] text-white  shadow-md shadow-teal-500 bg-transparent px-3 py-2.5 font-sans text-sm font-normal outline-0 focus:shadow-yellow-400"
          placeholder="Search"
        />
        <button
          onClick={handleSubmit}
          data-testid="searchButton"
          className="h-10 rounded-md w-10 text-md shadow-teal-500 shadow-sm  ml-[1px] hover:shadow-yellow-400 bg-gray-800"
        >
          <Image
            src={SearchImg}
            width={24}
            height={24}
            alt="Search"
            className="w-6 h-6 m-auto"
          />
        </button>
        <button
          onClick={() => setError(true)}
          className="h-10 rounded-md w-10 text-md shadow-teal-500 shadow-sm text-teal-500 ml-10 hover:shadow-yellow-400 bg-gray-800"
        >
          Error
        </button>
      </div>
    </div>
  );
};
