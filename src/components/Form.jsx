import { useState } from "react";

function Form({ getNews }) {
  const [category, setCategory] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Did it work?");
    getNews(category);
  };
  return (
    <div className="form-container">
      <h1>Breaking News!</h1>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Choose Category:
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled>
              Pick One
            </option>
            <option value="general">General</option>
            <option value="world">World</option>
            <option value="nation">Nation</option>
            <option value="business">Business</option>
            <option value="technology">Technology</option>
            <option value="entertainment">Entertainment</option>
            <option value="sports">Sports</option>
            <option value="science">Science</option>
            <option value="health">Health</option>
          </select>
        </label>
        <button type="submit" className="button">
          Get News
        </button>
      </form>
    </div>
  );
}
export default Form;
