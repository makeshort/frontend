export interface CreateUrlRequestDTO {
    url: string,
    alias: string | null,
}

export interface CreateUrlResponseDTO {
    id: string,
    url: string,
    alias: string,
}