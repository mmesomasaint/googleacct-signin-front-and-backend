import { useEffect, useState, useRef } from 'react';
import { useMutation } from '@tanstack/react-query';
import { MdError } from 'react-icons/md';
import {PasswordProps, PasswordFormData} from '../types/body-props';

function PasswordBody({ setPg, setIsLoading }: PasswordProps) {
  const passwordRef = useRef<HTMLInputElement>(null);
  const mutationKey = ['Password'];
  const [password, setPassword] = useState('');
  const isEmpty = password.length === 0;

  const { mutate, isError } = useMutation<Response, unknown, PasswordFormData>(
    async (data: PasswordFormData): Promise<Response> => {
      setIsLoading(true);
      const response = await fetch('/api/password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      setIsLoading(false);

      if (!response.ok) {
        throw new Error();
      }
      return response;
    },
    {
      mutationKey,
    }
  );

  const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setPassword(e.currentTarget.value);
  };

  const submitPassword: (e: React.SyntheticEvent) => void = async (e) => {
    e.preventDefault();
    const result = mutate({ password });
  };

  useEffect(() => {
    if (isError) passwordRef.current?.focus();
  }, [isError]);

  return (
    <form onSubmit={submitPassword}>
      <div className="relative w-full h-fit mb-12">
        <>
          <input
            type="password"
            ref={passwordRef}
            name='password'
            value={password}
            onChange={onChange}
            className={`text-base font-normal p-4 border border-gray-400 w-full outline-none rounded-md mb-[7px] focus:mb-1 peer focus:outline-none focus:border-[3px] focus:border-blue-700 transition duration-200 ease-in-out ${
              isError && 'border-red-700 focus:border-red-700'
            }`}
          />
          <p
            className={`absolute z-10 transition-all duration-200 ease-in-out top-4 peer-focus:-top-2 ml-4 text-base peer-focus:text-xs text-gray-500 peer-focus:text-blue-700 pointer-events-none bg-white px-2 ${
              isError && 'text-red-700 peer-focus:text-red-700 -top-2 text-xs'
            }`}
          >
            Enter your password
          </p>
          {isError && (
            <div className="FLEX justify-start items-center gap-2 mb-2">
              <MdError className="text-red-700 text-xl" />
              <span className="text-sm font-light text-red-700">
                Wrong password. Try again or click &apos;Forgot password&apos; to reset it.
              </span>
            </div>
          )}
          <label className="flex justify-start items-center">
            <input type="checkbox" className="w-5 h-5 bg-gray-400" />
            <span className="text-base font-normal text-gray-700 ml-4">
              Show password
            </span>
          </label>
        </>
      </div>
      <div className="flex justify-between items-center gap-5 my-12">
        <a href="#" className="text-base font-medium text-blue-700">
          Forgot password?
        </a>
        <button
          type='submit'
          className="rounded-md bg-blue-700 text-white text-base font-medium leading-[0] py-5 px-6"
        >
          Next
        </button>
      </div>
    </form>
  );
}

export default PasswordBody;
