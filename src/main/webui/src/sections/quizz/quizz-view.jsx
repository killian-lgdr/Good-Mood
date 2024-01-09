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

const quizzId = 'quizz123';
const userId = 'user123';

const questions = [
  { id: 'q1', question: "Comment vous sentez-vous aujourd'hui ?", labelType: 1 },
  {
    id: 'q2',
    question: "À quel point êtes-vous satisfait de votre productivité aujourd'hui ?",
    labelType: 2,
  },
  { id: 'q3', question: "À quel niveau avez-vous ressenti du stress aujourd'hui ?", labelType: 1 },
  {
    id: 'q4',
    question: "Comment évalueriez-vous votre niveau d'énergie aujourd'hui ?",
    labelType: 3,
  },
  {
    id: 'q11',
    question: "Avez-vous d'autres commentaires ou suggestions à partager ?",
    labelType: 4,
  },
];

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

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(() => {
    const savedAnswers = localStorage.getItem('goodMoodAnswers');
    return savedAnswers ? JSON.parse(savedAnswers) : {};
  });

  useEffect(() => {
    const savedData = {
      answers: Object.entries(answers).map(([questionId, value]) => ({
        quizz: {
          id: quizzId,
        },
        appUser: {
          id: userId,
        },
        question: {
          id: questionId,
        },
        value: value.toString(),
      })),
    };
    localStorage.setItem('goodMoodData', JSON.stringify(savedData));
  }, [answers]);

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
    console.log(localStorage.getItem('goodMoodAnswers'));
    localStorage.removeItem('goodMoodAnswers');

    navigate('/');
  };

  const renderQuestionInput = () => {
    const question = questions[currentQuestionIndex];
    if (question.labelType === 4) {
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
          marks={sliderLabels[question.labelType]}
        />
      );
    }
  };

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Questionnaire ✅
      </Typography>
      <Card>
        <CardContent sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <Stack gap={2} maxWidth="sm" alignItems="center" width="100%">
            <Typography variant="h6" sx={{ mb: 2 }}>
              {questions[currentQuestionIndex].question}
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
