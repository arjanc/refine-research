import { Col, Row } from "antd";
import Top10Users from "./top10Users";
import BirthDayTimeline from "./BirthdayTimeline";

export const Dashboard: React.FC = () => {
  return (
    <>
      <Row>
        <Col span={24}><h1>Dashboard</h1></Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}><Top10Users /></Col>
        <Col span={12}><BirthDayTimeline /></Col>
      </Row>
    </>
  )
};

export default Dashboard;