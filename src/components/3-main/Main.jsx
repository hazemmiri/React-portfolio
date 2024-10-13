import React, { useState } from "react";
import "./Main.css";
import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";

const Main = () => {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);
  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);
    const newArr = myProjects.filter((item) => {
      const ZZZ = item.category.find((myItem) => {
        return myItem === buttonCategory;
      });
      return ZZZ === buttonCategory;
    });

    setArr(newArr);
  };

  return (
    <main className="flex">
      <section className="flex  left-section">
        <button
          onClick={() => {
            setcurrentActive("all");
            setArr(myProjects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          All Projects
        </button>
        <button
          onClick={() => {
            handleClick("css");
          }}
          className={currentActive === "css" ? "active" : null}
        >
          Html & Css
        </button>
        <button
          onClick={() => {
            handleClick("react");
          }}
          className={currentActive === "react" ? "active" : null}
        >
          react&MUI
        </button>
        <button
          onClick={() => {
            handleClick("javaScript");
          }}
          className={currentActive === "javaScript" ? "active" : null}
        >
          javaScript
        </button>
        <button
          onClick={() => {
            handleClick("Nextjs");
          }}
          className={currentActive === "Nextjs" ? "active" : null}
        >
          Nextjs
        </button>
        <button
          onClick={() => {
            handleClick("node");
          }}
          className={currentActive === "node" ? "active" : null}
        >
          node & Express
        </button>

        <div className="divider" /> 
        

        <button
          onClick={() => {
            setcurrentActive("all");
          }}
          className={currentActive === "all" ? "active" : null}
        >
          skills 
        </button>
        <button
          onClick={() => {}}
          className={currentActive === "all" ? "active" : null}
        >
          HTML
        </button>
        <button
          onClick={() => {}}
          className={currentActive === "all" ? "active" : null}
        >
          CSS
        </button>
        <button
          onClick={() => {}}
          className={currentActive === "all" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => {}}
          className={currentActive === "all" ? "active" : null}
        >
          React js
        </button>
        <button
          onClick={() => {}}
          className={currentActive === "all" ? "active" : null}
        >
          Nextjs
        </button>
        <button
          onClick={() => {}}
          className={currentActive === "all" ? "active" : null}
        >
          Node.js
        </button>
        <button
          onClick={() => {}}
          className={currentActive === "all" ? "active" : null}
        >
          Express
        </button>
        <button
          onClick={() => {}}
          className={currentActive === "all" ? "active" : null}
        >
          Mongodb
        </button>
        {/* <button
          onClick={() => {
            
          }}
          className={currentActive === "" ? "active" : null}
        >
          
        </button> */}
      </section>

      <section className="  flex right-section">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 7, stiffness: 50 }}
                key={item.imgPath}
                className="card"
              >
                <img width={266} src={item.imgPath} alt="" />

                <div style={{ width: "266px" }} className=" box">
                  <h1 className="title">{item.projectTitel}</h1>
                  <p className="sub-title">{item.desc} </p>

                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <div>
                        <a href={item.link} className="icon-link"></a>
                      </div>
                      <div>
                        <a href={item.github} className="icon-github"></a>
                      </div>
                    </div>
                    <a className="link flex" href="">
                      more
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-right2"
                      ></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
