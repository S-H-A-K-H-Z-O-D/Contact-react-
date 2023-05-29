import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

export const Contact = ({ users, setUsers }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const foundUser = users?.find((user) => user.id === id);

  if (!foundUser) {
    return "No contacts";
  }

  let onEdit = () => {
    console.log(location);
    navigate("/edit", {
      state: foundUser,
    });
  };

  let onDelete = () => {
    let unDeletedUsers = [];
    let elConfirm = confirm("Do you want to delete this user?");

    if (elConfirm) {
      users.forEach((element) => {
        if (element.id !== foundUser.id) {
          unDeletedUsers.push(element);
        }
      });
      localStorage.setItem("users", JSON.stringify(unDeletedUsers));
      navigate(-1);
      setUsers(unDeletedUsers);
    }
  };

  return (
    <div className="d-flex">
      <div>
        <img
          src={foundUser.img}
          className="rounded"
          width={250}
          height={250}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="m-4">
        <h1>{foundUser.fullName}</h1>
        <h2>Email: {foundUser.email}</h2>
        <p>Tel: {foundUser.phone}</p>
        <div className="pt-3">
          <button onClick={onEdit} className="btn btn-primary">
            Edit
          </button>
          <button onClick={onDelete} className="btn btn-danger ms-2">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
