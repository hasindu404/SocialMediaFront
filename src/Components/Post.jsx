import React from "react";
import { Favorite, FavoriteBorder, Label, MoreVert, Share } from "@mui/icons-material";
import { Avatar,Card, CardActions, CardContent, CardHeader, CardMedia,Checkbox,IconButton, Typography } from "@mui/material";

const Post = () => {
  return (
    <div>
      <Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="John Doe"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/chicken_and_seafood_62744_16x9.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Post;
