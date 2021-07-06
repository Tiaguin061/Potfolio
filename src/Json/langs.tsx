import { v4 as uuid } from 'uuid';
import { DiJavascript1, DiNodejsSmall, DiPostgresql, DiReact, DiDatabase } from 'react-icons/di';
import { SiTypescript, SiStyledComponents } from 'react-icons/si'; 

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
    icon: <SiStyledComponents />,
    name: 'Styled Components',
    backgroundIcon: '#d762e6',
    borderBottom: '1px solid #d762e6'
  },
];

// export const learning: IPropsItems[] = [
//   {
//     id: uuid(),
//     icon: <DiReact />,
//     name: 'React Js',
//     backgroundIcon: '#2ac7e3',
//     borderBottom: '1px solid #2ac7e3'
//   },
//   {
//     id: uuid(),
//     icon: <DiNodejsSmall />,
//     name: 'Node Js',
//     backgroundIcon: '#8cc84b',
//     borderBottom: '1px solid #8cc84b'
//   },
//   {
//     id: uuid(),
//     icon: <SiTypescript />,
//     name: 'Typescript',
//     backgroundIcon: '#2281cf',
//     borderBottom: '1px solid #2281cf'
//   },
//   {
//     id: uuid(),
//     icon: <DiReact />,
//     name: 'React Native',
//     backgroundIcon: '#5667f9',
//     borderBottom: '1px solid #5667f9'
//   }
// ];
