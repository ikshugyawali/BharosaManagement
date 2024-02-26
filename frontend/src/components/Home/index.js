import Hero from "../Hero";
import React from "react";
import Partners from "../Partner";
import AboutHome from "./about_home";
import Services from "../Services";
import TestimonialMain from "../Testimonials";
import { Helmet } from "react-helmet";
import FounderMessage from "./foundersmessage";

export default function Home(props) {
  return (
    <>
      <Helmet>
        <title>Home | Bharosa Management Consultancy</title>
      </Helmet>
      <Hero />
      <AboutHome />
      <FounderMessage />
      <Services />
      <Partners />
      {/*<Partners />
      <TestimonialMain />
      <BlogsHome /> */}
    </>
  );
}
