import { useEffect, useState } from 'react';
import{ Box, ImageList, ImageListItem } from '@mui/material';
import NoContentPlug from '../NoContentPlug';
import UploadButton from '../UploadButton';
import { styled } from '@mui/system';

import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';

import img1 from '../../../assets/images/placeholders/3029022.jpg';
import img2 from '../../../assets/images/placeholders/3029022.jpg';
import img3 from '../../../assets/images/placeholders/3029022.jpg';
import img4 from '../../../assets/images/placeholders/3029022.jpg';

const imagesArr = [
    {image: img1},
    {image: img2},
    {image: img3},
    {image: img4},
    {image: img1},
    {image: img2},
    {image: img3},
    {image: img4},
    {image: img1},
    {image: img2},
    {image: img3},
    {image: img4},
    {image: img1},
    {image: img2},
    {image: img3},
    {image: img4},
    {image: img1},
    {image: img2},
    {image: img3},
    {image: img4},
    {image: img1},
    {image: img2},
    {image: img3},
    {image: img4},
    {image: img1},
    {image: img2},
    {image: img3},
    {image: img4},
    {image: img1},
    {image: img2},
    {image: img3},
    {image: img4},
    {image: img1},
    {image: img2},
    {image: img3},
    {image: img4},
    {image: img1},
    {image: img2},
    {image: img3},
    {image: img4},
];

const StyledInsertPhotoOutlinedIcon = styled(InsertPhotoOutlinedIcon)(({ theme }) =>({
    color: theme.palette.border.main,
    width: '123px',
    height: '123px',
    marginBottom: '42px',
}));


const Photos = (): JSX.Element => {
    const [images, setImages] = useState<{ image: string }[]>([]);

    useEffect(() => {
        setImages(imagesArr);
    }, []);

    const allImages = images.map((item, index) => (
        <ImageListItem key={index} sx={{ borderRadius: '8px', overflow: 'hidden' }}>
        <img
            src={`${item.image}?w=142&h=142&fit=crop&auto=format`}
            srcSet={`${item.image}?w=142&h=142&fit=crop&auto=format&dpr=2 2x`}
            alt={item.image}
            loading="lazy"
        />
        </ImageListItem>
    ));

    return (
        <Box sx={{
            height: 'calc(100vh - 64px)',
            maxWidth: '895px',
            width: '895px',
            position: 'relative',
        }}>
            {images && images.length > 0 ?
            <>
            <ImageList sx={{ width: 892, height: 900 }} cols={6} rowHeight={142} gap={8}>
                {allImages}
            </ImageList>
            <UploadButton text={'UPLOAD PHOTO'}/>
            </>
            :
            <>
            <NoContentPlug
                image={<StyledInsertPhotoOutlinedIcon/>}
                text={'There are no photos yet.'}
                buttonText={'Upload photo'}
            />
            <UploadButton text={'UPLOAD PHOTO'}/>
            </>
            }
        </Box>
    );
};

export default Photos;
