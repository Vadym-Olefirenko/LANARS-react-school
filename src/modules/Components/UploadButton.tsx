import Button from '@mui/material/Button';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

const UploadButton = (props: {text: string}): JSX.Element => {
    return (
        <Button
          variant="contained"
          startIcon={<FileUploadOutlinedIcon/>}
          sx={{
            position: 'absolute',
            bottom: '40px',
            right: '0',
          }}
        >
          {props.text}
        </Button>
    );
};

export default UploadButton;
