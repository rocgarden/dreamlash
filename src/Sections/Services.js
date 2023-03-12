import React from 'react';
import lashKit from '../Assets/lashKit.jpg';
import { Typography, Box, Grid, Divider } from '@mui/material';



export default function Services(props) {
  const services = [
    {
      id: 1,
      name: 'Full Set',
      description:
        'Enhance your natural beauty or dress up your eyes for a special occassion. Specialty kits are custom made for you to use at home. Many different styles are available. From natural to extra thick lengths. Request yours today.',
      image_url:lashKit,
      price: '$50-$80',
    },
    {
        id: 2,
        name: 'Refills',
        description:
        'Enhance your natural beauty or dress up your eyes for a special occassion. Specialty kits are custom made for you to use at home. Many different styles are available. From natural to extra thick lengths. Request yours today.',
        image_url:lashKit,
        price: '$50-$80',
    },  
        {
        id: 3,
        name: 'Inserts',
        description:
        'Enhance your natural beauty or dress up your eyes for a special occassion. Specialty kits are custom made for you to use at home. Many different styles are available. From natural to extra thick lengths. Request yours today.',
        image_url:lashKit,
        price: '$50-$80',
    },
      {
        id: 4,
        name: 'Specialty',
        description:
        'Enhance your natural beauty or dress up your eyes for a special occassion. Specialty kits are custom made for you to use at home. Many different styles are available. From natural to extra thick lengths. Request yours today.',
        image_url:lashKit,
        price: '$50-$80',
    },
  ]
return (
<Grid
      sx={{
        flexGrow: 1,
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '400px',
        backgroundColor: '#545454', opacity: '0.7'
      }}
    >
      <Divider>
          <Typography fontFamily='Solitreo' color="#D4AF37" variant="h3">Services</Typography>
      </Divider>
      <Grid xs={12} sm={12} md={12} lg={12}
      container item  sx={{
            flexGrow: 1,
            padding: 3,
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 5,
            marginTop: 5,
            border: 1,
            borderColor: '#D4AF37',
          }}>
          { services.map((service) =>(
             <Grid key={service.id} item xs={12} sm={12} md={12} lg={12}
            //  container item key={service.id} sx={{  pt: 3, display:{ sm:'block',  }}}
             >
                <Grid   sx={{ alignItems: 'center', justifyContent:'center', }}>
                <Typography   //color="#F8F8F8"
                   component="h1" variant="h1" color="#D4AF37" gutterBottom 
                        sx={{  fontFamily: 'Solitreo',
                        fontSize: 25, pt: 1 , fontWeight:'bold'}} >
                {service.name}
                </Typography>
                </Grid>
                <Grid   
                 sx={{
                   display: { sm: 'flex'  },
                   flexDirection: 'row',
                   alignItems: 'center',
                   justifyContent:'center',
                   paddingLeft: 15,
                   paddingRight: 15,
                }}
                >
                <Grid item
                 sx={{ display: {xs:'none', sm: 'none', md: 'flex', lg:'flex'}}}
                >
                <Box
                component="img"
                sx={{
                  height: 100,
                  display: 'block',
                  width: '100%',
                  pr:25,

                }}
                src={service.image_url}
                alt='before'
              />
              </Grid>
              <Grid container item xs={12} sm={12} md={6} lg={12} sx={{alignItems:'center', justifyContent:'center'}}>
                <Typography  variant="subtitle" color="#D4AF37" paragraph
                        sx={{ 
                        pt: 1, }} >             
                {service.description}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4} sx={{ alignItems: 'center', justifyContent:'center'}}>
                <Typography variant="caption" color="#D4AF37" 
                        sx={{ fontFamily:'Solitero',fontWeight:'Bold',
                         fontSize: 20}} >             
                 {service.price}
                </Typography>
               </Grid>
                </Grid>

             </Grid>
          ))}
      </Grid>
    </Grid>
)

}