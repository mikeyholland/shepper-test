import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="p-4">
      <h1 className="mb-4 text-4xl font-bold">Mikey's Forms</h1>
      <Outlet />
    </div>
  )
}
