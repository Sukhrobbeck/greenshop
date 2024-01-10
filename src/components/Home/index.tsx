import type { FC } from "react";
import Hero from "./Hero";
import MainCategories from "./MainCategories";

const Home: FC = () => {
  return (
    <div className="w-[80%] m-auto max-sm:w-[95%]">
      <Hero />
      <MainCategories />
    </div>
  );
};

export default Home;
