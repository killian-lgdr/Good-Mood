import {
  Button,
  MenuItem,
  Select,
  Snackbar,
  Stack,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import Iconify from 'src/components/iconify/iconify';
import { sliderLabels } from 'src/sections/quizz/quizz-view';

export const CreateView = () => {
  const [questions, setQuestions] = useState([]);
  const [name, setName] = useState('');
  const [type, setType] = useState(0);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, { title: '', type: 1 }]);
  };

  const handleChangeQuestionTitle = (index, newValue) => {
    const newQuestions = [...questions];
    newQuestions[index].title = newValue;
    setQuestions(newQuestions);
  };

  const handleChangeQuestionType = (index, newType) => {
    const newQuestions = [...questions];
    newQuestions[index].type = newType;
    setQuestions(newQuestions);
  };

  const handleRemoveQuestion = (index) => {
    const newQuestions = questions.filter((_, i) => i !== index);
    setQuestions(newQuestions);
  };

  const handleSubmit = () => {
    const formattedQuizz = {
      name,
      type: +type,
      questions: questions.map((question) => ({ title: question.title, type: +question.type })),
    };
    axios
      .post('/quizz', formattedQuizz)
      .then((res) => {
        setSnackbarMessage('Quiz créé avec succès!');
        ('success');
        setOpenSnackbar(true);
      })
      .catch((error) => {
        setSnackbarMessage('Erreur lors de la création du quiz');
        setOpenSnackbar(true);
      });
  };
  return (
    <>
      <Stack spacing={3} sx={{ p: 3 }}>
        <Typography variant="h4">Créer un Quizz</Typography>

        <Stack direction={{ xs: 'column', md: 'row' }} gap={2}>
          <TextField
            sx={{ flex: 1 }}
            label="Titre du Quizz"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Stack direction="row" alignItems="center" gap={1}>
            <Typography>Journalier</Typography>
            <Switch checked={type === 1} onChange={(e) => setType(e.target.checked ? 1 : 0)} />
            <Typography>Hebdomadaire</Typography>
          </Stack>
        </Stack>

        {questions.map((question, index) => (
          <Stack key={index} direction={{ xs: 'column', md: 'row' }} spacing={2}>
            <TextField
              sx={{ flex: 1 }}
              label={`Question ${index + 1}`}
              variant="outlined"
              value={question.title}
              onChange={(e) => handleChangeQuestionTitle(index, e.target.value)}
            />
            <Select
              value={question.type.toString()}
              onChange={(e) => handleChangeQuestionType(index, e.target.value)}
              sx={{
                '.MuiSelect-select': {
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                },
              }}
            >
              {Object.entries(sliderLabels).map(([key, labels]) => {
                return (
                  <MenuItem key={key} value={key}>
                    {labels.map((label) => (
                      <Stack key={label.value} direction="row" gap={2} alignItems="center">
                        <Typography>{label.label}</Typography>
                      </Stack>
                    ))}
                  </MenuItem>
                );
              })}
            </Select>
            <Button onClick={() => handleRemoveQuestion(index)}>
              <Iconify icon="eva:trash-2-outline" />
            </Button>
          </Stack>
        ))}

        <Stack direction="row" gap={2}>
          <Button
            variant="contained"
            color="inherit"
            startIcon={<Iconify icon="solar:add-circle-bold-duotone" width={24} />}
            onClick={handleAddQuestion}
          >
            Ajouter une question
          </Button>

          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Confirmer
          </Button>
        </Stack>
      </Stack>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
        action={
          <Button color="secondary" size="small" onClick={handleCloseSnackbar}>
            FERMER
          </Button>
        }
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      />
    </>
  );
};
