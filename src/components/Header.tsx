import { NavLink } from 'react-router';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Menu } from 'lucide-react';

import './Header.css';

interface headerProps {
  Home: string;
  Skills?: string;
  About?: string;
  Contact?: string;
}

export const Header = ({ Home, About, Contact, Skills }: headerProps) => {
  return (
    <div className="w-full h-20 bg-background-green flex items-center justify-between px-40 drop-shadow-sombraHeader max-pq:px-20">
      <div className="font-italianno text-4xl text-text-dark-white max-lg:text-3xl max-pq:text-2xl">
        Fellipe Santos
      </div>
      <nav className="flex gap-6 max-md:hidden">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'text-lg text-text-dark-white font-normal border-b-2 border-text-dark-white'
              : 'text-lg text-text-dark-white font-normal element'
          }
        >
          {Home}
        </NavLink>
        <NavLink
          to="/About"
          className={({ isActive }) =>
            isActive
              ? 'text-lg text-text-dark-white font-normal border-b-2 border-text-dark-white'
              : 'text-lg text-text-dark-white font-normal element'
          }
        >
          {About}
        </NavLink>
        <NavLink
          to="/Skills"
          // className="text-lg text-text-dark-white font-normal elemento"
          className={({ isActive }) =>
            isActive
              ? 'text-lg text-text-dark-white font-normal border-b-2 border-text-dark-white'
              : 'text-lg text-text-dark-white font-normal element'
          }
        >
          {Skills}
        </NavLink>
        <NavLink
          to="/Contact"
          className={({ isActive }) =>
            isActive
              ? 'text-lg text-text-dark-white font-normal border-b-2 border-text-dark-white'
              : 'text-lg text-text-dark-white font-normal element'
          }
        >
          {Contact}
        </NavLink>
      </nav>

      {/* menu dropDown que só é visivel em telas menores*/}

      <div className="hidden max-md:block">
        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer size-10 flex items-center justify-center hover:size-8">
            <Menu size={35} color="#cad2c5" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-background-green border border-text-dark-white text-text-dark-white">
            <DropdownMenuItem>
              <NavLink to="/">Home</NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <NavLink to="/About">About</NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <NavLink to="/Skills">Skills</NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <NavLink to="/Contact">Contact</NavLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
