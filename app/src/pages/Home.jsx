import { Link } from 'react-router-dom';
import largeImage from './logo.png'; // Import your large image here

export default function Home() {
  return (
    
    <div className="min-h-screen bg-blue-900 flex flex-col justify-center items-center">
      <div className="mt-16">
        <img src={largeImage} alt="Large Image" className="max-w-96 h-auto mb-4" /> {/* Adjust styling as needed */}
      </div>
      <Link to='/challenges'> 
        <button className="bg-blue-500 text-white py-4 px-8 rounded-lg shadow-md hover:bg-blue-600 text-xl mt-8">
          التحديات
        </button>
      </Link>
    </div>
  );
}
