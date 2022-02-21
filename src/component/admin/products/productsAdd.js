import NavAdmin from "../../navadmin";
import {
  add
} from "../../../api/product";
import axios from "axios";
import $ from "jquery";
import validate from "jquery-validation";
import {
  rule
} from "postcss";


const ProductsAdd = {
  render() {
    return /* html */ `
         ${NavAdmin.render()}
         <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="text-3xl font-bold text-gray-900">
                Thêm Mới Sản Phẩm
                </h1>
            </div>
            </header>
            <main>
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div class="px-4 py-6 sm:px-0">
                <div class="md:grid md:grid-cols-3 md:gap-6">
                <div class="mt-5 md:mt-0 md:col-span-3 ">
                  <form id="form-add-products" action="#" method="POST">
                    <div class="shadow sm:rounded-md sm:overflow-hidden">
                      <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                        <div class="grid grid-cols-3 gap-6">
                          <div class="col-span-3 sm:col-span-2">
                            <label for="title-post" class="block text-sm font-medium text-gray-700">
                              Title
                            </label>
                            <div class="mt-1 flex rounded-md shadow-sm">
                              <input type="text" name="title-products" id="title-products" class="py-2 px-2 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Title">
                            </div>
                          </div>
                        </div>
                        <div class="grid grid-cols-3 gap-6">
                          <div class="col-span-3 sm:col-span-2">
                            <label for="title-products" class="block text-sm font-medium text-gray-700">
                              Price
                            </label>
                            <div class="mt-1 flex rounded-md shadow-sm">
                              <input type="text" name="price-products" id="price-products" class="py-2 px-2 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Price">
                            </div>
                          </div>
                        </div>
                        <div>
                          <label for="desc-products" class="block text-sm font-medium text-gray-700">
                            Desc
                          </label>
                          <div class="mt-1">
                            <textarea id="desc-products" name="desc-products" rows="3" class="py-2 px-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-5/6 sm:text-sm border border-gray-300 rounded-md" placeholder="Desc"></textarea>
                          </div>
                        </div>
            
                        <div>
                          <div>
                            <label for="img-products" class="block text-sm font-medium text-gray-700">
                            Ảnh
                          </label>
                          <input name="img-products" type="file" id="img-products">
                          </div>
                        </div>
                      </div>
                      <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          Tạo mới
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
                </div>
            </div>
            </main>
        </div>
        <div>
        `;
  },
  afterRender() {
    const formAddProducts = $('#form-add-products');
    const imgProducts = document.querySelector("#img-products");

    const CLOUDINARY_PRESET = "cloud1";
    const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/dqhtmst8q/image/upload";


    formAddProducts.validate({
      rules: {
        "title-products": {
          required: true,
          minlength: 5
        },
        "price-products": {
          required: true,
          minlength: 1,
          number: true,
        }
      },
      messages: {
        "title-products": {
          required: " ---  Vui lòng điền thông tin!",
          minlength: "Ít nhất phải trên 5 ký tự"
        },
        "price-products": {
          required: " ---  Vui lòng điền thông tin!",
          minlength: "Ít nhất phải trên 2 ký tự"
        }
      },
      submitHandler: () => {
        async function handleAddPost() {
          const file = imgProducts.files[0];

          const formData = new FormData();

          formData.append("file", file);
          formData.append("upload_preset", CLOUDINARY_PRESET);

          // call api cloudinary
          const {
            data
          } = await axios.post(CLOUDINARY_API_URL, formData, {
            headers: {
              "Content-Type": "application/form-data"
            }
          })
          // call api thêm bài viết
          add({
            title: document.querySelector("#title-products").value,
            price: document.querySelector("#price-products").value,
            img: data.url,
            desc: document.querySelector("#desc-products").value,
          })
          document.location.href = "/admin/products";
        }
        handleAddPost();
      }
    })
  }
};
export default ProductsAdd;