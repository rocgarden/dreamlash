import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import {  createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/system';
import lashFace from '../Assets/lashFace.jpg';

const theme = createTheme({
  primaryAction: {
    marginRight:52,
    },
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#D4AF37', //#545454
      darker: '#053e85',
      contrastText: '#fff',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
  
});


export default function Hero(props) {

  const content = {
    'header-p1': 'Lorem ipsum nnknkn kn knnkn dolor',
    'header-p2': 'sit amet, consectetur adipiscing elit.',
    'description': 'Suspendisse  nmnmn nmn mnmn nmn mnmn mn mnmnm nmnmn nmn mnmaliquam tellus ante, porttitor mattis diam eleifend quis. Pellentesque pulvinar commodo eros sit amet finibus.',
    'primary-action': 'Action',
    'secondary-action': 'Action',
    'pattern': 'nereus-assets/img/bg/pattern2.png',
    ...props.content
  };

  return (
    <section 
     style={{  paddingBottom:12, width: '100%', height: 680, backgroundRepeat: 'no-repeat', backgroundSize:'cover',backgroundImage: `url(${lashFace})`}}>
      <Container maxWidth="md">
        <Box sx={{pt: 25}} textAlign="center" color="common.white">
        {/* <img src='https://source.unsplash.com/random' alt="React Image" width= "680" 
             height= "580"/> */}
          <Typography variant="h5" component="h2" gutterBottom={true}>
            <Typography color="#000000"variant="h2" component="span">{content['header-p1']} </Typography>
            <Typography variant="h2" component="span">hi {content['header-p2']}</Typography>
          </Typography>
          <Container maxWidth="sm">
            <Typography variant="subtitle1" color="textSecondary" paragraph={true}>{content['description']}</Typography>
          </Container>
          <Box mt={3}>
            <ThemeProvider theme={theme}>
               <Button variant="contained" color="primary"  >{content['primary-action']}</Button>
               <Button variant="outlined" color="primary">{content['secondary-action']}</Button>
           </ThemeProvider>
          </Box> 
        </Box>
      </Container>
    </section>
  );
}