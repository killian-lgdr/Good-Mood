import { Helmet } from 'react-helmet-async';

import { useParams } from 'react-router-dom';
import { QuizzView } from 'src/sections/quizz';

export default function QuizzPage() {
  let { quizzId } = useParams();

  return (
    <>
      <Helmet>
        <title> Quizz | Good Mood </title>
      </Helmet>

      <QuizzView quizzId={quizzId} />
    </>
  );
}
