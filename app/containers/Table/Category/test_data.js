const questions = [
  {
    id: 1,
    question: "Cat1Q1",
    type: "list",
    options: [
      "yes",
      "no",
      "maybe",
      "could be"
    ]
  },
  {
    id: 2,
    question: "Cat1Q2",
    type: "radio",
    options: [
      "yes",
      "no",
      "maybe"
    ]
  },
  {
    id: 3,
    question: "Cat2Q1",
    type: "slider",
    options: [
      "yes",
      "no"
    ]
  },
  {
    id: 4,
    question: "Cat2Q2",
    type: "slider",
    options: [
      "yes",
      "no"
    ]
  }
]
export default
  [
    {
      cat_name: "cat1",
      questions,
      number_questions: 4
    },
    {
      cat_name: "cat2",
      questions,
      number_questions: 3
    }
  ]
