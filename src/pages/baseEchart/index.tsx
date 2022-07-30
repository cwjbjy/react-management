import { useContext } from 'react';
import { Row, Col, Card } from 'antd';
import Bar from '../../components/baseEcharts/bar';
import Pie from '../../components/baseEcharts/pie';
import Scatter from '../../components/baseEcharts/scatter';
import Scale from '../../components/baseEcharts/scale';
import Line from '../../components/baseEcharts/line';
import Cylinder from '../../components/baseEcharts/cylinder';
import ThemeContext from '../../layout/themeContext';
import './index.scss';

const Chart = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section>
      <Row className="chart">
        <Col span={12} className="echarts-box">
          <Card hoverable>
            <Bar theme={theme} />
          </Card>
        </Col>
        <Col span={12} className="echarts-box">
          <Card hoverable>
            <Pie theme={theme} />
          </Card>
        </Col>
      </Row>
      <Row className="chart">
        <Col span={12} className="echarts-box">
          <Card hoverable>
            <Scatter theme={theme} />
          </Card>
        </Col>
        <Col span={12} className="echarts-box">
          <Card hoverable>
            <Scale theme={theme} />
          </Card>
        </Col>
      </Row>
      <Row className="chart">
        <Col span={12} className="echarts-box">
          <Card hoverable>
            <Line theme={theme} />
          </Card>
        </Col>
        <Col span={12} className="echarts-box">
          <Card hoverable>
            <Cylinder theme={theme} />
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default Chart;
