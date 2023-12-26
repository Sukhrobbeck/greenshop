import type { FC } from "react";
import Card from "./Card";
import { Carousel } from "antd";
import { hero_data } from "../../../utils";
const Hero: FC = () => {
  return (
    <div>
      <Carousel autoplay>
        {hero_data.map((value, index) => (
          <Card {...value} key={index} />
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
