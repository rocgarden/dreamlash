import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Hero from '../Sections/Hero';
import Specials from '../Sections/Specials';
import ImagesStepper from '../components/ImagesStepper';
import beforeLash from '../Assets/beforeLash.jpg';
import Services from '../Sections/Services';
import Footer from '../Sections/Footer';
import Contact from '../Sections/Contact';

function Main(){
    return(
        <Grid item xs md={4}>
            <Hero />
            <section id="styles">
              <ImagesStepper/>
            </section>
            <Grid   
              sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            pt: 3, pb:6, pl:1, pr:1,
          }}
          >
            <Grid 
             sx={{
               display: { xs:'none', sm:'none' ,md:'flex'},
              flexDirection: 'row',
              alignItems: 'center',
              pt: 3,
              paddingLeft: 1,
              paddingRight: 1,
              margin:'auto'
             }}
          >
            <Grid  item xs={10} md={8}> 
            <Box
                component="img"
                sx={{
                  height: 480,
                  display: 'block',
                  maxWidth: 480,
                  overflow: 'hidden',
                  width: '100%',
                  borderRadius:1,
                  pr:12,
                }}
                src={beforeLash}
                alt='before'
              />
             </Grid>
             <Grid item sx={{width:460, display:{ xs: 'none', sm:'block'}}}>
            <Typography component="h1" variant="h2" color="#D4AF37"   
                     sx={{ 
                     fontWeight: 'Bold', 
                     fontFamily: 'Solitreo ', fontSize: 45, pt: 1, }} >
              Transform Your Eyes
            </Typography>
            <Typography variant="caption" color="#D4AF37" 
                      sx={{ 
                       pt: 1, fontSize: 25}} >             
              Enhance your natural beauty or <br/> transform your look for any occassion
            </Typography>
            </Grid>
          </Grid>
            </Grid>
           <section id="specials">
            <Specials />
           </section>
           <section id="services">
           <Services/>
           </section>
           <section id="contact">
             <Contact/>
           </section>
           <Footer title="JanLash" description="Custom Dream Lashes"/>
        </Grid>
    );
}

export default Main;