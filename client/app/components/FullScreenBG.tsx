import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const FullScreenBG = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <Container maxWidth={false} disableGutters sx={{
      height:'100vh'
    }}>
      <Box sx={{
        height:'100%'
      }} >
        {children}
      </Box>
    </Container>    
  )
}

export default FullScreenBG