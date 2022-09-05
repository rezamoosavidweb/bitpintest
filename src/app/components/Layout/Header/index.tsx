import { Grid } from '@mui/material';
import { HeaderContainer } from '../style';
import { Authorization } from './Authorization';
import { Menu } from './Menu';

export default function Header() {
  return (
    <Grid container direction="column">
      <HeaderContainer container direction="column">
        <Grid container justifyContent="space-between">
          <Grid item>{/* logo */}</Grid>
          <Authorization />
        </Grid>
        <Grid container>
          <Menu />
        </Grid>
      </HeaderContainer>
    </Grid>
  );
}
