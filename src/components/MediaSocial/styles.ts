import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #000;
`;

export const Content = styled.div`
  width: 100%;
  margin: 64px auto;
  padding: 2rem 0 3rem;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Github = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.7pt;
  flex-direction: row;
  width: 100%;
  gap: 40px;

  img {
    max-width: 600px;
    width: 90%;
  }

  div {
    width: 90%;
    padding: 0 16px;
    h1 {
      margin-top: 1rem;
      font-size: 2.4rem;
      font-weight: 800;
      max-width: 500px;    
      text-align: left;
      width: 100%;
    
      span {
        position: relative;
        color: var(--color-orange);
      }
    }

    p {
      margin-top: 1rem;
      font-size: 20px;
      max-width: 500px;
      filter: brightness(90%);
    }

    a {
      padding: 14px 32px;
      margin: 1rem 0 0;
      background: rgb(40, 40, 46);
      border-radius: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      transition: background 0.3s;
      max-width: 200px;
      
      &:hover {
        background: #212125;
        color: var(--color-orange);
      }

      svg {
        margin-right: 8px;
      }
    }
  }

  @media(max-width: 1120px) {
    flex-direction: column;

    img {
      max-width: 500px;
    }
  }

  @media(max-width: 480px) {
    div h1 {
      font-size: 2rem;
      width: 100%;
    }
    div p {
      font-size: 1rem;
    }
  }
`;
