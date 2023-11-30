import React from "react";
import Button from "./Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "./ShoeCard";

type Props = {
    handleBlur :(event: React.MouseEvent) => void;
    blur : boolean;
}

const Hero: React.FC<Props> = ({handleBlur, blur}) => {
  return (
    <section
      className={`w-full flex p-2 xl:flex-row flex-col justify-center min-h-screen gap-10 max-container ${ blur ? "blur-effect transition-effect" : ""}`}
      id="home"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="capitalize text-xl font-montserrat text-coral-red" onClick={handleBlur}>
          our summer collections
        </p>
        <h1 className="capitalize mt-10 font-palanquin text-8xl max-sm: text-[72px] max-sm: leading-[82px] font-bold">
          <span className="capitalize xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            the new arrival
          </span>
          <br />
          <span className="capitalize text-coral-red inline-block mt-3 pr-3">
            Nike
          </span>
          Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover Stylish Nike arrivals, quality comfort, and innovation for
          your active life
        </p>
        <Button label="Shop Now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, i) => (
            <div key={i}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className=" leading-7 text-coral-red montserrat">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-1 relative items-center justify-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img src={bigShoe1} alt="image of shoe" width={500} height={500} className="z-10 object-contain relative"/>
        <div className="flex">
            {shoes.map((shoe, i) => (
                <div key={i}>
<ShoeCard imgUrl={shoe.bigShoe} changeBigShoeImage={'s'} bigShoeImage={shoe.thumbnail} />
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
