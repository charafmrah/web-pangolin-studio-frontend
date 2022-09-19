import React from "react";
import TitleSearch from "./TitleSearch";
import GeneratedTitles from "./GeneratedTitles";

const TitleGenerator = () => {
  return (
    <div>
      <h1>YouTube Title Generator</h1>

      <TitleSearch />

      <GeneratedTitles />
    </div>
  );
};

export default TitleGenerator;
