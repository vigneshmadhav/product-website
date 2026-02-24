import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark px-4">
        <Link className="navbar-brand" to="/">MyStore</Link>
        <div>
          <Link className="text-white me-3" to="/">Home</Link>
          <Link className="text-white me-3" to="/about">About</Link>
          <Link className="text-white" to="/productlist">Products</Link>
        </div>
      </nav>

      <div className="container mt-4">
        <Outlet />
      </div>
    </>
  );
}