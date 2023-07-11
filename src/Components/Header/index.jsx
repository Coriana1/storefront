import { useSelector } from 'react-redux';
import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material';

function Header() {
  const { cart } = useSelector((state) => state.cart);

  return (
    <AppBar position='static' sx={{ backgroundColor: '#fff', color: '#000' }}>
      <Container>
        <Toolbar disableGutters>
          <Typography variant='h4'>The Storefront of Practicing</Typography>
          <Button color='inherit'>
            Cart ({cart.length})
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
