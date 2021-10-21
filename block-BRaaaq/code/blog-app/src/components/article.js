import PropTypes from 'prop-types';

function Article(props) {
  return (
    <article className="article">
      <figure>
        <img src={props.urlToImage} alt={props.title} />
        <figcaption>
          <h3>{props.title}</h3>
        </figcaption>
      </figure>
      <p className="text">{props.description}</p>
      <a href={props.url} className="btn">
        Visit Website
      </a>
    </article>
  );
}

Article.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
  description: PropTypes.string,
  publishedAt: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  urlToImage: PropTypes.string,
};

export default Article;
