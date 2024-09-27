import usePermissions from "../../hooks/UsePermissions";

const AdminDashboard: React.FC = () => {
  const userId = "";
  const { hasPermission, loading } = usePermissions(userId, "action");

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      {hasPermission ? (
        <p>You have permission to perform this action!</p>
      ) : (
        <p>You do not have permission.</p>
      )}
    </div>
  );
};

export default AdminDashboard;
