import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700;800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@1,300;1,400&family=Rubik:wght@400;500;600;700;800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;300;400;600&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    color:  #d3e4ff;
    list-style: none;
    font-family: 'Rubik', sans-serif;
  }

  body {
    background: rgb(36, 38, 56);
    background: black;
    width: 100%;
    height: 100vh;
    scroll-behavior: smooth;

    ::-webkit-scrollbar {
      width: 4px;
    }

    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey; 
      border-radius: 10px;
    }
    
    ::-webkit-scrollbar-thumb {
      background: #db8625; 
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #b16713; 
    }
  }

  a {
    scroll-behavior: smooth;
  }

  :root {
    --color-blue: #1d8eca;
    --color-orange: #db8625;

    --color-js:#f6da3a;
    --color-node: #8cc84b;
    --color-html: #e34f26;
    --color-css: #2965f1;
    --color-postgres: #336791;
    --color-react:  #2ac7e3;
    --color-rn: #5667f9;
    font-size: 1rem;
  }


`;

