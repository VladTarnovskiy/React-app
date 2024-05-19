import { ChangeEvent, FC, useState } from 'react';
import Image from 'next/image';
import SearchImg from '../../assets/search.svg';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
import { checkRouterQuery } from '../../utils/routerQuery';

export const SearchBar: FC = () => {
  const router = useRouter();
  const { search } = router.query;
  const [inputValue, setInputValue] = useState(checkRouterQuery(search) || '');
  const pathname = usePathname();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);
  };

  const setURL = () => {
    const params = new URLSearchParams();
    params.set('page', '1');
    params.set('search', inputValue);
    const href = pathname + '?' + params.toString();
    return href;
  };

  const onKeyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    router.push(setURL());
  };

  return (
    <div className="py-4 bg-gray-900">
      <div className="search flex justify-center items-center">
        <input
          type="search"
          onChange={handleChange}
          onKeyDown={onKeyPressHandler}
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
      </div>
    </div>
  );
};
