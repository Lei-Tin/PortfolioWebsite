import React from "react";

import image from "../images/uoft.jpg";

const imageAltText = "University of Toronto";

const courseList = [
  "An Introduction to Statistical Reasoning and Data Science",
  "Computer Organization",
  "Data Structures and Analysis",
  "Foundations of Comp Sci I",
  "Foundations of Comp Sci II",
  "Introduction to Databases",
  "Introduction to Machine Learning",
  "Introduction to the Theory of Computation",
  "Software Design",
  "Software Tools and Systems Programming",
];

const Education = () => {
  return (
    <section className="light" id="education">
      <img className="background" src={image} alt={imageAltText} />
      <h2>Education</h2>

      <div
        style={{
          justifyContent: "center",
          backgroundColor: "white",
          width: "50%",
          padding: "6rem",
          margin: "4rem auto",
          textAlign: "center",
        }}
      >
        <p className="large" style={{ padding: "1rem 3rem 0" }}>
          Currently a second year University student studying at the University of Toronto
        </p>

        <p style={{ padding: "0 0 0" }}>
          Computer Science Specialist with potential Math & Statistics Minors
        </p>

        <hr></hr>

        <p className="large">Core courses taken</p>

        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {courseList.map((course) => (
            <li key={course}>{course}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Education;
