import Blog from "../pages/blog";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import type { FC } from "react";
import { Route, Routes } from "react-router-dom";

const Root: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Route>
    </Routes>
  );
};

export default Root;
