import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemText,
  Pagination,
} from '@mui/material';
import React, { useState } from 'react';

export const AppSuggestionsCard = ({ suggestions }) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const count = Math.ceil(suggestions.length / itemsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const paginatedSuggestions = suggestions.slice(startIndex, startIndex + itemsPerPage);

  return (
    <Card raised>
      <CardHeader title="Suggestions du mois" titleTypographyProps={{ align: 'center' }} />
      <CardContent>
        <List>
          {paginatedSuggestions.map((suggestion, index) => (
            <React.Fragment key={index}>
              <ListItem>
                <ListItemText primary={`${startIndex + index + 1}. ${suggestion}`} />
              </ListItem>
              {index !== paginatedSuggestions.length - 1 && <Divider component="li" />}
            </React.Fragment>
          ))}
        </List>
        <Pagination count={count} page={page} onChange={handleChangePage} color="primary" />
      </CardContent>
    </Card>
  );
};
