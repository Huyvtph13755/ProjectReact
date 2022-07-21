import instance from "./instance";


export const getAllCate = () => {
    const url = "/category"
    return instance.get(url)
}

export const createProduct = (data:any) => {
    const url = "/category"
    return instance.post(url, data)
}