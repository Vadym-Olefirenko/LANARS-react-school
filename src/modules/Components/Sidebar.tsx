import{ Box, List, ListItem, ListItemIcon, ListItemButton, ListItemText} from '@mui/material';
import PhotoAlbumOutlinedIcon from '@mui/icons-material/PhotoAlbumOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';

import { styled } from '@mui/system';

const StyledListItemButton = styled(ListItemButton)(({ theme }) =>({
    color: theme.palette.text.primary,
    borderRadius: '44px',
    maxWidth: '164px',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    '&:hover': {
       backgroundColor: theme.palette.primary.light,
       color: theme.palette.primary.main,
    },
}));

const StyledListItemIcon = styled(ListItemIcon)({
    color: 'inherit',
    marginRight: '16px',
    minWidth: 'auto',
});

const Sidebar = (): JSX.Element => {
    return (
        <Box sx={{
                paddingRight: '142px',
                height: 'calc(100vh - 64px)',
            }}>
            <nav>
                <List>
                    <ListItem disablePadding>
                        <StyledListItemButton>
                            <StyledListItemIcon>
                                <InsertPhotoOutlinedIcon/>
                            </StyledListItemIcon>
                            <ListItemText primary="All photo"/>
                        </StyledListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <StyledListItemButton>
                            <StyledListItemIcon>
                                <PhotoAlbumOutlinedIcon/>
                            </StyledListItemIcon>
                            <ListItemText primary="Albums"/>
                        </StyledListItemButton>
                    </ListItem>
                </List>
            </nav>
        </Box>
    );
};

export default Sidebar;
