import React from "react";
// react plugin used to create charts
import { Bar, Line, Doughnut } from "react-chartjs-2";
// react plugin for creating vector maps
//import { VectorMap } from "react-jvectormap";

// import {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker,
// } from "react-google-maps";

// reactstrap components
import {
  //Badge,
  //Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  //Label,
  //FormGroup,
  //Input,
  //Table,
  Row,
  Col,
  //UncontrolledTooltip,
} from "reactstrap";

import {
  // chartExample1,
  // chartExample2,
  // chartExample3,
  // chartExample4,
  // chartExample5,
  // chartExample6,
  // chartExample7,
  // chartExample8,
  // chartExample9,
  chartExample10,
  chartExample11,
  chartExample15,
  chartExample16,

  chartExample17,
} from "variables/charts.js";

// var mapData = {
//   BF: 760,
//   DJ: 550,
//   BI: 120,
//   DZ: 1300,
//   RW: 540,
//   TG: 690,
//   AO: 200,
//   CF: 200,
//   EH: 600,
//   GW: 300,
//   NG: 2920,
// };

// const RegularMap = withScriptjs(
//   withGoogleMap((props) => (
//     <GoogleMap
//       defaultZoom={7}
//       defaultCenter={{ lat: 8.937971, lng: 8.046638 }}
//       defaultOptions={{
//         scrollwheel: false,
//       }}
//     >
//       <Marker
//       position={{ lat: 9.213039, lng: 8.260337 } && { lat: 12.001002, lng: 8.587437 } } />
//     </GoogleMap>
//   ))
// );

