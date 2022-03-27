import { useLocation, Link } from 'react-router-dom';

interface Question {
  question: string;
}

interface State {
  questions: Array<Question>;
  results: Array<Boolean>;
}

export default function Result() {
  const location = useLocation();
  const state = location.state as State;
  const { questions, results } = state;

  const score = results.filter((result) => !!result).length;

  return (
    <main>
      <b>
        You Scored
        <br />
        {score} / {results.length}
      </b>

      <div className='my-4'>
        {questions.map((q, index) => {
          return (
            <div className='d-flex' key={index}>
              <span
                className='mr-1'
                style={{
                  fontSize: '2em',
                  lineHeight: '0.6em',
                  width: '1em',
                }}
              >
                {results[index] ? '+' : '-'}
              </span>
              <p
                style={{ textAlign: 'left' }}
                dangerouslySetInnerHTML={{ __html: q.question }}
              ></p>
            </div>
          );
        })}
      </div>

      <Link to='/questions'>PLAY AGAIN?</Link>
    </main>
  );
}
