import NotificationBox from "../components/ui/NotificationBox";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to GreenThumb 🌿</h1>
      <NotificationBox />
      <NotificationBox plantId={1} />
    </div>
  );
};

export default HomePage;
