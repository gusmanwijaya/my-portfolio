/* eslint-disable @next/next/no-img-element */
import React from "react";

const ProjectItem = ({ title, backgroundImg, projectUrl, data }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <img
        className="rounded-xl object-cover object-center group-hover:opacity-10"
        src={backgroundImg}
        alt="Project Image"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center mb-2">
          {title}
        </h3>
        {data && (
          <div className="space-y-1 mb-4">
            <p className="text-white text-center">
              {data?.credential.includes("@") ? "Email" : "Username"} :{" "}
              {data?.credential}
            </p>
            <p className="text-white text-center">
              Password : {data?.password}
            </p>
          </div>
        )}
        <a href={projectUrl} target="_blank" rel="noreferrer">
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            See
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
