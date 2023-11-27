import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Typography, Card as MUICard, CardContent, Grid } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import api from "../../config/api";
import { useEffect } from "react";
const Dashboard = () => {
  const [userNumber, setUserNumber] = useState(null);
  const [totalEarning, setTotalEarning] = useState(null);
  const [totalByMonthOfPackage, setTotalByMonthOfPackage] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getCustomerList();
        console.log("Customer List:", response.data);
        const number = response.data.length;
        setUserNumber(number);

        // hard code month
        const month = 11;
        const totalEarningResponse = await api.getTotalPriceByMonth(month);
        console.log("Total Earning:", totalEarningResponse.data);
        const total = totalEarningResponse.data;
        setTotalEarning(total);

        const totalByMonthOfPackageResponse =
          await api.getTotalByMonthOfPackage(month);
        console.log(
          "Total By Month Of Package:",
          totalByMonthOfPackageResponse.data
        );
        const totalByMonthOfPackage = totalByMonthOfPackageResponse.data;
        setTotalByMonthOfPackage(totalByMonthOfPackage);
      } catch (error) {
        console.error("Error fetching customer list:", error);
        // Handle the error
      }
    };

    fetchData();
  }, []);
  // Sample data for the chart
  const data = [
    { month: "Sep", income: 0 },
    { month: "Oct", income: 0 },
    { month: "Nov", income: 250000 },
  ];

  // Dummy function for additional statistics
  const generateAdditionalStatistics = (month) => {
    // You can add more logic or calculations based on the selected month
    return {
      averageIncome: data.find((item) => item.month === month)?.income / 3, // Just a simple example
      highestIncome: Math.max(...data.map((item) => item.income)),
    };
  };
  const [selectedMonth, setSelectedMonth] = useState("Nov");
  const additionalStatistics = selectedMonth
    ? generateAdditionalStatistics(selectedMonth)
    : null;
  return (
    <Container fluid>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Row className="mb-4">
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Orders Count</Card.Title>
              <Card.Text>
                <div>
                  {totalByMonthOfPackage !== null ? (
                    <ul>
                      {Object.entries(totalByMonthOfPackage).map(
                        ([combo, total]) => (
                          <li key={combo}>
                            <strong>{combo}:</strong> {total}
                          </li>
                        )
                      )}
                    </ul>
                  ) : (
                    "Loading..."
                  )}
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Tổng doanh thu 2023</Card.Title>
              <Card.Text>
                <div>
                  {totalEarning !== null ? (
                    <ul>
                      {Object.entries(totalEarning).map(([combo, total]) => (
                        <li key={combo}>
                          <strong>{combo}:</strong> {total}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    "Loading..."
                  )}
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Total Users</Card.Title>
              <Card.Text>{userNumber}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <MUICard>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Income Statistics
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={9}>
                  <LineChart
                    width={600}
                    height={300}
                    data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <XAxis dataKey="month" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="income" stroke="#8884d8" />
                  </LineChart>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Typography variant="h6" gutterBottom>
                    Monthly Details
                  </Typography>
                  {data.map((item) => (
                    <Button
                      key={item.month}
                      variant="outline-primary"
                      className="mb-2"
                      onClick={() => setSelectedMonth(item.month)}
                    >
                      {item.month}
                    </Button>
                  ))}
                </Grid>
              </Grid>
            </CardContent>
          </MUICard>
        </Col>
      </Row>

      {selectedMonth && (
        <Row className="mt-4">
          <Col md={12}>
            <MUICard>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Statistics for {selectedMonth}
                </Typography>
                <p>
                  Average Income: {additionalStatistics?.averageIncome || "N/A"}
                </p>
                <p>
                  Highest Income: {additionalStatistics?.highestIncome || "N/A"}
                </p>
              </CardContent>
            </MUICard>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Dashboard;
