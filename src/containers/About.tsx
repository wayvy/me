import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import { H2 } from '../components/Typographics';
import { Section } from '../components/Section';
import { List } from '../components/List';

const useStyles = createUseStyles((theme: Theme) => ({
  about: {},
}));

const About: React.FC = () => {
  const skills = [
    ['HTML'],
    ['CSS', 'SCSS', 'JSS'],
    ['JavaScript', 'TypeScript'],
    ['React', 'Redux'],
    ['Canvas'],
    ['Webpack'],
    ['UNIX'],
  ];

  const style = {};
  const theme = useTheme();
  const classes = useStyles({ theme, ...style });

  return (
    <main className={classes.about}>
      <H2>Hi! I am Sergey</H2>
      <Section name="Skills">
        <List list={skills} />
      </Section>
    </main>
  );
};

export { About };
