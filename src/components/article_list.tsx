import ArticleItem from "./article_item";

const ArticleList = () => {
  return (
    <div className="article-list">
      <ul>
        <ArticleItem />
        <ArticleItem />
      </ul>
    </div>
  );
};

export default ArticleList;
