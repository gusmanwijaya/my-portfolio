/* eslint-disable @next/next/no-img-element */
import React from "react";

const CertificateItem = ({ title, backgroundImg, date }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <img
        className="rounded-xl object-cover object-center group-hover:opacity-10"
        src={backgroundImg}
        alt="Certificate Image"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center mb-2">
          {title}
        </h3>
        <p className="text-white text-center">{date}</p>
      </div>
    </div>
  );
};

export default CertificateItem;
