import ArticleItem from "./article_item";

const ArticleList = () => {
  const articleList = [
    {
      title: "title",
      date: new Date(2041, 1, 1),
      tag: ["tag"],
      content: "contents",
    },
    {
      title: "title2",
      date: new Date(2041, 1, 2),
      tag: ["tag2"],
      content: "contents2",
    },
    {
      title: "title3",
      date: new Date(2041, 1, 2),
      tag: ["tag3"],
      content: "contents3",
    },
  ];
  return (
    <div className="article-list">
      <ul>
        {articleList.map((article) => {
          return (
            <ArticleItem
              title={article.title}
              date={article.date}
              tag={article.tag}
              content={article.content}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ArticleList;
