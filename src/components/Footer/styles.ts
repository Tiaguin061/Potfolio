import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: auto;
  padding: 24px 0;
  border-top: 1px solid #333;
`;

export const Content = styled.div`
  max-width: 700px;
  width: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  gap: 64px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 12px;

    a {
      font-size: 1.8rem;
      transition: 0.3s;
    
      :hover {
        transform:translate3d(-2px, -6px, 30px);
      }
    }
  }

  p {
    color: #d3e4ff;
    font-size: 1.1rem;

    span {
      color: var(--color-orange);
    }
  }
`;
