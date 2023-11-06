import React from "react";
import Image from "next/image";
import { FiDownloadCloud } from "react-icons/fi";
import Link from "next/link";

const SignIn = () => {
  return (
    <div className="bg-[url('/auth/cinema.jpg')] pt-48 px-[450px] bg-cover h-screen">
      <div className="bg-[#e8617a] shadow-2xl  rounded-2xl flex p-4 flex-col items-center justify-center ">
        <div className="text-white text-center">
          <div className="flex gap-2">
            <FiDownloadCloud size={32} color="white" />
            <div className="font-poppins font-bold text-3xl mb-2 uppercase">
              Download
            </div>
          </div>
          <p className="font-semibold ">Enjoy the newest movies</p>
          <button className="bg-white mt-12 shadow-sm shadow-white text-[#e8617a] hover:border-[white] hover:border-2 hover:text-white hover:bg-[#e8617a] w-56 h-12 rounded-lg text-xl font-bold">
            Login
          </button>
          <div className="mt-1 font-semibold text-base">
            No account?{" "}
            <Link href="/auth/sign-up">
              <span className="text-[#22030d8a] underline ">Register</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
