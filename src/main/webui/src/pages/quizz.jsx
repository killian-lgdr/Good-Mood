import { Helmet } from 'react-helmet-async';

import { QuizzView } from 'src/sections/quizz';

export default function QuizzPage() {
  return (
    <>
      <Helmet>
        <title> Quizz | Good Mood </title>
      </Helmet>

      <QuizzView />
    </>
  );
}
