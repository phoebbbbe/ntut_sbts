import axios from "axios";


export const GetProductsByCategory = async function(category = "all") {
  if (category === null || category === undefined) category = "all";
  const formData = new FormData();
  formData.append("request", "getproductdata");
  formData.append("category", category);
  try {
    const response = await axios.post(`/php/home.php`, formData);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const GetBooksByCategory = async function(category = "all") {
  if (category === null || category === undefined) category = "all";
  const formData = new FormData();
  formData.append("request", "getbookdata");
  formData.append("category", category);
  try {
    const response = await axios.post(`/php/home.php`, formData);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const GetProductsByName = async function(text = "", category = "all") {
  if (text === null || text === undefined) text = "";
  if (category === null || category === undefined) category = "all";
  const formData = new FormData();
  formData.append("request", "search");
  formData.append("text", text);
  formData.append("category", category);
  try {
    const response = await axios.post(`/php/login.php`, formData);
    return response;
  } catch (err) {
    console.log("error");
    console.log(err);
  }
};

export const GetProductsCategories = async function(category = "all") {
  if (category === null || category === undefined) category = "all";
  try {
    const response = await axios.get(
      `/php/home.php?request=getproductcategories`
    );
    return response.data;
  } catch (err) {
    console.log("error");
    console.log(err);
  }
};

export const GetBookISBN = async function() {
  try {
    const response = await axios.get(
      `/php/home.php?request=getbookISBN`
    );
    return response.data;
  } catch (err) {
    console.log("error");
    console.log(err);
  }
};
