import CertificateJson from "../../services/certificate.json";
import Image from "next/image";

export default function Certificate() {
  return (
    <>
      <div className="max-w-7xl">
        <div className="max-w-2xl mx-auto lg:max-w-none">
          <h2 className="text-2xl font-extrabold text-indigo-600">{`Gusman Wijaya's Certificate`}</h2>

          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-12">
            {CertificateJson.map((certificate) => (
              <div key={certificate.id} className="group relative mb-6 lg:mb-0">
                <a
                  href={certificate.img}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="relative w-full h-80 bg-slate-900 rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1"
                    data-aos="zoom-in"
                  >
                    <Image
                      src={certificate.img}
                      alt={certificate.nama}
                      layout="fill"
                      className="object-center object-contain"
                    />
                  </div>
                  <h3 className="text-sm text-gray-500 mb-1">
                    <span className="absolute inset-0" />
                    {certificate.date}
                  </h3>
                  <p className="text-base font-semibold text-gray-400">
                    {certificate.nama}
                  </p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
