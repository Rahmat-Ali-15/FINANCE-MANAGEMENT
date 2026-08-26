import "./ErrorModal.css";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { clearError } from "../../features/auth/authSlice";

export const ErrorModal = ({redirectPath}) => {
  const dispatch = useDispatch();
  const { errorMessage } = useSelector((state) => state.auth);

  const closeModal = () => {
    dispatch(clearError());
  };

  return (
    <>
      <section className="ErrorModal-section">
        <div className="ErrorModal-container">
          <div className="ErrorModal-icon">
            <div>
              <ImCross onClick={closeModal} />
            </div>
          </div>
          <div className="ErrorModal-message">
            <h3>{errorMessage.title}</h3>
            <span>{errorMessage.message}</span>
          </div>
          <div className="ErrorModal-reason">
            <span>REASON</span>
            <p>{errorMessage.reason}</p>
          </div>
          <NavLink
            to={redirectPath}
            className="try-again-btn"
            onClick={closeModal}
          >
            Try Again
          </NavLink>
        </div>
      </section>
    </>
  );
};
