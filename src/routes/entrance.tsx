import { Link } from 'react-router-dom';

export default function Entrance() {
  return (
    <main>
      <h1>Welcome to the Trivia Challenge!</h1>
      <h3>You will be presented with 10 True or False questions.</h3>
      <h3>Can you score 100%?</h3>

      <Link to='/questions'>
        <h3>BEGIN</h3>
      </Link>
    </main>
  );
}
