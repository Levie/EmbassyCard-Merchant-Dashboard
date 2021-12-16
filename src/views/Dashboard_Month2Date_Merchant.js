import React from "react";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
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
  //Nav,
  //NavItem,
  //NavLink,
  CardText,
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
  //chartExample1,
  // chartExample2,
  // chartExample3,
   //chartExample4,
  // chartExample5,
  // chartExample6,
  // chartExample7,
  // chartExample8,
  // chartExample10,
  chartExample13,
  chartExample14,
  //chartExample11,
  //chartExample15,
  //chartExample16,
  //chartExample17,
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

class Dashboard_Month2Date_Merchant extends React.Component {
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
        <p className="card-category">Total Settlement</p>
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
          <i className="nc-icon nc-shop text-muted" />
        </div>
      </Col>
      <Col md="8" xs="7">
        <div className="numbers">
          <p className="card-category">Total Cash Back</p>
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





</Col>

<Col lg="4" md="6" sm="6">

<Card className="card-stats">
  <CardBody>
    <Row>
      <Col md="4" xs="5">
        <div className="icon-big text-center icon-warning">
          <i className="nc-icon nc-circle-10 text-muted" />
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
        Float Management.
      </div>
    </CardFooter>
  </Card>

  <Card className="card-stats">
    <CardBody>
      <Row>
        <Col md="4" xs="5">
          <div className="icon-big text-center icon-warning">
            <i className="nc-icon nc-credit-card text-muted" />
          </div>
        </Col>
        <Col md="8" xs="7">
          <div className="numbers">
            <p className="card-category">Total Card Load</p>
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
</Col>



        </Row>


<hr />



          <h5>
          Performance and Operations Insights
          </h5>
          <Row>
          <Col lg="6" sm="6">
            <Card>
              <CardHeader>
                <Row>
                  <Col sm="7">
                    <div className="numbers pull-left">Total Commission</div>
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

                <Line
                  data={chartExample13.data}
                  options={chartExample13.options}
                  height={380}
                  width={828}
                />
              </CardBody>

            </Card>
          </Col>

          <Col lg="6" sm="6">
            <Card>
              <CardHeader>
                <Row>
                  <Col sm="7">
                    <div className="numbers pull-left">Total Sales</div>
                  </Col>
                  <Col sm="5">
                    <div className="pull-right">

                      <Badge color="info" pill>
                        -15%
                      </Badge>

                    </div>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>

                <Line
                  data={chartExample14.data}
                  options={chartExample14.options}
                  height={380}
                  width={828}
                />
              </CardBody>

            </Card>
          </Col>

<Col md="6">
  <Card>
    <CardHeader>
      <CardTitle tag="h4">Float Management</CardTitle>
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
                <div className="nc-icon">

                </div>
              </td>
              <td className="text-left">My Merchant Agents</td>
              <td className="text-center">Invited By</td>
              <td className="text-right">Float Balance</td>
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
                <td>ADE4463</td>
                <td className="text-center">Greenhithe</td>
                <td className="text-right">1200₦</td>
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
                <td>JEM7428</td>
                <td className="text-center">JEM7429</td>
                <td className="text-right">597₦</td>
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
                <td>MARY1719</td>
                <td className="text-center">MARK7372</td>
                <td className="text-right">2198₦</td>
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
                <td>MARK7372</td>
                <td className="text-center">OSUN2913</td>
                <td className="text-right">238₦</td>
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
                <td>Cashier</td>
                <td className="text-center">Greenhithe</td>
                <td className="text-right">598₦</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </CardBody>
  </Card>
</Col>

<Col md="6">
  <Card>
    <CardHeader>
      <CardTitle tag="h4">Agents Load Commission</CardTitle>
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
                <div className="nc-icon">

                </div>
              </td>
              <td className="text-left">My Merchant Agents</td>
              <td className="text-center">Invited By</td>
              <td className="text-right">Loaded</td>
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
                <td>ADE4463</td>
                <td className="text-center">Greenhithe</td>
                <td className="text-right">123₦</td>
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
                <td>JEM7428</td>
                <td className="text-center">JEM7429</td>
                <td className="text-right">59₦</td>
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
                <td>MARY1719</td>
                <td className="text-center">MARK7372</td>
                <td className="text-right">298₦</td>
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
                <td>MARK7372</td>
                <td className="text-center">OSUN2913</td>
                <td className="text-right">28₦</td>
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
                <td>Cashier</td>
                <td className="text-center">Greenhithe</td>
                <td className="text-right">58₦</td>
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

export default Dashboard_Month2Date_Merchant;
