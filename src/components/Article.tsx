import React from 'react';
import { useTheme, createUseStyles } from 'react-jss';

import { H3 } from './Typographics';

const useStyles = createUseStyles((theme: Theme) => ({
  article: {
    width: '0%',
    minWidth: 'fit-content',
    alignSelf: 'flex-end',
    transition: theme.transition,
    background: theme.backgroundContrast,
    color: theme.colorSecond,
  },
  articleContent: {
    padding: '1rem',
  },
}));

const Article: React.FC<ArticleProps> = ({ name, children }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <article className={classes.article}>
      <H3>{name}</H3>
      <div className={classes.articleContent}>{children}</div>
    </article>
  );
};

export { Article };
