import React, { useEffect, useState } from "react";
import api from "../config/api";
import { Avatar, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material"; // Assuming Material-UI is used for styling
import { Box } from "@mui/system";

const UserProfile = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const user = JSON.parse(localStorage.getItem("user"));
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await api.getAccountInfo(user.id);
                setUserData(response.data); // Assuming the response contains user data
                setLoading(false);
                console.log("userId:", user.id);

            } catch (error) {
                console.error("Error fetching user data:", error);
                setLoading(false);
            }
        };

        fetchUserData();
    }, [user.id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!userData) {
        return <div>Error fetching user data</div>;
    }
    return (
        <Grid container spacing={3}>
            <Grid item lg={4}>
                <Card className="mb-4">
                    <CardContent className="text-center">
                        <CardMedia
                            component="img"
                            src={userData.img}
                            alt={userData.fullName}
                            className="rounded-circle"
                            style={{ width: '160px' }}
                        />


                    </CardContent>
                </Card>
            </Grid>
            <Grid item lg={8}>
                <Card className="mb-4">
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Thông tin tài khoản
                        </Typography>
                        <Typography variant="body1">
                            Họ tên :  {user.fullName}
                        </Typography>
                        <Typography variant="body1">
                            Giới tính :  {user.gender}
                        </Typography>
                        <Typography variant="body1">
                            Số điện thoại :  {user.phoneNumber}
                        </Typography>
                        <Typography variant="body1">
                            Email :  {user.email}
                        </Typography>
                        <Typography variant="body1">
                            Địa chỉ :  {user.address}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>

    );
};

export default UserProfile;
