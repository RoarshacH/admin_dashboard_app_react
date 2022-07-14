import React, { useState, useEffect } from "react";
import Error from "../components/error";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

export default function TriviaWidget() {
  const [dataLoad, setDataLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, showError] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const [open, setOpen] = useState(false);

  const fetchData = async () => {
    setDataLoading(true);
    await fetch(`https://opentdb.com/api.php?amount=1`)
      .then((res) => res.json())
      .then((result) => {
        if (result["results"] != undefined) {
          setData(result["results"]["0"]);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    showError(false);

    fetchData();
  }, []);

  useEffect(() => {
    if (data != undefined) {
      setDataLoading(false);
    }
  }, [data]);

  useEffect(() => {
    if (refresh) {
      fetchData();
    }
    setRefresh(false);
  }, [refresh]);

  return (
    <>
      {dataLoad ? (
        <>
          <h4>Loading...</h4>
          <Error showError={showError} error={error} />
        </>
      ) : (
        <div className="card col-md-6 todoMain" style={{ marginTop: "4rem" }}>
          <h4 className="font-weight-bold header-animated" style={{ marginBottom: "0rem" }}>
            Trivia Widget
          </h4>
          <div className="card-body align-items-center justify-content-center">
            <h5 className="card-title">{data["category"]}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{data["difficulty"]}</h6>
            <p className="card-text">{data["question"]}</p>
            <p>
              <a onClick={() => setRefresh(true)} class="card-link">
                Card link
              </a>
            </p>

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
