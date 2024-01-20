import "./article_item.css";
type ArticleItemProps = {
  title: string;
  date: Date;
  tag: Array<string>;
  content: string;
};

const ArticleItem = (props: ArticleItemProps) => {
  const formattedDate = props.date.toLocaleDateString();
  return (
    <li>
      <div className="article-list-item">
        <div className="article-list-item-title">
          <a>{props.title}</a>
          <div className="date-wrapper">
            <small>{formattedDate}</small>
          </div>
          <div className="tag-wrapper">
            <div className="tag">{props.tag}</div>
          </div>
        </div>
        <p>{props.content}</p>
      </div>
    </li>
  );
};

export default ArticleItem;
