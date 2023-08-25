"use client";

import { useState } from "react";
import Image from "next/image";
import Magnifying from "../public/magnifying-glass.svg";
import Model from "../public/model-icon.png";

import React from "react";
import { useRouter } from "next/navigation";
import SearchManufacturer from "./SearchManufacturer";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src={Magnifying}
      alt="Magnifying Glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer === "" && model === "") {
      return alert("Please fill in the search bar");
    }

    updateSearhParams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  const updateSearhParams = (model: string, manufacterer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    if (manufacterer) {
      searchParams.set("manufacterer", manufacterer);
    } else {
      searchParams.delete("manufacterer");
    }

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src={Model}
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="Model Icon"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden " />
      </div>
      <SearchButton otherClasses="max-sm:hidden " />
    </form>
  );
};

export default SearchBar;
