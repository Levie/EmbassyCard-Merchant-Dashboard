
/*eslint-disable*/
import React from "react";
import { Container, Row } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";

class Footer extends React.Component {
  render() {
    return (
      <footer
        className={"footer" + (this.props.default ? " footer-default" : "")}
      >
        <Container fluid={this.props.fluid ? true : false}>
          <Row>
            <nav className="footer-nav">
              <ul>
                <li>
                  <a href="https://www.embassycard.com/" target="_blank">Home Page</a>
                </li>
                <li>
                  <a href="https://www.embassycard.com/wp-content/uploads/2021/01/EmbassyCard-Terms-and-Conditions-Agreement_10-Jun-20.pdf" target="_blank">Terms and Conditions</a>
                </li>
                <li>
                  <a href="https://www.embassycard.com/wp-content/uploads/2020/06/EmbassyCard-Privacy-Policy_10-Jun-20.pdf" target="_blank">Privacy Policy</a>
                </li>
              </ul>
            </nav>
            <div className="credits ml-auto">
              <span className="copyright">
                &copy; Embassy Card {1900 + new Date().getYear()}, powered with{" "}
                <i className="fa fa-heart heart" /> by SAGE Eleven
              </span>
            </div>
          </Row>
        </Container>
      </footer>
    );
  }
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool,
};

export default Footer;
