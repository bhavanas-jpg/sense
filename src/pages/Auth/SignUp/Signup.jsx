import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { signUpService } from "../../../services/services";
import { toast } from "react-toastify";
import { useData } from "../../../context/DataContext";

const Signup = () => {
  const { setDisable, disable } = useData();
  const [formVal, setFormVal] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };
  const handleConfirmPasswordToggler = () => {
    setConfirmPassword(!confirmPassword);
  };

  const handlePasswordChange = (e) => {
    setPasswordMatch(e.target.value === formVal.confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setPasswordMatch(e.target.value === formVal.password);
  };

  const signUpHandler = async (e, firstName, lastName, email, password) => {
    e.preventDefault();
    setDisable(true);
    try {
      const res = await signUpService(firstName, lastName, email, password);

      if (res.status === 201) {
        toast.success("SignUp Successfully");
        localStorage.setItem("token", res.data.encodedToken);
        localStorage.setItem("isAuth", true);
        localStorage.setItem("firstName", res.data.createdUser.firstName);
        localStorage.setItem("lastName", res.data.createdUser.lastName);
        localStorage.setItem("email", res.data.createdUser.email);

        setAuth({
          token: res.data.encodedToken,
          isAuth: true,
          firstName,
          lastName,
          userEmail: email,
        });
        navigate("/");
      }
      setDisable(false);
    } catch (error) {
      toast.error("Couldn't SignUp, try again later!");
      console.error(error);
    }
  };

  return (
    <div className="container hg-100">
      <div className="signup-container">
        <form
          className="signup-form"
          onSubmit={(e) =>
            signUpHandler(
              e,
              formVal.firstName,
              formVal.lastName,
              formVal.email,
              formVal.password,
              formVal.confirmPassword
            )
          }
        >
          <h2>SIGN UP</h2>
          <div>
            <input
              type="text"
              id="first-name"
              placeholder=" First Name"
              value={formVal.firstName}
              required
              onChange={(e) =>
                setFormVal((prev) => ({ ...prev, firstName: e.target.value }))
              }
            />
          </div>
          <div>
            <input
              type="text"
              id="last-name"
              placeholder=" Last Name"
              value={formVal.lastName}
              required
              onChange={(e) =>
                setFormVal((prev) => ({ ...prev, lastName: e.target.value }))
              }
            />
          </div>
          <div>
            <input
              type="email"
              id="email-address"
              placeholder="Email  Address"
              value={formVal.email}
              required
              onChange={(e) =>
                setFormVal((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              id="pwd"
              placeholder="Password"
              required
              onChange={(e) => {
                setFormVal((prev) => ({ ...prev, password: e.target.value }));
                handlePasswordChange(e);
              }}
            />
            <span className="toggle-icon" onClick={handlePasswordToggle}>
              {showPassword ? (
                <i class="fa fa-eye"></i>
              ) : (
                <i class=" fa fa-eye-slash"></i>
              )}
            </span>
          </div>
          <div className="password-input confirm-password">
            <input
              type={confirmPassword ? "text" : "password"}
              id="confirm-pwd"
              placeholder=" Confirm Password"
              required
              onChange={(e) => {
                setFormVal((prev) => ({
                  ...prev,
                  confirmPassword: e.target.value,
                }));
                handleConfirmPasswordChange(e);
              }}
            />
            <span
              className="toggle-icon"
              onClick={handleConfirmPasswordToggler}
            >
              {confirmPassword ? (
                <i class="fa fa-eye"></i>
              ) : (
                <i class=" fa fa-eye-slash"></i>
              )}
            </span>
            {!passwordMatch && (
              <p className="password-error-msg">Passwords not matched</p>
            )}
          </div>
          <div>
            <button disabled={disable} className="signup-btn" type="submit">
              SIGN UP
            </button>
          </div>
          <div>
            <Link to="/login" className="login-link">
              Back to login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
