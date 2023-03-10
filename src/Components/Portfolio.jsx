/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/desk.jpg";

const imageAltText = "A wooden desk";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Bill Gates: A bill recording software",
    description:
      "Worked in a group of 8 to create a fully functional GUI based billing software with cloud storage capabilities using Java and SQL",
    url: "https://github.com/Lei-Tin/BillGates",
  },
  {
    title: "TicTacToeAI",
    description:
      "Created an AI that tries to play TicTacToe with the highest probability of ”White not winning”",
    url: "https://github.com/Lei-Tin/TicTacToeAI",
  },
  {
    title: "Majsoul Email Reviewer",
    description:
      "Configured an Email Bot to analyze Majsoul logs and sends Akochan (Mahjong AI) reviews back to sender",
    url: "https://github.com/Lei-Tin/MajsoulEmailReviewer",
  },
  {
    title: "Data visualization application for COVID-19 Data",
    description:
      "Created a data visualizing application with GUI to capture correlations between school closures and COVID-19 trends around the globe",
    url: "https://github.com/Lei-Tin/COVID19-Data-Visualization",
  },
  {
    title: "Personal Blog",
    description: "Built a personal web page built using Jekyll framework with GitHub Pages",
    url: "https://github.com/Lei-Tin/Lei-Tin.github.io",
  },
  {
    title: "PySnake",
    description: 'Created a clone of the classic game "Snake" using Python',
    url: "https://github.com/Lei-Tin/PySnake",
  },
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio">
      <h2>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "8rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideInLeft",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
