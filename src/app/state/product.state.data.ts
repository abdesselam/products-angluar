import { ProductStateEnum } from "./product.state.enum";

export interface ProductStateDate<T> {
    dataState?: ProductStateEnum,
    data?: T,
    errorMessage?: string
}
