import Button from '@mui/material/Button';
import FileUploadIcon from '@mui/icons-material/FileUpload';

const UploadButton = (props: {text: string}): JSX.Element => {
    return (
        <Button variant="outlined" startIcon={<FileUploadIcon />}>
          {props.text}
        </Button>
    );
};

export default UploadButton;
