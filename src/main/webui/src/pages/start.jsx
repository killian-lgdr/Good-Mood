import { Helmet } from 'react-helmet-async';

import { QuizzStart } from 'src/sections/quizz/quizz-start';

export default function QuizzPage() {
  return (
    <>
      <Helmet>
        <title> Quizz | Good Mood </title>
      </Helmet>

      <QuizzStart />
    </>
  );
}
