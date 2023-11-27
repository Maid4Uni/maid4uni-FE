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

const Dashboard = () => {
  // Sample data for the chart
  const data = [
    { month: "Jan", income: 2000 },
    { month: "Feb", income: 2500 },
    { month: "Mar", income: 1500 },
    // ... add data for other months
  ];

  const [selectedMonth, setSelectedMonth] = useState(null);

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
              <Card.Text>10</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Total Earnings</Card.Title>
              <Card.Text>$5000</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Total Users</Card.Title>
              <Card.Text>100</Card.Text>
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
                {/* Add more details and statistics here */}
              </CardContent>
            </MUICard>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Dashboard;
