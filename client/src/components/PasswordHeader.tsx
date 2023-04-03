import { BsPersonCircle } from 'react-icons/bs';
import { MdKeyboardArrowDown } from 'react-icons/md';

function PasswordHeader() {
  return (
    <>
      <h3 className="text-black text-2xl font-normal leading-none mb-4">
        Welcome
      </h3>
      <div className="flex justify-between items-center gap-2 rounded-full border p-2">
        <BsPersonCircle className="text-gray-700 text-xl" />
        <h5 className="text-black text-base font-medium leading-none">
          kleinjones@gmail.com
        </h5>
        <MdKeyboardArrowDown className="text-gray-900 text-xl" />
      </div>
    </>
  );
}

export default PasswordHeader;
