import { Button, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { QuizzStartIllustration } from './quizz-start-illustration';

export const QuizzStart = () => {
  const navigate = useNavigate();

  const handleClicked = () => {
    navigate('/quizz');
  };

  return (
    <Stack height="100%" alignItems="center" justifyContent="center" gap={10}>
      <Stack gap={2}>
        <Typography variant="h2">Quiz</Typography>
        <Typography>Vous allez commencer le quiz hebdomadaire</Typography>
      </Stack>

      <QuizzStartIllustration />

      <Button variant="contained" color="primary" onClick={handleClicked}>
        Commencer
      </Button>
    </Stack>
  );
};