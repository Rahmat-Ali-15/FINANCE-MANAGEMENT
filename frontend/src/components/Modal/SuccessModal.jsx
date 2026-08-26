import { useSelector } from "react-redux";
import "./SuccessModal.css";
import { FaCheck } from "react-icons/fa6";

export const SuccessModal = () => {
  const { success } = useSelector((state) => state.auth);

  return (
    <>
      <section className="successModal-section">
        <div className="successModal-container">
          <div className="successModal-icon">
            <div>
              <FaCheck />
            </div>
          </div>
          <div className="success-message">
            <h3>{success.title}</h3>
            <span>{success.message}</span>
          </div>
          <p className="success-desc">{success.description}</p>
          <button className="continue-again-btn">Continue</button>
        </div>
      </section>
    </>
  );
};
