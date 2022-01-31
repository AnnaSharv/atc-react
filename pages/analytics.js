import Head from 'next/head';
import Image from "next/image";
import React, { useState, useEffect } from "react";

function analytics() {
  useEffect(() => {
    $(document).ready(function () {
      var simpleRangeCalendar = $("#range-calendar").rangeCalendar();
    });
  }); 
  return (
    <div>
      <Head>
        <title>Sticky Add to Cart</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="css/rangecalendar.css" />

        <link
          rel="stylesheet"
          id="rangecalendar-style-css"
          href="css/rangecalendar.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="rangecalendar-style-css"
          href="css/style.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="rangecalendar-style-css"
          href="scripts/nv.d3.css"
          type="text/css"
          media="all"
        />

        <script src="js/jquery-ui.min.js"></script>
        <script
          type="text/javascript"
          src="js/jquery.ui.touch-punch.min.js"
        ></script>
        <script type="text/javascript" src="js/moment+langs.min.js"></script>
        <script
          type="text/javascript"
          src="js/jquery.rangecalendar.js"
        ></script>
       
      </Head>

      <main style={{ padding: 30 + "px" }}>
        <section className="analytics-section-1">
          <div>
            <div className="dropdown-div">
              <span>Choose Your Widget</span>
              <select
                id="analyticsChooseYourWidget"
                className="form-select my-select shadow-none bg-light"
                aria-label="Default select example"
              >
                <option defaultValue>Sticky Widget</option>
                <option value="1">Sticky cart</option>
                <option value="2">Sticky cart preview</option>
                <option value="3">Quick buy widget</option>
                <option value="1">Sticky URL button</option>
                <option value="2">Remember my cart</option>
                <option value="3">Festival attraction</option>
              </select>
            </div>
            <div className="dropdown-div">
              <span>Compare With</span>
              <select
                id="analyticsCompareWith"
                className="form-select my-select shadow-none bg-light"
                aria-label="Default select example"
              >
                <option defaultValue>Sticky Widget</option>
                <option value="1">Sticky cart</option>
                <option value="2">Sticky cart preview</option>
                <option value="3">Quick buy widget</option>
                <option value="1">Sticky URL button</option>
                <option value="2">Remember my cart</option>
                <option value="3">Festival attraction</option>
              </select>
            </div>
          </div>
          <div className="calendar-div-container">
            <div className="calendar-div">
              <button className="calendar-btn calendar-btn-left shadow-none bg-white">
                <Image
                  src="/assets/calendar-arrow-left.svg"
                  alt="calendar-arrow-left"
                  width={6}
                  height={10}
                />
              </button>
              <div id="range-calendar"></div>
              <button className="calendar-btn calendar-btn-right shadow-none bg-white">
                <Image
                  src="/assets/calendar-arrow-right.svg"
                  alt="calendar-arrow-right"
                  width={6}
                  height={10}
                />
              </button>
            </div>
          </div>
        </section>

        <section className="analytics-section-2">
          <div className="card-1 bg-light">
            <div className="card-header-content">
              <h5>Statistics</h5>
              <h4 className="circle-blue">Sticky Widget</h4>
              <h4 className="circle-purple">Cart Widget</h4>
            </div>

            <div className="card-numbers">
              <div>
                <div>
                  <span className="span-blue" id="RCfirstSpanLeft">
                    876
                  </span>
                  &nbsp;/&nbsp;
                  <span className="span-purple" id="RCfirstSpanRight">
                    243
                  </span>
                </div>
                Remaining Clicks
              </div>
              <div>
                <div>
                  <span className="span-blue" id="TCsecondSpanLeft">
                    35654
                  </span>
                  &nbsp;/&nbsp;
                  <span className="span-purple" id="TCsecondSpanRight">
                    2243
                  </span>
                </div>
                Total Clicks
              </div>
              <div>
                <div>
                  <span className="span-blue" id="TRthirdSpanLeft">
                    765
                  </span>
                  &nbsp;/&nbsp;
                  <span className="span-purple" id="TRthirdSpanRight">
                    465$
                  </span>
                </div>
                Total Revenue
              </div>
            </div>
          </div>

          <div className="card-2 bg-light card-header-content">
            <h5 style={{ marginBottom: 20 + "px" }}>Top Products</h5>

            <div className="card-2-content">
              <div className="circle-blue-div" id="topProductsInfo">
                Nothing to see here yet
              </div>
              <div className="top-products" id="topProductsQuantity">
                213 clocks
              </div>
              <div className="top-products" id="topProductsRevenue">
                $234 Revenue
              </div>
              <div className="circle-purple-div">Nothing to see here yet</div>
              <div className="top-products">213 clocks</div>
              <div className="top-products">$234 Revenue</div>
              <div className="circle-purple-div">Nothing to see here yet</div>
              <div className="top-products">213 clocks</div>
              <div className="top-products">$234 Revenue</div>
              <div className="circle-purple-div">Nothing to see here yet</div>
              <div className="top-products">213 clocks</div>
              <div className="top-products">$234 Revenue</div>
              <div className="circle-purple-div">Nothing to see here yet</div>
              <div className="top-products">213 clocks</div>
              <div className="top-products">$234 Revenue</div>
              <div className="circle-purple-div">Nothing to see here yet</div>
              <div className="top-products">213 clocks</div>
              <div className="top-products">$234 Revenue</div>
            </div>
          </div>

          {/* <div id="chart">
            
          </div> */}
        </section>
      </main>
    </div>
  );
}

export default analytics;
