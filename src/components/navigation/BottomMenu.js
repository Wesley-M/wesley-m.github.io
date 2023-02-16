import {useContext, useState} from 'react';

import AssignmentIndex from '@mui/icons-material/AssignmentInd';
import ComputerIcon from '@mui/icons-material/Computer';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import {BottomNavigation, BottomNavigationAction, Paper, styled} from "@mui/material";
import {Link} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

function BottomMenu() {

  const Action = styled(BottomNavigationAction)(() => ({
    color: '#E1372CB2',
    '&.Mui-selected': {
      color: '#E1372C'
    }
  }));

  const [value, setValue] = useState(0);

  return (
      <Paper
          sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            display: {xs: 'block', sm: 'none'},
            zIndex: 1
          }}
          elevation={3}
      >
        <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
        >
          <Action component={Link} to='/blog' label="Blog" icon={<ComputerIcon/>}/>
          <Action component={HashLink} href='/#works' to='/#works' label="Works" icon={<WorkIcon/>}/>
          <Action component={HashLink} to='/#skills' label="Skills" icon={<WhatshotIcon/>}/>
          <Action component={HashLink} to='/#contact' label="Contact" icon={<WorkIcon/>}/>
        </BottomNavigation>
      </Paper>
  )
}

export default BottomMenu