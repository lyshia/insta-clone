import useUser from '../../hooks/use-user';
import User from './user';
import Suggestions from './suggestions';

const Sidebar = () => {
  // const {
  //   user: { fullName, username, userId }
  // } = useUser();

  const x = useUser();
  console.log("x", x)
  // console.log("user sidebar", username);
  return (
    <div className="p-4">
      {/* <User username={username} fullName={fullName} />
      <Suggestions userId={userId} /> */}
    </div>
  );
};

export default Sidebar;
