type LoadProps = {
  isLoading: boolean
}

function Loader({ isLoading }: LoadProps) {
  return (
    <div
      className={`${
        isLoading ? 'block' : 'hidden'
      } absolute bg-stone-100 bg-opacity-60 inset-0 z-10`}
    >
      <div className='w-full h-1 bg-gray-300'>
        <div className='w-[10%] h-full bg-blue-700 relative overflow-hidden animate-load' />
      </div>
    </div>
  )
}

export default Loader
