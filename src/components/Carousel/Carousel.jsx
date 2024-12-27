"use client";

import React from "react";
import styles from "./Carousel.module.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const Carousel = () => {
  const products = [
    {
      image: "/images/furniture-1.png",
      name: "Congo Dining Table Ø80h",
      code: "Product code: CONGODIN80-RC",
    },
    {
      text1: "Browse through",
      text2: "CUSTOMERS FAVORITES",
      text3: "and get inspired",
    },
    {
      image: "/images/furniture-2.png",
      name: "Sotho Dining Chair",
      code: "Product code: SOTHODC-RC",
    },
    {
      image: "/images/furniture-3.png",
      name: "Luggage Rack 1",
      code: "Product code: LUGGRACK1",
    },
    {
      image: "/images/furniture-4.png",
      name: "Astor Wall Lamp Ant. Black",
      code: "Product code: ASTORWLAB",
    },
  ];

  return (
    <div className="position-relative">
      {/* Navigation Arrow */}
      <div className="position-absolute w-100 h-100 top-0 d-none d-lg-flex justify-content-between align-items-center">
        <button type="button" className="btn btn-outline-light border-0">
          <ChevronLeft size={40} color="black" />
        </button>
        <button type="button" className="btn btn-outline-light border-0">
          <ChevronRight size={40} color="black" />
        </button>
      </div>

      <div className="bg-white col-2 text-center w-100 d-flex d-lg-none flex-column justify-content-center align-items-center text-primary">
        <p>Browse through</p>
        <h2>CUSTOMERS FAVORITES</h2>
        <p>and get inspired</p>
      </div>
      <div className="d-flex justify-content-center gap-3">
        {products.map((product, index) => {
          if (index === 1) {
            return (
              <div
                key={index}
                className={`${styles.bannerImageContainer} bg-white col-2 d-none d-lg-flex flex-column justify-content-center align-items-center text-primary`}
              >
                <p>Browse through</p>
                <h2>CUSTOMERS FAVORITES</h2>
                <p>and get inspired</p>
              </div>
            );
          } else {
            return (
              <div
                key={index}
                className="d-flex flex-column align-items-center justify-content-center"
              >
                <div className={`${styles.bannerImageContainer} mb-2`}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    className={styles.bannerImage}
                    fill
                  />
                </div>
                <p className="text-xs mb-2">{product.name}</p>
                <p className="text-gray text-xxs">{product.code}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Carousel;
