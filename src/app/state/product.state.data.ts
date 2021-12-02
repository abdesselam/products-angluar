import { ProductActionType, ProductStateEnum } from "./product.state.enum";

export interface ProductStateDate<T> {
    dataState?: ProductStateEnum,
    data?: T,
    errorMessage?: string
}
export interface ActionEvent{
    type: ProductActionType,
    payload?: any
}