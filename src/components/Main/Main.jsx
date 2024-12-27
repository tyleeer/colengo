"use client";

import React from "react";
import CarouselGrid from "@/components/CarouselGrid/CarouselGrid";
import Carousel from "@/components/Carousel/Carousel";
import CustomerService from "@/components/CustomerService/CustomerService";

const Main = () => {
  return (
    <main className="container container-fluid section section-gap">
      <CarouselGrid />
      <CustomerService />
      <Carousel />
    </main>
  );
};

export default Main;
