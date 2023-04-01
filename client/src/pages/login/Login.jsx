import React, { useContext } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { loginCall } from "../../actionCalls";
import { AuthContext } from "../../state/AuthContext";

export const Login = () => {
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const email = data.get("email").trim();
    const password = data.get("password").trim();

    loginCall(
      {
        email: email,
        password: password,
      },
      dispatch
    );
  };

  return (
    <Box
      sx={{
        my: 8,
        mx: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        会員登録
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="メールアドレス"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="パスワード"
          type="password"
          id="password"
          autoComplete="current-password"
          minLength="6"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          ログイン
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              パスワードをお忘れですか？
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {"アカウントをお持ちですか？ログイン"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};