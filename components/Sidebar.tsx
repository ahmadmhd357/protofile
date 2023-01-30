import React from "react";
import {
  AiOutlineDownload,
  AiFillLinkedin,
  AiFillGithub,
  AiFillFacebook,
} from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { useTheme } from 'next-themes'
function sidebar() {

  const {theme,setTheme}= useTheme()

  const changeTheme = ()=>{
    setTheme(theme == 'light'?'dark':'light')
  }
    return (
    <div>
      <img
        src="/images/profile.jpg"
        alt="profile-img"
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h1 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        {" "}
        <span className="text-green">AHMAD</span> AL-HARIRI
      </h1>
      <p className="px-2 py-1 font-semibold my-3 bg-gray-200 rounded-full dark:bg-stone-600">
        FrontEnd Developer
      </p>
      <a
        href="#"
        download="name"
        className="flex items-center hover:scale-110 ease-in duration-500 justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-stone-600"
      >
        <AiOutlineDownload className="w-6 h-6 mx-2" /> Download Resume
      </a>
      {/* //social icons */}
      <div className="flex justify-around w-9/12 mx-auto my-5 md:w-full text-green">
        <a href="#">
          <AiFillFacebook className="w-8 h-8 cursor-pointer hover:scale-110 ease-in duration-500" />
        </a>
        <a href="#">
          <AiFillGithub className="w-8 h-8 cursor-pointer hover:scale-110 ease-in duration-500" />
        </a>
        <a href="#">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer hover:scale-110 ease-in duration-500" />
        </a>
      </div>
      {/* address */}
      <div
        className="py-5 my-4 bg-gray-200 dark:bg-stone-600"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <ImLocation />
          <span> Bursa,Turkey</span>
        </div>
        <p className="my-2">ahmadmhd357@gmail.com</p>
        <p className="my-2">+905050917462</p>
      </div>
      <button onClick={()=>window.open('mailto:ahmadmhd357@gmail.com')} className="w-8/12 hover:scale-110 ease-in duration-500 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400">
        Email Me
      </button>
      <button onClick={changeTheme} className="w-8/12 hover:scale-110 ease-in duration-500 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400">
        Light UI
      </button>
    </div>
  );
}

export default sidebar;
