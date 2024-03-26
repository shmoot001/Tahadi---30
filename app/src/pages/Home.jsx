import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-900 flex justify-center items-center">
      <div className="grid grid-cols-2 gap-4">
      <Link to='/mazataref'>
          <button className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-600">
            <a>ماذا تعرف</a>
          </button>
        </Link>
        <Link to='/mazad'>
          <button className="bg-blue-500 text-white py-3 px-10 rounded-lg shadow-md hover:bg-blue-600">
            <a>مزاد</a>
          </button>
        </Link>
        <Link to='/jaras'>
          <button className="bg-blue-500 text-white py-3 px-10 rounded-lg shadow-md hover:bg-blue-600">
            <a>جرس</a>
          </button>
        </Link>
        <Link to='/altaawed'>
          <button className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-600">
            <a>التعويض</a>
          </button>
        </Link>
      </div>
    </div>
  );
}
