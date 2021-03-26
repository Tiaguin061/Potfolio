import { v4 as uuid } from 'uuid';
import { DiJavascript1, DiNodejsSmall, DiHtml5, DiCss3, DiPostgresql, DiReact, DiDatabase } from 'react-icons/di';
import { SiTypescript } from 'react-icons/si'; 

interface IPropsItems {
  id: string;
  icon?: JSX.Element | string;
  name: string;
  backgroundIcon: string;
  borderBottom: string;
}

export const domination: IPropsItems[] = [
    {
    id: uuid(),
    icon: <DiJavascript1 />,
    name: 'Javascript',
    backgroundIcon: '#f6da3a',
    borderBottom: '1px solid #f6da3a'
  },
  {
    id: uuid(),
    icon: <DiReact />,
    name: 'React Js',
    backgroundIcon: '#2ac7e3',
    borderBottom: '1px solid #2ac7e3'
  },
  {
    id: uuid(),
    icon: <DiNodejsSmall />,
    name: 'Node Js',
    backgroundIcon: '#8cc84b',
    borderBottom: '1px solid #8cc84b'
  },
  {
    id: uuid(),
    icon: <SiTypescript />,
    name: 'Typescript',
    backgroundIcon: '#2281cf',
    borderBottom: '1px solid #2281cf'
  },
  {
    id: uuid(),
    icon: <DiDatabase />,
    name: 'Typeorm',
    backgroundIcon: '#c8924b',
    borderBottom: '1px solid #c8924b'
  },
  {
    id: uuid(),
    icon: <DiPostgresql />,
    name: 'PostgresSQL',
    backgroundIcon: '#336791',
    borderBottom: '1px solid #336791'
  },
  {
    id: uuid(),
    icon: <DiHtml5 />,
    name: 'Html 5',
    backgroundIcon: '#e34f26',
    borderBottom: '1px solid #e34f26'
  },
  {
    id: uuid(),
    icon: <DiCss3 />,
    name: 'Css 3',
    backgroundIcon: '#2965f1',
    borderBottom: '1px solid #2965f1'
  },
];

export const learning: IPropsItems[] = [
  {
    id: uuid(),
    icon: <DiReact />,
    name: 'React Js',
    backgroundIcon: '#2ac7e3',
    borderBottom: '1px solid #2ac7e3'
  },
  {
    id: uuid(),
    icon: <DiNodejsSmall />,
    name: 'Node Js',
    backgroundIcon: '#8cc84b',
    borderBottom: '1px solid #8cc84b'
  },
  {
    id: uuid(),
    icon: <SiTypescript />,
    name: 'Typescript',
    backgroundIcon: '#2281cf',
    borderBottom: '1px solid #2281cf'
  },
  {
    id: uuid(),
    icon: <DiReact />,
    name: 'React Native',
    backgroundIcon: '#5667f9',
    borderBottom: '1px solid #5667f9'
  }
];
