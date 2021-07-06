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
    width: 100%;
    top: 0;
    z-index: -1;
  }
`;

export const Content = styled.div`
  width: 90%; 
  position: relative; 
  padding-bottom: 32px;

  max-width: 1400px;
  margin: 120px auto 0;
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
      justify-content: flex-start;
      flex-direction: column;

      h1 {
        margin-top: 24px;
        color: #d3e4ff;
        width: 100%;
        font-size: 2.4rem;
        letter-spacing: 0.7pt;

        span {
          color: var(--color-orange);
          border-bottom: 2px solid var(--color-orange);
        }
      }

      p {
        max-width: 600px;
        width: 100%;
        font-size: 1.1rem;
        font-weight: 300;
        filter: brightness(96%);
        letter-spacing: 0.7pt;
        line-height: 1.8rem;
        text-align: left;
        margin-top: 1rem;

        span {
          color: var(--color-orange);
        }
      }
    }
  }

  @media(max-width: 960px) {
    align-items: center;  
    flex-direction: column;
  }

  @media(max-width: 480px) {
    section div h1 {
      font-size: 2rem;
    }
    section div p {
      font-size: 1rem;
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
    margin-top: 1.6rem;

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