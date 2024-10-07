import { Layout, Row, Col } from "antd";
import Navbar from "../components/Navbar";
import VideoCard from "../components/VideoCard";
const { Content } = Layout;

const Home = () => {
  const handeClick = () => {
    console.log("clicked");
  };
  const videos = [
    {
      title: "video-title",
      thumbnail:
        "https://res.cloudinary.com/dmrdw1jr7/video/upload/v1727783013/ujyuot2mfytmlosahfy0.jpg",
      uploadDate: "2024-10-01 10:41:12",
    },
    {
      title: "video-title",
      thumbnail:
        "https://res.cloudinary.com/dmrdw1jr7/video/upload/v1727783013/ujyuot2mfytmlosahfy0.jpg",
      uploadDate: "2024-10-01 10:41:12",
    },
    {
      title: "video-title",
      thumbnail:
        "https://res.cloudinary.com/dmrdw1jr7/video/upload/v1727783013/ujyuot2mfytmlosahfy0.jpg",
      uploadDate: "2024-10-01 10:41:12",
    },
    {
      title: "video-title",
      thumbnail:
        "https://res.cloudinary.com/dmrdw1jr7/video/upload/v1727783013/ujyuot2mfytmlosahfy0.jpg",
      uploadDate: "2024-10-01 10:41:12",
    },
    {
      title: "video-title",
      thumbnail:
        "https://res.cloudinary.com/dmrdw1jr7/video/upload/v1727783013/ujyuot2mfytmlosahfy0.jpg",
      uploadDate: "2024-10-01 10:41:12",
    },
    {
      title: "video-title",
      thumbnail:
        "https://res.cloudinary.com/dmrdw1jr7/video/upload/v1727783013/ujyuot2mfytmlosahfy0.jpg",
      uploadDate: "2024-10-01 10:41:12",
    },
    {
      title: "video-title",
      thumbnail:
        "https://res.cloudinary.com/dmrdw1jr7/video/upload/v1727783013/ujyuot2mfytmlosahfy0.jpg",
      uploadDate: "2024-10-01 10:41:12",
    },
  ];
  return (
    <Layout className="layout">
      <Navbar />
      <Content className="content">
        <Row gutter={[16, 16]} className="video-row">
          {videos.map((video) => (
            <Col xs={24} sm={12} md={8} lg={6} xl={4} key={video.id}>
              <VideoCard
                title={video.title}
                thumbnail={video.thumbnail}
                uploadDate={video.uploadDate}
                onClick={() => handeClick(video.id)}
              />
            </Col>
          ))}
        </Row>
      </Content>
    </Layout>
  );
};
export default Home;
