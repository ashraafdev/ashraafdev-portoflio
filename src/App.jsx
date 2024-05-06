import Home from "./pages/Home";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";
import "./App.css";
import Projects from "./pages/Projects";
import MobileNavbar from "./components/Common/mobilenavbar";
import ContactMe from "./pages/ContactMe";
import AboutMe from "./pages/AboutMe";
import Blog from "./pages/Blog";
import BlogData from "./pages/BlogData";
import SplashScreen from "./components/Common/splashscreen";
import DarkMode from "./components/Common/darkmode";

const AppContext = createContext(null);

function App() {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Database
  const db = getFirestore(app);

  const [allprojects, setProjects] = useState(0);
  const [lastThreeProjects, setLastThreeProjects] = useState([]);

  const [blog, setBlog] = useState([]);
  const [tech, setTech] = useState([]);
  const [project, setProject] = useState([]);

  const [loading, setLoading] = useState(false);
  const [errorTag, setError] = useState(null);

  const [loadSplash, setLoadSplash] = useState(true);

  const [showDropDown, setShowDropDown] = useState(false);
  const [loadingToast, setLoadingToast] = useState(null);

  const [appIsLaunched, setAppIsLaunched] = useState(false);

  /*useEffect(() => {
    if (projects) {
      setLastThreeProjects(projects.slice(0, 3));
      setProjects(projects);
    }
  }, [projects]);*/

  useEffect(() => {
    if (loading === true) {
      const toastId = toast.loading("Loading...");
      setLoadingToast(toastId);
    }

    if (loading === false) toast.dismiss(loadingToast);
  }, [loading]);

  useEffect(() => {
    if (errorTag) toast.error(errorTag);
  }, [errorTag]);

  return (
    <>
      <BrowserRouter>
        <AppContext.Provider
          value={{
            database: db,
            projects: allprojects,

            lastThreeProjects: lastThreeProjects,
            setLastThreeProjects: setLastThreeProjects,

            techs: tech,
            setTechs: setTech,

            blog: blog,
            setBlog: setBlog,

            project: project,
            setProject: setProject,

            setLoading,
            setError: setError,
            setShowDropDown,
            setAppIsLaunched,
          }}
        >
          <div
            className={`relative flex w-full ${
              showDropDown ? "blur-sm overflow-y-hidden h-screen" : ""
            }`}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contactme" element={<ContactMe />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/blog/:blogSlug" element={<BlogData />} />
              <Route exact path="/blog" element={<Blog />} />
            </Routes>
          </div>
          {showDropDown && <MobileNavbar />}
          <Toaster />
          {/*!appIsLaunched && <SplashScreen />*/}
        </AppContext.Provider>
        <DarkMode />
      </BrowserRouter>
    </>
  );
}

export default App;
export { AppContext };
