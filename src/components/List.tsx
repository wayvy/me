import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import { Hr } from './Hr';

const useStyles = createUseStyles((theme: Theme) => ({
  list: {},
  ul: {
    listStyle: 'none',
    padding: '0',
    margin: '0',
  },
  li: {
    '&:before': {
      content: '"*"',
      padding: '0 .5rem 0 0',
    },
  },
}));

const List: React.FC<ListProps> = ({ list }) => {
  const style = {};
  const theme = useTheme();
  const classes = useStyles({ theme, ...style });

  return (
    <div className={classes.list}>
      {list.map((subList, i) => (
        <div key={i}>
          <ul className={classes.ul}>
            {subList.map((item, j) => (
              <li key={j} className={classes.li}>
                {item}
              </li>
            ))}
          </ul>
          <Hr />
        </div>
      ))}
    </div>
  );
};

export { List };
