/*!

=========================================================
* Paper Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create datetimepicker
//import ReactDatetime from "react-datetime";
// react plugin that creates an input with badges
//import TagsInput from "react-tagsinput";
// react plugin used to create DropdownMenu for selecting items
//import Select from "react-select";
// react plugin used to create switch buttons
//import Switch from "react-bootstrap-switch";
// plugin that creates slider
//import Slider from "nouislider";

// reactstrap components
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardTitle,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   UncontrolledDropdown,
//   FormGroup,
//   Progress,
//   Row,
//   Col,
// } from "reactstrap";
//
// // core components
// import ImageUpload from "components/CustomUpload/ImageUpload.js";

class ExtendedForms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      singleSelect: null,
      multipleSelect: null,
      tagsinput: ["Amsterdam", "Washington", "Sydney", "Beijing"],
    };
  }

  render() {
    return (
      <>
        <div className="content">
        <center>
        <object data="https://www.embassycard.com/wp-content/uploads/2020/06/EmbassyCard-Terms-and-Conditions-Agreement_25-Jun-20.pdf" type="application/pdf" width="75%" height="75%">
        <p>Alternative text - include a link <a href="https://www.embassycard.com/wp-content/uploads/2020/06/EmbassyCard-Terms-and-Conditions-Agreement_25-Jun-20.pdf">to the PDF!</a></p>
        </object>
        </center>
        </div>
      </>
    );
  }
}

export default ExtendedForms;
