import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  //Label,
  //FormGroup,
  Form,
  //Input,
  Container,
  Col,
  Row,
} from "reactstrap";

class Login extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("login-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("login-page");
  }
  render() {
    return (
      <div className="login-page">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="5" md="7">
              <Form action="" className="form" method="">
                <Card className="card-login">
                  <CardHeader>
                    <CardHeader>
                    <center>
                    <img
                      alt="..."
                      className="border-gray mb-4"
                      src={require("assets/img/embassy-logo-3.png")}

                    />
                    </center>
                      <h3 className="header text-center mb-1">Select Dashboard Mode:</h3>
                    </CardHeader>
                  </CardHeader>
                  <CardBody>
                  <Button
                    block
                    className="btn-square mb-3"
                    color= ""
                    size="lg"
                    href="/dashboard/merchant/overview_merchant"
                    onClick={(e) => this.handleClick()}
                  >
                    Merchant Mode
                  </Button>
                  <Button
                    block
                    className="btn-square mb-1"
                    color="info"
                    size="lg"
                    href="/dashboard/customer/overview_customer"
                    onClick={(e) => this.handleClick()}
                  >
                    Customer Mode
                  </Button>


                    <br />
                    <center>

                    </center>
                  </CardBody>
                </Card>
              </Form>
            </Col>
          </Row>
        </Container>
        <div
          className="full-page-background"
          style={{
            backgroundImage: `url(${require("assets/img/bg/Dashboard_Back2.jpg")})`,
          }}
        />
      </div>
    );
  }
}

export default Login;
