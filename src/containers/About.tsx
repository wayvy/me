import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import { H2, Paragraph, Link } from '../components/Typographics';
import { Section } from '../components/Section';
import { List } from '../components/List';
import { Article } from '../components/Article';
import { Photo } from '../components/Photo';

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
      <Article>
        <Paragraph>Меня зовут Сергей Громов, я живу в Москве.</Paragraph>
        <Paragraph>Могу сверстать любой дизайн на <em>flexbox</em>, адаптивно, кроссбраузерно, с переходами, анимациями и медиазапросами, чтоб было <em>pixel-perfect</em> и с <em>БЭМ</em>. Умею <em>SCSS</em> и <em>JSS</em>. Пользуюсь <em>Figma</em> / <em>Photoshop</em> / <em>Sketch</em>.</Paragraph>
        <Paragraph>Занимался созданием лендингов и интернет-магазинов на <em>OpenCart</em> на фрилансе. Умею хорошо верстать, находить общий язык с заказчиками, устанавливать дэдлайны и укладываться в них. Год назад понял, что распыляюсь по задачам в разных сферах и решил углубиться в мир <em>ES6+</em>. <Link href='https://unona.su'>Последний заказ</Link>.</Paragraph>
        <Paragraph>За этот год изучил React, Redux, TypeScript и Webpack. Сейчас разбираюсь с <em>JSS</em>, <em>Canvas</em> и <em>GraphQL</em>.</Paragraph>
        <Paragraph><Link href='https://github.com/wayvy'>Мой github</Link>.</Paragraph>
        <Paragraph>Грамотный русский;</Paragraph>
        <Paragraph>Читаю документации и статьи на английском;</Paragraph>
        <Paragraph>Люблю web, разработку и дизайн. Надеюсь найти отличную команду!</Paragraph>
        <Photo/>
      </Article> 
    </main>
  );
};

export { About };
