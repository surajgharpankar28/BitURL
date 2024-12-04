"use client";
import Link from "next/link";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Import uuid to generate unique IDs

const Shortnr = () => {
  const [url, setUrl] = useState("");
  const [generatedURL, setGeneratedURL] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State for error message

  const clear = () => {
    setUrl("");
    setGeneratedURL("");
    setErrorMessage(""); // Clear error message on clear
  };

  const generate = () => {
    // Check if url is not empty
    if (!url) {
      setErrorMessage("URL field is required!"); // Set error message
      return; // Prevent the function from proceeding if the URL is empty
    }

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
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setGeneratedURL(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
        setErrorMessage(""); // Clear error message on success
      })
      .catch((error) => console.error(error));
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

        {generatedURL && (
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6 rounded-lg shadow-md text-white">
            <h2 className="text-2xl font-semibold mb-4">Your Short Link is:</h2>
            <div className="flex items-center gap-4">
              <Link
                href={generatedURL}
                target="_blank"
                className="bg-cyan-600 hover:bg-cyan-500 text-white py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
              >
                {generatedURL}
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shortnr;
