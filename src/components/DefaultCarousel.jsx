import React from 'react';
import { Button } from 'flowbite-react';
import { Carousel } from 'flowbite-react';
// import { Hero} from "components";
import styles from "../style";


export default function DefaultCarousel() {
  return (

    <Carousel slideInterval={5000} >
      <div id="home" className={`flex justify-center items-center w-full h-full  bg-[url('../src/assets/hero2.png')] bg-cover bg-center `}>

        <div className={`flex-col  h-24 `}>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center">
            Xuzzi Asia
          </h1>

          <p className={`${styles.paragraph} max-w-[470px] mt-5  text-center`}>
            We strive to create a society that is empowered, connected, and enriched by technology's transformative potential.      </p>
        </div>

      </div>

      {/* flex items-center justify-center */}
      <div id="home" className={`w-full h-full  flex items-center justify-center `}>

        {/* <div className="h-24 z-30  text-2xl text-white bg-purple-300 bg-opacity-50 text-center rounded-xl"  > */}
        <div className="items-end z-30  text-2xl  text-white text-center "  >

          {/* Xuzzi Asia 222 */}
          <p className={`${styles.paragraph} max-w-screen mt-60 mx-16  text-center`}>
            At Xuzzi Asia, we're on a mission to transform the way people experience and interact with technology. In a world where complexity can often be a barrier, we're here to bridge the gap, making cutting-edge technology intuitive, accessible, and enriching for individuals of all backgrounds.
          </p>
        </div>

        <video className="min-w-full min-h-full absolute object-cover" src="https://cuono.dev/video1.mp4" type="video/mp4" autoPlay muted loop></video>

      </div>


      <img
        alt="..."
        src="../src/assets/hero3.png"
      />

    </Carousel>



  )
}

