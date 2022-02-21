import NavAdmin from "../../navadmin";
import {
    getAll

} from "../../../api/product";

const AdminProducts = {
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
                Product
                </h1>
                <div class="ml-80">
                    <span class="sm:ml-3">
                      <a href="/admin/products/productadd">
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
                    <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xl font-medium text-gray-500 uppercase tracking-wider">STT</th>
              <th scope="col" class="px-6 py-3 text-left text-xl font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th scope="col" class="px-6 py-3 text-left text-xl font-medium text-gray-500 uppercase tracking-wider">Image</th>
              <th scope="col" class="px-6 py-3 text-left text-xl font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th scope="col" class="px-6 py-3 text-left text-xl font-medium text-gray-500 uppercase tracking-wider">Desc</th>
              <th scope="col" class="relative px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
          ${data.map((item,index) =>/*html*/ `
            <tr>
            <td class="px-6 py-4 whitespace-nowrap">${index+1}</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">${item.title}</div>
                  
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-20 w-36">
                    <img class="h-20 w-36" src="${item.img}" alt="">
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">${item.price} $</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap"> 
                <textarea id="desc-post" name="desc-post" rows="3" class="py-2 px-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md">${item.desc}</textarea>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" class="text-indigo-600 hover:text-indigo-900"><button data-id="${item.id}" class="text-green-500 btn btn-remove">Sửa</button></a>
                <a href="#" class="text-indigo-600 hover:text-indigo-900"><button data-id="${item.id}" class="text-red-500 btn btn-remove">Xóa</button></a>
              </td>
            </tr>
            `).join('')}
          </tbody>
        </table>
                </div>
            </div>
            </main>
        </div>
        `;
    },
};
export default AdminProducts;