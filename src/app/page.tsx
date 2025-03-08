// pages/dashboard.js
import { Container, Typography, Card, CardContent } from '@mui/material';

export default function Dashboard() {
  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Your Space Travel Dashboard
      </Typography>

      {/* Upcoming Trips */}
      <Card style={{ marginTop: '20px' }}>
        <CardContent>
          <Typography variant="h5">Upcoming Trip: Lunar Hotel</Typography>
          <Typography variant="body1">Departure: December 25, 2023</Typography>
          <Typography variant="body1">Countdown: 45 days, 12 hours, 30 minutes</Typography>
        </CardContent>
      </Card>

      {/* AI Travel Tips */}
      <Card style={{ marginTop: '20px' }}>
        <CardContent>
          <Typography variant="h5">AI Travel Tips</Typography>
          <Typography variant="body1">- Pack light for zero-gravity.</Typography>
          <Typography variant="body1">- Stay hydrated in space.</Typography>
        </CardContent>
      </Card>
    </Container>
  );
}