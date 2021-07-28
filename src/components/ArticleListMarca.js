import ArticlePreview from "./ArticlePreview";
import ListPagination from "./ListPagination";
import React from "react";

const ArticleList = (props) => {
  const marcas = [
    "Tupaca",
    "Toyota",
    "Apple",
    "Amazon",
    "Microsoft",
    "Google",
    "Ford",
  ];

  if (!props.articles) {
    return <div className="article-preview">Loading...</div>;
  }

  if (props.articles.length === 0) {
    return <div className="article-preview">No articles are here... yet.</div>;
  }

  return (
    <div>
      {props.articles.map((article) => {
        let articleLowerCase = article.description.toLowerCase();
        let test = marcas.some(item => articleLowerCase.includes(item.toLowerCase()))
        if (test){
          return <ArticlePreview article={article} key={article.slug} />
        }
      })}

      <ListPagination
        pager={props.pager}
        articlesCount={props.articlesCount}
        currentPage={props.currentPage}
      />
    </div>
  );
};

export default ArticleList;
