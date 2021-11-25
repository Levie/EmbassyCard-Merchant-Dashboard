import React from "react";
// react plugin for creating vector maps
import { VectorMap as JVectorMap } from "react-jvectormap";

// reactstrap components
import { Card, CardBody, Row, Col } from "reactstrap";

var mapData = {
  BF: 760,
  DJ: 550,
  BI: 120,
  DZ: 1300,
  RW: 540,
  TG: 690,
  AO: 200,
  CF: 200,
  EH: 600,
  GW: 300,
  NG: 2920,
};

class VectorMap extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <h4 className="text-center">
                World Map <br />
                <small>
                  Looks great on any resolution.{" "}
                  <a
                    href="https://www.npmjs.com/package/react-jvectormap"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    React wrapper component
                  </a>{" "}
                  of jQuery{" "}
                  <a
                    href="http://jvectormap.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    jVector Map
                  </a>{" "}
                  pluging.
                </small>
              </h4>
              <Card className="card-plain">
                <CardBody>
                  <JVectorMap
                    map={"africa_mill"}
                    backgroundColor="transparent"
                    zoomOnScroll={false}
                    containerStyle={{
                      width: "100%",
                      height: "400px",
                    }}
                    containerClassName="map map-big"
                    regionStyle={{
                      initial: {
                        fill: "#e4e4e4",
                        "fill-opacity": 0.9,
                        stroke: "none",
                        "stroke-width": 0,
                        "stroke-opacity": 0,
                      },
                    }}
                    series={{
                      regions: [
                        {
                          values: mapData,
                          scale: ["#AAAAAA", "#444444"],
                          normalizeFunction: "polynomial",
                        },
                      ],
                    }}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default VectorMap;
