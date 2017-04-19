import React from 'react';
import { Box, Paragraph } from 'grommet';

const About = () => (
  <Box>
    <Paragraph>This component contains an input that should be autofocused.</Paragraph>
    <input autoFocus />
  </Box>
);

export default About;
