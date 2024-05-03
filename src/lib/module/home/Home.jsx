import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import UsePurpose from "../components/UsePurpose";
import Providers from "../components/Providers";
import Blogs from "../components/blogs";
import BlogSection from "../components/BlogSection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <UsePurpose />
      <Providers/>
      <BlogSection/>
    </div>
  );
};

export default Home;
