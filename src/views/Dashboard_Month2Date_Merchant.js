import React from "react";
// react plugin used to create charts
import { Line, Bar, Pie } from "react-chartjs-2";
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
        EmbassyCard Merchant Status & Business Features
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
                        <i className="nc-icon text-warning" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Total Transaction Value</p>
                        <CardTitle tag="p">₦ 0</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">

                    Sales Value from EmbassyCard
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
                        <i className="nc-icon text-success" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Cash Out</p>
                        <CardTitle tag="p">₦ 0</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    Cash Paid Out
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
                        <i className="nc-icon text-danger" />
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
                    Sales Activities
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
                        <i className="nc-icon text-info" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Request 2 Pay </p>
                        <CardTitle tag="p">₦ 0</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    Pending / Outstanding
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon text-warning" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Redeem Balance</p>
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
                    A/C ending: xxXXXX
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
                        <i className="nc-icon text-success" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Load Money</p>
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
                    Cash Paid Out
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
                        <i className="nc-icon text-danger" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Settlement Record</p>
                        <CardTitle tag="p">₦ 0</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="nc-icon nc-user-run" />
                    A/C ending: xxXXXX
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
                        <i className="nc-icon text-info" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Settlement 2 Date </p>
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
                    A/C ending: xxXXXX
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>

          <h5>
          Merchant Performance and Operations Insights
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
                  <CardTitle tag="h4">Map of Sales</CardTitle>
                  <p className="card-category">
                    Where Transactions have taken place.
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
              <Pie
                data={chartExample11.data}
                options={chartExample11.options}
                width={356}
                height={200}
              />
              </CardBody>
              <CardFooter>
                <div className="legend">
                  <i className="fa fa-circle text-info" />
                  Load Money
                </div>
                <div className="legend">
                  <i className="fa fa-circle text-warning" />
                  Cash Out
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
