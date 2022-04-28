import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Layout = styled(Paper)`
  height: calc(100vh - 40px);
  margin: 20px;
  display: grid;
  grid-template-columns: minmax(30%, 400px) 1fr;
`;

export default Layout;
