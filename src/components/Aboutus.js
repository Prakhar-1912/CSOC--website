import React from "react";
import logo from "../Images/csoc_logo.jpeg";
import Nith from "../Images/nith.png";
export const Aboutus = () => {
  return (
    <div
      className="flex flex-col justify-center items-center py-24  bg-zinc-100"
      id="aboutus"
    >
      <h1 className="text-6xl font-bold font-[Play]">About Us</h1>
      <p className="max-w-6xl my-16 px-6 py-4 border-solid-white border-2">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
        reproduced below for those interested. Sections 1.10.32 and 1.10.33 from
        "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their
        exact original form, accompanied by English versions from the 1914
        translation by H. Rackham
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        <img src={logo} className="h-36 md:h-48"/>
        {/* <img src={Nith} className="h-36 md:h-48"/> */}
      </div>
    </div>
  );
};