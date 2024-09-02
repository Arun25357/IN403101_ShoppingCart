"use client";

import {
  IconButton,
  Stack,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";

interface ItemCartProps {
  itemname: string;
  itemPrice: number;
  itemImage: string;
  handleIncremental: (itemTotal: number) => void;
  handleDecremental: (itemTotal: number) => void;
}

export default function ItemCart({
  itemname,
  itemPrice,
  itemImage,
  handleIncremental,
  handleDecremental,
}: ItemCartProps) {
  const [count, setCount] = React.useState(0);

  const handleAddItemClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    handleIncremental(itemPrice);
  };

  const handleRemoveItemClick = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      handleDecremental(itemPrice);
    }
  };

  const formatPrice = (price: number) =>
    price.toLocaleString("en-US") + " Baht";

  return (
    <Box sx={{ marginBottom: 2, padding: 2, border: '1px solid #e0e0e0', borderRadius: 2 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h6">{itemname}</Typography>
          <Box
            component="img"
            src={itemImage}
            alt={itemname}
            sx={{
              width: '100%',
              maxWidth: 150,
              height: 'auto',
              borderRadius: 1,
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack direction="row" spacing={2} alignItems="center">
            <IconButton onClick={handleRemoveItemClick} disabled={count === 0}>
              <RemoveIcon />
            </IconButton>
            <Typography variant="h6">{count}</Typography>
            <IconButton onClick={handleAddItemClick}>
              <AddIcon />
            </IconButton>
            <Typography variant="h6">{formatPrice(count * itemPrice)}</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
