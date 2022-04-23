import styled from "@emotion/styled";
import { Drawer, Typography,Stack, List, ListItem, ListItemText } from "@mui/material";

const StyledDrawer = styled(Drawer)({
  minWidth:300,
  width:500
});


const LeftBar = () => {
  return (
    <StyledDrawer variant="permanent" anchor="left">
      <Stack sx={{width:200}}>
        <List>
          <ListItem>
            <ListItemText>Hello Babe</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Hello Babe</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Hello Babe</ListItemText>
          </ListItem>
        </List>
      </Stack>
    </StyledDrawer>
  );
};

export default LeftBar;
