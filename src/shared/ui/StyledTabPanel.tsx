import { styled } from '@mui/system';
import { TabPanel } from '@mui/base/TabPanel';
import { grey } from '@mui/material/colors';
export const StyledTabPanel = styled(TabPanel)(
  ({ theme }) => `
    width: 100%;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    padding: 20px 12px;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    border-radius: 12px;
    opacity: 0.6;
    `
);
