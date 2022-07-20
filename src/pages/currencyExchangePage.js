import React, { useState, useEffect } from "react";
import Sidebar from "../components/sidebar";

export default function CurrencyExchangePage() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [rates, setRates] = useState({});

  useEffect(() => {
    async function fetchPrices() {
      setLoading(true);
      const res = await fetch("https://api.exchangeratesapi.io/v1/latest?access_key=6e8202ba3b24f80931a9b44ba11a4a77&base=CAD");
      const result = await res.json();
      setData(result);
      setRates(result.rates);
    }
    fetchPrices();
  }, []);

  useEffect(() => {
    if (data !== undefined && data) {
      setLoading(false);
      console.log(data);
    }
  }, [data]);

  return (
    <>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <Sidebar />
          <div className="col py-3">
            <h1 className="font-weight-bold text-center header-animated mt-5">Canadian Dollar Exchange Rates Data</h1>
            <div className="row">
              <div className="col-md-12">
                <div className="d-flex align-items-center justify-content-center">
                  {loading ? (
                    <div>
                      <h2>Data Error</h2>
                    </div>
                  ) : (
                    <>
                      <div class="table-responsive col-md-8">
                        <table class="table table-striped table-sm">
                          <thead>
                            <tr>
                              <th scope="col">Currency</th>
                              <th scope="col">Rate</th>
                            </tr>
                          </thead>
                          <tbody>
                            {Object.keys(rates).map((key) => {
                              return (
                                <tr key={key}>
                                  <td>{key}</td>
                                  <td>{rates[key]}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
