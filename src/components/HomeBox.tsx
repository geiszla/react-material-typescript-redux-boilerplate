import React from 'react';
import styled from 'styled-components/macro';

import {
  Paper,
  Typography,
} from '@material-ui/core';

interface Props {
    size: number;
    color: 'red' | 'blue' | string;
}

const colors = {
  red: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  blue: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
};

export default function HomeBox(props: Props) {
  const { size, color } = props;

  return (
    <Box size={size} color={color}>
      <Text variant="subtitle1">
        I&apos;m an example how to handle dynamic styles based on props
      </Text>
    </Box>
  );
}

// Styles
const Box = styled(Paper)<{ size: number, color: string }>`
  display: flex;
  align-items: center;
  border-radius: 8px;
  background: ${(props) => colors[props.color as ('red' | 'blue')]};
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
`;

const Text = styled(Typography)`
  color: white;
`;
