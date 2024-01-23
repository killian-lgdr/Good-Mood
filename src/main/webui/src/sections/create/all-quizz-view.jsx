import { Button, Card, Stack, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AllQuizzView = () => {
  const [quizz, setQuizz] = useState([]);

  useEffect(() => {
    axios.get('/quizz').then((res) => {
      setQuizz(res.data);
    });
  }, []);

  return (
    <Stack spacing={3} sx={{ p: 3 }}>
      <Typography variant="h4">Tous les Quizz</Typography>

      <Stack spacing={2}>
        {quizz.map((quizz) => (
          <QuizzCard key={quizz.id} quizz={quizz} setQuizz={setQuizz} />
        ))}
      </Stack>
    </Stack>
  );
};

const QuizzCard = ({ quizz, setQuizz }) => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate(`/quizz/${quizz.id}`);
  };

  const handleEdit = () => {
    navigate(`/create-quizz/${quizz.id}`);
  };

  const handleDeleteQuizz = () => {
    axios.delete(`/quizz/${quizz.id}`).then(() => {
      setQuizz((prevQuizz) => prevQuizz.filter((q) => q.id !== quizz.id));
    });
  };

  return (
    <Card sx={{ p: 2, flex: 1 }}>
      <Stack gap={2}>
        <Typography variant="h5">{quizz.name}</Typography>
        <Typography variant="body1">{quizz.type === 1 ? 'Journalier' : 'Hebdomadaire'}</Typography>
        <Typography variant="body2">{quizz.questions.length} questions</Typography>
        <Stack>
          {quizz.questions.map((question) => (
            <Typography variant="body2">{question.title}</Typography>
          ))}
        </Stack>
        <Stack direction="row" gap={2}>
          <Button variant="contained" onClick={handleStart}>
            Lancer
          </Button>
          <Button variant="outlined" onClick={handleEdit}>
            Modifier
          </Button>
          <Button variant="outlined" color="error" onClick={handleDeleteQuizz}>
            Supprimer
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};
