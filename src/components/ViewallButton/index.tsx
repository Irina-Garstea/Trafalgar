import * as React from 'react';
import { ViewAll } from './styled';

import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <ViewAll>
      <Button variant="contained">View all</Button>
    </ViewAll>
  );
}
