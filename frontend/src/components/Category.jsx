export default function Category({ icon, title, openPosition }) {
  return (
    <div className='flex justify-center cursor-pointer'>
      <div className='bg-blue-50 border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
        <div className='px-6 py-4'>
          <div className='flex justify-center mb-4'>
            <div className='bg-blue-100 text-blue-600 text-6xl rounded-full p-4'>
              {icon}
            </div>
          </div>
          <div className='text-center'>
            <h2 className='text-2xl font-bold mb-2'>{title}</h2>
            <p className='text-gray-500'>
              {openPosition} open position{openPosition !== 1 ? "s" : ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
