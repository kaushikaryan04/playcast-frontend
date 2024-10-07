import { Typography, Space, Card } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";

const { Meta } = Card;
const { Text } = Typography;

const VideoCard = ({ title, thumbnail, uploadDate, onClick }) => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <div style={{ position: "relative" }}>
          <img
            alt={title}
            src={thumbnail}
            style={{ width: "100%", height: 135, objectFit: "cover" }}
          />
          <PlayCircleOutlined
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "48px",
              color: "white",
              opacity: 0.8,
            }}
          />
        </div>
      }
      onClick={onClick}
    >
      <Meta
        title={
          <Text strong ellipsis={{ rows: 2 }}>
            {title}
          </Text>
        }
        description={
          <Space direction="vertical" size={0}>
            <Text type="secondary" style={{ fontSize: "12px" }}>
              {new Date(uploadDate).toLocaleDateString()}
            </Text>
            <Text type="secondary" style={{ fontSize: "12px" }}>
              {new Date(uploadDate).toLocaleTimeString()}
            </Text>
          </Space>
        }
      />
    </Card>
  );
};

export default VideoCard;
