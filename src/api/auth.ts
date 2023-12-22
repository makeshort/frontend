import axios from '../core/axios.ts';
import {LoginRequestDTO, LoginResponseDTO, RegisterRequestDTO, RegisterResponseDTO} from "./dto/auth.dto.ts";

export const register = async (values: RegisterRequestDTO): Promise<RegisterResponseDTO> => {
    return (await axios.post("/auth/signup", values)).data;
}

export const login = async (values: LoginRequestDTO): Promise<LoginResponseDTO> => {
    return (await axios.post("/auth/session", values)).data;
}