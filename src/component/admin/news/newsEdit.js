import axios from "axios";
import NavAdmin from "../../navadmin";
import {
  get,
  update
} from "../../../api/posts";

const NewsEditPage = {
  async render(id) {
    const {
      data
    } = await get(id);
    console.log(data);
    return /* html */ `
        <div class="min-h-full">
            ${NavAdmin.render()}
            <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="text-3xl font-bold text-gray-900">
                Edit ${data.title}
                </h1>
            </div>
            </header>
            <main>
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div class="px-4 py-6 sm:px-0">
                <div class="md:grid md:grid-cols-3 md:gap-6">
                <div class="mt-5 md:mt-0 md:col-span-3 ">
                  <form id="form-edit-post" action="#" method="POST">
                    <div class="shadow sm:rounded-md sm:overflow-hidden">
                      <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                        <div class="grid grid-cols-3 gap-6">
                          <div class="col-span-3 sm:col-span-2">
                            <label for="title-post" class="block text-sm font-medium text-gray-700">
                              Title
                            </label>
                            <div class="mt-1 flex rounded-md shadow-sm">
                              <input type="text" name="title-post" id="title-post" class="py-2 px-2 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="${data.title}">
                            </div>
                          </div>
                        </div>
            
                        <div>
                          <label for="desc-post" class="block text-sm font-medium text-gray-700">
                            Desc
                          </label>
                          <div class="mt-1">
                            <textarea id="desc-post" name="desc-post" rows="3" class="py-2 px-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="${data.desc}"></textarea>
                          </div>
                        </div>
            
                        <div>
                          <div>
                            <label for="img-post" class="block text-sm font-medium text-gray-700">
                            Ảnh
                          </label>
                          <img src="${data.img}" alt="" id="imgPreview">
                          <input type="file" id="img-post">
                          </div>
                        </div>
                      </div>
                      <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          Lưu
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

    const formEdit = document.querySelector("#form-edit-post");
    const imgPost = document.querySelector("#img-post");
    const imgPreview = document.querySelector('#imgPreview');

    let imgLink = "";

    const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/dqhtmst8q/image/upload";
    const CLOUDINARY_PRESET = "cloud1"



    imgPost.addEventListener('change', function (e) {
      imgPreview.src = URL.createObjectURL(e.target.files[0]);
    });

    formEdit.addEventListener("submit", async function (e) {
      e.preventDefault();
      const file = imgPost.files[0];
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", CLOUDINARY_PRESET);

        const {
          data
        } = await axios.post(CLOUDINARY_API_URL, formData, {
          headers: {
            "Content-Type": "application/form-data"
          }
        })
        imgLink = data.url
      }


      // call api thêm bài viết
      update({
        id: id,
        title: document.querySelector("#title-post").value,
        img: imgLink ? imgLink : imgPreview.src,
        desc: document.querySelector("#desc-post").value,
      });
      document.location.href = "/admin/news";
    });
  },
};

export default NewsEditPage;