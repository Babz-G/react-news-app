// ✨✨✨✨ News App React - November 2025 ✨✨✨✨
// We will create a weather app that asks the user for a category and then shows the news items back to the user after fetching data from an API.
// You must sign up for a new API key.

// ✅ Click Get API KEY here: https://newsdata.io/search-dashboard
// ✨ Here is the API endpoint. It does not have an API key yet & you'll want to make the value of the category parameter dynamic:
// ✨ https://newsdata.io/api/1/latest?apikey=addKey&q=category&country=us

// ✨ The news card and the form should be components
// ✨ App.jsx will be your home page. It will be the only page.

// ✨✨ API KEY ✨✨
// pub_a66f135661654a8ebfd9561edc1edcb4
// https://newsdata.io/api/1/latest?pub_a66f135661654a8ebfd9561edc1edcb4=addKey&q=category&country=us

// import { useState } from 'react'

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

    // Commenting out fetch to save API calls
    /*
    fetch(
      `https://newsdata.io/api/1/latest?apikey=pub_a66f135661654a8ebfd9561edc1edcb4&q=${category}&country=us`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Data:", data);
        setNews(data.results);
      });
    */

    // Sample data for styling
    setNews([
      {
        article_id: "1",
        title: "Sample News Article 1",
        description: "This is a sample description for testing.",
        image_url: "https://picsum.photos/400/200",
      },
      {
        article_id: "2",
        title: "Sample News Article 2",
        description: "Another sample description.",
        image_url: "https://picsum.photos/400/200",
      },
    ]);
  };

  return (
    <div className="app-container">
      <Form getNews={getNews} />
      {news.length > 0 &&
        news.map((article) => (
          <NewsCard key={article.article_id} article={article} />
        ))}
    </div>
  );
}

export default App;
