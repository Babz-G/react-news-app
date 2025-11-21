// ✨✨✨✨ News App React - November 2025 ✨✨✨✨
// ✅ We will create a weather app that asks the user for a category and then shows the news items back to the user after fetching data from an API.
// ✅ You must sign up for a new API key.

// ✅ Click Get API KEY here: https://newsdata.io/search-dashboard
// ✅ Here is the API endpoint. It does not have an API key yet & you'll want to make the value of the category parameter dynamic:
// ✅ https://newsdata.io/api/1/latest?apikey=addKey&q=category&country=us

// ✅ The news card and the form should be components
// ✅ App.jsx will be your home page. It will be the only page.

// ✨✨ API KEY ✨✨
// ✅ npub_a66f135661654a8ebfd9561edc1edcb4
// ✅ https://newsdata.io/api/1/latest?pub_a66f135661654a8ebfd9561edc1edcb4=addKey&q=category&country=us

import Form from "./components/Form";
import { useState } from "react";
import NewsCard from "./components/NewsCard";
import "./App.css";

function App() {
  const [category, setCategory] = useState("");
  const [news, setNews] = useState([]);

  const getNews = (category) => {
    console.log("Category", category);
    setCategory(category);

    fetch(
      `https://newsdata.io/api/1/latest?apikey=pub_a66f135661654a8ebfd9561edc1edcb4&q=${category}&country=us`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Data:", data);
        setNews(data.results);
      });
  };

  return (
    <>
      <div className="app-container">
        <Form getNews={getNews} />
      </div>
      {news.length === 0 && (
        <div className="no-news-card">
          <p className="no-news-p">No news found.</p>
        </div>
      )}
      <div className="news-container">
        {news.length > 0 &&
          news.map((article) => (
            <NewsCard key={article.article_id} article={article} />
          ))}
      </div>{" "}
    </>
  );
}

export default App;
