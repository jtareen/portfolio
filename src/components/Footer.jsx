import Logo from "../assets/Logo.png";
import Discord from "../assets/icons/Discord.svg";
import Github from "../assets/icons/Github.svg";
import Linkedin from "../assets/icons/Linkedin.svg";

const Footer = () => {
  return (
    <footer className="border-t border-gray/20 pt-[32px] pb-[32px] px-4 md:px-20 lg:px-30 xl:px-40">
      <div className="flex flex-col sm:flex-row justify-between">
        <div>
          <div className="flex">
            <img src={Logo} alt="Logo" className="w-[16px] h-[16px]" />
            <h2 className="text-white text-[16px] font-medium pl-[9px] pr-[24px]">
              JTareen
            </h2>
            <p className="text-gray text-[16px] font-regular">
              jtareen440@gmail.com
            </p>
          </div>
          <p className="text-gray text-[16px] font-regular mt-[16px]">
            Full-Stack and Machine Learning developer
          </p>
        </div>

        <div>
          <h2 className="text-white text-[24px] text-center sm:text-left font-medium mt-8 sm:mt-0 sm:ml-3">
            Media
          </h2>
          <div className="flex justify-center">
            <button
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/jawad-tareen-22349a145/",
                  "_blank",
                )
              }
            >
              <img
                src={Linkedin}
                alt="Linkedin"
                className="w-[32px] h-[32px] m-2 cursor-pointer"
              />
            </button>
            <button
              onClick={() =>
                window.open("https://github.com/jtareen", "_blank")
              }
            >
              <img
                src={Github}
                alt="Github"
                className="w-[32px] h-[32px] m-2 cursor-pointer"
              />
            </button>
            <button>
              <img
                src={Discord}
                alt="Discord"
                className="w-[32px] h-[32px] m-2 cursor-pointer"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="pt-[48px]">
        <p className="text-center text-gray text-[16px] font-regular">
          © Copyright 2025. Made by JTareen
        </p>
      </div>
    </footer>
  );
};

export default Footer;
