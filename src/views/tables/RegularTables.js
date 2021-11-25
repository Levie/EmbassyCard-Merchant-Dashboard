
import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

class RegularTables extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Your Recent Wallet Usage</CardTitle>
                  <p className="card-category">
                    In this Month:
                  </p>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Country, City</th>
                        <th>Status</th>
                        <th className="text-right text-primary">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Calabar Kitchen</td>
                        <td>10/5/2019</td>
                        <td>Nigeria, Ikeja</td>
                        <td><i className="nc-icon nc-check-2 text-success" /></td>
                        <td className="text-right text-danger">- ₦ 3,673</td>
                      </tr>
                      <tr>
                        <td>Tolu Shoe</td>
                        <td>10/5/2019</td>
                        <td>Nigeria, Ikeja</td>
                        <td><i className="nc-icon nc-check-2 text-success" /></td>
                        <td className="text-right text-danger">- ₦ 2,378</td>
                      </tr>
                      <tr>
                        <td>Huawei Phones</td>
                        <td>10/5/2019</td>
                        <td>Nigeria, Ikeja</td>
                        <td><i className="nc-icon nc-check-2 text-success" /></td>
                        <td className="text-right text-danger">- ₦ 46,500</td>
                      </tr>
                      <tr>
                        <td>Ipodo Market</td>
                        <td>10/5/2019</td>
                        <td>Nigeria, Ikeja</td>
                        <td className="text-warning">. . .</td>
                        <td className="text-right text-danger">- ₦ 3,873</td>
                      </tr>
                      <tr>
                        <td>+234 1 xxx xxxx</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td className="text-right text-success">+ ₦ 163, 542</td>
                      </tr>
                      <tr>
                        <td>Ikeja Post Office (NIPOST)</td>
                        <td>10/5/2019</td>
                        <td>Nigeria, Ikeja</td>
                        <td><i className="nc-icon nc-check-2 text-success" /></td>
                        <td className="text-right text-danger">- ₦ 861</td>
                      </tr>
                      <tr>
                        <td>Ikeja Central</td>
                        <td>10/5/2019</td>
                        <td>Nigeria, Ikeja</td>
                        <td><i className="nc-icon nc-check-2 text-success" /></td>
                        <td className="text-right text-danger">- ₦ 9,861</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            
          </Row>
        </div>
      </>
    );
  }
}

export default RegularTables;
