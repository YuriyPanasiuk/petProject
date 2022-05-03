import { theme } from 'src/styles/theme';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  background: rgb(253, 187, 45);
  background: linear-gradient(0deg, rgba(253, 187, 45, 1) 0%, rgba(50, 162, 186, 1) 100%);

  .pn-msg:hover {
    background: rgb(98 95 95 / 20%);
  }

  .pn-msg-list {
    background: rgb(253, 187, 45);
    background: linear-gradient(0deg, rgba(253, 187, 45, 1) 0%, rgba(50, 162, 186, 1) 100%);
  }
  .pn-msg-input {
    width: 100%;
  }

  .pn-msg__content {
    background: ${theme.colors.white};
    padding: 10px;
    border-radius: 5px;
  }

  .pn-msg--own {
    --msg__avatar__margin: 2px 0 0 18px;
    --msg__content__alignItems: flex-end;
    --msg__flexDirection: row-reverse;
    --msg__title__flexDirection: row-reverse;
  }
`;

export const StyledText = styled.h3`
  color: ${theme.colors.secondary};
  margin-top: 20px;
`;
