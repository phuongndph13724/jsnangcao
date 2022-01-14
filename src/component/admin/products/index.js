import NavAdmin from "../../navadmin";

const AdminProducts = {
    render() {
        return /* html */`
        <div class="min-h-full">
            ${NavAdmin.render()}
            <header class="bg-white shadow">
            <div class="grid grid-cols-2 max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="text-3xl font-bold text-gray-900">
                Product
                </h1>
                <div class="ml-80">
                    <span class="sm:ml-3">
                        <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <!-- Heroicon name: solid/check -->
                            Thêm Mới
                        </button>
                    </span>
                </div>
            </div>
            </header>
            <main>
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div class="px-4 py-6 sm:px-0">
                <div class="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
                </div>
            </div>
            </main>
        </div>
        `;
    },
};
export default AdminProducts;