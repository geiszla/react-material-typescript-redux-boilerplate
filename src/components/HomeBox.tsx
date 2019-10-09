import React from 'react';
import styled from 'styled-components';

import {
  Paper,
  Typography,
} from '@material-ui/core';

interface Props {
    size: number;
    color: 'red' | 'blue';
}

const colors = {
  red: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  blue: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
};

function HomeBox(props: Props) {
  const { color, size } = props;

  const Box = styled(Paper)`
    display: flex;
    align-items: center;
    border-radius: 8px;
    background: ${colors[color]};
    height: ${size};
    width: ${size};
  `;

  const Text = styled(Typography)`
    color: white;
  `;

  return (
    <Box>
      <Text variant="subtitle1">
        I&apos;m an example how to handle dynamic styles based on props
      </Text>
    </Box>
  );
}

export default HomeBox;
