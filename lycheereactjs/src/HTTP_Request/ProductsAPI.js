import axiosClient from "./axiosClient";
class ProductApi {
  getAllProductThumbnails = (params) => {
    const url = "/product-thumbnails";
    return axiosClient.get(url, { params });
  };
  getProductThumbnailsByCategory = (params) => {
    const url = "/product-thumbnails";
    return axiosClient.get(url, { params });
  };
}
const productApi = new ProductApi();
export default productApi;