import React from "react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
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
                    <i className="nc-icon nc-alert-circle-i" />
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
                      <i className="nc-icon nc-alert-circle-i" />
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
                        <i className="nc-icon nc-alert-circle-i" />
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
                        <i className="nc-icon nc-credit-card text-primary" />
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
                    <i className="nc-icon nc-bank" />Card-2-Bank.
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
                        <p className="card-category">Card Load</p>
                        <CardTitle tag="p">₦ 0</CardTitle>
                        <p />
                      </div>
                    </Col>

                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="nc-icon nc-bank" />
                    Bank-2-Card, TopUp & Cash-In.
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
                    <i className="nc-icon nc-diamond" />
                    Card-to-Card.
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
          <Col lg="5" md="6" sm="6">
            <Card>
              <CardHeader>
              <Row>
                <Col sm="7">
                  <div className="numbers pull-left">Embassy Card Usage</div>
                </Col>

              </Row>
              </CardHeader>
              <CardBody>
                <Pie
                  data={chartExample11.data}
                  options={chartExample11.options}
                  width={456}
                  height={300}
                />
              </CardBody>
              <CardFooter>
              <div className="legend">
                <i className="fa fa-circle text-primary" />
                Online Payments
              </div>
              <div className="legend">
                <i className="fa fa-circle text-danger" />
                Offline Payments
              </div>
                <div className="legend">
                  <i className="fa fa-circle text-warning" />
                  Cash Back (Cash Out)
                </div>
                <div className="legend">
                  <i className="fa fa-circle text-info" />
                  Card Loaded
                </div>
                <div className="legend">
                  <i className="fa fa-circle text-muted" />
                  Cash Deposit
                </div>
                <div className="legend">
                  <i className="fa fa-circle text-success" />
                  Transfers
                </div>

              </CardFooter>
            </Card>
          </Col>

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
                    height={380}
                    width={828}
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
          <Row>

</Row>


        </div>
      </>
    );
  }
}

export default Overview_Personal;
