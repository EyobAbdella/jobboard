import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";

export default function Category({ icon, title, openPosition }) {
  return (
    <Card sx={{ minWidth: 300, height: 200 }}>
      <CardActionArea>
        <Box display='flex' justifyContent='center'>
          {icon}
        </Box>
        <CardContent>
          <Box display='flex' flexDirection='column' alignItems='center'>
            <Typography gutterBottom variant='h6' component='div'>
              {title}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {openPosition} open position
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
