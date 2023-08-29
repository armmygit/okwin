import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (

    <div id="home" className={`w-full h-full  bg-[url('../src/assets/hero2.png')] bg-cover bg-center `}>
      {/* <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}> */}
        {/* <div className="section-bg" > */}
        <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        {/* <video className="min-w-full min-h-full absolute object-cover" src="https://cuono.dev/video1.mp4" type="video/mp4" autoPlay muted loop></video> */}
      
        {/* </div> */}
        </div>
        {/* <h1 className="font-poppins font-semibold text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Xuzzi
        </h1> */}
      {/* </div> */}

    </div>


    // <section id="home" className={`  flex-col ${styles.paddingY} bg-[url('../src/assets/hero2.png')] bg-cover bg-center flex justify-center items-center `}>
    //   {/* <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}> */}

    //   {/* We strive to create a society that is empowered, connected, and enriched by technology's transformative potential. */}

    //     <h1 className="font-poppins font-semibold text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
    //     Xuzzi
    //     </h1>

    //     <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
    //     We strive to create a society that is empowered, connected, and enriched by technology's transformative potential.
    //     </p>

    //   {/* </div> */}

    //   {/* <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
    //     <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />


    //     <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
    //     <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
    //     <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />

    //   </div> */}


    //   {/* <div className={`ss:hidden ${styles.flexCenter}`}>
    //     <GetStarted />
    //   </div> */}

    // </section>

  );
};

export default Hero;
