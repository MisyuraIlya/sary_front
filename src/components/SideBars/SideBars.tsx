import React, {FC,PropsWithChildren} from 'react';
import Drawer from '@mui/material/Drawer';
import { styled } from '@mui/material';
type Anchor = 'top' | 'left' | 'bottom' | 'right';
interface RighSideBarProps {
    anchor: Anchor;
    isOpen: boolean;
    onClose: () => void;
    children: any;
}

const StyledDrawer = styled(Drawer)({
  '& .MuiDrawer-paper': {
    marginTop: '70px',
  },
  '& .MuiBackdrop-root': {
    marginTop: '70px',
  },
});



const SideBars:FC <RighSideBarProps> = ({anchor , isOpen , onClose, children}) => {
    
  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    if (isOpen !== open) {
      if (!open) {
        onClose();
      }
    }
  };



    return (
        <div>
          <StyledDrawer anchor={anchor} open={isOpen} onClose={toggleDrawer(false)} style={{marginTop:'70px'}} >
              <>{children}</>
            </StyledDrawer>
        </div>
    );
};

export default SideBars;