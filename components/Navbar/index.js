import Link from "next/link";
import { useRouter } from "next/router";
import HamburgerMenu from "../HumbergerMenu";

export default function Navbar() {
  const router = useRouter();
  return (
    <>
      {/* START: Destop */}
      <nav className="hidden md:flex items-center justify-between">
        <Link href="/" passHref>
          <a className="text-white">
            Gusman <span className="font-semibold text-indigo-600">Wijaya</span>
          </a>
        </Link>
        <ul className="flex items-center space-x-20 font-semibold">
          <li>
            <Link href="/">
              <a
                className={`${
                  router.pathname === "/"
                    ? "text-white hover:text-indigo-600"
                    : "text-indigo-600 hover:text-white"
                } transition-all duration-300 ease-in-out`}
              >
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/certificate">
              <a
                className={`${
                  router.pathname === "/certificate"
                    ? "text-white hover:text-indigo-600"
                    : "text-indigo-600 hover:text-white"
                } transition-all duration-300 ease-in-out`}
              >
                Certificate
              </a>
            </Link>
          </li>
        </ul>
        <a
          data-aos="zoom-in"
          type="button"
          href="https://wa.me/6281312397308/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn border-none bg-indigo-600 hover:bg-indigo-700 shadow-xl shadow-indigo-600/30 capitalize px-6 py-3"
        >
          Pay Him Now
        </a>
      </nav>
      {/* END: Desktop */}

      {/* START: Mobile */}
      <div className="flex md:hidden justify-between items-center w-full p-4">
        <Link href="/" passHref>
          <a className="text-white">
            Gusman <span className="font-semibold text-indigo-600">Wijaya</span>
          </a>
        </Link>
        <HamburgerMenu />
      </div>
      {/* END: Mobile */}
    </>
  );
}
