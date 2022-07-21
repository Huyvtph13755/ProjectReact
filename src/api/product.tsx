import instance from "./instance";


export const getAll = () => {
    const url = "/products"
    return instance.get(url)
}

export const createProduct = (data:any) => {
    const url = "/products"
    return instance.post(url, data)
}
export const read = (_id:string) => {
    const url = `/products/${_id}`
    return instance.get(url)
}
export const deleteProduct = (_id:string) => {
    const url = `/products/${_id}`
    return instance.delete(url)
}