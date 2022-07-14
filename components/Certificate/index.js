import React from "react";
import CertificateJson from "../../services/certificates.json";
import CertificateItem from "./Item";

const Certificate = () => {
  return (
    <div id="certificates" className="w-full" data-aos="fade-up">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Certificates
        </p>
        <h2 className="py-4">What Have I Got</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {CertificateJson.length > 0 &&
            CertificateJson.map((value) => (
              <CertificateItem
                key={value?.id}
                title={value?.name}
                backgroundImg={value?.img}
                date={value?.date}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Certificate;
