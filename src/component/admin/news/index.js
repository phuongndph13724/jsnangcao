import {
  getAll,remove
} from "../../../api/posts";
import data from "../../../data";
import NavAdmin from "../../navadmin";

const NewsList = {
  async render() {
    const {
      data
    } = await getAll();
    return /* html */ `
        <div class="min-h-full">
            ${NavAdmin.render()}
            <header class="bg-white shadow">
            <div class="grid grid-cols-2 max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="text-3xl font-bold text-gray-900">
                News
                </h1>
                <div class="ml-80">
                    <span class="sm:ml-3">
                      <a href="/admin/news/newsadd">
                        <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                              <!-- Heroicon name: solid/check -->
                              Thêm Mới
                          </button>
                        </a>  
                        
                    </span>
                </div>
            </div>
            </header>
            <main>
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div class="px-4 py-6 sm:px-0">
                <div class="flex flex-col">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                      <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                          <tr>
                          <th scope="col" class="relative px-6 py-3">Edit
                              <span class="sr-only">Edit</span>
                            </th>
                              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              STT
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Ảnh / Tên
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Desc
                            </th>
                          </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                          
                          ${data.map((post,index) => /* html */`
                          <tr>
                          <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="/admin/news/${post.id}/edit" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                              <button data-id="${post.id}" class="btn btn-remove text-red-600 hover:text-indigo-900">Delete</button>
                            </td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              ${index+1}
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              <div class="flex items-center">
                                <div class="flex-shrink-0 h-10 w-10">
                                  <img class="h-10 w-10 rounded-full" src="${post.img}" alt="">
                                </div>
                                <div class="ml-4">
                                  <div class="text-sm font-medium text-gray-900">
                                    ${post.title}
                                  </div>
                                  <div class="text-sm text-gray-500">
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              <div class="text-sm text-gray-900 py-30">
                                  <p>${post.desc}</p>
                              </div>
                            </td>
                            
                          </tr>
                          `).join("")}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
                </div>
            </div>
            </main>
        </div>
        `;
  },
  afterRender() {
    // lấy danh sách button sau khi render
    const buttons = document.querySelectorAll('.btn');
    // tạo vòng lặp cho nodelist button
    buttons.forEach(btn => {
      // lấy ID từ thuộc tính data-id của button
      const id = btn.dataset.id;
      btn.addEventListener('click', () => {
        const confirm = window.confirm("Xóa bài viết này?");
        if (confirm) {
          // gọi hàm delete trong folder API và bắn id vào hàm
          remove(id).then(() => {
            console.log('Đã xóa thành công');
          })
        }
      })
    });
  }
}
export default NewsList;