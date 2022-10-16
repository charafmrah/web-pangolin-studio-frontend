import React, { useState, useRef } from "react";
import GeneratedThumbnail from "./GeneratedThumbnail";
import { functions } from "../../firebase";

const ThumbnailSearch = () => {
  const [generatedThumbnail, setGeneratedThumbnail] = useState(
    "flower-thumbnail.png"
  );
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const promptRef = useRef();

  async function handleThumbnail() {
    try {
      setError("");
      setLoading(true);
      const thumbnail = functions.httpsCallable("api/thumbnail");
      thumbnail({ text: "test text" }).then((result) => {
        // Read result of the Cloud Function.

        setGeneratedThumbnail(result.data);
        console.log(result.data);
      });
    } catch {
      setError("Failed to generate thumbnail");
    }
  }

  return (
    <>
      <div className="pt-14">
        <div className="mt-1">
          <textarea
            id="description"
            name="description"
            rows={3}
            ref={promptRef}
            placeholder="Lush green grass, blue sky, and a beautiful lake."
            defaultValue={""}
          />
        </div>

        <div className="flex justify-between mt-2">
          <p className="text-sm md:text-base text-slate-100">
            Describe the photo you want the AI to generate.
          </p>
          <button
            type="button"
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-primary hover:bg-white hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            disabled={loading}
            onClick={handleThumbnail}
          >
            Generate
          </button>
        </div>
        {error && (
          <h3 className="text-xl font-medium text-center text-red-500 md:text-2xl">
            {error}
          </h3>
        )}
      </div>

      <GeneratedThumbnail image={generatedThumbnail} />
    </>
  );
};

export default ThumbnailSearch;
