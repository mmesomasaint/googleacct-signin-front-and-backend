import { useEffect, useState, useRef } from 'react';
import { useMutation } from '@tanstack/react-query';
import { MdError } from 'react-icons/md';
import BodyProps from '../types/body-props';

type EmailFormData = {
  email: string;
};

function EmailBody({ setPg, setIsLoading }: BodyProps) {
  const emailRef = useRef<HTMLInputElement>(null);
  const mutationKey = ['Emails'];
  const [email, setEmail] = useState('');
  const isEmpty = email.length === 0;

  const { mutate, isError } = useMutation<Response, unknown, EmailFormData>(
    async (data: EmailFormData): Promise<Response> => {
      setIsLoading(true);
      const response = await fetch('https://example.com/api/emails', {
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
    setEmail(e.currentTarget.value);
  };

  const submitEmail: (e: React.SyntheticEvent) => void = async (e) => {
    e.preventDefault();
    const result = mutate({ email });
  };

  useEffect(() => {
    if (isError) emailRef.current?.focus();
  }, [isError]);

  return (
    <form onSubmit={submitEmail}>
      <div className="relative w-full h-fit mb-10">
        <>
          <input
            type="text"
            ref={emailRef}
            className={`text-base font-normal p-4 border border-gray-400 w-full outline-none rounded-md mb-[7px] focus:mb-1 peer focus:outline-none focus:border-[3px] focus:border-blue-700 transition duration-200 ease-in-out ${
              isError && 'border-red-700 focus:border-red-700'
            }`}
            name="email"
            value={email}
            onChange={onChange}
          />
          <p
            className={`absolute z-10 transition-all duration-200 ease-in-out ml-4 peer-focus:-top-2 text-base peer-focus:text-xs text-gray-500 peer-focus:text-blue-700 pointer-events-none bg-white px-2 ${
              isError &&
              'text-red-700 peer-focus:text-red-700 peer-focus:-top-2'
            } ${!isEmpty ? '-top-2 text-xs' : 'top-4 text-base'}`}
          >
            Email or phone
          </p>
          {isError && (
            <div className="flex justify-start items-center gap-2 mb-2">
              <MdError className="text-red-700 text-xl" />
              <span className="text-sm font-light text-red-700">
                Couldn&apos;t find your google account
              </span>
            </div>
          )}
          <a href="#" className="text-base font-medium text-blue-700">
            Forgot email?
          </a>
        </>
      </div>
      <div className="text-base text-gray-700">
        Not your computer? Use Guest mode to sign in privately.
      </div>
      <a href="#" className="text-base font-medium text-blue-700">
        Learn more
      </a>
      <div className="flex justify-between items-center gap-5 mt-10 mb-6">
        <a href="#" className="text-base font-medium text-blue-700">
          Create account
        </a>
        <button
          type="submit"
          className="rounded-md bg-blue-700 text-white text-base font-medium leading-[0] py-5 px-6"
        >
          Next
        </button>
      </div>
    </form>
  );
}

export default EmailBody;
