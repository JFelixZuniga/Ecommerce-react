import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { AddShoppingCart } from "@material-ui/icons";
import accounting from "accounting";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  action: {
    marginTop: "1rem",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function Product() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <Typography
            className={classes.action}
            variant="h5"
            color="textSecondary"
          >
            {accounting.formatMoney(949, "US$")}
          </Typography>
        }
        title="HP Omen 15"
        subheader="In Stock"
      />
      <CardMedia
        className={classes.media}
        image="https://publicapi.solotodo.com/products/85723/picture/?width=1000&height=520"
        title="HP Omen 15-EK0010LA"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Intel Core i5-10300H / 8 GB RAM / NVIDIA GeForce RTX 2060 (6 GB)
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to Cart">
          <AddShoppingCart fontSize="large" />
        </IconButton>
        {Array(4)
          .fill()
          .map((_, i) => (
            <p>&#11088;</p>
          ))}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Características Procesador Intel Core i5-10300H (4 núcleos / 8 hilos
            / 2500 MHz - 4500 MHz) RAM 8 GB DDR4 (2933 MHz) Pantalla LED 15.6"
            (1920x1080) / 60 Hz Batería 6 celdas (70900 mWh) Almacenamiento SSD
            512GB Tarjetas de video Intel UHD Graphics 630 (Integrada) NVIDIA
            GeForce RTX 2060 (6 GB) Puertos 1x HDMI 2.0 1x Mini DisplayPort 1x
            RJ45 (10 / 100 / 1000 Mbps) 3x SuperSpeed USB 5Gbps Type-A (USB 3.0
            / USB 3.1 Gen 1 / USB 3.2 Gen 1) 1x Thunderbolt 3 (con señal HDMI /
            DisplayPort)
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
