import React, { useState } from "react";
import {CustomerReviews, Footer, Hero, PopularProducts, Services, SpecialOffer, Subscribe, SuperQuality}  from "./Components/"
import Nav from "./Components/Nav";

const App: React.FC = () => {
const [isBlurred, setIsBlurred] = useState(false)
  const [showNavLinks, setShowNavLinks] = useState(false);

  const handleShowNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };

const toggleBlur = ()=> {
setIsBlurred(!isBlurred)
console.log('clicked me')
}



  return (
    <main className={`relative `}>
      <Nav handleBlur={toggleBlur} blur={isBlurred} handleShowNavLinks={handleShowNavLinks} showNavLinks={showNavLinks} />
      <Hero handleBlur={toggleBlur} blur={isBlurred} />
      <section className="xl:padding-1 wide:padding-r padding-b">Hero</section>
      <section className="padding ">
        <PopularProducts />
      </section>
      <section className="padding ">
        {" "}
        <SuperQuality />{" "}
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding ">
        <SpecialOffer />
      </section>
      <section className="padding bg-pale-blue ">
        <CustomerReviews />{" "}
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="padding-x padding-t bg-black pb-8 ">
        <Footer />
      </section>
    </main>
  );
};

export default App;
