import React, { useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  Container,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { styled } from "@mui/system";

const StyledImgUpload = styled("div")({
  position: "relative",
});

const StyledProfilePic = styled("img")({
  width: "25%",
  borderRadius: "50%",
});

const EditUser = () => {
  const [role, setRole] = useState("");
  const [gender, setGender] = useState("");

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardHeader
              title="Sửa tài khoản"
              titleTypographyProps={{ variant: "h6" }}
            />
            <CardContent>
              <form>
                <FormControl fullWidth>
                  <StyledImgUpload>
                    <StyledProfilePic src="img/11.png" alt="profile-pic" />
                    <div className="crm-p-image bg-primary">
                      <i className="las la-pen upload-button"></i>
                      <input
                        className="file-upload"
                        type="file"
                        accept="image/*"
                      />
                    </div>
                  </StyledImgUpload>
                  <div className="img-extension mt-3">
                    <div className="d-inline-block align-items-center">
                      <span>Chỉ </span>
                      <a href="javascript:void();">.jpg</a>
                      <a href="javascript:void();">.png</a>
                      <a href="javascript:void();">.jpeg</a>
                      <span> được phép</span>
                    </div>
                  </div>
                </FormControl>
                <FormControl fullWidth sx={{ mt: 2 }}>
                  <InputLabel>Vai trò:</InputLabel>
                  <Select
                    value={role}
                    onChange={handleRoleChange}
                    label="Vai trò"
                  >
                    <MenuItem value="1">Quản lý</MenuItem>
                    <MenuItem value="2">Nhân viên</MenuItem>
                    <MenuItem value="3">Khách hàng</MenuItem>
                  </Select>
                </FormControl>
              </form>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card>
            <CardHeader
              title="Thông tin tài khoản"
              titleTypographyProps={{ variant: "h6" }}
            />
            <CardContent>
              <form>{/* ... (rest of your form) */}</form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EditUser;
