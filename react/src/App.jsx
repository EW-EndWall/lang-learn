import { useState, useEffect } from "react";

import jsonData from "./data/jsondata.json";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Options from "./components/home/Options";
import WordList from "./components/home/WordList";
import Button from "./components/home/Buttons";

import ErrorBoundary from "./components/error-boundary";

function App() {
  // * create useState
  const [data, setData] = useState({
    lang: "tr",
    langLevel: "a1",
    langId: 0,
    langKey: [],
    langLevelList: [],
  });
  const [darkMode, setDarkMode] = useState(
    (localStorage?.getItem("theme") == "dark" ? true : false) || false
  );
  // * words to show on screen
  const [langData, setLangData] = useState(jsonData[data.lang][data.langLevel]);

  useEffect(() => {
    setData({
      ...data,
      langKey: Object.keys(langData),
      langLevelList: Object.keys(jsonData[data.lang]),
    });
  }, []);

  const toggleThemeDarkMode = () => {
    const mode = !darkMode;
    // * set theme mode data
    setDarkMode(mode);
    if (mode == true) {
      // * Dark mode
      localStorage.setItem("theme", "dark");
    } else {
      // * Light mode
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    // * On page load or when changing themes
    if (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <div className="fixed bottom-2 right-2">
        <button
          onClick={toggleThemeDarkMode}
          data-tooltip-target="default-form-example-toggle-dark-mode-tooltip"
          type="button"
          data-toggle-dark="dark"
          className="flex items-center w-9 h-9 justify-center text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-xl toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10  dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          {darkMode == true ? (
            <>
              <svg
                data-toggle-icon="moon"
                className="w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"></path>
              </svg>
            </>
          ) : (
            <>
              <svg
                data-toggle-icon="sun"
                className="w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"></path>
              </svg>
            </>
          )}
          <span className="sr-only">Toggle dark/light mode</span>
        </button>
      </div>
      <div className="bg-teal-4000 bg-teal-200 text-slate-600 dark:bg-teal-800 dark:text-slate-400">
        <ErrorBoundary>
          <Header />
        </ErrorBoundary>

        <div className="my-12 mx-5 md:mx-40">
          <div className="container mx-auto flex flex-col gap-4 border-t-2 border-b rounded-xl p-3 shadow-md">
            <ErrorBoundary>
              <Options {...{ data, setData, setLangData, jsonData }} />
            </ErrorBoundary>

            <ErrorBoundary>
              <WordList
                dataKey={data.langKey[data.langId]}
                dataVal={langData[data.langKey[data.langId]]}
              />
            </ErrorBoundary>

            <ErrorBoundary>
              <Button {...{ data, setData }} />
            </ErrorBoundary>
          </div>
        </div>
        <ErrorBoundary>
          <Footer {...{ data, setData, jsonData }} />
        </ErrorBoundary>
      </div>
    </>
  );
}

export default App;
