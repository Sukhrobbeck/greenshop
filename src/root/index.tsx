import Blog from "../pages/blog";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import type { FC } from "react";
import { Route, Routes } from "react-router-dom";
import ModalVisibility from "../components/ModalVisibility";
import Shop from "../components/Shop";
import Footer from "../components/Footer";

const Root: FC = () => {
  return (
    <>
      <ModalVisibility />
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop/:category/:_id" element={<Shop />} />
          <Route path="/" element={<Footer />} />
        </Route>
      </Routes>
    </>
  );
};

export default Root;
