import { createContext, useContext, useState } from "react";

// Import all images
import FlowerShop1 from "../assets/web-ss/FlowerShop1.png"; 
import FlowerShop2 from "../assets/web-ss/FlowerShop2.png";
import FlowerShop3 from "../assets/web-ss/FlowerShop3.png";

import Foodies1 from "../assets/web-ss/Foodies1.png";
import Foodies2 from "../assets/web-ss/Foodies2.png";
import Foodies3 from "../assets/web-ss/Foodies3.png";

import Tailwind1 from "../assets/web-ss/Tailwind-web1.png";
import Tailwind2 from "../assets/web-ss/Tailwind-web2.png";
import Tailwind3 from "../assets/web-ss/Tailwind-web3.png";

import React1 from "../assets/web-ss/react 1.png";
import React2 from "../assets/web-ss/react 2.png";
import React3 from "../assets/web-ss/react 3.png";

const AppContext = createContext();

const projects = [
  {
    cat: "HTML/CSS",
    data: [
      {
        img: FlowerShop1,
        desc: "This is flower website creating with html/css & also responsive",
        webUrl: "https://rubat-dev.github.io/FlowerShop"
      },
      {
        img: FlowerShop2,
        desc: "Lorem ipsum, dolor sit amet consectetur",
        webUrl: "https://rubat-dev.github.io/FlowerShop"
      },
      {
        img: FlowerShop3,
        desc: "Lorem ipsum, dolor sit amet consectetur",
        webUrl: "https://rubat-dev.github.io/FlowerShop"
      },
    ],
  },
  {
    cat: "BOOTSTRAP",
    data: [
      {
        img: Foodies1,
        desc: "Lorem ipsum, dolor sit amet consectetur",
        webUrl: "https://rubat-dev.github.io/foddie"
      },
      {
        img: Foodies2,
        desc: "Lorem ipsum, dolor sit amet consectetur",
        webUrl: "https://rubat-dev.github.io/FlowerShop"
      },
      {
        img: Foodies3,
        desc: "Lorem ipsum, dolor sit amet consectetur",
        webUrl: "https://rubat-dev.github.io/FlowerShop"
      },
    ],
  },
  {
    cat: "TAILWIND",
    data: [
      {
        img: Tailwind1,
        desc: "Lorem ipsum, dolor sit amet consectetur",
        webUrl: "https://rubat-dev.github.io/FlowerShop"
      },
      {
        img: Tailwind2,
        desc: "Lorem ipsum, dolor sit amet consectetur",
        webUrl: "https://rubat-dev.github.io/FlowerShop"
      },
      {
        img: Tailwind3,
        desc: "Lorem ipsum, dolor sit amet consectetur",
        webUrl: "https://rubat-dev.github.io/FlowerShop"
      },
    ],
  },
  {
    cat: "REACT",
    data: [
      {
        img: React1,
        desc: "Lorem ipsum, dolor sit amet consectetur",
        webUrl: "https://rubat-dev.github.io/FlowerShop"
      },
      {
        img: React2,
        desc: "Lorem ipsum, dolor sit amet consectetur",
        webUrl: "https://rubat-dev.github.io/FlowerShop"
      },
      {
        img: React3,
        desc: "Lorem ipsum, dolor sit amet consectetur",
        webUrl: "https://rubat-dev.github.io/FlowerShop"
      },
    ],
  },
];

const AppContextProvider = ({ children }) => {
  const [selectedObj, setSelectedObj] = useState(null);
  const [selectedIdx, setSelectedIdx] = useState(null);

  const openLightBox = (cat, idx) => {
    setSelectedIdx(idx);
    setSelectedObj(projects.find((item) => item.cat === cat));
  };

  const closeLightBox = () => {
    setSelectedObj(null);
  };

  const preSlide = () => {
    if (selectedIdx > 0) {
      setSelectedIdx(selectedIdx - 1);
    }
  };

  const nextSlide = () => {
    if (selectedIdx < selectedObj.data.length - 1) {
      setSelectedIdx(selectedIdx + 1);
    }
  };

  const contextValue = {
    projects,
    openLightBox,
    closeLightBox,
    selectedIdx,
    selectedObj,
    preSlide,
    nextSlide,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContextProvider, useAppContext };
