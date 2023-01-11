import { Avatar, Header, SearchBar } from "../components";
import "../styles/Community.css";

const CommunityActivity = () => {
  return (
    <div className="community_activity">
      <Avatar size="small" />
      <span>
        <strong>adopted</strong> his friend
      </span>
      <Avatar size="small" />
    </div>
  );
};

const Community = () => {
  return (
    <main>
      <Header renderAvatar={true} />
      <SearchBar />
      <h3>Community Activities</h3>
      <div className="activities_container">
        <CommunityActivity />
        <CommunityActivity />
        <CommunityActivity />
        <CommunityActivity />
        <CommunityActivity />
      </div>
    </main>
  );
};

export default Community;
