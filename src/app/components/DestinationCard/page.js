import { Card, CardContent, Typography } from '@mui/material';
import { motion } from 'framer-motion';

export default function DestinationCard({ destination }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Card style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white', marginTop: '20px' }}>
      <CardContent>
        <Typography variant="h5">{destination.name}</Typography>
        <Typography variant="body1">{destination.description}</Typography>
        <Typography variant="body2">Hotels: {destination.hotels.join(', ')}</Typography>
        <Typography variant="body2">Activities: {destination.activities.join(', ')}</Typography>
      </CardContent>
    </Card>
    </motion.div>
  );
}