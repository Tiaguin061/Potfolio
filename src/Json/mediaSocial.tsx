import { AiFillLinkedin } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { v4 as uuid } from 'uuid';

export const mediaSocial = [
  {
    id: uuid(),
    href:"https://instagram.com/tiaguinho_gon1",
    icon: <FiInstagram />,
    name: 'Instagram',
    backgroundIcon: '#833AB4',
    borderBottom: '1px solid #833AB4'
  },
  {
    id: uuid(),
    href: 'https://www.linkedin.com/in/tiagogoncalves200428/',
    icon: <AiFillLinkedin />,
    name: 'Linkedin',
    backgroundIcon: '#0a66c2',
    borderBottom: '1px solid #0a66c2'
  },
  // {
  //   id: uuid(),
  //   classNames: 'icons card gmail',
  //   icon: <SiGmail />,
  //   name: 'Gmail',
  //   nameTwo: 'tiaguin180@gmail.com',
  //   backgroundIcon: '#d93025',
  //   borderBottom: '1px solid #d93025',
  //   cursor: 'default'
  // },
  {
    id: uuid(),
    icon: <FaDiscord />,
    name: 'Discord',
    href: 'https://discordapp.com/users/586186122611130368',
    backgroundIcon: '#7289da',
    borderBottom: '1px solid #7289da',
    cursor: 'pointer'
  },
]