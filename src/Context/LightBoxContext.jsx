import { createContext, useContext, useState } from "react";

// Import all images
import FlowerShop from "../assets/web-ss/FlowerShop.png"; 
import productCards from "../assets/web-ss/productCards.png";
import RentalCar from "../assets/web-ss/RentalCar.png";
import BlogPage from "../assets/web-ss/BlogPage.png";
import DeshBoard from "../assets/web-ss/DeshBoard.png";
import QuizMasterPro from "../assets/web-ss/QuizMasterPro.png";

import Foodies from "../assets/web-ss/Foodies.png";
import DemoPortfolio from "../assets/web-ss/DemoPortfolio.png";
import bootstrapWeb from "../assets/web-ss/bootstrapWeb.png";

import EducationWeb from "../assets/web-ss/EducationWeb.png";
import coreTechDemoWeb from "../assets/web-ss/coreTechDemoWeb.png";
import TravelingWeb from "../assets/web-ss/TravelingWeb.png";

import TechFlow from "../assets/web-ss/TechFlow.png";
import coreTechOfficialWeb from "../assets/web-ss/coreTechOfficialWeb.png";
import EcommersWeb from "../assets/web-ss/EcommersWeb.png";
import movieApp from "../assets/web-ss/movieApp.png";
import filterableGelry from "../assets/web-ss/filterableGelry.png";
import TodoApp from "../assets/web-ss/TodoApp.png";

import PhotoEditor from "../assets/web-ss/PhotoEditor.png";
import MyPortfolio from "../assets/web-ss/MyPortfolio.png";

const AppContext = createContext();

const projects = [
  {
    cat: "HTML/CSS",
    data: [
      {
        img: FlowerShop,
        desc: "This is flower website creating with html/css & also responsive",
        webUrl: "https://rubat-dev.github.io/FlowerShop"
      },
      {
        img: DeshBoard,
        desc: "This is a coreTech Dashboard designing with html/css",
        webUrl: "https://rubat-dev.github.io/internship-task-7/"
      },
      {
        img: productCards,
        desc: "This is products cards design with html/css only",
        webUrl: "https://rubat-dev.github.io/Frontend-Task3-RubatShaikh/"
      },
      {
        img: BlogPage,
        desc: "This is a Blog Page designing only with html/css",
        webUrl: "https://rubat-dev.github.io/internship-task-6/"
      },
      {
        img: QuizMasterPro,
        desc: "This is a Quiz MasterPro Game designing with html/css",
        webUrl: "https://rubat-dev.github.io/internship-task-8/"
      },
      {
        img: RentalCar,
        desc: "This is a Rental car website designing only with html/css",
        webUrl: "https://rubat-dev.github.io/internship-task-4/"
      },
    ],
  },
  {
    cat: "BOOTSTRAP",
    data: [
      {
        img: Foodies,
        desc: "This is foodie website design with bootstrap",
        webUrl: "https://rubat-dev.github.io/foddie"
      },
      {
        img: DemoPortfolio,
        desc: "This is demo Portfolio website designing with html/css",
        webUrl: "https://rubat-dev.github.io/internship-task-2/"
      },
      {
        img: bootstrapWeb,
        desc: "This is startup website making with bootstrap",
        webUrl: " https://rubat-dev.github.io/BootstrapWebPractice/"
      },
    ],
  },
  {
    cat: "TAILWIND",
    data: [
      {
        img: EducationWeb,
        desc: "This is Education Website design with TailwindCSS",
        webUrl: "https://rubat-dev.github.io/EducetionM4"
      },
      {
        img: coreTechDemoWeb,
        desc: "This is coreTech Demo website design with TailwindCSS",
        webUrl: "https://rubat-dev.github.io/web-internship-task-5/"
      },
      {
        img: TravelingWeb,
        desc: "This is a Traveling website design with TailwindCSS",
        webUrl: "https://rubat-dev.github.io/internship-task-9/"
      },
    ],
  },
  {
    cat: "React+TailwindCSS",
    data: [
      {
        img: TechFlow,
        desc: "This is TechFlow website design with React",
        webUrl: "https://rubat-dev.github.io/internship-task-10/"
      },
      {
        img: coreTechOfficialWeb,
        desc: "this is coreTech official website clone with React",
        webUrl: "https://rubat-dev.github.io/coreTech/"
      },
      {
        img: EcommersWeb,
        desc: "This is Ecommers website design with React",
        webUrl: "https://rubat-dev.github.io/project2/"
      },
      {
        img: movieApp,
        desc: "This is Movie App design with React",
        webUrl: "https://rubat-dev.github.io/final-project/"
      },
      {
        img: filterableGelry,
        desc: "This is a Filterable Gelry build with React & TailwindCSS",
        webUrl: "https://rubat-dev.github.io/FilterableGelry/"
      },
      {
        img: TodoApp,
        desc: "This is a TodoApp to add your Goals build with React & TailwindCSS",
        webUrl: "https://rubat-dev.github.io/TodoApp/"
      },
    ],
  },
  {
    cat: "React+ChakraUI",
    data: [
      {
        img: PhotoEditor,
        desc: "This is a Amazing PhotoEditor build with React & ChakraUI",
        webUrl: "https://rubat-dev.github.io/PhotoEditor/"
      },
      {
        img: MyPortfolio,
        desc: "My Official portfolio build with React & ChakraUI",
        webUrl: "http://localhost:5174/rubatportfolio/"
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
