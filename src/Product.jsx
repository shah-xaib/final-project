import React from "react";
import "./Product.css";


import { Card, CardMedia, CardContent, CardActions, Button, Typography } from "@mui/material";


import p4 from "./assets/s4.jfif";
import p5 from "./assets/s5.jfif";
import p6 from "./assets/s6.jfif";
import p7 from "./assets/s7.jfif";



export default function Products() {
  return (
    <div className="services-container">
      <h2 className="services-title">Our Exclusive Suit Collection</h2>

      <p className="services-intro">
        ✨ <strong>“Explore our latest arrivals — crafted for leaders, dreamers, and every man who dares to dress with distinction.”</strong><br />
        👔 Each suit is more than just fabric; it’s a reflection of ambition, class, and timeless style. <br />
        💎 Step into elegance, embrace confidence, and wear your story with pride — because every thread we stitch defines excellence.
      </p>


      <div className="card-row">
      
        <Card sx={{ maxWidth: 345, boxShadow: 5, borderRadius: 3 }}>
          <CardMedia sx={{ height: 180 }} image={p4} title="Simple 2-Piece" />
          <CardContent>
            <Typography gutterBottom variant="h5">Simple 2-Piece</Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Tailored to perfection, our executive pant coats combine luxury fabrics with flawless stitching — redefining confidence in every meeting.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="contained" color="primary">Explore</Button>
            <Button size="small" variant="outlined" color="secondary">Contact</Button>
          </CardActions>
        </Card>

        
        <Card sx={{ maxWidth: 345, boxShadow: 5, borderRadius: 3 }}>
          <CardMedia sx={{ height: 180 }} image={p5} title="Modern Slim Fit" />
          <CardContent>
            <Typography gutterBottom variant="h5">Modern Slim Fit</Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Sharp, sleek, and stylish — our slim-fit pant coats bring a contemporary edge to traditional suiting.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="contained" color="primary">Explore</Button>
            <Button size="small" variant="outlined" color="secondary">Contact</Button>
          </CardActions>
        </Card>

        
        <Card sx={{ maxWidth: 345, boxShadow: 5, borderRadius: 3 }}>
          <CardMedia sx={{ height: 180 }} image={p6} title="Classic Formal Wear" />
          <CardContent>
            <Typography gutterBottom variant="h5">Classic Formal Wear</Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Step into timeless sophistication with our classic suits designed for comfort, class, and power dressing.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="contained" color="primary">Explore</Button>
            <Button size="small" variant="outlined" color="secondary">Contact</Button>
          </CardActions>
        </Card>

        
        <Card sx={{ maxWidth: 345, boxShadow: 5, borderRadius: 3 }}>
          <CardMedia sx={{ height: 180 }} image={p7} title="Premium Custom Stitch" />
          <CardContent>
            <Typography gutterBottom variant="h5">Premium Custom Stitch</Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Crafted with precision and passion, every suit is custom-made to fit your personality as perfectly as your body.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="contained" color="primary">Explore</Button>
            <Button size="small" variant="outlined" color="secondary">Contact</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
