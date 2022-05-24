import axiosClient from "./axiosClient";
class ProductApi {
  getProductThumbnails = (params) => {
    const url = "/product-thumbnails";
    return axiosClient.get(url, { params });
  };
}
const productApi = new ProductApi();
export default productApi;
