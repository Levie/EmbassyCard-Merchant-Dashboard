import React from "react";
// react plugin used to create charts
import { Line, Doughnut, Pie } from "react-chartjs-2";
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
  Badge,
  Button,
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
   chartExample7,
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
        <h2>
        Welcome to your Dashboard: Customer Mode Overview
        </h2>
        <h5>
        EmbassyCard Customer Status & Personal Features
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
                        <p className="card-category">Total Spent</p>
                        <CardTitle tag="p">₦ 150,000</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="nc-icon nc-alert-circle-i" />
                    Online  / Offline Payment
                  </div>
                </CardFooter>
                </Card>
                <Card className="card-stats">
                  <CardBody>
                    <Row>

                      <Col md="10" xs="7">
                        <div className="numbers">
                          <p className="card-category text-left">Card Membership Type:</p>
                          <img
                            alt="..."
                            className="mb-1"
                            src={require("assets/img/EC_Gold.jpg")}
                          />
                          <p />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter>
                    <hr />
                    <div className="stats">
                      <i className="nc-icon nc-alert-circle-i" />
                      Membership since: <b>XX/X/XX</b>
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
                      <p className="card-category">Total Digital Cash Back</p>
                      <CardTitle tag="p">₦ 67,035</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="nc-icon nc-basket" />
                  Cash Out at Merchant
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
                        <p className="card-category">Total Digital Cash Deposit</p>
                        <CardTitle tag="p">₦ 21,330</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="nc-icon nc-bank" />Card-2-Bank
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
                        <p className="card-category">Total Digital Cash Loaded</p>
                        <CardTitle tag="p">₦ 43,345</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="nc-icon nc-bank" />
                    Bank-2-Card/Cash Top Up With Merchant
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
                        <p className="card-category">Total Digital Cash Transfered</p>
                        <CardTitle tag="p">₦ 163.5k</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="nc-icon nc-diamond" />
                    Total Amount of P2P Transfers
                  </div>
                </CardFooter>
              </Card>
            </Col>

            <Col lg="4" md="6" sm="6">
              <Card>
                <CardHeader>
                  <CardTitle>Request to Pay</CardTitle>
                  <p className="card-category">Total of Bills Unpaid</p>
                </CardHeader>
                <CardBody>
                  <Doughnut
                    data={chartExample7.data}
                    options={chartExample7.options}
                    className="ct-chart ct-perfect-fourth"
                    height={80}
                    width={256}
                  />
                </CardBody>
                <CardFooter>
                <div className="legend">
                  <i className="fa fa-circle text-danger" />
                  Settlement Bills Unpaid
                </div>
                  <hr />
                  <Row>
                    <Col sm="7">
                      <div className="footer-title">View Settled Bills</div>
                    </Col>
                    <Col sm="5">
                      <div className="pull-right">
                        <Button
                          className="btn-round btn-icon"
                          color="danger"
                          size="sm"
                          href="/admin/charts"
                        >
                          <i className="nc-icon nc-button-play" />
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>

          <h5>
          Spending Behaviour and Insights
          </h5>

          <Row>
          <Col lg="4" md="6" sm="6">
            <Card>
              <CardHeader>
              <Row>
                <Col sm="7">
                  <div className="numbers pull-left">Embassy Card Usage</div>
                </Col>
                <Col sm="5">
                  <div className="pull-right">
                    <Badge color="warning" pill>
                      +12%
                    </Badge>
                  </div>
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
                  <i className="fa fa-circle text-warning" />
                  Cash Back (Cash Out)
                </div>
                <div className="legend">
                  <i className="fa fa-circle text-info" />
                  Cash Loaded (Bank-2-Card + Top Up + Cash In)
                </div>
                <div className="legend">
                  <i className="fa fa-circle text-muted" />
                  Deposit (Card-2-Bank)
                </div>
                <div className="legend">
                  <i className="fa fa-circle text-danger" />
                  Payments (Online/Offline R2P)
                </div>
                <div className="legend">
                  <i className="fa fa-circle text-success" />
                  Person-2-Person Transfer (Cash Sent)
                </div>
                <hr />
                <div className="stats">
                  <i className="fa fa-calendar" />
                  Track your activity of your EmbassyCard Experience
                </div>
              </CardFooter>
            </Card>
          </Col>

            <Col lg="4" md="6" sm="6">
              <Card>
                <CardHeader>
                  <Row>
                    <Col sm="6">
                      <div className="numbers pull-left">Transaction Activity</div>
                    </Col>
                    <Col sm="5">
                      <div className="pull-right">
                        <Badge color="info" pill>
                          -24%
                        </Badge>
                      </div>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <h6 className="big-title">
                    See how many transactions you have made so far with us at EmbassyCard.
                  </h6>
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
                  <hr />
                  <Row>
                    <Col sm="7">
                      <div className="footer-title">View all transactions</div>
                    </Col>
                    <Col sm="5">
                      <div className="pull-right">
                        <Button
                          className="btn-round btn-icon"
                          color="info"
                          size="sm"
                          href="/admin/regular-tables"
                        >
                          <i className="nc-icon nc-button-play" />
                        </Button>
                      </div>
                    </Col>
                  </Row>
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
