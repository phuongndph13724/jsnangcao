import NavAdmin from "../../navadmin";
import {
    getAll
} from "../../../api/user";

const AdminUsersPage = {
    async render() {
        const {
            data
        } = await getAll();
        return /* html */ `
        <div class="min-h-full">
            ${NavAdmin.render()}
            <main>
                <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div class="px-4 py-6 sm:px-0">
                        <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xl font-medium text-gray-500 uppercase tracking-wider">STT
                            </th>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xl font-medium text-gray-500 uppercase tracking-wider">
                                Name</th>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xl font-medium text-gray-500 uppercase tracking-wider">
                                Email</th>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xl font-medium text-gray-500 uppercase tracking-wider">
                                Phone number</th>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xl font-medium text-gray-500 uppercase tracking-wider">
                                Address</th>
                            <th scope="col" class="relative px-6 py-3">
                            </th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            ${data.map((users,index) =>/*html*/ `
                            <tr>
                            <td class="px-6 py-4 whitespace-nowrap">${index+1}</td>

                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex items-center">
                                <div class="ml-4">
                                    <div class="text-sm font-medium text-gray-900">${users.name}</div>
                                </div>
                                </div>
                            </td>

                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex items-center">
                                <div class="flex-shrink-0 h-20 w-36">
                                    <div class="text-sm font-medium text-gray-900">${users.email}</div>
                                </div>
                                </div>
                            </td>

                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">${users.phone}</div>
                            </td>

                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">${users.country}</div>
                            </td>
                            
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">${users.address}</div>
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
    }
}
export default AdminUsersPage;