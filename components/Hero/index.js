import Image from "next/image";
import Link from "next/link";
import SocialMedia from "../../services/socialMedia.json";

export default function Hero() {
  const data = SocialMedia;
  return (
    <div className="mx-auto flex pt-16 pb-16 lg:pb-20 lg:px-20 md:px-16 sm:px-8 px-8 lg:flex-row flex-col">
      <div className="lg:flex-grow lg:w-1/2 flex flex-col justify-center lg:items-start lg:text-left mb-3 md:mb-12 lg:mb-0 items-center text-center">
        <h1 className="text-white sm:text-5xl lg:text-6xl text-4xl mb-5 font-semibold">
          Hello World!
        </h1>
        <p className="text-base text-slate-400 font-light leading-6 tracking-wide mb-12 lg:mb-20">
          I am{" "}
          <span className="text-indigo-600 font-medium">Gusman Wijaya</span>, I
          am a{" "}
          <span className="text-indigo-600 font-medium">web developer</span>
          . Are you looking for someone who can build a website?
          <br className="sm:block hidden" />{" "}
          {`Don't worry because I am here to
          help you`}
        </p>
        <div
          className="md:flex contents items-center mx-auto lg:mx-0 lg:flex justify-center lg:space-x-8 md:space-x-2 space-x-0"
          data-aos="zoom-in"
        >
          <Link href="#project">
            <a
              type="button"
              className="btn border-none bg-indigo-600 hover:bg-indigo-700 shadow-xl shadow-indigo-600/30 capitalize px-6 py-3"
            >
              See His Work
            </a>
          </Link>
        </div>
        <div className="mt-14">
          <div className="grid grid-flow-col gap-4">
            {data.map((value, index) => (
              <a
                key={index}
                href={value.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={value.icon}
                  width={24}
                  height={24}
                  alt={value.nama}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* START: Image in desktop */}
      <div
        className="w-full lg:w-1/2 hidden lg:flex text-center justify-center pr-0"
        data-aos="zoom-in"
      >
        <Image
          className="absolute object-fit"
          src="/foto-jaya.png"
          width={375}
          height={550}
          alt="Jaya's Photo"
        />
      </div>
      {/* END: Image in desktop */}

      {/* START: Image in mobile */}
      <div
        className="w-full flex lg:hidden text-center justify-center mt-4"
        data-aos="zoom-in"
      >
        <Image
          className="absolute object-fit"
          src="/foto-jaya.png"
          width={250}
          height={350}
          alt="Jaya's Photo"
        />
      </div>
      {/* END: Image in mobile */}
    </div>
  );
}
