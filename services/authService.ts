import http from "../api/http";
import { getAuthHeader } from "../helpers";
import { ChangeProfileDto, LoginDto, RegisterBrandUserDto } from "../api";
import { Cookies } from "react-cookie";
export const AuthService = {
  authenticate,
  getProfile, updateProfile, login, logout, unsubscribe
};

async function login(authRequest: LoginDto) {
  return await http.post(
    process.env.NEXT_PUBLIC_API_URL + "/api/auth/login",
    authRequest
  );
}
  
function logout() {
  new Cookies().remove("token");
}

async function authenticate(token:any) {
  return await http.post(
    process.env.NEXT_PUBLIC_API_URL + "/api/Auth/Authenticate",
    {token:token}
  );
}

async function getProfile(access_token:string) {
  return await http.get(
    process.env.NEXT_PUBLIC_API_URL + "/api/auth/getProfile",
    {
      headers:getAuthHeader(access_token)
    }
  );
}
async function updateProfile(input: ChangeProfileDto, access_token:string) {
  return await http.put(
    process.env.NEXT_PUBLIC_API_URL + "/api/auth/updateProfile",
    input,
    {
      headers:getAuthHeader(access_token)
    }
  );
}
async function unsubscribe(token:any)
{
  return await http.post(
    process.env.NEXT_PUBLIC_API_URL + "/api/auth/unsubscribe",
    {token:token}
  )
}