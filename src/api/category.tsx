import instance from "./instance";


export const getAllCate = () => {
    const url = "/category"
    return instance.get(url)
}

export const createCategory = (data:any) => {
    const url = "/category"
    return instance.post(url, data)
}
export const readCate = (_id:string) => {
    const url = `/category/${_id}`
    return instance.get(url)
}
export const deleteCategory = (_id:string) => {
    const url = `/category/${_id}`
    return instance.delete(url)
}
export const updateCategory = (category: any) => {
    const url = `/category/${category._id}`;
    return instance.patch(url, category);
}