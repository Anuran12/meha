import Image from "next/image";
import React from "react";
import Logo from "@/img/logo.png";
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex py-5 px-10 justify-center w-full items-center h-fit">
      <Image src={Logo} alt="Logo" className=" h-auto w-12" />
      {/* <div className="flex gap-5">
        <Link href={"/"} className="text-[#C7C7C7]">
          About Us
        </Link>
        <Link href={"/"} className="text-[#C7C7C7]">
          Docs
        </Link>
        <Link href={"/"} className="text-white">
          Join Waitlist
        </Link>
      </div> */}
    </div>
  );
}

export default Navbar;
