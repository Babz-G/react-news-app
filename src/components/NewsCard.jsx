function NewsCard({ article }) {
  return (
    <div className="news-card">
      <h2 className="title">{article.title}</h2>
      {article.image_url && (
        <img
          src={article.image_url}
          alt={article.title}
          className="news-image"
        />
      )}
      <p className="description">{article.description}</p>
      <a href={article.link} className="read-more">
        Read more
      </a>
    </div>
  );
}

export default NewsCard;
