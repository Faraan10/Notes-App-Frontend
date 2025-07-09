import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import {
  getNotes,
  getNotesSort,
  deleteNotes,
} from "../redux/slices/notesSlice";
import Spinner from "./Spinner";
import { HiOutlineSortAscending } from "react-icons/hi";
import { HiOutlineSortDescending } from "react-icons/hi";

const DashBoard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { notesData, isLoading } = useSelector((state) => state.notes);

  const [search, setSearch] = useState("");

  const [sort, setSort] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("user");
    if (token === null || token === undefined) {
      navigate("/login");
    }

    if (notesData) {
      dispatch(getNotes());
    }
  }, []);

  useEffect(() => {
    if (notesData && sort === false) {
      dispatch(getNotes());
    } else {
      dispatch(getNotesSort());
    }
  }, [sort]);

  const deleteNote = (id) => {
    dispatch(deleteNotes(id));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section>
      <div className="container" style={{ marginTop: "5%" }}>
        <div className="row">
          {notesData && notesData.length >= 1 && (
            <div
              className="form"
              style={{ display: "flex", marginBottom: "5%" }}
            >
              <input
                className="searchfield"
                type="search"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Notes"
                aria-label="Search"
              />
              <HiOutlineSortAscending
                style={{
                  fontSize: "30px",
                  marginLeft: "40px",
                  marginTop: "10px",
                  cursor: "pointer",
                }}
                onClick={() => setSort(true)}
              />
              <HiOutlineSortDescending
                style={{
                  fontSize: "30px",
                  marginLeft: "20px",
                  marginTop: "10px",
                  cursor: "pointer",
                }}
                onClick={() => setSort(false)}
              />
            </div>
          )}

          {notesData && notesData.length >= 1 ? (
            notesData
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.title.toLowerCase().includes(search);
              })
              .map((item) => (
                <div
                  key={item._id}
                  className=" col-sm-12 col-md-6 col-lg-4"
                  style={{ padding: "10px", marginTop: "1.5%" }}
                >
                  <Card sx={{ maxWidth: 300, maxHeight: 350 }}>
                    <CardActionArea>
                      <Link
                        to={`/dashboard/${item._id}`}
                        state={item}
                        style={{
                          textDecoration: "none",
                          color: "chocolate",
                          padding: "5px",
                        }}
                      >
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            style={{ color: "black" }}
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            className="card_description_truncate"
                          >
                            {item.description}
                          </Typography>
                        </CardContent>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          style={{ marginTop: "10px", marginLeft: "15px" }}
                        >
                          {item?.date?.slice(0, 10)}
                        </Typography>
                      </Link>
                      <CardActions>
                        <div className="align-buttons">
                          <i
                            className="fa-solid fa-trash align fa-lg"
                            style={{ color: "red", padding: "5px" }}
                            onClick={() => deleteNote(item._id)}
                          ></i>
                        </div>
                      </CardActions>
                    </CardActionArea>
                  </Card>
                </div>
              ))
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "60vh",
                fontFamily: "monospace",
              }}
            >
              <h1>Create New Notes</h1>
            </div>
          )}
        </div>
      </div>
      <Link to="/create">
        <button className="btn add__btn">
          <BsPlusLg style={{ fontSize: "18px" }} />
        </button>
      </Link>
    </section>
  );
};

export default DashBoard;
