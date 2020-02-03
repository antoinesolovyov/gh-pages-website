import React from "react";
import { Link } from "react-router-dom";

import "./Article.css";

import Paragraph from "../../elements/paragraph/Paragraph";
import Subtitle from "../../elements/subtitle/Subtitle";

const Article = props => {
  const { header, meta, summury, date, path } = props.data;

  return (
    <article>
      <Link to={`/articles/${path}`}>
        <Subtitle text={header} />
      </Link>
      <Paragraph text={date + " • " + meta} />
      <Paragraph text={summury} />
    </article>
  );
};

export default Article;
