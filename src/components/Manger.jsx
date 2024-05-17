import React from "react";
import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

import "react-toastify/dist/ReactToastify.css";
const Manger = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([]);
  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpasswordArray(JSON.parse(passwords));
    }
  }, []);

  const showPassword = () => {
    passwordRef.current.type = "password";
    if (ref.current && ref.current.src) {
      // Change the source based on your condition
      if (ref.current.src.includes("/icons/hide.png")) {
        ref.current.src = "/icons/eye.png";
        passwordRef.current.type = "password";

        console.log(ref.current.src);
      } else {
        ref.current.src = "/icons/hide.png";
        passwordRef.current.type = "text";
      }
    }
  };
  const savePassword = () => {
    console.log(form);
    const newPasswordArray = [...passwordArray, { ...form, id: uuidv4() }];
    setpasswordArray(newPasswordArray);
    localStorage.setItem("passwords", JSON.stringify(newPasswordArray));
    setform({ site: "", username: "", password: "" });
  };
  const editPassword = (id) => {
    console.log("edit password with id:" + id);
    setform(passwordArray.filter((i) => i.id === id)[0]);
    setpasswordArray(passwordArray.filter((item) => item.id !== id));
  };
  const deltePassword = (id) => {
    
    console.log("deleting password with id:" + id);
    let c = confirm("Do you want to really delete the password?");
    if (c) {
      setpasswordArray(passwordArray.filter((item) => item.id !== id));
      localStorage.setItem =
        ("passwords",
        JSON.stringify([passwordArray.filter((item) => item.id !== id)]));
        toast("🦄 Delete password successfully!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
    }
    console.log([...passwordArray, form]);
  };
  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  const copytext = (text) => {
   
    navigator.clipboard.writeText(text);
    toast("🦄 Copy to clipboard!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />
      {/* Same as */}
      <ToastContainer />
      <div>
        <div className="absolute inset-0 -z-10 h-full w-full items-center  px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      <div className=" p-2 md:p-0 md:mycontainer">
        <div className="container mx-auto bg-slate-600 py-6  text-white mycontainer flex  flex-col   justify-center items-center   ">
          <div className="heading text-center text-3xl">
            <span className="text-green-700">&lt;</span>
            Paas
            <span className="text-green-700">Op/&gt;</span>
          </div>
          <p className="text-center text-white text-lg ">
            Your Password manager here
          </p>
          <div className="flex flex-col text-white  p-2 gap-8 w-full justify-center items-centers">
            <input
              value={form.site}
              onChange={handleChange}
              className="rounded-full border border-green-700 text-black px-4 py-1 w-full"
              type="text"
              name="site"
              id="site"
              placeholder="Enter website url"
            />
            <div className="flex flex-col md:flex-row  gap-8  w-full  justify-between ">
              <input
                value={form.username}
                onChange={handleChange}
                className=" border border-green-700 text-black px-4 py-1 rounded-full w-full"
                type="text"
                name="username"
                id="username"
                placeholder="Username"
              />
              <input
                ref={passwordRef}
                value={form.password}
                onChange={handleChange}
                className="border border-green-700 text-black px-4 py-1 rounded-full  w-100"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
              <span
                onClick={showPassword}
                className="relative text-white right-0 top-0 -left-20 flex items-center justify-center cursor-pointer md:relative -top-62 left-156"
              >
                <img
                  className=" md:relative -top-62 left-229"
                  ref={ref}
                  src="/icons/eye.png"
                  width={30}
                  alt=""
                />
              </span>
            </div>
          </div>
          <button
            onClick={savePassword}
            className="flex justify-center items-center bg-green-600  py-3 px-4 rounded-full w-fit m-auto"
          >
            <lord-icon
              src="https://cdn.lordicon.com/hqymfzvj.json"
              trigger="hover"
            ></lord-icon>
            Add password
          </button>
          <div className="passwords">
            <h1 className="py-4 font-bold">Your Passwrod is here</h1>
            {passwordArray.length === 0 && <div>No password show</div>}
            {passwordArray.length != 0 && (
              <table className="table-fixed w-full">
                <thead className="bg-green-800 text-white">
                  <tr>
                    <th>Site</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {passwordArray.map((item, index) => (
                    <tr key={index}>
                      <td className="  text-center ">
                        <div
                          className=" flex justify-center items-center p-2 gap-2"
                          onClick={() => {
                            copytext([item.site]);
                          }}
                        >
                          <a href={item.site} target="_blank">
                            {item.site}
                          </a>
                          <div className="size-7 cursor-pointer">
                            <img src="/icons/copy.gif" alt="" />
                          </div>
                        </div>
                      </td>
                      <td className=" text-center ">
                        <div
                          className=" flex justify-center items-center p-2 gap-2"
                          onClick={() => {
                            copytext([item.username]);
                          }}
                        >
                          {item.username}
                          <div className="size-7 cursor-pointer">
                            <img src="/icons/copy.gif" alt="" />
                          </div>
                        </div>
                      </td>
                      <td className="text-center ">
                        <div
                          className=" flex justify-center items-center p-2 gap-2"
                          onClick={() => {
                            copytext([item.password]);
                          }}
                        >
                          {item.password}
                          <div className="size-7 cursor-pointer">
                            <img src="/icons/copy.gif" alt="" />
                          </div>
                        </div>
                      </td>
                      <td className="text-center cursor-pointer ">
                        <span
                          className="mx-1"
                          onClick={() => {
                            deltePassword(item.id);
                          }}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/skkahier.json"
                            trigger="hover"
                            style={{ width: "25px", height: "25px" }}
                          ></lord-icon>
                        </span>
                        <span
                          className="mx-1"
                          onClick={() => {
                            editPassword(item.id);
                          }}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/ygnmvgzy.json"
                            trigger="hover"
                            style={{ width: "25px", height: "25px" }}
                          ></lord-icon>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Manger;
