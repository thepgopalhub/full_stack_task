import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <header className="p-4 text-white bg-blue-600 shadow-md">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <Link to="/admin" className="ml-4 pl- text-white underline">
        Admin Panel
      </Link>
    </header>
  );
}
