import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

export default function TriviaWidget() {
  const [dataLoad, setDataLoading] = useState(true);
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const [open, setOpen] = useState(false);

  // Get the data from the API
  const fetchData = async () => {
    setDataLoading(true);
    await fetch(`https://opentdb.com/api.php?amount=1`)
      .then((res) => res.json())
      .then((result) => {
        if (result["results"] !== undefined) {
          setData(result["results"]["0"]);
        }
      })
      .catch((error) => console.log(error));
  };

  // Call the API on Widget Load
  useEffect(() => {
    fetchData();
  }, []);

  // Check if the data component is filled
  useEffect(() => {
    if (data !== undefined) {
      setDataLoading(false);
    }
  }, [data]);

  // runs the async API call when user clicks on refresh link
  useEffect(() => {
    if (refresh) {
      fetchData();
    }
    setRefresh(false);
  }, [refresh]);

  return (
    <>
      {/* Check if the data is loading and show a loading message else render the data */}
      {dataLoad ? (
        <>
          <h4 style={{ display: "inline" }}>Loading...</h4>
        </>
      ) : (
        <div className="card col-md-4 h-100" style={{ marginTop: "4rem", marginLeft: "1rem" }}>
          <h4 className="font-weight-bold header-animated  mt-2" style={{ marginBottom: "0rem" }}>
            Trivia Widget
          </h4>
          <div className="card-body align-items-center justify-content-center">
            <h5 className="card-title">{data["category"]}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{data["difficulty"]}</h6>
            <p className="card-text">{data["question"]}</p>
            <p>
              {/* change refresh State so that useEffect will run to alod data again  */}
              <button className="btn btn-link" onClick={() => setRefresh(true)}>
                Load New Trivia!
              </button>
            </p>
            {/* Bootstrap Collapse Button that show the answer data */}
            <Button onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>
              Show Answer
            </Button>
            <Collapse in={open}>
              <div id="example-collapse-text mt-2">{data["correct_answer"]}</div>
            </Collapse>
          </div>
        </div>
      )}
    </>
  );
}
