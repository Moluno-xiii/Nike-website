import { headerLogo } from "../assets/images";
import { hamburger, x_icon } from "../assets/icons";
import { navLinks } from "../constants";
import { useState, useEffect } from "react";

type Props = {
  handleBlur: () => void;
  handleShowNavLinks: () => void;
  blur: boolean;
  showNavLinks: boolean;
};

const Nav: React.FC<Props> = ({
  handleBlur,
  blur,
  showNavLinks,
  handleShowNavLinks,
}) => {
  const [noScroll, setNoScroll] = useState(false);

  const toggleNoScroll = () => {
    setNoScroll(!noScroll);
  };

  useEffect(() => {
    if (noScroll) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [noScroll]);

  return (
    <header className="padding-x py-8 z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={39} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden ">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray  hover:border-coral-red  hover:text-coral-red duration-100 hover:border-b-2"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <img
            src={showNavLinks ? x_icon : hamburger}
            alt="hamburger"
            width={25}
            height={25}
            className="lg:hidden"
            onClick={() =>
              setTimeout(() => {
                handleShowNavLinks();
                toggleNoScroll();
                handleBlur();
              }, 200)
            }
          />
          {/* add logic to hamburger icon  */}
        </div>
      </nav>
      {showNavLinks && (
        <div className="fixed w-2/4 z-[20] left-0 top-0">
          <ul className="flex flex-col items-center text-center w-full max-sm:w-full h-screen lg:hidden shadow-2xl bg-slate-50">
            {navLinks.map((item) => (
              <li key={item.label} className="mt-5 w-full">
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray hover:border-coral-red  hover:text-coral-red duration-300 border-b-2 block"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;

