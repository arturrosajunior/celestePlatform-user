import React from "react";
import CardNews from "components/News/Card";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";


const PageNews = () => {
  return (
    <div>
      <h1>Page News</h1>
      <Typography sx={{ fontSize: 12, opacity: 0.4 }} color="text.secondary" gutterBottom>
        Ainda nao funciona tá, Paula!
      </Typography>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { mb: 6, width: "100%" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          sx={{ width: 100 }}
          id="standard-basic"
          label="Digite a busca"
          variant="standard"
        />
      </Box>
      <Box></Box>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <CardNews />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardNews />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardNews />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardNews />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardNews />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardNews />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default PageNews;
