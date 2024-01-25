import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AppHistoryCard from '../app-history-card';
import AppPositionCard from '../app-position-card';
import { AppSuggestionsCard } from '../app-suggestions-card';

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

export default function AppView() {
  const user = JSON.parse(localStorage.getItem('user'));
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('fr-FR');
  //set labels based on the data length from lineSeries
  const [labels, setLabels] = useState([]);

  const [lineSeries, setLineSeries] = useState([]);
  const [plotSeries, setPlotSeries] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const getLineSeries = async () => {
      try {
        const res = await axios.get('/answer/averageByDay');
        const labels = generateLabels(res.data[0].data.length);
        setLabels(labels);
        const updatedSeries = res.data.map((item) => {
          return {
            ...item,
            data: item.data.map((value) => value * 25),
            type: 'area',
            fill: 'gradient',
          };
        });

        setLineSeries(updatedSeries);
      } catch (error) {
        console.error(error);
        setLineSeries([]);
      }
    };

    const getPlotSeries = async () => {
      try {
        const res = await axios.get('/answer/coordinate');

        const updatedSeries = {
          data: res.data.map(([x, y]) => [x * 25, y * 25]),
          name: 'Energie / Bonne Humeur',
        };

        setPlotSeries([updatedSeries]);
      } catch (error) {
        console.error(error);
        setPlotSeries([]);
      }
    };

    const getSuggestions = async () => {
      try {
        const res = await axios.get('/answer/proposal');
        //remove "0" values
        const updatedSeries = res.data.filter((s) => s !== '0');
        setSuggestions(updatedSeries);
      } catch (error) {
        setSuggestions([]);
      }
    };

    getLineSeries();
    getPlotSeries();
    getSuggestions();
  }, []);

  return (
    <Container maxWidth="xl">
      <Typography variant="h4">Bonjour {user.name} 👋</Typography>
      <Typography variant="h6" sx={{ mb: 5 }}>
        Vue Bien-être
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} md={6} lg={6}>
          <AppPositionCard
            title={'Positionement du Bien-être Global du ' + formattedDate}
            chart={{
              series: plotSeries,
            }}
          />
        </Grid>
        <Grid xs={12} md={6} lg={6}>
          <AppHistoryCard
            title="Évolution du Bien-être Global"
            chart={{
              labels: labels,
              series: lineSeries,
            }}
          />
        </Grid>
        <Grid xs={12} md={12} lg={12}>
          <AppSuggestionsCard suggestions={suggestions} />
        </Grid>
      </Grid>
    </Container>
  );
}
