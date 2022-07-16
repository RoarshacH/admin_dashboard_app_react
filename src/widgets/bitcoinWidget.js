import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

export default function BitcoinWidget() {
  const [loading, setLoading] = useState(true);
  const [priceData, setPriceData] = useState(null);
  const [currency, setCurrency] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [series, setSeries] = useState(null);

  // Get the Current Prices of bitcoin to show above the Chart
  // Run on Widget Load one time
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

  // Get Historical Closing Prices to show in the Chart
  // Run on Widget Load one time called  after fetchPrices() function above
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

  return (
    <>
      {/* Check if data is loading of Show the Message */}
      {loading ? (
        <div>
          <h4 style={{ display: "inline" }}>Loading...</h4>
        </div>
      ) : (
        <>
          <div className="card col-md-12" style={{ marginTop: "4rem" }}>
            <h4 className="font-weight-bold header-animated" style={{ marginBottom: "0rem" }}>
              Bitcon Price Widget
            </h4>
            <div className="card-body align-items-center justify-content-center">
              <h5 className="card-title">{currency} Price</h5>
              <h6 className="card-subtitle mb-2 text-muted">{priceData[currency].rate}</h6>

              <div className="col col-md-12" style={{ justifyContent: "center" }}>
                <Chart options={chartData} series={series} type="line" style={{ width: "100%" }} height="300" />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
