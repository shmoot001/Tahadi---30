import { Link } from 'react-router-dom';

export default function Challenges() {
  return (
    <div className="min-h-screen bg-blue-900 flex justify-center items-center">
      <div className="grid grid-cols-2 gap-4">
        <Link to='/mazataref'>
          <button className="bg-blue-500 text-white py-10 px-16 rounded-lg shadow-md hover:bg-blue-600 text-2xl w-full">
            ماذا تعرف
          </button>
        </Link>
        <Link to='/mazad'>
          <button className="bg-blue-500 text-white py-10 px-16 rounded-lg shadow-md hover:bg-blue-600 text-2xl w-full">
            مزاد
          </button>
        </Link>
        <Link to='/jaras'>
          <button className="bg-blue-500 text-white py-10 px-16 rounded-lg shadow-md hover:bg-blue-600 text-2xl w-full">
            جرس
          </button>
        </Link>
        <Link to='/altaawed'>
          <button className="bg-blue-500 text-white py-10 px-16 rounded-lg shadow-md hover:bg-blue-600 text-2xl w-full">
            التعويض
          </button>
        </Link>
      </div>
    </div>
  );
}

