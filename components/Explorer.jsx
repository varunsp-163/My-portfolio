import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ChevronRight from "../components/icons/ChevronRight";
import styles from "../styles/Explorer.module.css";

const explorerItems = [
  {
    name: "home.jsx",
    path: "/",
    icon: "react_icon.svg",
  },
  {
    name: "about.html",
    path: "/about",
    icon: "html_icon.svg",
  },
  {
    name: "contact.css",
    path: "/contact",
    icon: "css_icon.svg",
  },
  {
    name: "projects.js",
    path: "/projects",
    icon: "js_icon.svg",
  },
  // {
  //   name: 'articles.json',
  //   path: '/articles',
  //   icon: 'json_icon.svg',
  // },
  {
    name: "github.md",
    path: "/github",
    icon: "markdown_icon.svg",
  },
];

const projects = [
  {
    name: "Car-Rental.js",
    demo: "https://www.youtube.com/watch?v=G7Ydz7f2SQw",
    icon: "react_icon.svg",
  },
  {
    name: "Promptopia.js",
    demo: "https://project-promptopia-j8qw3pxrb-varunsp-163.vercel.app/",
    icon: "next_icon.webp",
  },

  {
    name: "Amz-React.js",
    demo: "https://amz-react-eight.vercel.app/",
    icon: "react_icon.svg",
  },
  {
    name: "Shop-React.js",
    demo: "https://varunsp-163.github.io/Shop-react/",
    icon: "react_icon.svg",
  },
  {
    name: "IK-APP.js",
    demo: "https://ik-app.vercel.app/",
    icon: "next_icon.webp",
  },
  {
    name: "Sci-Astra.js",
    demo: "https://sci-astra-wheat.vercel.app/",
    icon: "react_icon.svg",
  },
  {
    name: "Rent-a-car.js",
    demo: "https://rent-a-car-cyan.vercel.app/",
    icon: "react_icon.svg",
  },
];

const Explorer = () => {
  const [portfolioOpen, setPortfolioOpen] = useState(true);
  const [projectIsOpen, setProjectIsOpen] = useState(false);

  return (
    <div className={styles.explorer}>
      <p className={styles.title}>Explorer</p>
      <div>
        <input
          type="checkbox"
          className={styles.checkbox}
          id="portfolio-checkbox"
          checked={portfolioOpen}
          onChange={() => {
            setPortfolioOpen(!portfolioOpen);
            setProjectIsOpen(false);
          }}
        />

        <label htmlFor="portfolio-checkbox" className={styles.heading}>
          <ChevronRight
            className={styles.chevron}
            style={portfolioOpen ? { transform: "rotate(90deg)" } : {}}
          />
          Portfolio
        </label>

        <div
          className={styles.filesn}
          style={portfolioOpen ? { display: "block" } : { display: "none" }}
        >
          <input
            type="checkbox"
            className={styles.checkbox}
            id="project-checkbox"
            checked={projectIsOpen}
            onChange={() => setProjectIsOpen(!projectIsOpen)}
          />
          <label htmlFor="project-checkbox" className={styles.heading}>
            <ChevronRight
              className={styles.chevron}
              style={projectIsOpen ? { transform: "rotate(90deg)" } : {}}
            />
            Projects
          </label>
          {/* projects */}
          <div
            className={styles.filesn}
            style={projectIsOpen ? { display: "block" } : { display: "none" }}
          >
            {projects.map((item) => (
              <Link href={item.demo} key={item.name} passHref>
                <h1 className={styles.link} target="_blank" rel="noopener noreferrer">
                  <div className={styles.filen}>
                    <Image
                      src={`/${item.icon}`}
                      alt={item.name}
                      height={18}
                      width={18}
                    />{" "}
                    <p>{item.name}</p>
                  </div>
                </h1>
              </Link>
            ))}
          </div>

          {explorerItems.map((item) => (
            <Link href={item.path} key={item.name}>
              <div className={styles.file}>
                <Image
                  src={`/${item.icon}`}
                  alt={item.name}
                  height={18}
                  width={18}
                />{" "}
                <p>{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explorer;
