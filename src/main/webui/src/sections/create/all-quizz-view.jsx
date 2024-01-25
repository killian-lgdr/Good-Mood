import { Icon } from '@iconify/react';
import { Card, IconButton, Stack, Typography } from '@mui/material';
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
      <Typography variant="h4">Questionnaires</Typography>

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        gap={2}
        flexWrap="wrap"
        alignItems="flex-start"
      >
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

  const handleDeleteQuizz = () => {
    axios.delete(`/quizz/${quizz.id}`).then(() => {
      setQuizz((prevQuizz) => prevQuizz.filter((q) => q.id !== quizz.id));
    });
  };

  return (
    <Card
      sx={{
        p: 2,
        flex: '1 0 auto',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '294px',
      }}
    >
      <Stack gap={2} flexGrow={1}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" gap={2}>
          <Stack>
            <Typography variant="h5">{quizz.name}</Typography>
            <Typography variant="body2">{quizz.questions.length} questions</Typography>
          </Stack>
          <Stack direction="row" gap={2} justifyContent="flex-end">
            <IconButton onClick={handleStart} color="primary">
              <Icon icon="solar:play-bold-duotone" fontSize="24px" />
            </IconButton>
            <IconButton onClick={handleDeleteQuizz} color="error">
              <Icon icon="solar:trash-bin-minimalistic-bold-duotone" fontSize="24px" />
            </IconButton>
          </Stack>
        </Stack>
        <Typography variant="body1">{quizz.type === 1 ? 'Journalier' : 'Hebdomadaire'}</Typography>
        <Stack flex={1}>
          {quizz.questions.map((question, index) => (
            <Typography variant="body2" component="span" key={question.title}>
              <Typography fontWeight="bold" component="span">
                •
              </Typography>
              <span> </span>
              <span>{question.title}</span>
            </Typography>
          ))}
        </Stack>
      </Stack>
    </Card>
  );
};
