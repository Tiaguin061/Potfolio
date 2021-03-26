import styled, { keyframes } from 'styled-components';

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-80px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`
const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(80px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`
export const Container = styled.div`
  width: 100%;
  position: relative; 

  > img {
    position: absolute;
    max-width: 90%;
    width: 700px;
    right: 20px;
    bottom: 0;
    z-index: -1;
  }
`;

export const Content = styled.div`
  width: 100%; 
  position: relative; 
  padding-bottom: 32px;

  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;  
  gap: 32px;

  section {
    display: flex;
    justify-content: center;
    align-items: center;  

    animation: ${appearFromRight} 1.5s;
 
    div {
      display: flex;
      align-items:center;
      justify-content:center;
      flex-direction: column;

      h1 {
        margin-top: 24px;
        color: #d3e4ff;
        font-size: 36px;
        letter-spacing: 0.7pt;

        span {
          color: var(--color-orange);
          border-bottom: 2px solid var(--color-orange);
        }
      }

      p {
        max-width: 600px;
        width: 100%;
        font-size: 22px;
        font-weight: 300;
        filter: brightness(96%);
        letter-spacing: 0.7pt;
        text-align: left;
        padding-bottom: 2rem;
        margin-top: 0.6rem;

        span {
          color: var(--color-orange);
        }
      }
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items:center;
  justify-content:center;
  flex-direction: column;

  animation: ${appearFromLeft} 1.5s;

  img {
    width: 240px;
    height: 240px;
    padding: 8px;
    border-radius: 50%;
    text-align: center;
    border: 4px solid var(--color-blue);
    object-fit:cover;
  }

  aside {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    margin-top: 1rem;

    a {
      padding: 4px;
      transition: all 0.2s;
      font-size: 24px;
      transition: 0.3s;
    
      :hover {
        transform:translate3d(-2px, -6px, 30px);
      }
    }
  }
  
  div {
    display: flex;
    align-items:flex-start;
    justify-content:center;
    flex-direction: column;
    margin-top: 0.4rem;

    span {
      display: flex;
      align-items: center;
      justify-content:center;
      gap: 4px;
      letter-spacing: 0.7pt;
      font-size: 16px;

      + span {
        margin-top: 0.5rem;
      }

      svg {
        font-size: 18px;
      }
    }
  }

`;