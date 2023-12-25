import axios from '../core/axios.ts';
import {LoginRequestDTO, LoginResponseDTO, RegisterRequestDTO, RegisterResponseDTO, UserDTO} from "./dto/auth.dto.ts";

export const register = async (values: RegisterRequestDTO): Promise<RegisterResponseDTO> => {
    return (await axios.post("/auth/signup", values)).data;
}

export const login = async (values: LoginRequestDTO): Promise<LoginResponseDTO> => {
    return (await axios.post("/auth/session", values)).data;
}

export const getMe = async (): Promise<UserDTO> => {
    return (await axios.get("/user/me")).data;
}