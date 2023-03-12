import React from "react";
import ProjectJson from "../../services/projects.json";
import ProjectItem from "./Item";

const Project = () => {
  return (
    <div id="projects" className="w-full" data-aos="fade-up">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <p className="uppercase text-sm tracking-widest text-gray-600 text-center py-4">
          Fullstack Website
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {ProjectJson.fullstack.length > 0 &&
            ProjectJson.fullstack.map((value) => (
              <ProjectItem
                key={value?.id}
                title={value?.name}
                backgroundImg={value?.img}
                projectUrl={value?.url}
                data={value?.data}
              />
            ))}
        </div>
        <div className="h-14" />
        <p className="uppercase text-sm tracking-widest text-gray-600 text-center mt-10 py-4">
          Front-end Website
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {ProjectJson.frontend.length > 0 &&
            ProjectJson.frontend.map((value) => (
              <ProjectItem
                key={value?.id}
                title={value?.name}
                backgroundImg={value?.img}
                projectUrl={value?.url}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
