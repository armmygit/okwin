import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero, DefaultCarousel } from "./components";

const App = () => (

  //overflow-hidden
  <div className="  bg-dimWhite w-full overflow-hidden">

    {/* <div className='fixed top-0 z-10 bg-slate-700 '> */}
    <div className={`fixed top-0 z-10 ${styles.flexCenter}${styles.paddingX} ${styles.boxWidth} bg-white`}>
      {/* <div className={`${styles.boxWidth}`}> */}
      <Navbar />
      {/* <header>
        <ul className="list-none flex justify-center gap-4">
          <li className="p-2">Home</li>
          <li className="p-2">Blog</li>
          <li className="p-2">About</li>
          <li className="p-2">Contact</li>
        </ul>
      </header> */}
      {/* </div> */}
    </div>

    {/* <nav className={`${styles.paddingX} ${styles.flexCenter} bg-white `}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </nav> */}

    {/* h-[calc(100vh-34px)] */}
    <div className={`bg-orange-300 flex w-full h-screen `}>
      {/* <Hero /> */}
       {/* <Carousel /> */}
      <DefaultCarousel />
      </div>
     
    {/* </div> */}
    {/* bg-orange-300 flex w-full h-screen */}
    <div className={`bg-primary ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
      {/* <DefaultCarousel /> */}
        {/* <Carousel /> */}
        {/* <Stats /> */}
        {/* <Business /> */}
        {/* <Billing /> */}
        {/* <CardDeal /> */}
        {/* <Testimonials /> */}
        {/* <Clients /> */}
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
