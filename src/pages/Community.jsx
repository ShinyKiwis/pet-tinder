import { Header } from "../components";
import "../styles/Community.css";

const CommunityActivity = () => {
  return <div className="community_activity">Currently empty!</div>;
};

const Community = () => {
  return (
    <main>
      <Header renderAvatar={true} />
      <h3>Community Activities</h3>
      <div className="activities_container">
        <CommunityActivity />
      </div>
    </main>
  );
};

export default Community;
