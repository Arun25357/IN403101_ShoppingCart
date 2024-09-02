"use client";

import React from "react";
import ItemCart from "./item-cart";
import { Box, Container, Stack, Typography } from "@mui/material";

export default function Home() {
  const [total, setTotal] = React.useState(0);


  const myItems = [
    { itemname: "iPhone 15 Pro", price: 35900, image: "https://cdn.dxomark.com/wp-content/uploads/medias/post-155689/Apple-iPhone-15-Pro-Max_-blue-titanium_featured-image-packshot-review.jpg" },
    { itemname: "iPhone 15", price: 28900, image: "https://media.studio7thailand.com/132840/iPhone-15-Pink-square_medium.jpg" },
    { itemname: "iPad Pro", price: 26900, image: "https://www.apple.com/autopush/ww/search/modules/ipadpro/image__ckyqvvzzj6xe_large_2x.jpg?" },
    { itemname: "iPad Air", price: 18900, image: "https://www.apple.com/autopush/ww/search/modules/ipadair/image__u8gos1m7zoim_large_2x.jpg?" },
    { itemname: "iPad", price: 13900, image: "https://www.apple.com/v/ipad/home/ck/images/overview/select/product-tile/pt_ipad_10th_gen__ej5p5x6yf2gm_xlarge.png" },
    { itemname: "iPad mini", price: 15900, image: "https://www.apple.com/v/ipad/home/ck/images/overview/select/product-tile/pt_ipad_mini__f3iy3qb50gia_xlarge.png" },
    { itemname: "MacBook Air", price: 35900, image: "https://www.apple.com/autopush/ww/search/modules/macbookair/image__drus8vopfhkm_large_2x.jpg?" },
    { itemname: "MacBook Pro", price: 47900, image: "https://www.apple.com/autopush/ww/search/modules/macbookpro/image__bhennzolfcwi_large_2x.jpg?" },
    { itemname: "iMac", price: 47900, image: "https://www.apple.com/autopush/ww/search/modules/iMac24inch/image__cbue0vix0fn6_large_2x.jpg?" },
    { itemname: "Mac mini", price: 20900, image: "https://www.apple.com/autopush/ww/search/modules/macmini/image__b0m6m3r8sv6q_large_2x.jpg?" },
    { itemname: "Mac Studio", price: 70900, image: "https://www.apple.com/autopush/ww/search/modules/macstudio/image__97c910n6f3m2_large_2x.jpg?" },
  ];

  const handleIncremental = (itemTotal: number) => {
    setTotal(prevTotal => prevTotal + itemTotal);
  };

  const handleDecremental = (itemTotal: number) => {
    setTotal(prevTotal => prevTotal - itemTotal);
  };

  return (
    <Container maxWidth="md" sx={{ padding: 2 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Shopping Cart
      </Typography>
      {myItems.map((item) => (
        <ItemCart
          key={item.itemname}
          itemname={item.itemname}
          itemPrice={item.price}
          itemImage={item.image}
          handleIncremental={handleIncremental}
          handleDecremental={handleDecremental}
        />
      ))}
      <Box
        sx={{
          position: 'sticky',
          bottom: 0,
          backgroundColor: 'white',
          padding: 2,
          borderTop: '1px solid #ccc',
          boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)',
          zIndex: 10,
        }}
      >
        <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
          <Typography variant="h4">Total</Typography>
          <Typography variant="h4">{total.toLocaleString("en-US")} Baht</Typography>
        </Stack>
      </Box>
    </Container>
  );
}