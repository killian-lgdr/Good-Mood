import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import AppCurrentVisits from '../app-current-visits';
import AppWebsiteVisits from '../app-website-visits';
import AppCurrentSubject from '../app-current-subject';

export default function AppView() {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Dashboard Bien-être 👋
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} md={12} lg={12}>
          <AppWebsiteVisits
            title="Évolution du Bien-être Global"
            subheader="(comparé à l'année dernière)"
            chart={{
              labels: [
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ],
              series: [
                {
                  name: 'Score de Bien-être',
                  type: 'area',
                  fill: 'gradient',
                  data: [70, 75, 80, 65, 85, 90, 70, 80, 85, 88, 90, 95],
                },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={6}>
          <AppCurrentVisits
            title="Visites Actuelles"
            chart={{
              series: [
                { label: 'Bureau', value: 3000 },
                { label: 'Télétravail', value: 4500 },
                { label: 'En déplacement', value: 1500 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={6}>
          <AppCurrentSubject
            title="Sujets d'Intérêt"
            chart={{
              categories: ['Relaxation', 'Productivité', 'Sport', 'Nutrition', 'Loisirs', 'Social'],
              series: [
                { name: 'Bureau', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Télétravail', data: [20, 30, 40, 80, 20, 80] },
                { name: 'En déplacement', data: [44, 76, 78, 13, 43, 10] },
              ],
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
