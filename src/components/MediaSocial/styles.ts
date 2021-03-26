import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: linear-gradient(to left top, #ff9419,
  #d1654a, #9e6150,#774c40,#2c1e1a,#000, #000);
  z-index: 1;
  position: relative;
`;

export const Content = styled.div`
  width: 100%;
  margin: 0 auto;
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
      width: 100%;
    }

    div {
      
      h1 {
        margin-top: 1rem;
        font-size: 38px;
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
        font-size: 22px;
        max-width: 500px;
        filter: brightness(90%);
      }

      a {
        padding: 14px 32px;
        margin: 1rem auto 0;
        background: rgb(40, 40, 46);
        border-radius: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        transition: 0.3s;
        width: 60%;

        :hover {
          background: rgb(12, 12, 14);
          color: var(--color-orange);
        }

        svg {
          margin-right: 8px;
        }
      }
    }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 3rem auto 0;
  width: 100%;

  h1 {
    border-left: none;
    padding-left: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;   
    max-width: 100%;
    width: 100%;
    font-size: 36px;
    font-weight: 700;

    svg {
      margin-left: 1rem;
    }
  }

  p {
    margin: 0.5rem 0 1.2rem;
    font-size: 22px;
    max-width: 520px;
    word-wrap: break-word;
    filter: brightness(90%);

    span {
      color: var(--color-orange);
    }
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 2fr));
  gap: 30px;  
`;

export const Card = styled.a`
  padding: 36px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius:5px 5px 0px 0px;
  background: rgb(15, 15, 17);
  transition: 0.2s;

  :hover {
    background: rgb(33, 33, 36);
  }

  h1 {
    word-wrap: break-word;
    text-align: center;
    max-width: 100%;
    font-size: 24px;
    font-weight: bold;
    margin-top: 1em;    
    display: flex;
    align-items:center;
    justify-content: center;
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

`;

// /* Responsive */
// @media (max-width: 1500px) {
//   .home .devGit img {
//       max-width: 500px;
//   }
// }

// @media (max-width: 1100px) {
//   .home .social-icons .textInCard {
//       max-width: 1100px;
//       width: 90%;
//   }

//   .home .devGit {
//       flex-direction: column;
//   }
      
//   .home .devGit h1 {
//       text-align: center;
//       width: 90%;
//       margin: 1rem auto 0;
//       font-size: 2rem;
//   }

//   .home .social-icons .h1edit {
//       font-size: 26px;
//       text-align: center;
//       width: 100%;
//       margin: 0 auto 1rem;
//   }
      
//   .home .social-icons .textInCard p {
//       margin: 0 auto 1.2rem;
//       width: 90%;
//   }
      
//   .home .devGit p {
//       width: 90%;
//       font-size: 20px;
//       margin: 1rem auto 0;
//   }
      
//   .home .social-icons .cards{
//       grid-template-columns: repeat(2, minmax(350px, 2fr));
//   }
// }

// @media (max-width: 800px) {
//   .home .social-icons .cards{
//       grid-template-columns: repeat(2, minmax(50px, 2fr));
//   }

//   .home .social-icons .textInCard p {
//       font-size: 1.3rem;
//   }

//   .home .social-icons .h1edit {
//       display: block;
//   }

//   .home .devGit img {
//       max-width: 300px;
//   }

//   .home .devGit .socialIcons {
//       padding: 14px 12px;
//       width: 60%;
//   }
// }

// @media (max-width: 600px) {
//   .home .social-icons .cards{
//       grid-template-columns: repeat(1, minmax(50px, 2fr));
//       width: 80%;
//       margin: 0 auto;
//   }
//   .home .social-icons .textInCard p,
//   .home .devGit p {
//       font-size: 1.1rem;
//   }

//   .home .social-icons .h1edit .icon{
//       display: none;
//   }
// }