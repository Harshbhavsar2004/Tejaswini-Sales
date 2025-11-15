import { Button } from '@/components/ui/button';
import { Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-sky-600 text-white p-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Sun className="text-yellow-300" size={24} />
        <h1 className="text-xl font-bold">Solar Rooftop Admin</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <Button><Link to="/"><a className="hover:text-yellow-300 transition-colors">Logout</a></Link></Button>
        </ul>
      </nav>
    </header>
  );
}