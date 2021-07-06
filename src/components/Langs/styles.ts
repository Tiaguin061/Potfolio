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
`;

export const Section = styled.section`
  max-width: 1000px;
  width: 90%;
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
    margin: 1.2rem 0 1.4rem;
    max-width: 350px;
    font-weight: 400;
    letter-spacing: 0.7pt;
  }

  @media(max-width: 768px) {
    max-width: 600px;
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 2fr));
  gap: 30px;

  @media(max-width: 1024px) {
    max-width: 1024px;
    grid-template-columns: repeat(3, minmax(200px, 2fr));
  }

  @media(max-width: 768px) {
    gap: 10px;
    grid-template-columns: repeat(2, minmax(200px, 2fr));
    margin: 0 auto;
  }

  @media(max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Card = styled.div`
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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

    margin: 2rem 0 1rem;
    font-size: 22px;
    font-weight: 600;
    font-family: 'Rubik', sans-serif;
  }
`;
