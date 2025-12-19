import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Url = () => {
  const [Url, setUrl] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchURL = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        // const response = await fetch("https://localhost:5000/api/url");
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || "Something went wrong");
        }
        setUrl(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchURL();
  }, []);

  //   const handleSubmit = () => {
  //     fetch()
  //   }

  //   const response = fetch("")
  //   setUrl(data)

  return (
    <>
      {/* <form onSubmit={handleSubmit}></form> */}
      <h1>URL DATA</h1>
      <h2>Welcome to site reliabilty tool</h2>

      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!isLoading && !error && (
        <div className="container">
          {Url.length === 0 ? (
            <p>No URL data found.</p>
          ) : (
            <ul style={{ listStyleType: "none" }}>
              {Url.map((url) => {
                return (
                  <li
                    key={url.id}
                    style={{ color: "green", textAlign: "left" }}
                  >
                    <strong>{url.title}</strong>
                    <p>{url.body}</p>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      )}
    </>
  );
};

export default Url;

// const url = [
//   {
//     url: "https://www.google.com",
//     status: "200 OK",
//     responseTime: "150ms",
//   },
//   {
//     url: "https://www.facebook.com",
//     status: "200 OK",
//     responseTime: "100ms",
//   },
//   {
//     url: "https://www.instagram.com",
//     status: "200 OK",
//     responseTime: "120ms",
//   },
//   {
//     url: "https://www.twitter.com",
//     status: "200 OK",
//     responseTime: "80ms",
//   },
//   {
//     url: "https://www.linkedin.com",
//     status: "200 OK",
//     responseTime: "90ms",
//   },
//   {
//     url: "https://www.github.com",
//     status: "200 OK",
//     responseTime: "110ms",
//   },
// ];
