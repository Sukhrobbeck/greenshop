import type { FC } from "react";
import Hero from "./Hero";
import Dashboard from "./Dashboard";

const Home: FC = () => {
  return (
    <div className="w-[80%] m-auto">
      <Hero />
      <Dashboard />
    </div>
  );
};

export default Home;
