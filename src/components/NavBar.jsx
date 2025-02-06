import bibleLogo from "/bible.svg";
const NavBar = () => {
  return (
    <header className="py-4">
      <div className="columns">
        <div className="column has-text-centered">
          <a
            className="is-flex is-align-items-center is-justify-content-center is-flex-direction-row"
            href="/"
          >
            <img src={bibleLogo} className="logo" alt="Bible App logo" />{" "}
            <h1 className="title is-5">Digital King James Bible</h1>
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
