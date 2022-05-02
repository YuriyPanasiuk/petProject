import { theme } from 'src/styles/theme';
import styled from 'styled-components';
import { Container } from '../../atoms';

export const StyledContainer = styled(Container)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 40px);
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

// export const StyledInnerContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: 100%;
//   width: 100%;
// `;

// export const StyledMessages = styled.div`
//   align-items: flex-start;
//   background-color: white;
//   display: flex;
//   flex-direction: column;
//   flex-grow: 1;
//   overflow: auto;
//   padding: 10px;
//   background: rgb(253, 187, 45);
//   background: linear-gradient(0deg, rgba(253, 187, 45, 1) 0%, rgba(50, 162, 186, 1) 100%);
// `;

// export const StyledMessage = styled.div`
//   background-color: #eee;
//   border-radius: 5px;
//   color: #333;
//   font-size: 1.1rem;
//   margin: 5px;
//   padding: 8px 15px;
// `;

// export const StyledFooter = styled.div`
//   display: flex;
// `;

// export const StyledInput = styled.input`
//   flex-grow: 1;
//   font-size: 1.1rem;
//   padding: 10px 15px;
// `;

// export const StyledButton = styled.button`
//   font-size: 1.1rem;
//   padding: 10px 15px;
// `;
