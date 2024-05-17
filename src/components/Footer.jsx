import React from "react";

const Footer = () => {
  return (
    <>
      <div className=" flex  justify-center items-center py-7  bg-slate-800 w-100vw gap-4  text-lg  text-white font-mono  h-3/4">
        <div className="logo font-bold text-white  ">
          <span className="text-green-700">&lt;</span>
            Paas
          <span className="text-green-700">Op/&gt;</span>
          
        </div>
        <div className="flex " >Created with<img className="rounded" src="icons/love.png" alt="" width={30}/>
        by coderaza
        </div>

        </div>
     
    </>
  );
};

export default Footer;
