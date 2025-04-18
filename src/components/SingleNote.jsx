import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getSingleNote from "../redux/api/getSingleNote";
import { Link } from "react-router-dom";

const SingleNote = () => {
  const [data, setData] = useState();
  const params = useParams();
  const id = params.id;

  const getData = async () => {
    const response = await getSingleNote(id);
    setData(response);
  };

  useEffect(() => {
    getData();
  }, []);

  // console.log(data?.imageUrl);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Card sx={{ maxWidth: 900 }}>
        <CardMedia
          component="img"
          alt="image not working"
          height="100%"
          image={data?.imageUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data?.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to="/dashboard">
            <Button variant="contained" color="error">
              Close
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default SingleNote;
