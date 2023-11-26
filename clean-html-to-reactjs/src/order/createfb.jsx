import React, { useState } from "react";
import {
  Button,
  Modal,
  Box,
  Typography,
  Rating,
  FormControl,
  TextField,
} from "@mui/material";

const FeedbackPage = () => {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    // Thực hiện xử lý gửi phản hồi, ví dụ: gửi thông tin rating và comment lên server
    console.log(`Rating: ${rating}, Comment: ${comment}`);
    // Sau khi gửi xong, đóng modal
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Gửi phản hồi
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Đánh giá nhân viên
          </Typography>
          <Box mt={2}>
            <Typography id="modal-modal-description" gutterBottom>
              Đánh giá của bạn
            </Typography>
            <Rating
              name="simple-controlled"
              value={rating}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
            />
          </Box>
          <Box mt={2}>
            <FormControl fullWidth>
              <TextField
                id="comment"
                label="Nhận xét của bạn"
                multiline
                rows={4}
                variant="outlined"
                value={comment}
                onChange={(event) => setComment(event.target.value)}
              />
            </FormControl>
          </Box>
          <Box mt={4} display="flex" justifyContent="flex-end">
            <Button onClick={handleSubmit} variant="contained" color="primary">
              Gửi
            </Button>
            <Button onClick={handleClose} variant="contained" color="secondary">
              Đóng
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default FeedbackPage;
