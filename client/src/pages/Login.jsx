import React from "react";
import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const toggleLogin = () => {
        setIsLogin(false);
    };
    return (
        <Container
            component="main"
            maxWidth="xs"
            sx={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    padding: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                {isLogin ? (
                    <>
                        <Typography variant="h5">Login</Typography>
                        <form
                            style={{
                                width: "100%",
                                marginTop: "1rem",
                            }}
                        >
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
                                sx={{ margin: "1rem" }}
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
                            >
                                OR
                            </Typography>
                            <Button
                                onClick={toggleLogin}
                                color="secondary"
                                variant="text"
                                fullWidth
                            >
                                Don't have an account? Register
                            </Button>
                        </form>
                    </>
                ) : (
                    <>
                        <Typography variant="h5">Register</Typography>
                        <form
                            style={{
                                width: "100%",
                                marginTop: "1rem",
                            }}
                        >
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
                                label="Email"
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
                                sx={{ margin: "1rem" }}
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
                            >
                                OR
                            </Typography>
                            <Button
                                onClick={toggleLogin}
                                color="secondary"
                                variant="text"
                                fullWidth
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
