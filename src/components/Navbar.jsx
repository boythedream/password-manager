import React from "react";

const Navbar = () => {
  return (
    <nav className="  bg-slate-800 text-white text-lg">
      <div className="mycontainer flex justify-between items-center py-7 h-16">
        <div className="logo font-bold text-white">
          <span className="text-green-700">&lt;</span>
          Paas
          <span className="text-green-700">Op/&gt;</span>
        </div>
        
        <button className=" flex py-5 gap-4 justify-between items-center"> 
          <img  src="icons/github.png" alt="" width={25}/>
          Github
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
