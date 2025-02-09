import { useState, useEffect } from "react";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import "./index.css";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(true);
  const [isDarkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
    if (newMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: true,
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFading(false);
      setTimeout(() => setIsLoading(false), 1000);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>HR APP</title>
      </Helmet>

      {isLoading ? (
        <div className={`loading-container ${!isFading ? "fade-out" : ""}`}>
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="content-container fade-in">
          <Navbar />

          {/* Dark Mode Toggle Button */}
          {/* <button
            onClick={toggleDarkMode}
            className="absolute top-2 right-4 p-3 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full transition shadow-md"
          >
            {isDarkMode ? "🌙" : "☀️"}
          </button> */}

          {/* Hero Sections */}
          <section
            className="flex flex-col md:flex-row items-center justify-between gap-8 px-6 md:px-16 lg:px-32 py-12 bg-gray-100 dark:bg-gray-900 dark:text-white"
            data-aos="fade-up"
          >
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-2xl md:text-4xl font-bold mb-4">01. Design</h1>
              <p className="text-gray-600 dark:text-gray-300">
                Create stunning designs with a clean and modern approach.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                className="rounded-lg shadow-lg w-full md:w-[500px] h-auto"
                src="https://via.placeholder.com/500x300"
                alt="Design showcase"
              />
            </div>
          </section>

          <section
            className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 px-6 md:px-16 lg:px-32 py-12 bg-white dark:bg-gray-800 dark:text-white"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-2xl md:text-4xl font-bold mb-4">02. Development</h1>
              <p className="text-gray-600 dark:text-gray-300">
                Build robust applications with efficient code and modern technologies.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                className="rounded-lg shadow-lg w-full md:w-[500px] h-auto"
                src="https://via.placeholder.com/500x300"
                alt="Development process"
              />
            </div>
          </section>

          <Footer />
        </div>
      )}
    </>
  );
}
