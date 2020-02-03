import React from "react";
import uuid from "uuid";

import Article from "../article/Article";

let articles = [
  {
    header: "Neuron",
    meta: "4 min read",
    summury:
      "A neuron (also called neurone or nerve cell) is a cell that carries electrical impulses. Neurons are the basic (functional and structural) units of our nervous system.",
    url: "imgs/neuron.png",
    date: "November 14, 2019",
    path: "neuron"
  },
  {
    header: "Artificial neural network",
    meta: "9 min read",
    summury:
      "Artificial neural networks (ANN) or connectionist systems are computing systems vaguely inspired by the biological neural networks that constitute animal brains.",
    url: "imgs/NeuralNetwork.png",
    date: "October 23, 2019",
    path: "artificial_neural_network"
  },
  {
    header: "Convolutional neural network",
    meta: "7 min read",
    summury:
      "In deep learning, a convolutional neural network (CNN, or ConvNet) is a class of deep neural networks, most commonly applied to analyzing visual imagery.",
    url: "imgs/cnn.png",
    date: "October 12, 2019",
    path: "convolutional_neural_network"
  }
];

const Articles = () => {
  const getArticles = () => {
    return articles.map(articleData => <Article key={uuid.v1()} data={articleData} />);
  };

  return <section>{getArticles()}</section>;
};

export default Articles;
