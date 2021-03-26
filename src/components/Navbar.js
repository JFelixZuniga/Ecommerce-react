import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import logo from "../assets/logo.png";
import { ShoppingCart } from "@material-ui/icons";
import { Badge, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "7rem",
  },
  appBar: {
    backgroundColor: "whitesmoke",
    boxShadow: "none",
  },
  grow: {
    flexGrow: 1,
  },
  button: {
    marginLeft: theme.spacing(2),
  },
  image: {
    marginRight: "10px",
    width: "100px",
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Link to="/">
            <IconButton>
              <img src={logo} alt="Commerce.js" className={classes.image} />
            </IconButton>
          </Link>

          <div className={classes.grow} />
          <Typography variant="h6" color="textPrimary" component="p">
            Hola invitado
          </Typography>
          <div className={classes.button}>
            <Link>
              <Button variant="outlined">
                <strong>Registrarse</strong>
              </Button>
            </Link>

            <Link to="/checkout-page">
              <IconButton aria-label="show cart items" color="inherit">
                <Badge badgeContent={2} color="secondary">
                  <ShoppingCart fontSize="large" color="primary" />
                </Badge>
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
