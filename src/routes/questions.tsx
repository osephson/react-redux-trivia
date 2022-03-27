import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { fetchQuestions } from '../utils';

interface Question {
  category: String;
  question: string;
  correct_answer: String;
}

export default function Questions() {
  const navigate = useNavigate();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [results, setResults] = useState<Boolean[]>([]);

  useEffect(() => {
    fetchQuestions().then((res: Question[]) => {
      setQuestions(res);
      setResults(Array(res.length).fill(false));
    });
  }, []);

  const onAnswer = (q: Question, answer: String) => {
    const resultList = [...results];
    resultList[index] = q.correct_answer === answer;
    setResults(resultList);
    if (index === questions.length - 1) {
      return navigate('/result', {
        state: {
          questions,
          results: resultList,
        },
      });
    }
    setIndex(index + 1);
  };

  return (
    <main>
      {questions[index] && (
        <>
          <h3>{questions[index].category}</h3>
          <div
            className='my-3 p-4 d-flex align-items-center w-100'
            style={{
              minHeight: '300px',
              border: '1px solid black',
            }}
          >
            <p
              dangerouslySetInnerHTML={{ __html: questions[index].question }}
            ></p>
          </div>
          <p>
            {index + 1} of {questions.length}
          </p>
          <div className='d-flex justify-content-center'>
            <button
              type='button'
              className='btn btn-lg btn-outline-success mx-3'
              onClick={() => onAnswer(questions[index], 'True')}
            >
              Yes
            </button>

            <button
              type='button'
              className='btn btn-lg btn-outline-danger mx-3'
              onClick={() => onAnswer(questions[index], 'False')}
            >
              No
            </button>
          </div>
        </>
      )}
    </main>
  );
}
