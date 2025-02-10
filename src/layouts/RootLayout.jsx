import { Outlet, NavLink, Link } from "react-router-dom";
import bibleLogo from "/bible.svg";

export default function RootLayout() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="root-layout">
      <header className="py-4 container">
        <div className="columns">
          <div className="column logo">
            <Link
              className="is-flex is-align-items-center is-flex-direction-row"
              to="/"
            >
              <img src={bibleLogo} className="logo" alt="Bible App logo" />{" "}
              <h1 className="title is-5">Digital King James Bible</h1>
            </Link>
          </div>
          <nav className="column is-flex is-justify-content-end">
            <NavLink className="is-primary" to="/">
              Home
            </NavLink>
            <NavLink className="is-primary" to="/prayer-request">
              Prayer Request
            </NavLink>
          </nav>
        </div>
      </header>
      <main className="mb-5">
        <Outlet />
      </main>
      <footer className="footer py-2 mt-5">
        <p className="has-text-centered">
          Copyright &copy; {currentYear} - Created By:{" "}
          <a href="#">HE&gt;i Ministries</a>
        </p>
      </footer>
    </div>
  );
}
