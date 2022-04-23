import useUser from '../../hooks/use-user';

const Sidebar = () => {
  const x = useUser();
  console.log("x", x);
  return (
    <div className="p-4">
     <p> Yee! </p>
    </div>
  );
};

export default Sidebar;
