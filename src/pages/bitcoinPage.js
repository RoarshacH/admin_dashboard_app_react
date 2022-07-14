import React, { useState, useEffect } from "react";
import Error from "../components/error";
import { Card, Dimmer, Loader, Select } from "semantic-ui-react";
import Chart from "react-apexcharts";
import Sidebar from "../components/sidebar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export default function BitcoinWidget() {
  const [loading, setLoading] = useState(true);
  const [priceData, setPriceData] = useState(null);
  const [currency, setCurrency] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [series, setSeries] = useState(null);

  const options = [
    { value: "USD", text: "USD" },
    { value: "EUR", text: "EUR" },
    { value: "GBP", text: "GPB" },
  ];

  useEffect(() => {
    async function fetchPrices() {
      const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
      const data = await res.json();
      setCurrency(data.bpi.USD.code);
      setPriceData(data.bpi);
      getChartData();
    }
    fetchPrices();
  }, []);

  const getChartData = async () => {
    const res = await fetch(`https://api.coindesk.com/v1/bpi/historical/close.json?`);
    const data = await res.json();
    const categories = Object.keys(data.bpi);
    const series = Object.values(data.bpi);
    setChartData({
      xaxis: {
        categories: categories,
      },
    });
    setSeries([
      {
        name: "Bitcoin Price",
        data: series,
      },
    ]);
    setLoading(false);
  };

  const handleSelect = (e, data) => {
    setCurrency(data.value);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <Sidebar />
          <div className="col py-3">
            <h1 className="font-weight-bold text-center header-animated mt-5">Stock Data</h1>
            <div className="row">
              {loading ? (
                <div>
                  <Dimmer active inverted>
                    <Loader>Loading</Loader>
                  </Dimmer>
                </div>
              ) : (
                <>
                  <div className="price-container">
                    {/* <DropdownButton id="dropdown-basic-button" title="Select your currency">
                        {options.map((item) => {
                          {
                            console.log(item);
                          }

                          <Dropdown.Item onClick={handleSelect}>{item}</Dropdown.Item>;
                        })}
                      </DropdownButton> */}
                    <Select placeholder="Select your currency" onChange={handleSelect} options={options} />

                    <div className="price">
                      <Card>
                        <Card.Content>
                          <Card.Header>{currency} Price</Card.Header>
                          <Card.Description>{priceData[currency].rate}</Card.Description>
                        </Card.Content>
                      </Card>
                    </div>
                  </div>
                  <div className="col col-md-12" style={{ justifyContent: "center" }}>
                    <Chart className={"large-chart"} options={chartData} series={series} type="line" width="1200" height="300" />

                    <Chart className={"small-chart"} options={chartData} series={series} type="line" width="300" height="300" />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
