import React from "react";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
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
  //Button,
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

  //chartExample2,
  //chartExample5,
  chartExample13,

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
        <h5>
        EmbassyCard Merchant Analytics.
        </h5>

          <Row>
            <Col lg="4" md="6" sm="6">

            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-basket text-muted" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Total Value of Sales</p>
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
                  Since Membership.
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
                      <p className="card-category">Total no. of Sales</p>
                      <CardTitle tag="p">32</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="nc-icon nc-bank" />
                  Since Membership.
                </div>
              </CardFooter>
            </Card>

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
                  <i className="nc-icon nc-alert-circle-i" />
                  Last Known.
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
                    <i className="nc-icon nc-air-baloon text-muted" />
                  </div>
                </Col>
                <Col md="8" xs="7">
                  <div className="numbers">
                    <p className="card-category">Settlement</p>
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
                Excl. Service fee.
              </div>
            </CardFooter>
          </Card>


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
                      <p className="card-category">Commission</p>
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
                  Since Membership.
                </div>
              </CardFooter>
            </Card>
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
                      <p className="card-category">Agent Count</p>
                      <CardTitle tag="p">0</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="nc-icon nc-bank" />
                  Since Membership.
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
                      <i className="nc-icon nc-shop text-muted" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Agent Commission</p>
                      <CardTitle tag="p">₦ 0</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="nc-icon nc-bank" />Since Membership.
                </div>
              </CardFooter>
            </Card>

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
                        <p className="card-category">Float Balance</p>
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
                    Merchant Agent Float Management.
                  </div>
                </CardFooter>
              </Card>
            </Col>


          </Row>

          <h5>
          _______________________________________
          </h5>



          <h5>
          Merchant Performance and Operations Insights
          </h5>

          <Row>



            <Col lg="6" sm="6">
              <Card>
                <CardHeader>
                  <Row>
                    <Col sm="7">
                      <div className="numbers pull-left">Commission Earnings</div>
                    </Col>
                    <Col sm="5">
                      <div className="pull-right">

                        <Badge color="success" pill>
                          -5%
                        </Badge>
                        
                      </div>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <h6 className="big-title">
                    Sales Activity
                  </h6>
                  <Line
                    data={chartExample13.data}
                    options={chartExample13.options}
                    height={380}
                    width={828}
                  />
                </CardBody>

              </Card>
            </Col>

  <Col md="6">
    <Card>
      <CardHeader>
        <CardTitle tag="h4">Merchant Agents</CardTitle>
        <p className="card-category">

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
