import React from "react";
import Image from "next/image";
import SkillsJson from "../../services/skills.json";

const Skill = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2" data-aos="fade-up">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {SkillsJson.length > 0 &&
            SkillsJson.map((value) => (
              <div
                key={value?.id}
                className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
              >
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <Image
                      src={value?.src}
                      width="64px"
                      height="64px"
                      alt={value?.name}
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3 className="text-xs md:text-base">{value?.name}</h3>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
