import styled from 'styled-components';

export const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    animation: flipTitle 3s;

    @keyframes flipTitle {
    from {
        transform: rotateX(90deg)
    }
    to {
        transform: rotateX(0deg)
    }
  }
`;
