import React from "react";

import "./Post.css";

import Title from "../../elements/title/Title";
import Subtitle from "../../elements/subtitle/Subtitle";
import Paragraph from "../../elements/paragraph/Paragraph";
import Image from "../../elements/image/Image";
import Math from "../../elements/math/Math";
import uuid from "uuid";

function getPost(post) {
  return post.map(element => {
    switch (element[0]) {
      case "title":
        return <Title key={uuid.v1()} text={element[1]} />;

      case "subtitle":
        return (
          <Subtitle key={uuid.v1()} text={element[1]} anchor={element[2]} />
        );

      case "paragraph":
        return <Paragraph key={uuid.v1()} text={element[1]} />;

      case "image":
        if (typeof element[1] === "string") {
          return <Image key={uuid.v1()} url={element[1]} alt={element[2]} />;
        } else {
          return element[1];
        }

      case "math":
        return <Math key={uuid.v1()} text={element[1]} />;
    }
  });
}

const Post = props => {
  return getPost(props.data);
};

export default Post;
