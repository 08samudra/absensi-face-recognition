import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">FaceAttend</h1>
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-blue-600">Dashboard</Link>
        <Link to="/absensi" className="text-gray-700 hover:text-blue-600">Absensi</Link>
      </div>
    </nav>
  );
}

export default Navbar;
