import { styled } from '@mui/system';

import { TabsList } from '@mui/base/TabsList';
import { blue, grey } from '@mui/material/colors';

export const StyledTabsList = styled(TabsList)(
  ({ theme }) => `
    min-width: 400px;
    background-color: ${blue[500]};
    border-radius: 12px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: space-between;
    box-shadow: 0px 4px 30px ${
      theme.palette.mode === 'dark' ? grey[900] : grey[200]
    };
    `
);
