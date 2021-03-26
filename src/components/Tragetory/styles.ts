import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding-top: 3.2rem;
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1400px;
  margin: 2rem auto 5rem;
  padding: 0 0 12px;

  h1 {
    font-size: 36px;
    padding-left: 16px;
    margin-bottom: 32px;
    filter: brightness(90%);
    border-left: 4px solid #d3e4ff;
    max-width: 560px;
    width: 100%;
  }

  section {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    width: 100%;
    margin: 0 auto;
    letter-spacing: 0.7pt;
  }
`;

export const Paragraphs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  > img {
    width: 500px;
    height: 300px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    
    img {
      width: 300px;
      height: 200px;
    }

    p {
      font-size: 20px;
      margin: 2rem auto 1rem;
      text-align: left;
      max-width: 460px;
      width: 100%;
      word-wrap: break-word;

      svg {
        font-size: 24px;
      }
    }

    > svg {
      font-size: 64px;
    }
  }

`;

/* Responsive */
// @media (max-width: 1500px) {
//   .home .history .h1edit {
//       margin: 0 0 64px 5%;
//   }
//   .home .tragetory .classResponsive {
//       flex-direction: column;
//   }
// }

// @media (max-width: 1100px) {
//   .home .tragetory {
//       flex-direction: column;
//       align-items: center;
//       max-width: 900px;
//       margin: 0 auto;
//   }

//   .home .tragetory .paragraphs {
//       width: 100%;
//       align-items: center;
//       justify-content: center;
//   }

//   .home .tragetory  p {
//       max-width: 560px;
//   }

//   .home .tragetory .paragraph .arrow {
//       display: none;
//   }
// }

// @media (max-width: 800px) {
//   .home .history .h1edit {
//       font-size: 42px;
//       padding-left: 0;
//       margin-bottom: 0;
//       border-left: none;
//       width: 90%;
//       margin: 0 auto 32px;
//       text-align: center;
//   }

//   .home .tragetory  p {
//       font-size: 1.1rem;
//       width: 90%;
//       text-align:left;
//   }

//   .home .tragetory .paragraphs img, 
//   .home .tragetory .paragraphs .img {
//       width: 300px;
//       height: 200px;
//   }
// }

// @media (max-width: 600px) {
//   .home .history .h1edit {
//       font-size: 2.2rem;
//       margin: 0 auto 22px;
//   }

//   .home .tragetory .paragraphs img, 
//   .home .tragetory .paragraphs .img {
//       width: 200px;
//       height: 200px;
//   }
// }


// @media (max-width: 300px) {
//   .home .history .h1edit {
//       font-size: 1.6rem;
//   }
// }