import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex justify-center p-5 mt-20 text-sm text-white md:justify-end md:text-base">
      <div className="md:flex md:justify-end">
        <nav className="flex flex-col-reverse justify-center text-center align-middle md:flex-row md:gap-5">
          <a
            href="https://webpangolin.com"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            Built with passion By Web Pangolin
          </a>
          <NavLink to="/privacy">Privacy Policy</NavLink>
          <NavLink to="terms">Terms Of Service</NavLink>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
