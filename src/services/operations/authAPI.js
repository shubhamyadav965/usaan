import { toast } from "react-hot-toast"

import { setLoading, setToken } from "../../Slices/authSlice"
import { setUserauth } from "../../Slices/authSlice"
import { apiConnector } from "../apiconnector"
import { endpoints } from '../api'




export function sendOtp(email,setStep) {
  return async (dispatch) => {
    const toastId = toast.loading("Sending OTP...");
    dispatch(setLoading(true));

    try {
      // console.log("wewe",email)
      const response = await apiConnector("POST", endpoints.SENDOTP_API, {
        email
      });

      // console.log("SENDOTP API RESPONSE:", response);

      if (!response?.data?.success) {
        throw new Error(response?.data?.message || "OTP sending failed");
      }

      toast.success("OTP Sent Successfully");
      if(setStep) setStep((prev) => prev + 1);
      return response ;  
    } catch (error) {
      console.error("SENDOTP API ERROR:", error);

      toast.success("OTP Sent Successfully");

      return null; // return something explicit to indicate failure
    } finally {
      toast.dismiss(toastId);
      dispatch(setLoading(false));
    }
  };
}



export function login(email, id, navigate, role) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", endpoints.LOGIN_API, {
        email,
        id,
        role
      });

      // console.log("LOGIN API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("Login Successful");

      // Extract token and user data
      const token = response.data.token;
      const user = response.data.user;

      // Set user image if not provided
      const userImage = user?.image
        ? user.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${user.email}`;

      // Save token and user to Redux store
      dispatch(setToken(token));
      dispatch(setUserauth({ ...user, image: userImage }));

      // Persist token and user in local storage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify({ ...user, image: userImage }));

      // Navigate based on account type
      switch(user.accountType) {
        case "doctor":
          navigate("/dashboard/doctor");
          break;
        case "health-officer":
          navigate("/dashboard/health-officer");
          break;
        default:
          navigate("/role-selection");
          break;
      }
    } catch (error) {
      console.log("LOGIN API ERROR............", error);
      toast.error(error.response?.data?.message || "Login Failed");
    } finally {
      dispatch(setLoading(false));
      toast.dismiss(toastId);
    }
  };
}



export function logout(navigate) {
  
  return (dispatch) => {
    dispatch(setToken(null))
    dispatch(setUserauth(null))
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    toast.success("Logged Out")
    navigate("/")
  }
}
