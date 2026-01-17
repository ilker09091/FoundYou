import React from "react";
import SearchSection from "../components/SearchSection";
import { SiYoutube } from "react-icons/si";
import { FaDiscord, FaFacebook, FaGithub, FaTelegram } from "react-icons/fa";

function Home() {
  const datas = [
    {
      id: 1,
      icon: SiYoutube,
      name: "YouTube",
      color: "red",
    },
    {
      id: 2,
      icon: FaFacebook,
      name: "Facebook",
      color: "blue",
    },
    {
      id: 3,
      icon: FaGithub,
      name: "Github",
      color: "black",
    },

    {
      id: 4,
      icon: FaDiscord,
      name: "Discord",
      color: "blue",
    },
  ];
  return (
    <div className=" h-screen flex flex-col items-center justify-center gap-4 pb-42">
      <img className="w-62 md:w-72" src="/images/Google-logo.png" alt="" />
      <SearchSection />
      <div className="flex flex-wrap  justify-center md:justify-between ">
        {datas.map(({ id, icon: Icon, name, color }) => (
          <div
            key={id}
            className="flex flex-col items-center p-4 hover:bg-gray-200 rounded cursor-pointer md:w-1/4"
          >
            <Icon
              className={`w-12 h-12 bg-gray-200  rounded-full p-4 text-${color}-600`}
            />
            <p className="text-center text-sm mt-2">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
