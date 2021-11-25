import React from "react";
// react plugin used to create charts
import { Line, Bar, Doughnut } from "react-chartjs-2";
// react plugin for creating vector maps
//import { VectorMap } from "react-jvectormap";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

// reactstrap components
import {
  //Nav,
  //NavItem,
  //NavLink,
  CardText,
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
  Table,
  Row,
  Col,
  //UncontrolledTooltip,
} from "reactstrap";

import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
  chartExample5,
  chartExample6,
  chartExample7,
  chartExample8,
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

const RegularMap = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={7}
      defaultCenter={{ lat: 8.937971, lng: 8.046638 }}
      defaultOptions={{
        scrollwheel: false,
      }}
    >
      <Marker
      position={{ lat: 9.213039, lng: 8.260337 } && { lat: 12.001002, lng: 8.587437 } } />
    </GoogleMap>
  ))
);

class Dashboard_Today extends React.Component {
  render() {
    return (
      <>

        <div className="content">
        <h2>
        Your Dashboard: This Week
        </h2>
        <h5>
        EmbassyCard Customer Status & Features
        </h5>

  <Card className="text-center card-plain">

    <CardBody>
        <CardTitle>Track your Personal Behaviour and Influence.</CardTitle>
        <CardText>Everything you do with EmbassyCard can be seen in our EcoSystem.</CardText>

    </CardBody>
</Card>

          <Row>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-shop text-primary" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Total Digital Cash Balance</p>
                        <CardTitle tag="p">₦ 67,035</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="nc-icon nc-credit-card" />
                    Card-2-Bank/Cashback from Merchant
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
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
                        <p className="card-category">Load Money</p>
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
                    Bank-2-Card/Cash Top up  with Merchant
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-basket text-primary" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Total Transaction</p>
                        <CardTitle tag="p">32</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="nc-icon nc-user-run" />
                    Activity This week
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-diamond text-primary" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Total Transaction Value </p>
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
                    Spent
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="3">
              <Card>
                <CardHeader>
                  <CardTitle>Incoming Transactions</CardTitle>
                  <p className="card-category">increased by</p>
                </CardHeader>
                <CardBody>
                  <Doughnut
                    data={chartExample5.data}
                    options={chartExample5.options}
                    className="ct-chart ct-perfect-fourth"
                    height={300}
                    width={456}
                  />
                </CardBody>
                <CardFooter>
                  <div className="legend">
                    <i className="fa fa-circle text-info" />
                    Completed
                  </div>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-calendar" />
                    Number of transactions recieved
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col md="3">
              <Card>
                <CardHeader>
                  <CardTitle>Circulating Value</CardTitle>
                  <p className="card-category">In your ecosystem</p>
                </CardHeader>
                <CardBody>
                  <Doughnut
                    data={chartExample6.data}
                    options={chartExample6.options}
                    className="ct-chart ct-perfect-fourth"
                    height={300}
                    width={456}
                  />
                </CardBody>
                <CardFooter>
                  <div className="legend">
                    <i className="fa fa-circle text-warning" />
                    On average
                  </div>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-clock-o" />
                    Updated 5 minutes ago
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col md="3">
              <Card>
                <CardHeader>
                  <CardTitle>Outgoing Transactions</CardTitle>
                  <p className="card-category">Decreased by</p>
                </CardHeader>
                <CardBody>
                  <Doughnut
                    data={chartExample7.data}
                    options={chartExample7.options}
                    className="ct-chart ct-perfect-fourth"
                    height={300}
                    width={456}
                  />
                </CardBody>
                <CardFooter>
                  <div className="legend">
                    <i className="fa fa-circle text-danger" />
                    Completed
                  </div>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-clock-o" />
                    Updated 3 minutes ago
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col md="3">
              <Card>
                <CardHeader>
                  <CardTitle>Request to Pay</CardTitle>
                  <p className="card-category">Still in Circulation</p>
                </CardHeader>
                <CardBody>
                  <Doughnut
                    data={chartExample8.data}
                    options={chartExample8.options}
                    className="ct-chart ct-perfect-fourth"
                    height={300}
                    width={456}
                  />
                </CardBody>
                <CardFooter>
                  <div className="legend">
                    <i className="fa fa-circle text-secondary" />
                    In Transit
                  </div>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-history" />
                    Number of transactions in transit
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <h5>
          Spending Behaviour and Insights
          </h5>
          <Row>
            <Col lg="4" sm="6">
              <Card>
                <CardHeader>
                  <Row>
                    <Col sm="7">
                      <div className="numbers pull-left">₦ 163,542</div>
                    </Col>
                    <Col sm="5">
                      <div className="pull-right">
                        <Badge color="success" pill>
                          +18%
                        </Badge>
                      </div>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <h6 className="big-title">
                    In-Circulation Transactions in last ten quarters
                  </h6>
                  <Line
                    data={chartExample1.data}
                    options={chartExample1.options}
                    height={380}
                    width={826}
                  />
                </CardBody>
                <CardFooter>
                  <hr />
                  <Row>
                    <Col sm="7">
                      <div className="footer-title">Financial Statistics</div>
                    </Col>
                    <Col sm="5">
                      <div className="pull-right">
                        <Button
                          className="btn-round btn-icon"
                          color="success"
                          size="sm"
                        >
                          <i className="nc-icon nc-simple-add" />
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="4" sm="6">
              <Card>
                <CardHeader>
                  <Row>
                    <Col sm="7">
                      <div className="numbers pull-left">169</div>
                    </Col>
                    <Col sm="5">
                      <div className="pull-right">
                        <Badge color="danger" pill>
                          -14%
                        </Badge>
                      </div>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <h6 className="big-title">
                    transactions in last 7 days
                  </h6>
                  <Line
                    data={chartExample2.data}
                    options={chartExample2.options}
                    height={380}
                    width={828}
                  />
                </CardBody>
                <CardFooter>
                  <hr />
                  <Row>
                    <Col sm="7">
                      <div className="footer-title">View all transactions</div>
                    </Col>
                    <Col sm="5">
                      <div className="pull-right">
                        <Button
                          className="btn-round btn-icon"
                          color="danger"
                          size="sm"
                        >
                          <i className="nc-icon nc-button-play" />
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="4" sm="6">
              <Card>
                <CardHeader>
                  <Row>
                    <Col sm="7">
                      <div className="numbers pull-left">460</div>
                    </Col>
                    <Col sm="5">
                      <div className="pull-right">
                        <Badge color="warning" pill>
                          ~51%
                        </Badge>
                      </div>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <h6 className="big-title">total transactions in last 6 years</h6>
                  <Line
                    data={chartExample3.data}
                    options={chartExample3.options}
                    height={380}
                    width={826}
                  />
                </CardBody>
                <CardFooter>
                  <hr />
                  <Row>
                    <Col sm="7">
                      <div className="footer-title">View more stats</div>
                    </Col>
                    <Col sm="5">
                      <div className="pull-right">
                        <Button
                          className="btn-round btn-icon"
                          color="warning"
                          size="sm"
                        >
                          <i className="nc-icon nc-alert-circle-i" />
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Card Transactions - Where Spent</CardTitle>
                  <p className="card-category">
                    Locations Spent
                  </p>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col md="6">
                      <Table responsive>
                        <tbody>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  alt="..."
                                  src={require("assets/img/flags/NG.png")}
                                />
                              </div>
                            </td>
                            <td>Lagos, Ikeja</td>
                            <td className="text-right">120</td>
                            <td className="text-right">53.23%</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  alt="..."
                                  src={require("assets/img/flags/NG.png")}
                                />
                              </div>
                            </td>
                            <td>Kano, Kano</td>
                            <td className="text-right">63</td>
                            <td className="text-right">20.43%</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  alt="..."
                                  src={require("assets/img/flags/NG.png")}
                                />
                              </div>
                            </td>
                            <td>Osun, Oshogbo</td>
                            <td className="text-right">27</td>
                            <td className="text-right">10.35%</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  alt="..."
                                  src={require("assets/img/flags/NG.png")}
                                />
                              </div>
                            </td>
                            <td>Edo, Benin</td>
                            <td className="text-right">21</td>
                            <td className="text-right">7.87%</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  alt="..."
                                  src={require("assets/img/flags/NG.png")}
                                />
                              </div>
                            </td>
                            <td>Cross River, Calabar</td>
                            <td className="text-right">14</td>
                            <td className="text-right">5.94%</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  alt="..."
                                  src={require("assets/img/flags/NG.png")}
                                />
                              </div>
                            </td>
                            <td>Oyo, Ibadan</td>
                            <td className="text-right">5</td>
                            <td className="text-right">4.34%</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                    <Col className="ml-auto mr-auto" md="6">
                    <RegularMap
                      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC0VgdXVENCEYzwLNTYkMvZMj4RDVEBRK4"
                      loadingElement={<div style={{ height: `100%` }} />}
                      containerElement={<div style={{ height: `310px` }} />}
                      mapElement={<div style={{ height: `100%` }} />}
                    />
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h4">Transaction Activity</CardTitle>
                <p className="card-category">See how much you use your EmbassyCard across the calender year</p>
              </CardHeader>
              <CardBody>
                <Line
                  data={chartExample1.data}
                  options={chartExample1.options}
                />
              </CardBody>
              <CardFooter>
                <div className="legend">
                  <i className="fa fa-circle text-success" />
                  Your Usage
                </div>
                <hr />
                <div className="stats">
                  <i className="fa fa-check" />
                  Data information certified
                </div>
              </CardFooter>
            </Card>
          </Col>
            <Col md="6">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Load vs Withdrawl</CardTitle>
                  <p className="card-category">See your in's and out's per month</p>
                </CardHeader>
                <CardBody>
                  <Bar
                    data={chartExample4.data}
                    options={chartExample4.options}
                  />
                </CardBody>
                <CardFooter>
                  <div className="legend">
                    <i className="fa fa-circle text-info" />
                    Digital Cash Withdrawl <i className="fa fa-circle text-warning" />
                    Digital Cash Loaded
                  </div>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-check" />
                    Data information certified
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

export default Dashboard_Today;
