import { Container, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import SpaceMap from '../app/components/SpaceMap/page';
import DestinationCard from '../app/components/DestinationCard/page';

const destinations = [
  {
    name: 'Lunar Hotel',
    description: 'Stay in luxury on the Moon.',
    hotels: ['Orion Suites', 'Zero-Gravity Lounge'],
    activities: ['Moonwalking', 'Crater Exploration'],
  },
  {
    name: 'Mars Colony',
    description: 'Experience life on the Red Planet.',
    hotels: ['Red Dust Inn', 'Martian Oasis'],
    activities: ['Rover Rides', 'Dust Storms Surfing'],
  },
];

// Add this inside the Container:
{destinations.map((destination, index) => (
  <DestinationCard key={index} destination={destination} />
))}

export default function Home() {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src="/space.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <Container style={{ position: 'relative', zIndex: 1, color: 'white', paddingTop: '100px' }}>
        <Typography variant="h2" align="center" gutterBottom>
          Dubai to the Stars 🚀
        </Typography>
        <Typography variant="h5" align="center" gutterBottom>
          Book your space travel experience today!
        </Typography>

        {/* Add other components here */}
        <SpaceMap />
      </Container>
    </div>
  );
}