import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { useTheme, createUseStyles } from 'react-jss';

import { H3 } from './Typographics';

const useStyles = createUseStyles((theme: Theme) => ({
  section: {
    width: props => props.width,
    minWidth: 'fit-content',
    alignSelf: 'flex-end',
    transition: theme.transition,
    background: theme.backgroundContrast,
    color: theme.colorSecond,
  },
  sectionContent: {
    padding: '1rem',
  },
}));

const Section: React.FC<SectionProps> = ({ name, children }) => {
  const { scrollPosition } = useSelector((state: RootState) => ({ scrollPosition: state.ui.position }), shallowEqual);
  const style = { width: '0%' };
  if (scrollPosition > 60) style.width = '100%';

  const theme = useTheme();
  const classes = useStyles({ theme, ...style });
  return (
    <section className={classes.section}>
      <H3>{name}</H3>
      <div className={classes.sectionContent}>{children}</div>
    </section>
  );
};

export { Section };
