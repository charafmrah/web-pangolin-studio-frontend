"use client";

import React from "react";
import ThumbnailSearch from "./ThumbnailSearch";
import { QueryClient, QueryClientProvider } from "react-query";

const ThumbnailGenerator = () => {
  const queryClient = new QueryClient();
  return (
    <div>
      <h1>YouTube Thumbnail Generator</h1>
      <QueryClientProvider client={queryClient}>
        <ThumbnailSearch />
      </QueryClientProvider>
    </div>
  );
};

export default ThumbnailGenerator;
