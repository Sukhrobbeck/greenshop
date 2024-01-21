import type { FC } from "react";
import Hero from "./Hero";
import MainCategories from "./MainCategories";
import Footer from "../Footer";

const Home: FC = () => {
  return (
    <div>
      <div className="w-[80%] m-auto max-sm:w-[95%]">
        <Hero />
        <MainCategories />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
