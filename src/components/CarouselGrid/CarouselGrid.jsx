"use client";

import React from "react";
import styles from "./CarouselGrid.module.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const CarouselGrid = () => {
  const gridImages = [
    { imgSrc: "/images/carousel-1.jpg", imgAlt: "carousel-1.jpg" },
    { imgSrc: "/images/carousel-2.jpg", imgAlt: "carousel-2.jpg" },
    { imgSrc: "/images/carousel-3.jpg", imgAlt: "carousel-3.jpg" },
    { imgSrc: "/images/carousel-4.jpg", imgAlt: "carousel-4.jpg" },
  ];
  return (
    <div className="row position-relative gap-2 gap-lg-4 justify-content-center">
      {/* Navigation Arrow */}
      <div className="position-absolute d-none d-lg-flex w-100 h-100 top-0 justify-content-between align-items-center">
        <button type="button" className="btn btn-outline-light border-0">
          <ChevronLeft size={40} color="black" />
        </button>
        <button type="button" className="btn btn-outline-light border-0">
          <ChevronRight size={40} color="black" />
        </button>
      </div>

      <div className="row col-12 gap-2 gap-lg-4 justify-content-center">
        <div className="col-12 col-sm-6 p-0">
          <div className={styles.bannerImageContainer}>
            <Image
              src={gridImages[0].imgSrc}
              alt={gridImages[0].imgAlt}
              className={styles.bannerImage}
              fill
              priority
            />
          </div>
        </div>
        <div className="col-12 col-sm-5 col-lg-4 p-0">
          <div className={styles.bannerImageContainer}>
            <Image
              src={gridImages[1].imgSrc}
              alt={gridImages[1].imgAlt}
              className={styles.bannerImage}
              fill
              priority
            />
          </div>
        </div>
      </div>

      <div className="row col-12 gap-2 gap-lg-4 justify-content-center">
        <div className="col-12 col-sm-5 col-lg-4 p-0">
          <div className={styles.bannerImageContainer}>
            <Image
              src={gridImages[2].imgSrc}
              alt={gridImages[2].imgAlt}
              className={styles.bannerImage}
              fill
              priority
            />
          </div>
        </div>
        <div className="col-12 col-sm-6 position-relative p-0">
          <div className={styles.bannerImageContainer}>
            <Image
              src={gridImages[3].imgSrc}
              alt={gridImages[3].imgAlt}
              className={styles.bannerImage}
              fill
              priority
            />
          </div>

          {/* Brand text overlay */}
          <div className={`position-absolute ${styles.overlay}`}></div>
          <div className={`position-absolute ${styles.imageCard}`}>
            <h2 className="mb-0">ASTISAN</h2>
            <p className="text-primary mb-0">
              CRAFTED FOR HOPITALITY, RETAIL AND PROJECTS
            </p>
            <p className="text-xs d-none d-md-block mt-2">
              At Versmissen, we specialize in designing and developing complete
              interior collections, catering to a global market. Our focus spans
              the hospitality, retail, and project sectors, with clients ranging
              from hotels and restaurants to interior shops, architects, and
              stylists.
            </p>
            <button
              type="button"
              className="btn bg-white text-black rounded-0 fw-bold py-2 mt-2"
            >
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselGrid;
