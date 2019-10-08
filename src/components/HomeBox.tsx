import React from 'react';

import {
  Paper,
  Typography,
  makeStyles,
} from '@material-ui/core';

interface Props {
    size: number;
    color: 'red' | 'blue' | string;
}

function HomeBox(props: Props) {
  const classes = useStyles(props);

  return (
    <Paper className={classes.box}>
      <Typography variant="subtitle1" className={classes.text}>
        I&apos;m an example how to handle dynamic styles based on props
      </Typography>
    </Paper>
  );
}

const styledBy = (property: string, props: any, mapping: any): string => mapping[props[property]];
const useStyles = makeStyles(() => ({
  box: (props: Props) => ({
    display: 'flex',
    alignItems: 'center',
    borderRadius: 8,
    background: styledBy('color', props, {
      red: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      blue: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    }),
    height: props.size,
    width: props.size,
  }),

  text: {
    color: 'white',
  },
}));

export default HomeBox;
