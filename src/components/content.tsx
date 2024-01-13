const Content = () => {
  return (
    <div className="content-overall">
      <div className="content-wrapper">
        <div className="content">
          <div className="article-list">
            <ul>
              <li>
                <div className="article-list-item">
                  <div className="article-list-item-title">
                    <h2>
                      <a>title</a>
                    </h2>
                    <div className="data-wrapper">
                      <small>2024-01-02</small>
                      <div className="tag-wrapper">
                        <div className="tag">tag</div>
                      </div>
                      <br />
                      <p>content</p>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="article-list-item">
                  <div className="article-list-item-title">
                    <h2>
                      <a>title</a>
                    </h2>
                    <div className="data-wrapper">
                      <small>2024-01-02</small>
                      <div className="tag-wrapper">
                        <div className="tag">tag</div>
                      </div>
                      <br />
                      <p>content</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
