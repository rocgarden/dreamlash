import React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import lashKit from '../Assets/lashKit.jpg';
import { Typography, Box, Card, CardContent, Grid } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/system';

const theme = createTheme({
 
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

export default function Specials(props) {
  const reviews = [
    {
      id: 1,
      name: 'Karl Brighton',
      title: 'Whispy',
      statement:
      'Enhance your natural beauty or dress up your eyes for a special occassion. Specialty kits are custom made for you to use at home. Many different styles are available. From natural to extra thick lengths. Request yours today.',
      image_url:{lashKit},
      position: 'Software Engineer at Kadex',
    },
    {
      id: 2,
      name: 'Krishna Bells',
      title: 'Natural',
      statement:
      'Enhance your natural beauty or dress up your eyes for a special occassion. Specialty kits are custom made for you to use at home. Many different styles are available. From natural to extra thick lengths. Request yours today.',
      image_url:
        'https://sweta-myteam-website-fm.netlify.app/static/media/avatar-aiysha.e119a0c1.jpg',
      position: 'Product Manager at Google',
    },
    {
      id: 3,
      name: 'Krishna Bells',
      title: 'Natural',
      statement:
      'Enhance your natural beauty or dress up your eyes for a special occassion. Specialty kits are custom made for you to use at home. Many different styles are available. From natural to extra thick lengths. Request yours today.',
      image_url:
        'https://sweta-myteam-website-fm.netlify.app/static/media/avatar-aiysha.e119a0c1.jpg',
      position: 'Product Manager at Google',
    },
  ]
return (
<Box
      sx={{
        flexGrow: 1,
        padding: 12,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '300px',
      }}
    >
      <Container>
      <Typography  color="#D4AF37"variant="h2" component="span">Specialty Kits Available</Typography>
      <Grid container spacing={5} pt={5}>
        {reviews.map((review) => (
          <Grid  item sm={12} md={4} key={review.id} sx={{p: 3}}>
            <Card 
                  sx={{ color: '#D4AF37', height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 1, backgroundColor:'#FFF'}}
                >
              <Typography 
                 sx={{   
                  // #FFD700
                   color: "#D4AF37", pt:1, pb:1, backgroundColor:'#FFF',
                    fontSize: 30, 
                  }}
                >{review.title}
               </Typography> 
               <CardMedia
                    component="img"
                    image={lashKit}
                    alt="random"
                  />              
              <CardContent>
                <Box>
                {/* <img src={lashes} alt="React Image" width= "280" /> */}
                  "{review.statement}"
                </Box>
                <ThemeProvider theme={theme}>
                <CardActions>
                  <Button variant="contained" color="primary" fullWidth>
                    Order
                  </Button>
                </CardActions>
                </ThemeProvider>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      </Container>
    </Box>
)

}