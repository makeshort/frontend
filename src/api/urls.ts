import axios from "./core/axios";
import {CreateUrlRequestDTO, CreateUrlResponseDTO} from "./dto/urls.dto";

export const createUrl = async (values: CreateUrlRequestDTO): Promise<CreateUrlResponseDTO> => {
    return (await axios.post("/url", values)).data;
}