class Overview_Personal extends React.Component {
  render() {
    return (
      <>

        <div className="content">
        <h5>
        EmbassyCard Customer Analytics.
        </h5>
          <Row>
            <Col lg="4" md="6" sm="6" >

              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-mobile text-primary" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Offline Payments</p>
                        <CardTitle tag="p">₦ 0</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="nc-icon nc-diamond" />
                    Card Payment.
                  </div>
                </CardFooter>
                </Card>

                <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <Col md="4" xs="5">
                        <div className="icon-big text-center icon-warning">
                          <i className="nc-icon nc-tv-2 text-primary" />
                        </div>
                      </Col>
                      <Col md="8" xs="7">
                        <div className="numbers">
                          <p className="card-category">Online Payments</p>
                          <CardTitle tag="p">₦ 0</CardTitle>
                          <p />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter>
                    <hr />
                    <div className="stats">
                      <i className="nc-icon nc-diamond" />
                      Card Payment.
                    </div>
                  </CardFooter>
                  </Card>

                  <Card className="card-stats">
                    <CardBody>
                      <Row>
                        <Col md="4" xs="5">
                          <div className="icon-big text-center icon-warning">
                            <i className="nc-icon nc-refresh-69 text-primary" />
                          </div>
                        </Col>
                        <Col md="8" xs="7">
                          <div className="numbers">
                            <p className="card-category">Card Top-Up</p>
                            <CardTitle tag="p">₦ 0</CardTitle>
                            <p />
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                    <CardFooter>
                      <hr />
                      <div className="stats">
                        <i className="nc-icon nc-bookmark-2" />
                        Load Card from Website.
                      </div>
                    </CardFooter>
                    </Card>



            </Col>

            <Col lg="4" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-minimal-up text-primary" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Cash Back</p>
                      <CardTitle tag="p">₦ 0</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="nc-icon nc-basket" />
                  Cash Out at Merchant.
                </div>
              </CardFooter>
            </Card>
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-box-2 text-primary" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Cash Deposit</p>
                        <CardTitle tag="p">₦ 0</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="nc-icon nc-credit-card" />Card-2-Bank.
                  </div>
                </CardFooter>
              </Card>

              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-single-copy-04 text-primary" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Request-2-Pay</p>
                        <CardTitle tag="p">₦ 0</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="nc-icon nc-alert-circle-i" />
                    Unpaid Bills.
                  </div>
                </CardFooter>
                </Card>


            </Col>

            <Col lg="4" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-minimal-down text-primary" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Cash Load</p>
                        <CardTitle tag="p">₦ 0</CardTitle>
                        <p />
                      </div>
                    </Col>

                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="nc-icon nc-basket" />
                    Cash In at Merchant.
                  </div>
                </CardFooter>
              </Card>
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-send text-primary" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Transfers</p>
                        <CardTitle tag="p">₦ 0</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="nc-icon nc-credit-card" />
                    Card-to-Card.
                  </div>
                </CardFooter>
              </Card>
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-bank text-primary" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Card Loaded</p>
                        <CardTitle tag="p">₦ 0</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="nc-icon nc-diamond" />
                    Bank-2-Card.
                  </div>
                </CardFooter>
              </Card>


            </Col>


          </Row>


  <hr />
          <h5>
          Spending Behaviour and Insights
          </h5>

          <Row>
          <Col lg="6" md="6" sm="6">
            <Card>
              <CardHeader>
              <Row>
                <Col sm="7">
                  <div className="numbers pull-left">Load Card</div>
                </Col>

              </Row>
              </CardHeader>
              <CardBody>
                <Doughnut
                  data={chartExample11.data}
                  options={chartExample11.options}
                  width={456}
                  height={300}
                />
              </CardBody>
              <CardFooter>
              <div className="legend">
                <i className="fa fa-circle text-danger" />
                Bank-2-Card.
                <i className="fa fa-circle text-info" />
                Cash-In at Merchant.

              </div>
              <div className="legend">
              <i className="fa fa-circle text-warning" />
              Top-up via Website.
            </div>




              </CardFooter>
            </Card>
          </Col>

            <Col lg="6" md="6" sm="6">
              <Card>
                <CardHeader>
                <Row>
                  <Col sm="7">
                    <div className="numbers pull-left">Card Outgoings</div>
                  </Col>

                </Row>
                </CardHeader>
                <CardBody>
                  <Doughnut
                    data={chartExample15.data}
                    options={chartExample15.options}
                    width={456}
                    height={300}
                  />
                </CardBody>
                <CardFooter>
                <div className="legend">
                  <i className="fa fa-circle text-danger" />
                  Card-2-Bank.
                  <i className="fa fa-circle text-info" />
                  Cash-out at Merchant.
                    </div>
              <div className="legend">
                  <i className="fa fa-circle text-warning" />
                  Online Payments.
                  <i className="fa fa-circle text-success" />
                  Offline Payments.
                </div>



                </CardFooter>
              </Card>
            </Col>

          <Col lg="6" md="6" sm="6">
              <Card>
                <CardHeader>
                <Row>
                  <Col sm="7">
                    <div className="numbers pull-left">Transfer to Cards
                  </div>
                  </Col>

                </Row>
                </CardHeader>
                <CardBody>
                  <Doughnut
                    data={chartExample16.data}
                    options={chartExample16.options}
                    width={456}
                    height={300}
                  />
                </CardBody>
                <CardFooter>
                <div className="legend">
                  <i className="fa fa-circle text-danger" />
                  Card-2-Card
                </div>
                <div className="legend">
                  <i className="fa fa-circle text-info" />
                  Card-2-Card Remote
                </div>



                </CardFooter>
              </Card>
            </Col>

            <Col lg="6" md="6" sm="6">
                <Card>
                  <CardHeader>
                  <Row>
                    <Col sm="7">
                      <div className="numbers pull-left">Loads vs Spend
                    </div>
                    </Col>

                  </Row>
                  </CardHeader>
                  <CardBody>
                    <Bar
                      data={chartExample17.data}
                      options={chartExample17.options}
                      width={456}
                      height={300}
                    />
                  </CardBody>
                  <CardFooter>
                  <div className="legend">
                    <i className="fa fa-circle text-warning" />
                    Card Load
                  </div>
                  <div className="legend">
                    <i className="fa fa-circle text-info" />
                    Card-2-Bank
                  </div>



                  </CardFooter>
                </Card>
              </Col>


          </Row>
          <Row>
          <Col lg="6" md="6" sm="6">
            <Card>
              <CardHeader>
                <Row>
                  <Col sm="5">
                    <div className="numbers pull-left">Load Activity</div>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>

              <Line
                data={chartExample10.data}
                options={chartExample10.options}
              />
              </CardBody>
              <CardFooter>
              <div className="legend">
                <i className="fa fa-circle text-info" />
                Cash Loaded (Bank-2-Card + Top Up + Cash In)
              </div>



              </CardFooter>
            </Card>
          </Col>
</Row>


        </div>
      </>
    );
  }
}

export default Overview_Personal;
