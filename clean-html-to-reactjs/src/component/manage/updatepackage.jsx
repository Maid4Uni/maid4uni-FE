import { useFormik } from 'formik';
import React, { useContext } from 'react';
import * as Yup from 'yup';
import {
    Box,
    Button,
    CardMedia,
    FormControlLabel,
    Modal,
    Stack,
    Switch,
    TextField,
    Typography,
} from '@mui/material';
import api from '../../config/api';
import { useRequest } from 'ahooks';
import { useParams } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    height: '70%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius: '15px',
    p: 2,
    border: 'none',
    overflow: 'hidden',
};

const Update = ({ dataPackage, open, handleClose, setOpenSuccessFulUpdate }) => {

    const handleSubmit = async (values) => {
        try {
            await api.updatePackage(values.id, values);
            setOpenSuccessFulUpdate(true);
            handleClose();
        } catch (error) {
            if (error.response) {
                console.error('Server responded with an error:', error.response.data);
                console.error('Status code:', error.response.status);
                console.error('Headers:', error.response.headers);
            } else if (error.request) {
                console.error('No response received from the server:', error.request);
            } else {
                console.error('Error setting up the request:', error.message);
            }
            // Display an error message to the user or handle the error appropriately
        }
    };

    const changeImmediatelyImage = (data1, data2) => {
        return data1 === data2 ? data1 : data2;
    };

    const formik = useFormik({
        initialValues: {
            id: dataPackage?.id || '',
            name: dataPackage?.name || '',
            img: dataPackage?.imageUrl || '',
            info: dataPackage?.description || '',
            kind: dataPackage?.price || '',
        },
        onSubmit: (values) => {
            handleSubmit(values);
        },
        validationSchema: Yup.object().shape({
            name: Yup.string()
                .required('Nhập tên gói dịch vụ')
                .min(5, 'Tối thiểu ít nhất 5 kí tự'),
            imageUrl: Yup.string()
                .required('Chỉnh sửa gói hình ảnh')
                .min(2, 'Ít nhất 2 kí tự'),
            description: Yup.string().required('Thêm miêu tả gói dịch vụ'),
            price: Yup.number().required('Đừng bỏ trống giá gói dịch vụ'),
        }),
        enableReinitialize: true,
    });

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography variant="h4" component={'h5'}>
                        Chỉnh sửa gói dịch vụ
                    </Typography>
                    <Stack direction={'row'} spacing={2}>
                        <Box width={'30%'} height={'100%'}>
                            <CardMedia
                                component={'imageUrl'}
                                alt=""
                                src={changeImmediatelyImage(dataPackage?.imageUrl, formik.values.imageUrl)}
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                }}
                            />
                        </Box>
                        <Box width={'80%'} height={'100%'}>
                            <Stack height={500}>
                                <form onSubmit={formik.handleSubmit}>
                                    <TextField
                                        label='Tên gói dịch vụ'
                                        fullWidth
                                        name='name'
                                        variant='filled'
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder=''
                                        size='small'
                                    />
                                    {formik.errors.name && formik.touched.name &&
                                        <Typography
                                            variant='subtitle2'
                                            color={'red'}
                                        >
                                            {formik.errors.name}
                                        </Typography>
                                    }
                                    <TextField
                                        label="Giá"
                                        margin='dense'
                                        name='price'
                                        type='text'
                                        size='small'
                                        fullWidth
                                        variant='filled'
                                        value={formik.values.price}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder='Nhập giá'
                                    />
                                    {formik.errors.price && formik.touched.price &&
                                        <Typography
                                            variant='subtitle2'
                                            color={'red'}
                                        >
                                            {formik.errors.price}
                                        </Typography>
                                    }



                                    <Stack direction={'row'} spacing={2}>
                                        <Button
                                            type="button"
                                            fullWidth
                                            variant="contained"
                                            size="large"
                                            onClick={() => {
                                                handleSubmit(formik.values);
                                                handleClose();
                                                setOpenSuccessFulUpdate(true);
                                            }}
                                        >
                                            Chỉnh sửa
                                        </Button>
                                        <Button
                                            onClick={handleClose}
                                            fullWidth
                                            variant="contained"
                                            size="large"
                                        >
                                            Cancel
                                        </Button>
                                    </Stack>
                                </form>
                            </Stack>
                        </Box>
                    </Stack>
                </Box>
            </Modal>
        </div>
    );
}
export default Update;
