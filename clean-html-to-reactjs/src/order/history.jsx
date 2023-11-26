import React, { useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  FormControl,
  InputLabel,
  Select,
  Button,
  InputAdornment,
  Grid,
} from "@mui/material";
import {
  Box,

 
} from "@mui/material";

import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../config/api";
import { useRequest } from "ahooks";

const History = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useRequest(async () => {
    try {
      const response = await api.getOrderList(id);
      localStorage.setItem("order", JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  });

  const handleOrderDetails = (orderId) => {
    navigate(`/tracking/${orderId}`);
  };

  return (
    <Box>
   
        
     
      <Table style={{ margin: "auto", marginTop: "20px", border: "1px solid #e0e0e0" }}>
  <TableHead sx={{ backgroundColor: "cornflowerblue" }}>
    <TableRow>
      <TableCell sx={{ color: "white", width: "15%" }}>Đơn hàng</TableCell>
      <TableCell sx={{ color: "white", width: "10%" }}>Ngày bắt đầu</TableCell>
      <TableCell sx={{ color: "white", width: "10%" }}>Ngày kết thúc</TableCell>
      <TableCell sx={{ color: "white", width: "20%" }}>Địa chỉ</TableCell>
      <TableCell sx={{ color: "white", width: "10%" }}>Giá</TableCell>
      <TableCell sx={{ color: "white", width: "15%" }}>Trạng thái</TableCell>
      <TableCell sx={{ color: "white", width: "10%" }}>Feedback</TableCell>
      <TableCell sx={{ color: "white", width: "10%" }}></TableCell>

    </TableRow>
  </TableHead>

  <TableBody>
    {data &&
      data.map((order) => (
        <TableRow key={order.id}>
          <TableCell >
            {order.pkgRes ? (
              <div>{order.pkgRes.name}</div>
            ) : (
              <span>No package details available</span>
            )}
          </TableCell>

          <TableCell>{order.startDay}</TableCell>
          <TableCell>{order.endDay}</TableCell>
          <TableCell>{order.address}</TableCell>
          <TableCell>{order.price}</TableCell>
          <TableCell>
            {order.orderStatus === "APPROVED" ? "Đang tiến hành" :
              order.orderStatus === "WAITING_FOR_APPROVAL" ? "Đang duyệt" :
                order.orderStatus === "DECLINED" ? "Từ chối" :
                  "Hoàn tiền"}
          </TableCell>
          <TableCell>{order.feedback}</TableCell>
          <TableCell>
            {order.status === "DONE" ? (
              <Button
                variant="contained"
                onClick={() => alert("Reorder clicked")}
              >
                Đặt lại
              </Button>
            ) : null}
          </TableCell>
          <TableCell>
                {order.orderStatus === "APPROVED" && (
                  <Button
                    variant="contained"
                    onClick={() => handleOrderDetails(order.id)}
                  >
                    Chi tiết
                  </Button>
                )}
              </TableCell>
        </TableRow>
      ))}
  </TableBody>
</Table>

    </Box>
  );
};

export default History;
