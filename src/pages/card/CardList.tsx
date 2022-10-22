import React from "react";
import CardListItem from "./CardListItem";
import { Grid } from "@mui/material";

const items = new Array(10).fill({
  src: "https://images.unsplash.com/photo-1488188840666-e2308741a62f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b2NlYW58ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
});

const CardList = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        margin: "0 auto",
      }}
    >
      {items.map((item, idx) => (
        <CardListItem item={item} key={idx} />
      ))}
    </Grid>
  );
};

export default CardList;
