function NewsCard({ article }) {
  return (
    <div>
      {article.image_url && <img src={article.image_url} alt={article.title} />}
      <h2>{article.title}</h2>
      <p>{article.description}</p>
    </div>
  );
}

export default NewsCard;
