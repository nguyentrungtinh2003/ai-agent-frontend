import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white p-4">
      <h1 className="text-xl font-bold mb-4">Dashboard</h1>
      <ul className="space-y-2">
        <li><Link to="/admin/dashboard" className="hover:underline">Admin Dashboard</Link></li>
        <li><Link to="/user/profile" className="hover:underline">User Profile</Link></li>
      </ul>
    </div>
  );
}