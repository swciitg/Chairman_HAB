import React from "react";
import Btn from "./Btn";
import Card from "./Card";
import Heading from "./Heading";

const PublicationsScreen = () => {
  return (
    <div className="mx-24 my-16">
      Publications
      <Heading name="hello" />
      <Card
        head="Angana Bhattacharya, Rakesh Sarkar and Gagan Kumar, “Excitation of near field coupled dual toroidal resonances in a bilayer terahertz metamaterial configuration.”"
        bold="Journal of Physics D: Applied Physics 54,285102(2021)."
      />
      <Card
        head="Angana Bhattacharya, Rakesh Sarkar and Gagan Kumar, “Excitation of near field coupled dual toroidal resonances in a bilayer terahertz metamaterial configuration.”"
        bold="Journal of Physics D: Applied Physics 54,285102(2021)."
      />
      <Card
        head="Angana Bhattacharya, Rakesh Sarkar and Gagan Kumar, “Excitation of near field coupled dual toroidal resonances in a bilayer terahertz metamaterial configuration.”"
        bold="Journal of Physics D: Applied Physics 54,285102(2021)."
      />
      <Card
        head="Angana Bhattacharya, Rakesh Sarkar and Gagan Kumar, “Excitation of near field coupled dual toroidal resonances in a bilayer terahertz metamaterial configuration.”"
        bold="Journal of Physics D: Applied Physics 54,285102(2021)."
      />
      <Btn />
    </div>
  );
};

export default PublicationsScreen;
