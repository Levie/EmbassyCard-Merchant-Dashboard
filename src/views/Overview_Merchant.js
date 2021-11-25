import React from "react";
// react plugin used to create charts
import { Line, Doughnut } from "react-chartjs-2";
// react plugin for creating vector maps
//import { VectorMap } from "react-jvectormap";

import {
  //withScriptjs,
  //withGoogleMap,
//  GoogleMap,
  //Marker,
} from "react-google-maps";

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
  Table,
  Row,
  Col,
  //UncontrolledTooltip,
} from "reactstrap";

import {

  chartExample2,
  chartExample5,

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



class Overview_Merchant extends React.Component {
  render() {
    return (
      <>

        <div className="content">
        <h2>
        Welcome to your Dashboard: Merchant Mode Overview
        </h2>
        <h5>
        EmbassyCard Merchant Status & Business Features
        </h5>



          <Row>
            <Col lg="4" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-money-coins text-muted" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Current Transaction Value</p>
                        <CardTitle tag="p">₦ 350,000</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="nc-icon nc-alert-circle-i" />
                    Maxmimum stored is ₦<b> 500,000.</b>
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
                            className=""
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
                      <i className="nc-icon nc-diamond text-muted" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Total Cash Commission Value</p>
                      <CardTitle tag="p">₦ 143,345</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="nc-icon nc-bank" />
                  Since creation of Merchant Account.
                </div>
              </CardFooter>
            </Card>
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-shop text-muted" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Weekly Profit Growth Value</p>
                        <CardTitle tag="p">₦ 35,756</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="nc-icon" />Based on weekly expenditure and earnings.
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
                        <i className="nc-icon nc-simple-add text-muted" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Overall Sales Performance</p>
                        <CardTitle tag="p">Good</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="nc-icon " />
                    Since creation of Merchant Account.
                  </div>
                </CardFooter>
              </Card>
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-cart-simple text-muted" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Total no. of Sales Transactions</p>
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

            <Col lg="4" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-sun-fog-29 text-muted" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Total Merchant Earnings Value</p>
                        <CardTitle tag="p">₦ 13,400</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="nc-icon nc-bank" />
                    Since creation of Merchant Account.
                  </div>
                </CardFooter>
              </Card>
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-air-baloon text-muted" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Total Value of Cash Settled </p>
                        <CardTitle tag="p">₦ 163.5k</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="nc-icon " />
                    Excl. VAT fees
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>

          <h5>
          Merchant Performance and Operations Insights
          </h5>

          <Row>
            <Col md="4">
              <Card>
                <CardHeader>
                <Row>
                  <Col sm="7">
                    <div className="numbers pull-left">Customer Traffic-to-Sales</div>
                  </Col>
                  <Col sm="5">
                    <div className="pull-right">
                      <Badge color="danger" pill>
                        +6%
                      </Badge>
                    </div>
                  </Col>
                </Row>



                </CardHeader>
                <CardBody>
                  <Doughnut
                    data={chartExample5.data}
                    options={chartExample5.options}
                    className="ct-chart ct-perfect-fourth"
                    height={150}
                    width={318}
                  />
                </CardBody>
                <CardFooter>
                  <div className="legend">
                    <i className="fa fa-circle text-danger" />
                    Percentage of EmbassyCard customer merchant visits leading to a sale
                  </div>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-calendar" />
                    No. of EmbassyCard customers buying at Merchant
                  </div>
                </CardFooter>
              </Card>
            </Col>

            <Col lg="4" sm="6">
              <Card>
                <CardHeader>
                  <Row>
                    <Col sm="7">
                      <div className="numbers pull-left">Today's Sales Activity</div>
                    </Col>
                    <Col sm="5">
                      <div className="pull-right">
                        <Badge color="danger" pill>
                          +14%
                        </Badge>
                      </div>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <h6 className="big-title">
                    Total Earnings in the last 24 hours
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

  <Col md="4">
    <Card>
      <CardHeader>
        <CardTitle tag="h4">Merchant Sales Regions</CardTitle>
        <p className="card-category">
          Locations Spent
        </p>
      </CardHeader>
      <CardBody>
        <Row>
          <Col md="12">
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
        </Row>
      </CardBody>
    </Card>
  </Col>
</Row>


        </div>
      </>
    );
  }
}

export default Overview_Merchant;
