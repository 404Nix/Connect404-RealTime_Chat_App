import React, { useState } from "react";
import {
    Avatar,
    Button,
    Container,
    IconButton,
    Paper,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import { VisuallyHidden } from "../components/styles/StyledComponents";

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const toggleLogin = () => setIsLogin((prev) => !prev);

    // Add form validation and submission logic here

    return (
        <Container
            component="main"
            maxWidth="xs"
            sx={{
                minHeight: "100dvh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                py: 3,
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    width: "100%",
                    padding: { xs: 3, sm: 4 },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    borderRadius: 2,
                }}
            >
                {isLogin ? (
                    <>
                        <Typography
                            variant="h5"
                            align="center"
                            fontWeight={600}
                        >
                            Login
                        </Typography>
                        <form style={{ width: "100%", marginTop: "1rem" }}>
                            <TextField
                                required
                                fullWidth
                                label="Username"
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                required
                                fullWidth
                                label="Password"
                                margin="normal"
                                variant="outlined"
                                type="password"
                            />
                            <Button
                                sx={{ marginTop: "1rem" }}
                                fullWidth
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                Login
                            </Button>
                            <Typography
                                variant="body1"
                                color="text.secondary"
                                align="center"
                                sx={{ my: 1 }}
                            >
                                OR
                            </Typography>
                            <Button
                                onClick={toggleLogin}
                                color="secondary"
                                variant="text"
                                fullWidth
                                type="button"
                            >
                                Don't have an account? Register
                            </Button>
                        </form>
                    </>
                ) : (
                    <>
                        <Typography
                            variant="h5"
                            align="center"
                            fontWeight={600}
                        >
                            Register
                        </Typography>
                        <form style={{ width: "100%", marginTop: "1rem" }}>
                            <Stack
                                sx={{
                                    position: "relative",
                                    width: "7rem",
                                    height: "7rem",
                                    margin: "auto",
                                    marginBottom: "1rem",
                                }}
                            >
                                <Avatar
                                    sx={{ width: "100%", height: "100%" }}
                                />
                                <IconButton
                                    sx={{
                                        position: "absolute",
                                        bottom: 0,
                                        right: 0,
                                        backgroundColor: "rgba(0,0,0,0.6)",
                                        color: "white",
                                        "&:hover": {
                                            backgroundColor: "rgba(0,0,0,0.8)",
                                        },
                                    }}
                                    component="label"
                                >
                                    <CameraAltIcon />
                                    <VisuallyHidden
                                        type="file"
                                        accept="image/*"
                                    />
                                </IconButton>
                            </Stack>
                            <TextField
                                required
                                fullWidth
                                label="Name"
                                margin="dense"
                                variant="outlined"
                            />
                            <TextField
                                required
                                fullWidth
                                label="Username"
                                margin="dense"
                                variant="outlined"
                            />
                            <TextField
                                required
                                fullWidth
                                label="Bio"
                                margin="dense"
                                variant="outlined"
                            />
                            <TextField
                                required
                                fullWidth
                                label="Password"
                                margin="dense"
                                variant="outlined"
                                type="password"
                            />
                            <Button
                                sx={{ marginTop: "1rem" }}
                                fullWidth
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                Register
                            </Button>
                            <Typography
                                variant="body1"
                                color="text.secondary"
                                align="center"
                                sx={{ my: 1 }}
                            >
                                OR
                            </Typography>
                            <Button
                                onClick={toggleLogin}
                                color="secondary"
                                variant="text"
                                fullWidth
                                type="button"
                            >
                                Already have an account? Login
                            </Button>
                        </form>
                    </>
                )}
            </Paper>
        </Container>
    );
};

export default Login;
