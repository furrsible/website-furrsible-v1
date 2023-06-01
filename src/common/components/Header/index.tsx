import { useState, useEffect } from 'react';
import Image from '../Image';
import Link from '../Link';
import logo from '../../images/logo.svg';
const Header = () => {
  const [scrollY, setScrollY] = useState<number | null>(window.scrollY);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    window.addEventListener(`scroll`, () => {
      setScrollY(window.scrollY);
    });

    return () => {
      window.removeEventListener(`scroll`, () => {
        setScrollY(null);
      });
    };
  }, []);

  function toggleIcon() {
    if (clicked) {
      setClicked(false);
    } else {
      setClicked(true);
    }
  }

  return (
    <header
      className={`w-10/12 mx-auto flex justify-between items-center py-8 fixed bg-transparent left-0 right-0 top-0 z-20 transition-all duration-[2000ms] ${
        scrollY! < 30 ? `opacity-1 visible` : `opacity-0 invisible`
      }`}
    >
      <Image src={logo} alt="Logo" className="max-w-auto inline-block" />

      <nav className="hidden md:block">
        <ul className="flex gap-x-4">
          <li>
            <Link to="https://instagram.com" className="nav-text">
              Instagram
            </Link>
          </li>
          <li>
            <Link to="https://facebook.com" className="nav-text">
              Facebook
            </Link>
          </li>
          <li>
            <Link to="https://twitter.com" className="nav-text">
              Twitter
            </Link>
          </li>
          <li>
            <Link to="https://linkedin.com" className="nav-text">
              Linkedin
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="md:hidden">
        <button>
          <svg
            width="25"
            height="20"
            viewBox="0 0 25 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${clicked ? `active` : ``}`}
            onClick={toggleIcon}
          >
            <path
              d="M2.02539 2.18622H30.6939"
              stroke="url(#paint0_linear_228_3808)"
              strokeWidth="2.41096"
              className="transition-all duration-300"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.02539 17.8337H30.6939"
              stroke="url(#paint1_linear_228_3808)"
              className="transition-all duration-300"
              strokeWidth="2.41096"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_228_3808"
                x1="0.58915"
                y1="2.14466"
                x2="0.597939"
                y2="3.30555"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0.8" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_228_3808"
                x1="0.58915"
                y1="17.7921"
                x2="0.597939"
                y2="18.953"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0.8" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;
