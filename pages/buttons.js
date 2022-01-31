import Head from "next/head";
import Form from "react-bootstrap/Form";
import React, { useState, useEffect } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";


function buttons() {
  useEffect(() => {
    if (process.browser) {
      $(document).ready(function () {
        // general
        $(".ifCheckedGeneral").on("click", function () {
          var status = $(".fieldsetGeneral").prop("disabled");

          $(".generalSave").prop("disabled", false);
          if ($(".fieldsetGeneral").prop("disabled", !status)) {
            $(".ifEnabledGeneral").toggleClass("dsbl");
            $(".ifEnabledGeneral").toggleClass("enbl");
          }
        });
        // buttons
        $(".ifCheckedButtons").on("click", function () {
          var status = $(".fieldsetButtons").prop("disabled");

          $(".buttonsSave").prop("disabled", false);
          if ($(".fieldsetButtons").prop("disabled", !status)) {
            $(".ifEnabledButtons").toggleClass("dsbl");
            $(".ifEnabledButtons").toggleClass("enbl");
          }
        });
        // positions
        $(".ifCheckedPosition").on("click", function () {
          var status = $(".fieldsetPosition").prop("disabled");

          $(".positionSave").prop("disabled", false);
          if ($(".fieldsetPosition").prop("disabled", !status)) {
            $(".ifEnabledPosition").toggleClass("dsbl");
            $(".ifEnabledPosition").toggleClass("enbl");
          }
        });
        //timer
        $(".ifCheckedTimer").on("click", function () {
          var status = $(".fieldsetTimer").prop("disabled");

          $(".timerSave").prop("disabled", false);
          if ($(".fieldsetTimer").prop("disabled", !status)) {
            $(".ifEnabledTimer").toggleClass("dsbl");
            $(".ifEnabledTimer").toggleClass("enbl");
          }
        });
        //media
        $(".ifCheckedMedia").on("click", function () {
          var status = $(".fieldsetMedia").prop("disabled");

          $(".mediaSave").prop("disabled", false);
          if ($(".fieldsetMedia").prop("disabled", !status)) {
            $(".ifEnabledMedia").toggleClass("dsbl");
            $(".ifEnabledMedia").toggleClass("enbl");
          }
        });
        //custom css
        $(".ifCheckedCss").on("click", function () {
          var status = $(".fieldsetCss").prop("disabled");

          $(".cssSave").prop("disabled", false);
          if ($(".fieldsetCss").prop("disabled", !status)) {
            $(".ifEnabledCss").toggleClass("dsbl");
            $(".ifEnabledCss").toggleClass("enbl");
          }

          // media icons
        });
      

        /// btns show settings
      $('.checkedOnMobile input').click(function (e) { 
        $(this).toggleClass("checkedOnMobile");
      });
      $(".showProductImage input").click(function (e) {
        $(this).toggleClass("showProductImage");
      });
      $(".showProductName input").click(function (e) {
        $(this).toggleClass("showProductName");
      });
      $(".showPrice input").click(function (e) {
        $(this).toggleClass("showPrice");
      });
      $(".showVariants input").click(function (e) {
        $(this).toggleClass("showVariants");
      });
      $(".showQuantity input").click(function (e) {
        $(this).toggleClass("showQuantity");
      });
      $(".showOutOfStocks input").click(function (e) {
        $(this).toggleClass("showOutOfStocks");
      });
      $(".showLoopAnimation input").click(function (e) {
        $(this).toggleClass("showLoopAnimation");
      });

     if ($('.ifCalculateClicks').is(":checked")) {
       console.log("qaqaqa");
     }
      //end jquery
      });

     



      //end process browser
    }






  //end use effect
  });
    
  
  
  const [borderBGcolor, setborderBGcolor] = useState("#0083f8");
  const [buttonBGcolor, setbuttonBGcolor] = useState("#0083f8");
  const [timerBGcolor, settimerBGcolor] = useState("#0083f8");
  const [timerTXTcolor, settimerTXTcolor] = useState("#0083f8");
  const [progressBar, setprogressBar] = useState(0);

  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
          integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
          crossOrigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>

      <main className="btn-main btn-main-inline">
        <div className="d-flex align-items-start my-sidebar bg-light my-sidebar-inline">
          <div
            className="nav flex-column nav-pills my-sidebar-left"
            id="v-pills-tab"
            role="tablist"
            // aria-orientation="vertical"
          >
            <button
              className="nav-link active my-sidebar-link"
              id="v-pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-home"
              type="button"
              role="tab"
              // aria-controls="v-pills-home"
              // aria-defaultValue="true"
            >
              <img src="assets/settings.svg" alt="settings"></img> General
            </button>
            <button
              className="nav-link my-sidebar-link"
              id="v-pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-profile"
              type="button"
              role="tab"
              // aria-controls="v-pills-profile"
              // aria-defaultValue="false"
            >
              <img src="assets/buttons.svg" alt="settings"></img>Buttons
            </button>
            <button
              className="nav-link my-sidebar-link"
              id="v-pills-messages-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-messages"
              type="button"
              role="tab"
              // aria-controls="v-pills-messages"
              // aria-defaultValue="false"
            >
              <img src="assets/positions.svg" alt="settings"></img> Positions
            </button>
            <button
              className="nav-link my-sidebar-link"
              id="v-pills-settings-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-settings"
              type="button"
              role="tab"
              // aria-controls="v-pills-settings"
              // aria-defaultValue="false"
            >
              <img src="assets/quantity.svg" alt="settings"></img> Timer
            </button>
            <button
              className="nav-link my-sidebar-link"
              id="v-pills-settings-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-media"
              type="button"
              role="tab"
              // aria-controls="v-pills-settings"
              // aria-defaultValue="false"
            >
              <img src="assets/media.svg" alt="media"></img> Media
            </button>
            <button
              className="nav-link my-sidebar-link"
              id="v-pills-settings-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-css"
              type="button"
              role="tab"
              // aria-controls="v-pills-settings"
              // aria-defaultValue="false"
            >
              <img src="assets/customcss.svg" alt="css"></img> Custom CSS
            </button>
          </div>
          <div className="tab-content my-sidebar-right" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active bg-light"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              {/* <!-- start --> */}

              <form className="sidebar-content" action="/" method="POST">
                <div className="sidebar-header">
                  <div className="form-check form-switch sidebar-form-switch shadow-none">
                    <label
                      className="form-check-label ifEnabled ifEnabledGeneral enbl"
                      htmlFor="flexSwitchCheckChecked"
                    ></label>

                    <Form>
                      <Form.Check
                        type="switch"
                        id="custom-switch"
                        className="form-check-switch ifChecked ifCheckedGeneral"
                        defaultChecked
                      />
                    </Form>
                  </div>
                </div>
                <fieldset className="sidebar-content-scroll fieldsetGeneral">
                  <button
                    name="saveData"
                    type="submit"
                    className="btn create-btn shadow-none generalSave formsave"
                    style={{ width: 90 + "px" }}
                  >
                    Save
                  </button>
                  <div className="dropdown-div">
                    <label htmlFor="select">Widget name</label>
                    <input
                      className="form-control shadow-none border-0 buttons-inside-input"
                      type="text"
                      aria-label="default input example"
                      placeholder="Type name"
                    ></input>
                  </div>
                  <div className="dropdown-div">
                    <label htmlFor="select">Pages to show:</label>
                    <select
                      className="form-select my-select shadow-none"
                      aria-label="Default select example"
                    >
                      <option value="" disabled defaultValue>
                        Choose style
                      </option>
                      <option value="1">Sticky Widget</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="dropdown-div">
                    <label htmlFor="select">Style</label>
                    <select
                      className="form-select my-select shadow-none"
                      aria-label="Default select example"
                    >
                      <option value="" disabled defaultValue>
                        Choose style
                      </option>
                      <option value="1">Rounded Style</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="dropdown-div">
                    <label htmlFor="select">Show On Page Scroll After:</label>
                    <div style={{ position: "relative" }}>
                      <ProgressBar
                        now={progressBar}
                        label={`${progressBar}%`}
                        className="progress my-progress"
                      />
                      <input
                        type="number"
                        className="progress-bar-buttons"
                        value={progressBar}
                        onChange={(e) => setprogressBar(e.target.value)}
                      />
                      <label className="progressBarLabel">%</label>
                    </div>
                  </div>
                  <div className="dropdown-div">
                    <label htmlFor="select">Show status:</label>
                    <form className="checkboxes" multiple>
                      <div className="form-check">
                        <input
                          className="form-check-input shadow-none"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        ></input>
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          Desktop
                        </label>
                      </div>

                      <div className="form-check">
                        <input
                          className="form-check-input shadow-none"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked"
                        ></input>
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckChecked"
                        >
                          Mobile
                        </label>
                      </div>
                    </form>
                  </div>

                  <div className="dropdown-div">
                    <label htmlFor="select">Others (Optional):</label>
                    <div className="checkboxes checkboxes-optional" multiple>
                      <div className="form-check mb-1">
                        <input
                          className="form-check-input shadow-none"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        ></input>
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          Skip Cart and go Checkout?
                        </label>
                      </div>
                      <div className="form-check mb-1">
                        <input
                          className="form-check-input shadow-none"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        ></input>
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          Enable Instant Load?
                        </label>
                      </div>
                      <div className="form-check mb-1">
                        <input
                          className="form-check-input shadow-none ifCalculateClicks"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        ></input>
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          Calculate clicks
                        </label>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              <form className="sidebar-content" action="/" method="POST">
                <div className="sidebar-header">
                  <div className="form-check form-switch sidebar-form-switch shadow-none">
                    <label
                      className="form-check-label ifEnabled ifEnabledButtons enbl"
                      htmlFor="flexSwitchCheckChecked"
                    ></label>
                    <Form>
                      <Form.Check
                        name="showEnabled"
                        type="switch"
                        id="custom-switch"
                        className="form-check-switch ifChecked ifCheckedButtons"
                        defaultChecked
                      />
                    </Form>
                  </div>
                </div>
                <fieldset className="sidebar-content-scroll fieldsetButtons">
                  <button
                    name="saveData"
                    type="submit"
                    className="btn create-btn shadow-none formsave buttonsSave"
                    style={{ width: 90 + "px" }}
                  >
                    Save
                  </button>
                  <div className="dropdown-div buttons-div">
                    <label htmlFor="select" id="settings-label">
                      Show Settings:
                    </label>
                    <div>
                      <div className="show-settings">
                        <div className="form-check form-switch show-settings-div">
                          <Form>
                            <Form.Check
                              type="switch"
                              id="custom-switch"
                              className="form-check-switch checkedOnMobile"
                            />
                          </Form>
                          <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckChecked"
                          >
                            Checked on Mobile:
                          </label>
                        </div>
                        <div className="form-check form-switch show-settings-div">
                          <Form>
                            <Form.Check
                              type="switch"
                              id="custom-switch"
                              className="form-check-switch showProductImage"
                              name="showProductImage"
                            />
                          </Form>
                          <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckChecked"
                          >
                            Show product image:
                          </label>
                        </div>
                        <div className="form-check form-switch show-settings-div">
                          <Form>
                            <Form.Check
                              type="switch"
                              id="custom-switch"
                              className="form-check-switch showProductName"
                              name="showProductName"
                            />
                          </Form>
                          <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckChecked"
                          >
                            Show product name:
                          </label>
                        </div>
                        <div className="form-check form-switch show-settings-div">
                          <Form>
                            <Form.Check
                              type="switch"
                              id="custom-switch"
                              className="form-check-switch showPrice"
                              name="showPrice"
                            />
                          </Form>
                          <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckChecked"
                          >
                            Show price:
                          </label>
                        </div>
                        <div className="form-check form-switch show-settings-div">
                          <Form>
                            <Form.Check
                              type="switch"
                              id="custom-switch"
                              className="form-check-switch showVariants"
                              name="showVariants"
                            />
                          </Form>
                          <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckChecked"
                          >
                            Show Variants:
                          </label>
                        </div>
                        <div className="form-check form-switch show-settings-div">
                          <Form>
                            <Form.Check
                              type="switch"
                              id="custom-switch"
                              className="form-check-switch showQuantity"
                              name="showQuantity"
                            />
                          </Form>
                          <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckChecked"
                          >
                            Show quantity:
                          </label>
                        </div>
                        <div className="form-check form-switch show-settings-div">
                          <Form>
                            <Form.Check
                              type="switch"
                              id="custom-switch"
                              className="form-check-switch showOutOfStocks"
                              name="showOutOfStocks"
                            />
                          </Form>
                          <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckChecked"
                          >
                            Show out of stock:
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="dropdown-div">
                    <label htmlFor="select" id="settings-label">
                      Border Settings:
                    </label>

                    <div>
                      <div className="show-settings">
                        <div
                          className="form-check form-switch show-settings-div"
                          id="input-color"
                        >
                          <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckChecked"
                          >
                            Background color:
                          </label>
                          <div className="input-border">
                            <label
                              htmlFor="input-color"
                              id="choose-color-value"
                              className="choose-color-value-border"
                            >
                              {borderBGcolor}
                            </label>
                            <input
                              name="borderBackgroundColor"
                              type="color"
                              id="choose-color"
                              className="choose-color-border"
                              value={borderBGcolor}
                              onInput={(e) => setborderBGcolor(e.target.value)}
                            ></input>
                          </div>
                        </div>
                        <div
                          className="form-check form-switch show-settings-div"
                          id="input-color"
                        >
                          <label
                            className="form-check-label"
                            htmlFor="border-height"
                          >
                            Border height:
                          </label>
                          <input
                            name="borderHeight"
                            className=" shadow-none"
                            type="number"
                            id="input-size"
                          ></input>
                        </div>
                        <div className="form-check form-switch show-settings-div show-settings-div-animation">
                          <select
                            name="borderAnimation"
                            className="form-select-sm"
                            aria-label="Default select example"
                          >
                            <option defaultValue>Bounce</option>
                            <option value="1">Shake</option>
                          </select>
                          <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckChecked"
                          >
                            Border Animation:
                          </label>
                        </div>
                        <div className="form-check form-switch show-settings-div">
                          <input
                            className=" shadow-none"
                            type="number"
                            id="input-size"
                            name="borderSpeedOfAnimation"
                          ></input>
                          <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckChecked"
                          >
                            Speed of the animation:
                          </label>
                        </div>

                        <div
                          className="form-check form-switch show-settings-div show-settings-div-inline"
                          id="input-color"
                        >
                          <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckChecked"
                          >
                            Loop Animation:
                          </label>
                          <Form>
                            <Form.Check
                              type="switch"
                              id="custom-switch"
                              className="form-check-switch showLoopAnimation"
                            />
                          </Form>
                        </div>
                      </div>

                      <label htmlFor="select" id="settings-label">
                        Button Settings:
                      </label>

                      <div>
                        <div className="show-settings">
                          <div
                            className="form-check form-switch show-settings-div"
                            id="input-color"
                          >
                            <label
                              className="form-check-label"
                              htmlFor="flexSwitchCheckChecked"
                            >
                              Button color:
                            </label>
                            <div className="input-border">
                              <label
                                htmlFor="input-color"
                                id="choose-color-value"
                                className="choose-color-value-button"
                              >
                                {buttonBGcolor}
                              </label>
                              <input
                                name="buttonButtonColor"
                                type="color"
                                value={buttonBGcolor}
                                id="choose-color"
                                className="choose-color-button"
                                onChange={(e) =>
                                  setbuttonBGcolor(e.target.value)
                                }
                              ></input>
                            </div>
                          </div>
                          <div className="form-check form-switch show-settings-div show-settings-div-animation">
                            <select
                              name="buttonButtonShape"
                              className="form-select-sm"
                              aria-label="Default select example"
                            >
                              <option defaultValue>Curved</option>
                              <option value="1">Rounder</option>
                              <option value="2">Solid</option>
                            </select>
                            <label
                              className="form-check-label"
                              htmlFor="flexSwitchCheckChecked"
                            >
                              Button shape:
                            </label>
                          </div>
                          <div className="form-check form-switch show-settings-div">
                            <input
                              name="buttonButtonText"
                              className=" shadow-none"
                              type="text"
                              id="input-size"
                              placeholder="text here"
                            ></input>
                            <label
                              className="form-check-label"
                              htmlFor="flexSwitchCheckChecked"
                            >
                              Button text:
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-messages"
              role="tabpanel"
              aria-labelledby="v-pills-messages-tab"
            >
              <form className="sidebar-content" action="/" method="POST">
                <div className="sidebar-header">
                  <div className="form-check form-switch sidebar-form-switch shadow-none">
                    <label
                      className="form-check-label ifEnabled ifEnabledPosition enbl"
                      htmlFor="flexSwitchCheckChecked"
                    ></label>
                    <Form>
                      <Form.Check
                        name="showEnabled"
                        type="switch"
                        id="custom-switch"
                        className="form-check-switch ifCheckedPosition"
                        defaultChecked
                      />
                    </Form>
                  </div>
                </div>
                <fieldset className="sidebar-content-scroll fieldsetPosition">
                  <button
                    name="saveData"
                    type="submit"
                    className="btn create-btn shadow-none formsave positionSave"
                    style={{ width: 90 + "px" }}
                  >
                    Save
                  </button>
                  <div className="dropdown-div">
                    <label htmlFor="select" id="settings-label">
                      Settings
                    </label>

                    <div className="form-check form-switch show-settings-div show-settings-div-animation">
                      <select
                        className="form-select-sm"
                        aria-label="Default select example"
                        name="widgetPosition"
                      >
                        <option defaultValue>Top</option>
                        <option value="1">Bottom</option>
                        {/* <option value="2">Two</option>
                        <option value="3">Three</option> */}
                      </select>
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckChecked"
                      >
                        Widget position:
                      </label>
                    </div>
                    <div className="form-check form-switch show-settings-div show-settings-div-animation">
                      <select
                        className="form-select-sm"
                        aria-label="Default select example"
                        name="barAlignment"
                      >
                        <option defaultValue>Left</option>
                        <option value="1">Right</option>
                        <option value="2">Center</option>
                        <option value="3">Full</option>
                      </select>
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckChecked"
                      >
                        Bar alignment:
                      </label>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-settings"
              role="tabpanel"
              aria-labelledby="v-pills-settings-tab"
            >
              <form className="sidebar-content" action="/" method="POST">
                <div className="sidebar-header">
                  <div className="form-check form-switch sidebar-form-switch shadow-none">
                    <label
                      className="form-check-label ifEnabled ifEnabledTimer enbl"
                      htmlFor="flexSwitchCheckChecked"
                    ></label>
                    <Form>
                      <Form.Check
                        name="showEnabled"
                        type="switch"
                        id="custom-switch"
                        className="form-check-switch ifCheckedTimer"
                        defaultChecked
                      />
                    </Form>
                  </div>
                </div>
                <fieldset className="sidebar-content-scroll fieldsetTimer">
                  <button
                    name="saveData"
                    type="submit"
                    className="btn create-btn shadow-none formsave timerSave"
                    style={{ width: 90 + "px" }}
                  >
                    Save
                  </button>
                  <div className="dropdown-div">
                    <label htmlFor="select" id="settings-label">
                      Settings
                    </label>

                    <div className="form-check form-switch show-settings-div">
                      <Form>
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          className="form-check-switch"
                        />
                      </Form>
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckChecked"
                      >
                        Urgency time:
                      </label>
                    </div>
                    <div id="timer-style">
                      <div className="form-check form-switch show-settings-div show-settings-div-animation">
                        <select
                          className="form-select-sm"
                          aria-label="Default select example"
                        >
                          <option defaultValue>From events</option>
                          <option value="1">Custom</option>
                          {/* <option value="2">Two</option>
                          <option value="3">Three</option> */}
                        </select>
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckChecked"
                        >
                          Timer style:
                        </label>
                      </div>
                      <div className="form-check form-switch show-settings-div show-settings-div-animation">
                        <select
                          className="form-select-sm"
                          aria-label="Default select example"
                        >
                          <option defaultValue>Events</option>
                          <option value="1">From Shopify</option>
                          {/* <option value="2">Two</option>
                          <option value="3">Three</option> */}
                        </select>
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckChecked"
                        >
                          Choose event:
                        </label>
                      </div>
                    </div>
                    <div
                      className="dropdown-div"
                      style={{ marginBotton: 4 + "px" }}
                    >
                      <label htmlFor="select">Timer text:</label>
                      <input
                        className="form-control shadow-none border-0 buttons-inside-input"
                        type="text"
                        aria-label="default input example"
                        placeholder="Type name"
                        name="timerText"
                      ></input>
                    </div>
                    <div className="show-settings">
                      <div
                        className="form-check form-switch show-settings-div"
                        id="input-color"
                      >
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckChecked"
                        >
                          Background color:
                        </label>
                        <div className="input-border">
                          <label
                            htmlFor="input-color"
                            id="choose-color-value"
                            className="choose-color-value-timerBGcolor"
                          >
                            {timerBGcolor}
                          </label>
                          <input
                            type="color"
                            value={timerBGcolor}
                            id="choose-color"
                            name="timerBackgroundColor"
                            className="choose-color-timerBGcolor"
                            onChange={(e) => settimerBGcolor(e.target.value)}
                          ></input>
                        </div>
                      </div>
                      <div className="form-check form-switch show-settings-div show-settings-div-animation">
                        <select
                          className="form-select-sm text-center"
                          aria-label="Default select example"
                          name="timerTextSize"
                        >
                          <option defaultValue>14</option>
                          <option value="1">12</option>
                          <option value="2">10</option>
                          <option value="3">8</option>
                        </select>
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckChecked"
                        >
                          Text size:
                        </label>
                      </div>
                      <div
                        className="form-check form-switch show-settings-div"
                        id="input-color"
                      >
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckChecked"
                        >
                          Text color:
                        </label>
                        <div className="input-border">
                          <label
                            htmlFor="input-color"
                            id="choose-color-value"
                            className="choose-color-value-timerTXTcolor"
                          >
                            {timerTXTcolor}
                          </label>
                          <input
                            type="color"
                            value={timerTXTcolor}
                            id="choose-color"
                            className="choose-color-timerTXTcolor"
                            name="timerTextColor"
                            onChange={(e) => settimerTXTcolor(e.target.value)}
                          ></input>
                        </div>
                      </div>
                      <div className="form-check form-switch show-settings-div show-settings-div-animation">
                        <select
                          className="form-select-sm"
                          aria-label="Default select example"
                          name="timerFont"
                        >
                          <option defaultValue>Roboto</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckChecked"
                        >
                          Font:
                        </label>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-media"
              role="tabpanel"
              aria-labelledby="v-pills-settings-tab"
            >
              <form className="sidebar-content" action="/" method="POST">
                <div className="sidebar-header">
                  <div className="form-check form-switch sidebar-form-switch shadow-none">
                    <label
                      className="form-check-label ifEnabled ifEnabledMedia enbl"
                      htmlFor="flexSwitchCheckChecked"
                    ></label>
                    <Form>
                      <Form.Check
                        name="showEnabled"
                        type="switch"
                        id="custom-switch"
                        className="form-check-switch ifCheckedMedia"
                        defaultChecked
                      />
                    </Form>
                  </div>
                </div>
                <fieldset className="sidebar-content-scroll fieldsetMedia">
                  <button
                    name="saveData"
                    type="submit"
                    className="btn create-btn shadow-none formsave mediaSave"
                    style={{ width: 90 + "px" }}
                  >
                    Save
                  </button>
                  <div className="dropdown-div">
                    <label htmlFor="select">Settings</label>

                    <div className="form-check form-switch show-settings-div">
                      <Form>
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          className="form-check-switch"
                        />
                      </Form>
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckChecked"
                        style={{ marginBottom: 10 + "px" }}
                      >
                        Show media icons:
                      </label>
                    </div>
                    <div className="form-check form-switch show-settings-div dropdown-div media">
                      <Form>
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          className="form-check-switch"
                        />
                      </Form>
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckChecked"
                      >
                        Facebook:
                      </label>
                      <input
                        className="form-control shadow-none border-0 buttons-inside-input mt-2"
                        type="text"
                        aria-label="default input example"
                        placeholder="Facebook page Tracking ID"
                      ></input>
                    </div>
                    <div className="form-check form-switch show-settings-div dropdown-div media">
                      <Form>
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          className="form-check-switch"
                        />
                      </Form>
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckChecked"
                      >
                        Instagram:
                      </label>
                      <input
                        className="form-control shadow-none border-0 buttons-inside-input mt-2"
                        type="text"
                        aria-label="default input example"
                        placeholder="Instagram page Tracking ID"
                      ></input>
                    </div>
                    <div className="form-check form-switch show-settings-div dropdown-div media">
                      <Form>
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          className="form-check-switch"
                        />
                      </Form>
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckChecked"
                      >
                        Twitter:
                      </label>
                      <input
                        className="form-control shadow-none border-0 buttons-inside-input mt-2"
                        type="text"
                        aria-label="default input example"
                        placeholder="Twitter page Tracking ID"
                      ></input>
                    </div>
                    <div className="form-check form-switch show-settings-div dropdown-div media">
                      <Form>
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          className="form-check-switch"
                        />
                      </Form>
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckChecked"
                      >
                        Google+:
                      </label>
                      <input
                        className="form-control shadow-none border-0 buttons-inside-input mt-2"
                        type="text"
                        aria-label="default input example"
                        placeholder="Google+ page Tracking ID"
                      ></input>
                    </div>
                    <div className="form-check form-switch show-settings-div dropdown-div media">
                      <Form>
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          className="form-check-switch"
                        />
                      </Form>
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckChecked"
                      >
                        Linkedin:
                      </label>
                      <input
                        className="form-control shadow-none border-0 buttons-inside-input mt-2"
                        type="text"
                        aria-label="default input example"
                        placeholder="Linkedin page Tracking ID"
                      ></input>
                    </div>
                    <div className="form-check form-switch show-settings-div dropdown-div media">
                      <Form>
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          className="form-check-switch"
                        />
                      </Form>
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckChecked"
                      >
                        Pinterest:
                      </label>
                      <input
                        className="form-control shadow-none border-0 buttons-inside-input mt-2"
                        type="text"
                        aria-label="default input example"
                        placeholder="Pinterest page Tracking ID"
                      ></input>
                    </div>
                    <div className="form-check form-switch show-settings-div dropdown-div media">
                      <Form>
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          className="form-check-switch"
                        />
                      </Form>
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckChecked"
                      >
                        Tumblr:
                      </label>
                      <input
                        className="form-control shadow-none border-0 buttons-inside-input mt-2"
                        type="text"
                        aria-label="default input example"
                        placeholder="Tumblr page Tracking ID"
                      ></input>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-css"
              role="tabpanel"
              aria-labelledby="v-pills-settings-tab"
            >
              <form className="sidebar-content" action="/" method="POST">
                <div className="sidebar-header">
                  <div className="form-check form-switch sidebar-form-switch shadow-none">
                    <label
                      className="form-check-label ifEnabled ifEnabledCss enbl"
                      htmlFor="flexSwitchCheckChecked"
                    ></label>
                    <Form>
                      <Form.Check
                        name="showEnabled"
                        type="switch"
                        id="custom-switch"
                        className="form-check-switch ifCheckedCss"
                      />
                    </Form>
                  </div>
                </div>
                <fieldset className="sidebar-content-scroll fieldsetCss">
                  <button
                    name="saveData"
                    type="submit"
                    className="btn create-btn shadow-none formsave cssSave"
                    style={{ width: 90 + "px" }}
                  >
                    Save
                  </button>
                  <div className="dropdown-div">
                    <label htmlFor="select">Settings</label>

                    <div className="form-check form-switch show-settings-div">
                      <Form>
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          className="form-check-switch"
                          defaultChecked
                        />
                      </Form>
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckChecked"
                      >
                        Custom css:
                      </label>
                    </div>
                    <div className="mb-3">
                      <textarea
                        className="form-control border-0 textarea shadow-none"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Type here"
                      ></textarea>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>

        <div className="buttons-content">
          <div className="black-buttons black-buttons-view ">
            Preview:
            <div className="black-buttons-view1">
              <img src="assets/mobile-view.svg" alt="mobile"></img>
            </div>
            <div className="black-buttons-view2">
              <img src="assets/desktop-view.svg" alt="desktop"></img>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default buttons;
