import { IconBuildingChurch } from "@tabler/icons-react";
import bibleLogo from "/bible.svg";
const NavBar = () => {
  return (
    <div>
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src={bibleLogo} className="logo" alt="Bible App logo" /> Holy
            Bible App
            {/* <IconBuildingChurch color="lightblue" size="64" /> <strong>Holy Bible App</strong> */}
          </a>
          {/* <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a> */}
        </div>
        <div id="navbarBasicExample" className="navbar-menu navbar-end">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Submit Prayer Request</strong>
                </a>
                {/* <a className="button is-light">Log in</a> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
