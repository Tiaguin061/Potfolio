import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  padding: 16px 0 48px;
  width: 100%;
  background: linear-gradient(to left top, #ff9419,
  #d1654a, #9e6150,#774c40,#2c1e1a,#000, #000);
  position: relative;
  z-index: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  max-width: 1400px;
  
  section {
    max-width: 1000px;
    width: 100%;
    margin-top: 3rem;

    + section {
      margin-top: 6rem;
    }

    > h1 {
      word-wrap: break-word;
      text-align: left;
      max-width: 100%;

      font-size: 2.3rem;
      font-weight: 600;

      span {
        color: var(--color-orange);
        border-bottom: 2px solid var(--color-orange);
      }
    }

    > p {
      color: #adacac;
      font-size: 1rem;
      margin: 0.4rem 0 1.4rem;
      max-width: 350px;
      font-weight: 400;
      letter-spacing: 0.7pt;
    }
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 2fr));
  gap: 30px;
`;

export const Card = styled.div`
  padding: 36px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius:5px 5px 0px 0px;
  background: rgb(15, 15, 17);
  transition: 0.2s;

  :hover {
    background: rgb(20, 20, 32);
  }

  i {
    display: flex;
    align-items:center;
    justify-content: center;
    text-align: center;
    width: 80px;
    height: 80px;
    border-radius: 8px;
    font-size: 70px;
    color: black;
  }

  h1 {
    word-wrap: break-word;
    text-align: center;
    max-width: 100%;

    margin: 3rem 0 1rem;
    font-size: 30px;
    font-weight: 500;
    font-family: 'Rubik', sans-serif;
  }
`;

// .home .h1edit {
//   font-size: 52px;
//   padding-left: 16px;
//   margin-bottom: 32px;
//   filter: brightness(90%);
//   border-left: 4px solid #d3e4ff;
//   max-width: 680px;
//   width: 100%;
// }