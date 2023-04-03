type LoadProps = {
  isLoading: boolean;
};

function Loader({ isLoading }: LoadProps) {
  return (
    <div
      className={`${
        isLoading ? 'block' : 'hidden'
      } absolute w-full h-1 top-0 left-0 z-10 bg-gray-300`}
    >
      <div className="w-[10%] h-full bg-blue-700 relative overflow-hidden animate-load" />
    </div>
  );
}

export default Loader;
