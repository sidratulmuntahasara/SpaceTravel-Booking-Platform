// pages/index.js
import { Container, Typography, Button, Grid, Card, CardContent } from '@mui/material';

export default function Home() {
  return (
    <Container>
      {/* Hero Section */}
      <Typography variant="h2" align="center" gutterBottom>
        Dubai to the Stars 🚀
      </Typography>
      <Typography variant="h5" align="center" gutterBottom>
        Book your space travel experience today!
      </Typography>

      {/* Trip Scheduling */}
      <Grid container spacing={3} style={{ marginTop: '20px' }}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Choose Your Destination</Typography>
              <Typography variant="body1">Space Stations, Lunar Hotels, and more!</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Select Departure Date</Typography>
              <Typography variant="body1">Launch windows available weekly.</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Pricing & Packages */}
      <Typography variant="h4" align="center" style={{ marginTop: '40px' }}>
        Our Packages
      </Typography>
      <Grid container spacing={3} style={{ marginTop: '20px' }}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Economy Shuttle</Typography>
              <Typography variant="body1">Affordable space travel.</Typography>
              <Typography variant="h5">$50,000</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Luxury Cabin</Typography>
              <Typography variant="body1">Comfort and style in zero-gravity.</Typography>
              <Typography variant="h5">$150,000</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">VIP Zero-Gravity</Typography>
              <Typography variant="body1">Exclusive experience.</Typography>
              <Typography variant="h5">$500,000</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Call to Action */}
      <Button variant="contained" color="primary" size="large" style={{ marginTop: '40px', display: 'block', margin: '40px auto' }}>
        Book Now
      </Button>
    </Container>
  );
}