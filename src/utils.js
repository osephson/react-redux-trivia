export function fetchQuestions() {
  const result = {
    response_code: 0,
    results: [
      {
        category: "Vehicles",
        type: "boolean",
        difficulty: "hard",
        question:
          "In 1993 Swedish car manufacturer Saab experimented with replacing the steering wheel with a joystick in a Saab 9000.",
        correct_answer: "True",
        incorrect_answers: ["False"],
      },
      {
        category: "Science & Nature",
        type: "boolean",
        difficulty: "hard",
        question:
          "It was once believed that injecting shark cartilage into people would prevent them from contracting cancer.",
        correct_answer: "True",
        incorrect_answers: ["False"],
      },
      {
        category: "Entertainment: Japanese Anime & Manga",
        type: "boolean",
        difficulty: "hard",
        question:
          "Throughout the entirety of &quot;Dragon Ball Z&quot;, Goku only kills two characters: a miniboss named Yakon and Kid Buu.",
        correct_answer: "True",
        incorrect_answers: ["False"],
      },
      {
        category: "Entertainment: Video Games",
        type: "boolean",
        difficulty: "hard",
        question:
          "The names of Roxas&#039;s Keyblades in Kingdom Hearts are &quot;Oathkeeper&quot; and &quot;Oblivion&quot;.",
        correct_answer: "True",
        incorrect_answers: ["False"],
      },
      {
        category: "Science & Nature",
        type: "boolean",
        difficulty: "hard",
        question:
          "The value of one Calorie is different than the value of one calorie.",
        correct_answer: "True",
        incorrect_answers: ["False"],
      },
      {
        category: "History",
        type: "boolean",
        difficulty: "hard",
        question:
          "During the Winter War, the amount of Soviet Union soliders that died or went missing was five times more than Finland&#039;s.",
        correct_answer: "True",
        incorrect_answers: ["False"],
      },
      {
        category: "Politics",
        type: "boolean",
        difficulty: "hard",
        question:
          "George Clinton, Vice President of the United States (1805-1812), is an ancestor of President Bill Clinton.",
        correct_answer: "False",
        incorrect_answers: ["True"],
      },
      {
        category: "Entertainment: Music",
        type: "boolean",
        difficulty: "hard",
        question:
          "Pete Townshend&#039;s solo album, &quot;White City: A Novel&quot;, is set in the metropolitan area of Chicago.",
        correct_answer: "False",
        incorrect_answers: ["True"],
      },
      {
        category: "Art",
        type: "boolean",
        difficulty: "hard",
        question:
          "The Statue of Liberty&#039;s official name is &ldquo;Liberty Enlightening the World&rdquo;.",
        correct_answer: "True",
        incorrect_answers: ["False"],
      },
      {
        category: "Entertainment: Video Games",
        type: "boolean",
        difficulty: "hard",
        question:
          "The Paradox Interactive game &quot;Stellaris&quot; was released in 2016.",
        correct_answer: "True",
        incorrect_answers: ["False"],
      },
    ],
  };
  return Promise.resolve(result.results);
  // return fetch("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean")
}
