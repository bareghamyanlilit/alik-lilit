"use client";
import Image from "next/image";
import { TimeBox } from "./TimeBox";
import { useEffect, useState } from "react";
import { MusicPlayer } from "./music";
import { anim, date, names, txt1, txt1_1, txt2, txt2_1, txt3, vazoxTox } from "@/data/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { Program } from "./Program";
import { Footer } from "./footer";

export function Home() {

  const [openEnvelope, setOpenEnvelope] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (openEnvelope) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  }, [openEnvelope]);

  return (
    <div
      className={`${openEnvelope ? "" : "relative h-screen"}  text-center overflow-hidden  FontSHK_Dzeragir text-vrayi `}
    >
      <div
        className={`${openEnvelope ? "animate-bounceYB" : ""} bg-center bg-cover z-51 w-[160vw] h-[160vw] rounded-4xl absolute left-1/2 top-[0%]  -translate-x-1/2 -translate-y-1/2 rotate-45  shadow-2xl `}
        style={{ backgroundImage: `url("/envelope.png")` }}
      ></div>
      <div
        className={`${openEnvelope ? "animate-bounceYT" : ""} bg-center bg-cover z-50 w-[160vw] h-[160vw] rounded-4xl absolute left-1/2 -bottom-[60%] -translate-x-1/2 -translate-y-1/2 rotate-45  `}
        style={{ backgroundImage: `url("/envelope.png")` }}
      ></div>
      <img
        src="/forenvelope.png"
        alt="envelop"
        onClick={() => setOpenEnvelope(true)}
        className={`${openEnvelope ? "opacity-0" : ""} transition-all duration-100  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  cursor-pointer  md:w-50 md:h-50 z-60 w-30 h-30 `}
      />
      {/* music button */}
      <div>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="fixed z-10 p-1  rounded-2xl bg-[#4a4a4a81]  right-7 top-7 w-15  h-15 flex justify-center items-center"
        >
          <Image
            src="/icon2.png"
            alt="icon1"
            width={500}
            height={500}
            className=" w-full p-2 object-contain "
          />
        </button>

        <MusicPlayer isPlaying={isPlaying} />
      </div>

      <div
        className="FontSHK_Dzeragir py-20  tracking-0 h-screen bg-cover bg-top flex flex-col justify-between pt-20 p-7 "
        style={{ backgroundImage: "url('/img1.jpg')" }}
      >
        <div className="flex items-center justify-center">
          <h2 className="text-[64px] mb-20 text-vrayi">{names[0]}</h2>
          <span className="text-9xl text-taki"> & </span>
          <h2 className="text-[64px] mt-20 text-vrayi">{names[1]}</h2>
        </div>
        <motion.p {...anim} className="FontSHK_Dzeragir -mb-10 text-[64px] text-vrayi">{date}</motion.p>
      </div>

      <div className="FontSHK_Dzeragir px-5 my-20">
        <motion.h3 {...anim} className=" text-sovorakan relative text-[36px]">
          Սիրելիներս
          <p className=" absolute -z-1 text-5xl top-3 left-1/2 -translate-x-1/2 text-taki">
            Սիրելիներս
          </p>
        </motion.h3>
        <motion.p
          {...anim}
          className=" text-sovorakan relative  text-2xl mt-10"
        >
          {txt1}
          <span className=" absolute w-[200%] -z-1 text-4xl -top-1 left-1/2 -translate-x-1/2 text-taki">
            {txt1_1}
          </span>
        </motion.p>
      </div>


      <div className="relative mb-50 mt-20">
        <Image
          src="/img2.jpg"
          alt="icon1"
          width={500}
          height={500}
          className="m-auto object-cover w-[60vw] h-70 "
        />
        <motion.div
          {...anim}
          className="-z-2 absolute w-full h-40 bg-guyn -bottom-20"
        ></motion.div>
        <motion.div
          {...anim}
          className="-z-1 absolute  w-[65vw] h-75 bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        ></motion.div>
      </div>

      <motion.p {...anim} className="FontSHK_Dzeragir text-vrayi font-normal text-3xl tracking-[25%] text-center ">
        {txt3}
      </motion.p>

      <TimeBox />

      <Program />

      <motion.p
        {...anim}
        className=" my-20 text-sovorakan relative  text-2xl "
      >
        {txt2}
        <span className=" absolute w-[200%] -z-1 text-4xl -top-1 left-1/2 -translate-x-1/2 text-taki">
          {txt2_1}
        </span>
      </motion.p>

      <Footer />
    </div>
  );
}
