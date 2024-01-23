import { Helmet } from 'react-helmet-async';

import { QuizzStart } from 'src/sections/quizz/quizz-start';

export default function QuizzPage() {
  return (
    <>
      <Helmet>
        <title> Questionnaire | Good Mood </title>
      </Helmet>

      <QuizzStart />
    </>
  );
}
