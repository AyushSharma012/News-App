import { useEffect } from "react";
import { useState } from "react";
import NewsItem from "./NewsItem";

function NewsBoard({category}) {

  const [results, setResults] = useState([]);

  useEffect(() => {
    let url = `https://newsdata.io/api/1/latest?apikey=${process.env.REACT_APP_API_KEY}&country=in&category=${category}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Filter only English and Hindi language articles
        const filtered = data.results.filter(item =>
          item.language === "english" || item.language === "hindi"
        );
        setResults(filtered);
      });
  }, [category]);

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">
        Latest <span className="badge bg-danger">News</span>
      </h2>

      <div className="row">
        {results.map((result, index) => (
          <div className="col-md-4 d-flex justify-content-center" key={index}>
            <NewsItem
              title={result.title}
              src={result.image_url}
              description={result.description}
              url={result.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsBoard;