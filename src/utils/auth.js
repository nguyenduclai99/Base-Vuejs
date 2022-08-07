export function setAccessToken(token) {
    localStorage.setItem("ACCESS_TOKEN", token);
}

export function getAccessToken() {
    return localStorage.getItem("ACCESS_TOKEN") || "";
}

export function resetAccessToken() {
    return localStorage.removeItem("ACCESS_TOKEN");
}

export function setUserInfoToLocalStorage(payload) {
    localStorage.setItem("USER_EMAIL", payload.email ? payload.email : "")
    localStorage.setItem("USER_PHONENUMBER", payload.phoneNumber ? payload.phoneNumber : "")
    localStorage.setItem("USER_NAME", payload.name ? payload.name : "")
    localStorage.setItem("USER_ADDRESS", payload.address ? payload.address : "")
    localStorage.setItem("USER_ID", payload.id ? payload.id : "")
}