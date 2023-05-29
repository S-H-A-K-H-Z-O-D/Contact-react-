import { useEffect } from "react";
import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { v4 } from "uuid";

export const ContactForm = ({ users, setUsers }) => {
  const navigate = useNavigate();
  const location = useLocation();

  let onBack = () => {
    navigate(-1);
  };

  let elName = useRef();
  let elMail = useRef();
  let elPhone = useRef();
  let elImg = useRef();

  useEffect(() => {
    if (location.pathname === "/edit") {
      elName.current.value = location.state.fullName;
      elMail.current.value = location.state.email;
      elPhone.current.value = location.state.phone;
      elImg.current.value = location.state.img;
    } else {
      elName.current.value = location.state;
      elMail.current.value = location.state;
      elPhone.current.value = location.state;
      elImg.current.value = location.state;
    }
  }, [location]);

  let onAdd = (evt) => {
    evt.preventDefault();

    if (location.pathname === "/add") {
      let newContact = {
        id: v4(),
        fullName: elName.current.value,
        email: elMail.current.value,
        phone: elPhone.current.value,
        img: elImg.current.value,
      };
      setUsers((prev) => {
        if (users) {
          localStorage.setItem("users", JSON.stringify([...prev, newContact]));
          return [...prev, newContact];
        } else {
          localStorage.setItem("users", JSON.stringify([newContact]));
          return [newContact];
        }
      });
      navigate(`/contact/${newContact.id}`);
    } else {
      users.map((user) => {
        if (user.id === location.state.id) {
          user.fullName = elName.current.value;
          navigate(`/contact/${user.id}`);
        }
        localStorage.setItem("users", JSON.stringify(users));
        setUsers(JSON.parse(localStorage.getItem("users")));
      });
    }
  };

  return (
    <>
      <div className="d-flex align-items-center mb-4">
        <button onClick={onBack} className="btn btn-outline-primary me-4">
          Back
        </button>
        <h1>{location.pathname === "/add" ? "New Contact" : "Edit Contact"}</h1>
      </div>
      <form onSubmit={onAdd}>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">
            Full name
          </label>
          <input
            ref={elName}
            type="text"
            className="form-control"
            id="fullName"
            required
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Email" className="form-label">
            Email address
          </label>
          <input
            ref={elMail}
            type="email"
            className="form-control"
            required
            id="Email"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            ref={elPhone}
            type="text"
            className="form-control"
            required
            id="phone"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ImgUrl" className="form-label">
            Img url
          </label>
          <input
            ref={elImg}
            type="url"
            className="form-control"
            required
            id="ImgUrl"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {location.pathname === "/add" ? "Add" : "Edit"}
        </button>
      </form>
    </>
  );
};
