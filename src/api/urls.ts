import axios from '../core/axios.ts';
import {CreateUrlRequestDTO, CreateUrlResponseDTO} from "./dto/urls.dto.ts";

export const createUrl = async (values: CreateUrlRequestDTO): Promise<CreateUrlResponseDTO> => {
    return (await axios.post("/url", values)).data;
}
