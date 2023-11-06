import React, { useState } from "react";
import popcorn from "../../../public/auth/popcorn.jpg";
import Image from "next/image";
import Link from "next/link";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}, Name: ${name}`);
  };

  return (
    <div className="bg-[#641624] px-24  py-8 ">
      <div className="bg-white font-serif   p-6  justify-between items-center flex rounded-3xl text-black">
        <div className="">
          <h2 className="font-bold text-[#e8617a] text-2xl">
            Create New Account
          </h2>
          <p className="text-sm font-semibold">
            Fill your details and let&apos;s get started!
          </p>
          <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <div className="mb-4 mt-1">
              <input
                className="h-12 p-4 shadow-sm shadow-[#641624]  rounded-sm "
                type="text"
                value={name}
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <label>Email:</label>
            <div className="mb-4 mt-1">
              <input
                className="h-12 p-4  shadow-sm shadow-[#641624]  rounded-sm "
                type="email"
                value={email}
                placeholder="Something@example.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <label>Password:</label>
            <div className="mb-4 mt-1">
              <input
                className="h-12 p-4   shadow-[#641624] shadow-sm   rounded-sm "
                type="password"
                value={password}
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <label className="text-base">
              <input
                className="h-5 w-4 text-[#FF0000] form-checkbox border-[#FF0000] checked:bg-[#FF0000] checked:border-[#FF0000] checked:text-white"
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              I agree with the terms and conditions
            </label>
            <button
              type="submit"
              className="bg-[#e8617a] text-lg font-bold mt-2 text-white w-60 h-12 rounded-md"
            >
              Sign Up
            </button>
            <div className="mt-2 font-medium text-base">
              Already have an account?{" "}
              <Link href={"/auth/sign-in"}>
                <span className="text-[#e8617a]">Login</span>
              </Link>
            </div>
          </form>
        </div>
        <div className="">
          <Image
            // height={00}
            width={600}
            src={popcorn}
            className=" md:block sm:hidden rounded-r-xl  "
            alt="popcorn"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
