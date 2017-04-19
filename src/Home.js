import React from 'react';
import { Layer, Box, Paragraph } from 'grommet';

const Home = () => (
  <Box>
    <Paragraph>This component contains a hidden Layer.</Paragraph>
    <Layer hidden>Home</Layer>
  </Box>
);

export default Home;
