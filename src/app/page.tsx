"use client";

import CustomFilter from "@/components/CustomFilter";
import { Hero } from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";
import { cars } from "@/data/Cars";
import CarCard from "@/components/CarCard";

import Slider from "react-slick";
import SimpleSlider from "@/components/Slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <main className="overflow-hidden">
      <SimpleSlider />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the car you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>

        <section>
          <div className="home__cars-wrapper">
            {cars.map((car) => (
              <CarCard car={car} key={car.drive} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
