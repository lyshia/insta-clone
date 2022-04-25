import useUser from '../../hooks/use-user';
import User from './user';
import Suggestions from './suggestions';
4
const Sidebar = () => {
  const {
    user: { username, fullName, userId }
  } = useUser();
  return (
    <div className="p-4">
      <User />
      <Suggestions />
    </div>
  );
};

export default Sidebar;
