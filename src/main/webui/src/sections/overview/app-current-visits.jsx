import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Chart from 'src/components/chart';

export default function AppCurrentVisits({ title, subheader, chart, ...other }) {
  const theme = useTheme();

  const { colors, series, options } = chart;

  const chartOptions = {
    colors: colors || [theme.palette.primary.main],
    chart: {
      type: 'scatter',
      zoom: {
        enabled: true,
        type: 'xy',
      },
      toolbar: { show: false },
      foreColor: theme.palette.text.disabled,
      fontFamily: theme.typography.fontFamily,
    },
    xaxis: {
      min: 0,
      max: 100,
      tickAmount: 10,
      title: {
        text: 'Énergie',
        style: {
          color: theme.palette.text.primary,
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      min: 0,
      max: 100,
      tickAmount: 10,
      title: {
        text: 'Bonne Humeur',
        style: {
          color: theme.palette.text.primary,
          fontSize: '12px',
        },
      },
    },
    ...options,
  };

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} sx={{ mb: 5 }} />

      <Chart type="scatter" series={series} options={chartOptions} width="100%" height={364} />
    </Card>
  );
}

AppCurrentVisits.propTypes = {
  chart: PropTypes.object,
  subheader: PropTypes.string,
  title: PropTypes.string,
};
