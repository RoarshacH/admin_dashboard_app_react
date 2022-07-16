import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
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

  //   const listItems = obj.map((rate) => (
  //     <tr>
  //       <td>##</td>
  //       <td>rate</td>
  //     </tr>
  //   ));

  //   const handleSelect = (e, data) => {
  //     setCurrency(data.value);
  //   };

  return (
    <>
      <div className="container-fluid">
        <div className="row flex-nowrap ">
          <Sidebar />
          <div className="container py-3 mx-4">
            <h1 className="font-weight-bold text-center header-animated mt-5">Exchage Rates for Canadian Dollars</h1>
            <div className="row mx-4">
              {loading ? (
                <div>
                  <h2>Data Error</h2>
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

                    <div class="table-responsive">
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
