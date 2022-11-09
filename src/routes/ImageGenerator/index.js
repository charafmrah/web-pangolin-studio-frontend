import React from "react";
import ThumbnailSearch from "./ImageSearch";
import { QueryClient, QueryClientProvider } from "react-query";

const ThumbnailGenerator = () => {
  const queryClient = new QueryClient();
  return (
    <div className="min-w-[50%]">
      <h1>Image Generator</h1>
      <QueryClientProvider client={queryClient}>
        <ThumbnailSearch />
      </QueryClientProvider>
    </div>
  );
};

export default ThumbnailGenerator;
