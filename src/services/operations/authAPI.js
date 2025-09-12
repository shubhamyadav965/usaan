import { toast } from "react-hot-toast"

import { setLoading, setToken } from "../../Slices/authSlice"
import { setUserauth } from "../../Slices/authSlice"
import { apiConnector } from "../apiconnector"
import { endpoints } from '../api'

const {
  LOGIN_API,
} = endpoints


export function sendOtp(email) {
  return async (dispatch) => {
    const toastId = toast.loading("Sending OTP...");
    dispatch(setLoading(true));

    try {
      console.log(email)
      const response = await apiConnector("POST", endpoints.SENDOTP_API, {
        email,
        checkUserPresent: true,
      });

      console.log("SENDOTP API RESPONSE:", response);

      if (!response?.data?.success) {
        throw new Error(response?.data?.message || "OTP sending failed");
      }

      toast.update(toastId, {
        render: "OTP Sent Successfully",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });

      return response;
    } catch (error) {
      console.error("SENDOTP API ERROR:", error);

      toast.update(toastId, {
        render: error.message || "Could Not Send OTP",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });

      return null; // return something explicit to indicate failure
    } finally {
      dispatch(setLoading(false));
    }
  };
}



export function login(email, password, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", LOGIN_API, {
        email,
        password,
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
        : `https://api.dicebear.com/5.x/initials/svg?seed=${user.firstName}%20${user.lastName}`;

      // Save token and user to Redux store
      dispatch(setToken(token));
      dispatch(setUserauth({ ...user, image: userImage }));

      // Persist token and user in local storage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify({ ...user, image: userImage }));

      // Navigate to dashboard
      navigate("/dashboard/instructor");
    } catch (error) {
      // console.log("LOGIN API ERROR............", error);
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
    dispatch(setUserprofile(null))
    dispatch(resetCart())
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    toast.success("Logged Out")
    navigate("/")
  }
}
