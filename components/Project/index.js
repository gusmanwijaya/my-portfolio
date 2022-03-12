import Image from "next/image";
import ProjectJson from "../../services/project.json";

export default function Project() {
  return (
    <>
      <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
        The work he has completed
      </h2>
      <h2 className="my-14 lg:my-20 text-white font-normal text-lg lg:text-xl text-center">
        Fullstack Website <br className="lg:hidden" /> (Back-end & Front-end)
      </h2>
      {ProjectJson?.fullstack.map((value, index) => (
        <div key={index} className="card lg:mb-16 lg:card-side">
          <a href={value?.url} target="_blank" rel="noopener noreferrer">
            <figure data-aos="zoom-in">
              <Image
                src={value?.img}
                width={500}
                height={300}
                className="object-center"
                alt={value?.nama}
              />
            </figure>
          </a>

          {/* START: Desktop */}
          <div className="card-body lg:block hidden">
            <h2 className="card-title text-slate-400 mb-4">{value?.nama}</h2>
            <a href={value?.url} target="_blank" rel="noopener noreferrer">
              <p className="text-slate-500">{value?.url}</p>
            </a>
            {value?.data && (
              <p className="mt-8 text-slate-600">
                {value?.data?.email
                  ? `Email : ${value?.data?.email}`
                  : `Username : ${value?.data?.username}`}{" "}
                <br />
                Password : {value?.data?.password}
              </p>
            )}
          </div>
          {/* END: Desktop */}

          {/* START: Mobile */}
          <div className="flex flex-col lg:hidden mt-2 mb-16 space-y-1">
            <h2 className="text-slate-400 text-center">{value?.nama}</h2>
            <a href={value?.url} target="_blank" rel="noopener noreferrer">
              <p className="text-slate-500 text-center truncate">
                {value?.url}
              </p>
            </a>
            {value?.data && (
              <p className="text-slate-600 text-center">
                {value?.data?.email
                  ? `Email : ${value?.data?.email}`
                  : `Username : ${value?.data?.username}`}{" "}
                <br />
                Password : {value?.data?.password}
              </p>
            )}
          </div>
          {/* END: Mobile */}
        </div>
      ))}

      <h2 className="my-14 lg:my-20 text-white font-normal text-lg lg:text-xl text-center">
        Front-end Website
      </h2>
      {ProjectJson?.frontend.map((value, index) => (
        <div key={index} className="card lg:mb-16 lg:card-side">
          <a href={value?.url} target="_blank" rel="noopener noreferrer">
            <figure data-aos="zoom-in">
              <Image
                src={value?.img}
                width={500}
                height={300}
                className="object-center"
                alt={value?.nama}
              />
            </figure>
          </a>

          {/* START: Desktop */}
          <div className="card-body lg:block hidden">
            <h2 className="card-title text-slate-400 mb-4">{value?.nama}</h2>
            <a href={value?.url} target="_blank" rel="noopener noreferrer">
              <p className="text-slate-500">{value?.url}</p>
            </a>
          </div>
          {/* END: Desktop */}

          {/* START: Mobile */}
          <div className="flex flex-col lg:hidden mt-2 mb-16 space-y-1">
            <h2 className="text-slate-400 text-center">{value?.nama}</h2>
            <a href={value?.url} target="_blank" rel="noopener noreferrer">
              <p className="text-slate-500 text-center truncate">
                {value?.url}
              </p>
            </a>
          </div>
          {/* END: Mobile */}
        </div>
      ))}
    </>
  );
}
