import data from "../../data";

const NewsList = {
    render() {
        return /* html */ `
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
                Tên
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Desc
              </th>
              
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            
            ${data.map((prdlist) => /* html */`
            <tr>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="/admin/news/${prdlist.id}/edit" class="text-indigo-600 hover:text-indigo-900">Edit</a>
              </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${prdlist.id}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full" src="${prdlist.img}" alt="">
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">
                      ${prdlist.title}
                    </div>
                    <div class="text-sm text-gray-500">
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900 py-30">
                    <p>${prdlist.desc}</p>
                </div>
              </td>
              
            </tr>
            `).join("")}
            
            

            <!-- More people... -->
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
        `;
    },
};
export default NewsList;