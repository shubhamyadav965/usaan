
const BASE_URL =  import.meta.env.VITE_BASE_URL;

console.log(BASE_URL)


// AUTH ENDPOINTS`
export const endpoints = {
  SENDOTP_API: BASE_URL + "/auth/sendotp",
  LOGIN_API: BASE_URL + "/auth/login",
}

// PROFILE ENDPOINTS
export const profileEndpoints = {
  GET_USER_DETAILS_API: BASE_URL + "/profile/getUserDetails",
}

