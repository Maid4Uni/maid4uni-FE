import { useFormik } from 'formik';
import React, { useContext, useState } from 'react'
import * as Yup from "yup"
import { Alert, AlertTitle, Box, Button, CardMedia, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, FormControlLabel, FormGroup, Modal, Paper, Stack, Switch, TextField, Typography } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    height: '50%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24
    , borderRadius: '15px',
    p: 2,
    border: 'none',
    overflow: 'hidden'
};

export default function Update({ data, open, handleClose, setOpenSuccessFulUpdate }) {
    const functionContext = React.useContext(FunctionContext)

    const changeImmediatelyImage = (data1, data2) => {
        return data1 === data2 ? data1 : data2
    }

    const handleSubmit = (values) => {
        functionContext.value.handleEdit(values);
    }

    const formik = useFormik({
        initialValues: {
            "id": data.id,
            "name": data.name,
            "image": data.image,
            "price": data.price,
            "description": data.description,
            "category": data.category,
            bestseller: dataUser?.bestseller || false,
        },
        onSubmit: (values) => {
            handleSubmit(values);
            //NOT WORKING
        },
        validationSchema: Yup.object().shape({

            name: Yup.string().required("Name of user cannot be blank").min(5, "Name of user must be 5 or characters or more"),
            image: Yup.string().required("Avatar is required too. Please types in").min(2, "Must be 2 characters or more"),
            price: Yup.number().integer().required("Age must be fill in").min(1, "Age must be contains at least 1 digits"),
            description: Yup.string().required("Address of the user cannot be blank.").min(5, "Must be 5 or more characters"),
            category: Yup.string().required("")
        }),
        enableReinitialize: true
    })

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={style}
                >
                    <Typography variant='h4' component={'h5'}>Edit User</Typography>
                    <Stack direction={'row'} spacing={2}>
                        <Box
                            //LEFT SIDE
                            width={'30%'}
                            height={'100%'}
                        >
                            <CardMedia
                                component={"img"}
                                alt=''
                                src={
                                    changeImmediatelyImage(dataUser.avatar, formik.values.avatar)
                                }
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain'
                                }}
                            />
                        </Box>
                        <Box //RIGHT SIDE
                            width={"80%"}
                            height={'100%'}
                        >
                            <Stack
                                height={500}
                            >
                                <form onSubmit={formik.handleSubmit}>
                                    <TextField //INPUT TITLE
                                        label='Name'
                                        fullWidth
                                        name='name'
                                        variant='filled'
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder='Input new user name'
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
                                    <TextField //INPUT age
                                        sx={{
                                            width: '40%'
                                        }}
                                        label="Price"
                                        margin='dense'
                                        name='price'
                                        type='number'
                                        variant='filled'
                                        size='small'
                                        placeholder='Input new age of user'
                                        value={formik.values.price}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />

                                    {formik.errors.price && formik.touched.price &&
                                        <Typography
                                            variant='subtitle2'
                                            color={'red'}
                                        >
                                            {formik.errors.price}
                                        </Typography>
                                    }
                                    <TextField
                                        label="Description"
                                        margin='dense'
                                        name='description'
                                        type='text'
                                        size='small'
                                        fullWidth
                                        variant='filled'
                                        value={formik.values.description}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder='Input new description'
                                    />
                                    {formik.errors.description && formik.touched.description &&
                                        <Typography
                                            variant='subtitle2'
                                            color={'red'}
                                        >
                                            {formik.errors.description}
                                        </Typography>
                                    }

                                    <TextField //INPUT ADDRESS
                                        label="Category"
                                        margin='dense'
                                        name='category'
                                        type='text'
                                        size='small'
                                        fullWidth
                                        variant='filled'
                                        value={formik.values.category}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder="Input user's category"
                                    />
                                    {formik.errors.category && formik.touched.category &&
                                        <Typography
                                            variant='subtitle2'
                                            color={'red'}
                                        >
                                            {formik.errors.category}
                                        </Typography>
                                    }
                                   
                                    <FormControl>
                                        <InputLabel>Select Service</InputLabel>
                                        <Select
                                            value={selectedService}
                                            onChange={(event) => setSelectedService(event.target.value)}
                                        >
                                            {availableServices.map((service) => (
                                                <MenuItem key={service.id} value={service.id}>
                                                    {service.name}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>

                                    <Stack direction={'row'} spacing={2} >
                                        <Button
                                            type='button'
                                            fullWidth
                                            variant='contained'
                                            size='large'
                                            onClick={() => {
                                                handleSubmit(formik.values) //submit form and fetch UPDATE
                                                handleClose();
                                                setOpenSuccessFulUpdate(true);
                                            }}
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            fullWidth
                                            variant='contained'
                                            size='large'
                                            onClick={handleClose}
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
