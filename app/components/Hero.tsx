import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="grid grid-cols-2">
      <Image src="/upskai.png" width={300} height={300} priority alt="upskai" />
      <section >
        <h1>Hi I’m Upskai</h1>
        <h1>Let’s start your flexible journey!</h1>
      </section>
    </div>
  );
};

export default Hero;
