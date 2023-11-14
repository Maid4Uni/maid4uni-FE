import React, { useState } from "react";
import {
    Box,
    Typography,
    Stepper,
    Step,
    StepLabel,
    Button,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody
} from "@mui/material";

const steps = ["Ordered", "Accepted", "Payed", "On-going Process", "Done"];
const TrackingPage = () => {

    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };
   
    return (
        <Box >

            <Box sx={{ width: "100%", marginTop: "50px" }}>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    {activeStep === steps.length ? (
                        <div>
                            <Typography sx={{ mt: 2, mb: 1 }}>
                                All steps completed - you&apos;re finished
                            </Typography>
                            <Button onClick={handleReset}>Reset</Button>
                        </div>
                    ) : (
                        <div>
                            <Typography sx={{ mt: 2, mb: 1 }}>{steps[activeStep]}</Typography>
                            <Box sx={{ mb: 2 }}>
                                <Button
                                    variant="contained"
                                    onClick={handleNext}
                                    sx={{ mt: 1, mr: 1 }}
                                >
                                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                                </Button>
                                {activeStep !== 0 && (
                                    <Button variant="contained" onClick={handleBack} sx={{ mt: 1 }}>
                                        Back
                                    </Button>
                                )}
                            </Box>
                        </div>
                    )}
                </Box>
            </Box>
            <Box sx={{ mx: 4 }}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Ngày cập nhật</TableCell>
                                <TableCell>Nhân viên</TableCell>
                                <TableCell>Ghi chú</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>20/10/2022</TableCell>
                                <TableCell>Nguyen Thi A</TableCell>
                                <TableCell>Xong buổi 1</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Button variant="contained" sx={{ mt: 2 }}>
                    Feedback
                </Button>
            </Box>

        </Box>
    );
};

export default TrackingPage;
