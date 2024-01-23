import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { AllQuizzView } from 'src/sections/create/all-quizz-view';
import { CreateView } from 'src/sections/create/create-view';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`quizz-tabpanel-${index}`}
      aria-labelledby={`quizz-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function CreateQuizzPage() {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (_, newValue) => {
    setTabValue(newValue);
  };

  return (
    <>
      <Helmet>
        <title>Good Mood | Quizz</title>
      </Helmet>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tabValue} onChange={handleChange} aria-label="quizz tabs">
          <Tab label="Tous les quizz" />
          <Tab label="Nouveau quizz" />
        </Tabs>
      </Box>

      <TabPanel value={tabValue} index={0}>
        <AllQuizzView />
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        <CreateView />
      </TabPanel>
    </>
  );
}
