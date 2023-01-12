import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

interface INoContentPlugProps {
    image: React.ReactNode;
    text: string;
    buttonText: string;
}

const StyledTypography = styled(Typography)(({ theme }) =>({
    color: theme.palette.text.disabled,
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: '400',
}));

const NoContentPlug: React.FC<INoContentPlugProps> = (props) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            top: '208px',
        }}>
            {props.image}
            <StyledTypography>
                {props.text} Please
            </StyledTypography>
            <StyledTypography>
                click <Typography sx={{fontWeight: '600'}} component="span">Upload photo</Typography> to add.
            </StyledTypography>
        </Box>
    );
};

export default NoContentPlug;
