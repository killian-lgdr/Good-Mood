import { CardContent, CardHeader, Divider, List, ListItem, ListItemText } from '@mui/material';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import AppCurrentVisits from '../app-current-visits';
import AppWebsiteVisits from '../app-website-visits';
import React from 'react';

const plotSeries = [
  {
    name: 'Energie / Bonne Humeur',
    data: [
      [20.73, 16.28],
      [35.32, 96.55],
      [95.86, 80.25],
      [37.68, 75.19],
      [72.38, 40.96],
      [96.56, 48.84],
      [56.87, 74.85],
      [44.36, 1.75],
      [99.54, 74.22],
      [3.74, 7.43],
      [26.06, 9.41],
      [16.1, 53.8],
      [45.47, 10.01],
      [96.4, 78.84],
      [48.8, 57.85],
      [95.97, 51.04],
      [16.79, 81.53],
      [40.2, 34.59],
      [46.54, 9.0],
      [82.1, 84.31],
      [66.53, 10.41],
      [21.92, 65.98],
      [25.25, 52.61],
      [91.89, 36.36],
      [47.7, 17.68],
      [62.81, 23.65],
      [28.35, 71.05],
      [22.07, 40.02],
      [28.33, 37.01],
      [39.84, 99.12],
      [8.99, 52.94],
    ],
  },
];

const lineSeries = [
  {
    name: 'Bonne Humeur',
    type: 'area',
    fill: 'gradient',
    data: [80, 65, 85, 90, 80, 70, 70, 95, 90, 88, 85, 75],
  },

  {
    name: 'Energie',
    type: 'area',
    fill: 'gradient',
    data: [90, 70, 80, 80, 95, 85, 85, 65, 75, 70, 90, 88],
  },
  {
    name: 'Stress',
    type: 'area',
    fill: 'gradient',
    data: [90, 85, 65, 85, 80, 90, 88, 70, 70, 75, 80, 95],
  },
];

const generateLabels = (dataLength) => {
  const labels = [];
  const currentDate = new Date();

  for (let i = 0; i < dataLength; i++) {
    const date = new Date(currentDate.getTime() - i * 24 * 60 * 60 * 1000);
    const formattedDate = date.toISOString().split('T')[0];
    labels.unshift(formattedDate);
  }

  return labels;
};

const suggestions = [
  {
    id: 1,
    name: 'Instaurer le free friday',
  },
  {
    id: 2,
    name: 'Mettre en place des sessions de brainstorming mensuelles',
  },
  {
    id: 3,
    name: 'Organiser des formations régulières pour le développement des compétences',
  },
  {
    id: 4,
    name: 'Créer un programme de mentorat interne',
  },
  {
    id: 5,
    name: 'Implémenter des enquêtes de satisfaction trimestrielles',
  },
  {
    id: 6,
    name: 'Encourager les projets de R&D initiés par les employés',
  },
  {
    id: 7,
    name: 'Développer une politique de télétravail flexible',
  },
  {
    id: 8,
    name: 'Introduire des séances de bien-être et de santé au travail',
  },
  {
    id: 9,
    name: 'Renforcer les équipes par des activités de team building',
  },
  {
    id: 10,
    name: 'Améliorer l’environnement de travail (espaces verts, salles de repos)',
  },
];

export default function AppView() {
  const user = JSON.parse(localStorage.getItem('user'));
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('fr-FR');
  const labels = generateLabels(11);

  return (
    <Container maxWidth="xl">
      <Typography variant="h4">Bonjour {user.name} 👋</Typography>
      <Typography variant="h6" sx={{ mb: 5 }}>
        Dashboard Bien-être
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} md={6} lg={6}>
          <AppCurrentVisits
            title={'Positionement du Bien-être Global du ' + formattedDate}
            chart={{
              series: plotSeries,
            }}
          />
        </Grid>
        <Grid xs={12} md={6} lg={6}>
          <AppWebsiteVisits
            title="Évolution du Bien-être Global"
            chart={{
              labels: labels,
              series: lineSeries,
            }}
          />
        </Grid>
        <Grid xs={12} md={12} lg={12}>
          <Card raised>
            <CardHeader
              title="Suggestions d'Amélioration"
              titleTypographyProps={{ align: 'center' }}
            />
            <CardContent>
              <List>
                {suggestions.map((suggestion, index) => (
                  <React.Fragment key={suggestion.id}>
                    <ListItem>
                      <ListItemText primary={`${index + 1}. ${suggestion.name}`} />
                    </ListItem>
                    {index !== suggestions.length - 1 && <Divider component="li" />}
                  </React.Fragment>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
