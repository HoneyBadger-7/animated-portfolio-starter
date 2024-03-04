import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <div className="wrapper">
      <h1>
            <a href="index.html">
              <span class= "fa-solid fa-code" aria-hidden="true"> </span>
              <span>Mansi </span>
            </a>
          </h1>
        <div className="social">
          <nav>
          <a
            href="https://www.linkedin.com/in/mansi-shukla-31733517a/"
            target="_blank"
          >
            <span class="fab fa-linkedin " aria-hidden="true"></span>
            <span class="sr-only">LinkedIn</span>
          </a>

          <a href="https://github.com/HoneyBadger-7" target="_blank">
            <span class="fab fa-github-square" aria-hidden="true">
              {" "}
            </span>
            <span class="sr-only">Github </span>
          </a>

          <a href="mailto:mansishukla771512@gmail.com" target="_blank">
            <span class="fa-solid fa-square-envelope" aria-hidden="true"></span>
            <span class="sr-only">Email</span>
          </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
