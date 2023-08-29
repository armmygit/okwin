import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className='font-poppins font-semibold xs:text-[38px] text-[30px] text-white xs:leading-[66.8px] leading-[56.8px] w-full'>
        Mission & Value</h2>
      <p className={`${styles.paragraph} max-w-[720px] mt-5`}>
      At Xuzzi Asia, our mission is to bridge the gap between people and technology.
      We strive to make complex technology intuitive and accessible, enabling individuals of all backgrounds to harness its potential and enrich their daily experiences.
      </p>
    </div>

    {/* <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div> */}
  </section>
);

export default CTA;
