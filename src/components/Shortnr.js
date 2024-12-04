"use client";
import Link from "next/link";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Import uuid to generate unique IDs
import { Copy } from "lucide-react";

const Shortnr = () => {
  const [url, setUrl] = useState("");
  const [generatedURL, setGeneratedURL] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const [loading, setLoading] = useState(false); // State for loading
  const [copied, setCopied] = useState();

  const clear = () => {
    setUrl("");
    setGeneratedURL("");
    setErrorMessage(""); // Clear error message on clear
    setLoading(false);
  };

  const generate = () => {
    // Check if url is not empty
    if (!url) {
      setErrorMessage("URL field is required!"); // Set error message
      return; // Prevent the function from proceeding if the URL is empty
    }

    // Validate URL format
    const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/;
    if (!urlRegex.test(url)) {
      setErrorMessage("Please enter a valid URL!"); // Set error message
      return;
    }

    setLoading(true); // Start loading
    setErrorMessage(""); // Clear previous errors

    const shorturl = uuidv4().split("-")[0]; // Take only the first part of the UUID

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shorturl, // Use the generated short URL
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to generate URL. Please try again.");
        }
        return response.json();
      })
      .then((result) => {
        console.log(result);
        setGeneratedURL(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage(
          error.message || "An error occurred. Please try again."
        );
      })
      .finally(() => setLoading(false)); // Stop loading
  };

  return (
    <div className="mx-auto max-w-4xl bg-gradient-to-r from-blue-500 to-teal-500 my-16 p-8 rounded-lg shadow-xl">
      <h1 className="text-3xl font-extrabold text-white text-center mb-4">
        Generate Your Short URLs Instantly
      </h1>
      <p className="text-white text-center mb-6">
        Simplify your long URLs into short, easy-to-share links. Just enter your
        original URL!
      </p>

      <div className="flex flex-col gap-6 md:w-2/3 mx-auto">
        <input
          value={url}
          type="text"
          className="p-4 rounded-lg border-2 border-white bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-teal-300"
          placeholder="Enter your URL"
          onChange={(e) => setUrl(e.target.value)}
        />

        {/* Error message */}
        {errorMessage && (
          <div className="bg-red-500 text-white p-4 rounded-lg mt-4">
            <p>{errorMessage}</p>
          </div>
        )}

        {/* Loading indicator */}

        {/* Loading indicator */}
        {/* {loading && (
          <div className="relative mt-4 w-full h-2 bg-gray-200 rounded">
            <div
              className="absolute left-0 top-0 h-full bg-teal-500 rounded animate-pulse"
              style={{ width: "80%" }} // Simulating progress
            ></div>
          </div>
        )} */}

        <div className="mx-auto">
          <button
            className="bg-teal-600 hover:bg-teal-700 transition duration-300 text-white font-bold text-sm px-6 py-3 rounded-lg shadow-lg mx-auto border border-white"
            onClick={generate}
          >
            Make Short
          </button>
          <button
            className="bg-gray-600 ml-2 hover:bg-gray-500 transition duration-300 text-white font-bold text-sm px-6 py-3 rounded-lg shadow-lg mx-auto border border-white"
            onClick={clear}
          >
            Clear
          </button>
        </div>

        {loading && (
          <div className="flex justify-center mt-4">
            <div className="w-10 h-10 border-4 border-white border-t-teal-300 rounded-full animate-spin"></div>
          </div>
        )}

        {generatedURL && !loading && (
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6 rounded-lg shadow-md text-white">
            <h2 className="text-2xl font-semibold mb-4">Your Short Link is:</h2>
            <div className="flex items-center gap-4">
              <Link
                href={generatedURL}
                target="_blank"
                className="bg-cyan-600 flex hover:bg-cyan-500 text-white py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
              >
                {generatedURL}
              </Link>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(generatedURL);
                  setCopied(true); // Show the copied message
                  setTimeout(() => setCopied(false), 2000); // Hide after 2 seconds
                }}
                className=" text-white font-bold "
              >
                <Copy className="" />
              </button>
            </div>
            {/* Copy Notification */}
            {copied && (
              <p className="text-sm text-green-300 mt-2">
                URL copied to clipboard!
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Shortnr;
