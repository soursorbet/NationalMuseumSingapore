// Add the following import
import sendRequest from "./send-request";
const BASE_URL = "/api/users";

// Refactored code below
export function signUp(userData) {
  return sendRequest(BASE_URL, "POST", userData);
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, "POST", credentials);
}

export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}

export async function updateUser(id, data) {
  try {
    console.log("Update User Data:", data);
    const user = await sendRequest(`/user`, "PATCH", data);
    return user;
  } catch (error) {
    throw new Error("Failed to update user.");
  }
}