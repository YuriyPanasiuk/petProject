import styled, { keyframes } from 'styled-components';
import { theme } from 'src/styles/theme';
import { Container } from '../index';

const loaderAnimation = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`;

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLoader = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  &:after {
    content: '';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid ${theme.colors.backgroundYellow};
    border-color: ${theme.colors.backgroundYellow} transparent ${theme.colors.backgroundYellow}
      transparent;
    animation: ${loaderAnimation} 1.2s linear infinite;
  }
`;
