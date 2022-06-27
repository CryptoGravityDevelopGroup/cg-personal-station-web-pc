import request from "../utils/request";

export function registerUser(data) {
  console.log("registerUser", data);
  return request({
    url: "/api/user/metamask/nonce",
    method: "POST",
    data,
  });
}
