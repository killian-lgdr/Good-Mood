import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import axios from 'axios';

const quizzId = '89ef7139-58d9-4a2e-911e-17ae5993acb2';
const userId = '484270bd-9413-4768-98ff-110f95e7a626';

const sliderLabels = {
  1: [
    { value: 0, label: '😡' }, // Très insatisfait
    { value: 1, label: '😕' }, // Insatisfait
    { value: 2, label: '😐' }, // Neutre
    { value: 3, label: '😀' }, // Satisfait
    { value: 4, label: '😁' }, // Très satisfait
  ],
  2: [
    { value: 0, label: '👎' }, // Très insatisfaisant
    { value: 1, label: '🙁' }, // Insatisfaisant
    { value: 2, label: '😐' }, // Moyen
    { value: 3, label: '🙂' }, // Satisfaisant
    { value: 4, label: '👍' }, // Très satisfaisant
  ],
  3: [
    { value: 0, label: '💤' }, // Très bas
    { value: 1, label: '🚶‍♂️' }, // Bas
    { value: 2, label: '🧍' }, // Moyen
    { value: 3, label: '🏃‍♂️' }, // Élevé
    { value: 4, label: '🚀' }, // Très élevé
  ],
};

export default function QuizzView() {
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [answers, setAnswers] = useState(() => {
    const savedAnswers = localStorage.getItem('goodMoodData');
    return savedAnswers ? JSON.parse(savedAnswers) : {};
  });

  useEffect(() => {
    axios
      .get('/quizz/' + quizzId)
      .then((response) => {
        setQuestions(response.data.questions);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Erreur lors du chargement du quizz:', error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const savedData = {
      answers: questions.map((question) => ({
        quizz: {
          id: quizzId,
        },
        appUser: {
          id: userId,
        },
        question: {
          id: question.id,
        },
        value: answers[question.id]?.toString() ?? '0',
      })),
    };
    localStorage.setItem('goodMoodData', JSON.stringify(savedData));
  }, [answers, questions]);

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      const currentAnswer = answers[currentQuestionIndex] ?? 0;
      setAnswers({ ...answers, [currentQuestionIndex]: currentAnswer });
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSliderChange = (_, newValue) => {
    setAnswers({ ...answers, [currentQuestionIndex]: newValue });
  };

  const handleInputChange = (newValue) => {
    setAnswers({ ...answers, [currentQuestionIndex]: newValue });
  };

  const handleSubmit = () => {
    const data = localStorage.getItem('goodMoodData');
    const parsedData = JSON.parse(data);

    if (!parsedData) {
      console.error('Aucune donnée à soumettre.');
      return;
    }

    console.log(parsedData.answers);

    axios
      .post('/answer', parsedData.answers, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log('Réponse du serveur :', response);
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi des données :", error);
      })
      .finally(() => {
        localStorage.removeItem('goodMoodData');
        navigate('/');
      });
  };

  const renderQuestionInput = () => {
    const question = questions[currentQuestionIndex];
    if (question.type === 4) {
      return (
        <TextField
          fullWidth
          multiline
          rows={4}
          value={answers[currentQuestionIndex] || ''}
          onChange={(e) => handleInputChange(e.target.value)}
        />
      );
    } else {
      return (
        <Slider
          value={answers[currentQuestionIndex] ?? 0}
          onChange={handleSliderChange}
          aria-labelledby="input-slider"
          sx={{
            '.MuiSlider-markLabel': { fontSize: '24px' },
            '.MuiSlider-mark': { width: '4px', height: '12px', borderRadius: '5px' },
            '.MuiSlider-markActive': {
              bgcolor: 'primary.light',
            },
          }}
          min={0}
          max={4}
          step={1}
          marks={sliderLabels[question.type]}
        />
      );
    }
  };

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Questionnaire ✅
      </Typography>
      <Card>
        <CardContent sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <Stack gap={2} maxWidth="sm" alignItems="center" width="100%">
            <Typography variant="h6" sx={{ mb: 2 }}>
              {questions[currentQuestionIndex].title}
            </Typography>
            <Stack width="100%">{renderQuestionInput()}</Stack>
            <Stack direction="row" justifyContent="space-around" width="100%" mt={4}>
              <Button
                variant="outlined"
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
              >
                Précédent
              </Button>
              {currentQuestionIndex === questions.length - 1 ? (
                <Button variant="contained" onClick={handleSubmit}>
                  Confirmer
                </Button>
              ) : (
                <Button variant="contained" onClick={handleNext}>
                  Suivant
                </Button>
              )}
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
}
