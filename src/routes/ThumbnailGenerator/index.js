import React from "react";
import ThumbnailSearch from "./ThumbnailSearch";
import GeneratedThumbnail from "./GeneratedThumbnail";

const ThumbnailGenerator = () => {
  return (
    <div>
      <h1>YouTube Thumbnail Generator</h1>

      <ThumbnailSearch />

      <GeneratedThumbnail />
    </div>
  );
};

export default ThumbnailGenerator;
