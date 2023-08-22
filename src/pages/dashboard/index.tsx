import { Col, Row, Typography } from "antd";
import Top10Users from "./top10Users";
import BirthDayTimeline from "./BirthdayTimeline";

const { Title } = Typography;

export const Dashboard: React.FC = () => {
  return (
    <>
      <Row>
        <Col span={24}><Title >Dashboard</Title></Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}><Top10Users /></Col>
        <Col span={12}><BirthDayTimeline /></Col>
      </Row>
    </>
  )
};

export default Dashboard;