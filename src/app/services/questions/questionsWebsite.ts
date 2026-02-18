import { QuestionModel } from "@app/models/question-model"
import { TxtFin } from "@app/models/txt-fin";

export const questions = <QuestionModel[]>[
  {
    id: 0,
    gain: 100,
    question: "Que fait la vache qui rit ?",
    answers: [
      {
        id: 0,
        answer: "Elle rit",
      },
      {
        id: 1,
        answer: "Elle mange de l'herbe",
      },
      {
        id: 2,
        answer: "Elle boit du lait",
      },
      {
        id: 3,
        answer: "Elle pleure",
      }
    ],
    correctAnswer: 0
  },
  {
    id: 1,
    gain: 200,
    question: "Combien y'a t'il de chiens dans la Pat' Patrouille ?",
    answers: [
      {
        id: 0,
        answer: "4",
      },
      {
        id: 1,
        answer: "6",
      },
      {
        id: 2,
        answer: "8",
      },
      {
        id: 3,
        answer: "10",
      }
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    gain: 300,
    question: "Qui est le plus grand de ces dinausores ?",
    answers: [
      {
        id: 0,
        answer: "T-rex",
      },
      {
        id: 1,
        answer: "Velociraptor",
      },
      {
        id: 2,
        answer: "Triceratops",
      },
      {
        id: 3,
        answer: "Stégosaure",
      }
    ],
    correctAnswer: 0
  },
  {
    id: 3,
    gain: 500,
    question: "Quelle est la capital du Pérou ?",
    answers: [
      {
        id: 0,
        answer: "Quito",
      },
      {
        id: 1,
        answer: "Bogota",
      },
      {
        id: 2,
        answer: "Santiago",
      },
      {
        id: 3,
        answer: "Lima",
      }
    ],
    correctAnswer: 3
  },
  {
    id: 4,
    gain: 1000,
    question: "Qui a fondé la célèbre entreprise SpaceX ?",
    answers: [
      {
        id: 0,
        answer: "Jeff Bezos"
      },
      {
        id: 1,
        answer: "Bill Gates"
      },
      {
        id: 2,
        answer: "Elon Musk",
      },
      {
        id: 3,
        answer: "Mark Zuckerberg",
      }
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    gain: 2000,
    question: "Quel est le nom du mathématicien allemand célèbre pour son théorème sur les triangles ?",
    answers: [
      {
        id: 0,
        answer: "Euclide",
      },
      {
        id: 1,
        answer: "René Descartes",
      },
      {
        id: 2,
        answer: "Carl Friedrich Gauss",
      },
      {
        id: 3,
        answer: "Pythagore",
      }
    ],
    correctAnswer: 3
  },
  {
    id: 6,
    gain: 8000,
    question: "Qui a écrit le livre 'Le Petit Prince' ?",
    answers: [
      {
        id: 0,
        answer: "Jules Verne"
      },
      {
        id: 1,
        answer: "Antoine de Saint-Exupéry"
      },
      {
        id: 2,
        answer: "Albert Camus",
      },
      {
        id: 3,
        answer: "Marcel Proust",
      }
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    gain: 12000,
    question: "Quelle est la plus haute cascade du monde ?",
    answers: [
      {
        id: 0,
        answer: "Salto Ángel",
      },
      {
        id: 1,
        answer: "Chutes du Niagara",
      },
      {
        id: 2,
        answer: "Chutes du Tugela",
      },
      {
        id: 3,
        answer: "Salto del Laja",
      }
    ],
    correctAnswer: 0
  },
  {
    id: 8,
    gain: 12000,
    question: "Quelle partie de l'oeil humain est colorée en bleu, vert ou brun ?",
    answers: [
      {
        id: 0,
        answer: "Iris",
      },
      {
        id: 1,
        answer: "Pupille",
      },
      {
        id: 2,
        answer: "Rétine",
      },
      {
        id: 3,
        answer: "Cornée",
      }
    ],
    correctAnswer: 0
  },
  {
    id: 9,
    gain: 24000,
    question: "Quelle est la planète la plus éloignée du soleil dans notre système solaire ?",
    answers: [
      {
        id: 0,
        answer: "Jupiter",
      },
      {
        id: 1,
        answer: "Uranus",
      },
      {
        id: 2,
        answer: "Pluton",
      },
      {
        id: 3,
        answer: "Neptune",
      }
    ],
    correctAnswer: 3
  },
  {
    id: 10,
    gain: 36000,
    question: "Quel est le philosophe grec souvent considéré comme le père de la philosophie occidentale ?",
    answers: [
      {
        id: 0,
        answer: "Socrate",
      },
      {
        id: 1,
        answer: "Aristote",
      },
      {
        id: 2,
        answer: "Platon",
      },
      {
        id: 3,
        answer: "Héraclite",
      }
    ],
    correctAnswer: 0
  },
  {
    id: 11,
    gain: 72000,
    question: "Quelle est la distance en kilomètres du tour de la Terre à l'équateur ?",
    answers: [
      {
        id: 0,
        answer: "Environ 20,000 km",
      },
      {
        id: 1,
        answer: "Environ 30,000 km",
      },
      {
        id: 2,
        answer: "Environ 40,000 km",
      },
      {
        id: 3,
        answer: "Environ 50,000 km",
      }
    ],
    correctAnswer: 2
  },
  {
    id: 12,
    gain: 150000,
    question: "Quel est le pays avec la plus grande population en Afrique ?",
    answers: [
      {
        id: 0,
        answer: "Nigéria",
      },
      {
        id: 1,
        answer: "Ethiopie",
      },
      {
        id: 2,
        answer: "Tanzanie",
      },
      {
        id: 3,
        answer: "Afrique du Sud",
      }
    ],
    correctAnswer: 0
  },
  {
    id: 13,
    gain: 300000,
    question: "Qui a peint la fresque 'La Cène' ?",
    answers: [
      {
        id: 0,
        answer: "Michel-Ange",
      },
      {
        id: 1,
        answer: "Raphaël",
      },
      {
        id: 2,
        answer: "Leonardo da Vinci",
      },
      {
        id: 3,
        answer: "Sandro Botticelli",
      }
    ],
    correctAnswer: 2
  },
  {
    id: 14,
    gain: 1000000,
    question: "Lequel de ces animaux faut-il châtrer avant de le cuire ?",
    answers: [
      {
        id: 0,
        answer: "Le calamar",
      },
      {
        id: 1,
        answer: "L'huître",
      },
      {
        id: 2,
        answer: "L'écrevisse",

      },
      {
        id: 3,
        answer: "La truite",
      }
    ],
    correctAnswer: 2
  }
];
export const title = "Jeu de questions sur le thème du savoir général";
export const birthday = "";
export const txtFin = <TxtFin>{
  resultEx: "c'est un 100%, score parfait, félicitations !",
  resultTb: "Score pas loin d'être parfait, compliments !",
  resultBn: "Résultat tout à fait honorable, encouragements",
  resultPm: "C'est pas top tout ca... Il va falloir réviser un peu !",
  resultNu: "C'est la catastrophe... Des sanctions vont devoir être prises !"
}