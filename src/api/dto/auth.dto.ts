export interface UserDTO {
    id: string,
    email: string,
    username: string,
}

export interface RegisterResponseDTO {
    id: string,
    email: string,
    username: string,
}

export interface RegisterRequestDTO {
    email: string,
    password: string,
    username: string,
}

export interface LoginRequestDTO {
    email: string,
    password: string,
}

export interface LoginResponseDTO {
    access_token: string,
    refresh_token: string,
}