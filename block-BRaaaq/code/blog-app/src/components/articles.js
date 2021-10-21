import Article from './article';
import allArticles from '../data/articles';
function Articles(){
    return (
        <>
          <section className="articles">
            <div className="container">
              {allArticles.map((article) => (
                <Article key={article.publishedAt} {...article} />
              ))}
            </div>
          </section>
        </>
      );
}


export default Articles