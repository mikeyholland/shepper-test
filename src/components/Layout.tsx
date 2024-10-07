import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="max-w-screen-xl mx-auto py-12 px-4">
      <header className="flex items-center justify-between">
        <h1 className="mb-4 text-4xl font-bold">Mikey's Forms</h1>
        <nav className="flex gap-4">
          <NavLink
            to="/"
            className="h-12 flex items-center px-8 rounded text-center bg-white text-black border"
          >
            List page
          </NavLink>
          <NavLink
            to="/form-builder"
            className="h-12 flex items-center px-8 rounded text-center bg-white text-black border"
          >
            Create Form
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
