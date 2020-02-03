import React from "react";
import uuid from "uuid";

import { Route } from "react-router-dom";

import Post from "../post/Post";

const posts = [
  [
    ["neuron"],
    ["title", "Neuron"],
    [
      "paragraph",
      "Элементами полносвязного слоя являются искусственные нейроны"
    ],
    ["image", "public/imgs/neuron.png", "alt"],
    [
      "paragraph",
      "Математически нейрон представляет собой взвешенный сумматор, единственный выход которого определяется через его входы и матрицу весов."
    ]
  ],
  [
    ["artificial_neural_network"],
    ["title", "Artificial neural network"],
    [
      "paragraph",
      "После нескольких прохождений свёртки изображения и уплотнения с помощью пулинга система перестраивается от конкретной сетки пикселей с высоким разрешением к более абстрактным картам признаков, как правило, на каждом следующем слое увеличивается число каналов и уменьшается размерность изображения в каждом канале. В итоге остаётся большой набор каналов, хранящих небольшое число данных, которые интерпретируются как абстрактные понятия, выявленные из исходного изображения."
    ],
    [
      "paragraph",
      "Эти данные объединяются и передаются на нейронную сеть, которая также может состоять из нескольких слоёв. При этом слои уже утрачивают пространственную структуру и обладают сравнительно небольшой размерностью. На рисунке 1.4 схематически изображён пример данного слоя."
    ],
    ["image", "../imgs/Perceptron.png", "perceptron"],
    [
      "paragraph",
      "На данном рисунке  – данные, переданные после операций свёртки и субдискретизации,  – коэффициент смещения функции активации,  – выходные значения. В свёрточной нейронной сети таких слоёв может быть несколько (рисунок 1.5), в таком случае выходные сигналы одного слоя передаются на вход другому, пока слои данного типа не заканчиваются, после чего результат подаётся на выход."
    ],
    ["image", "../imgs/NeuralNetwork.png", "perceptron"]
  ],
  [
    ["convolutional_neural_network"],
    ["title", "Convolutional neural network"],
    [
      "paragraph",
      "С появлением больших объемов данных и больших вычислительных возможностей стали активно использоваться нейронные сети. Проблема использования нейронных сетей для распознавания образов изображений – это высокая размерность изображений. С полносвязными нейронными сетями это приводит к огромному количеству обучаемых параметров. Кроме того, данные нейронные сети не используют естественную структуру изображений, например, высокую корреляцию соседних пикселей и повторяющиеся узоры. Решением данных проблем стала СНС."
    ],
    [
      "paragraph",
      "Своё название архитектура сети получила из-за наличия операции свёртки, суть которой заключается в том, что каждый фрагмент изображения умножается на матрицу (ядро) свёртки поэлементно, а результат суммируется и записывается в аналогичную позицию выходного изображения."
    ],
    [
      "paragraph",
      "Сверточная нейронная сеть обычно представляет собой чередование свёрточных слоев, слоёв субдискретизации и полносвязных слоев на выходе [8]."
    ],
    [
      "paragraph",
      "В свёрточном слое нейроны, которые используют одни и те же веса, объединяются в карты признаков, а каждый нейрон карты признаков связан с частью нейронов предыдущего слоя. При вычислении сети получается, что каждый нейрон выполняет свертку некоторой области предыдущего слоя (определяемой множеством нейронов, связанных с данным нейроном). Пример архитектуры свёрточной нейронной сети представлен на рисунке."
    ],
    ["image", "../imgs/cnn.png", "alt"],
    [
      "paragraph",
      "Архитектуру свёрточных нейронных сетей можно определить с точки зрения количества слоев и количества карт функций на слой. К сожалению, существуют только эмпирические правила выбора этих параметров. Необходимо выбрать дополнительные параметры, такие как размер шага и фильтра в свёрточных слоях, размер пула, коэффициент отсева и тип функции активации, создавая огромное пространство параметров. Таким образом, практический анализ обучения СНС является актуальной проблемой."
    ],
    ["subtitle", "Свёрточный слой", "convolutional_layer"],
    [
      "paragraph",
      "Операция свертки, дающая СНС их имя, определяется как сумма поэлементных произведений двух матриц, тогда как одна из них рассматривается как ядро или фильтр , который применяется к другой матрице , как определено в следующем уравнении:"
    ],
    ["math", "Math Formula"],
    ["paragraph", "Пример операции свёртки представлен на рисунке 1.2."],
    ["image", "../imgs/Convolution.svg", "convolution"],
    [
      "paragraph",
      "В отличие от полносвязного, в данном слое нейрон соединен лишь с ограниченным количеством нейронов предыдущего уровня, то есть свёрточный слой аналогичен применению операции свёртки, где используется матрица весов небольшого размера (ядро свертки), которую «двигают» по всему слою. Особенностью же свёрточного слоя является небольшое количество параметров, устанавливаемое при обучении."
    ],
    ["subtitle", "Слой пулинга", "pooling_layer"],
    [
      "paragraph",
      "Слои субдискретизации (пулинга) уменьшают размеры карт признаков. Преобразования затрагивают непересекающиеся квадраты, которые ужимаются в один пиксель, при этом выбирается пиксель, имеющий максимальное значение. Пулинг существенно уменьшает пространственный объём изображения, а фильтрация ненужных деталей помогает не переобучаться. Операции пулинга представлен на рисунке 1.3."
    ],
    ["image", "../imgs/Pooling.svg"],
    [
      "paragraph",
      "Субдискретизацию выполняют разными способами, например, его можно использовать с функцией среднего значения или L2-нормирования, однако на практике было доказано, что предпочтительнее использовать субдискретизацию с функцией максимума."
    ]
  ]
];

const Posts = () => {
  const getPosts = () => {
    return posts.map(postData => (
      <Route
        key={uuid.v1()}
        path={`/articles/${postData[0]}`}
        render={() => <Post data={postData} />}
      />
    ));
  };

  return <main>{getPosts()}</main>;
};

export default Posts;
