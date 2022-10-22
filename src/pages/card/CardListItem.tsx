import React from "react";
import styled from "styled-components";
import moment from "moment";
import { Grid, Paper, Typography } from "@mui/material";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

type CardListItemProps = {
  src: string;
};

const CardListItem = ({ item }: { item: CardListItemProps }) => {
  return (
    <Grid item>
      <Paper
        sx={{
          p: 1,
          width: "300px",
        }}
      >
        <Img alt="complex" src={item.src} />
        <Typography variant="caption">
          발행일: {moment().format("MM월 DD일")}
        </Typography>
      </Paper>
    </Grid>
  );
};

export default CardListItem;
