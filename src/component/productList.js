import {
    getAll
} from "../api/product";

const ProductList = {
    async render() {
        const {
            data
        } = await getAll();
        return /* html */ `
        <h2 class="text-3xl font-bold my-4">Danh sách sản phẩm</h2>
                <div class="bg-white">
                    <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                            <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                            ${data.map((product) => /* html */`
                            <div>
                                <a href="/products/${product.id}" class="group">
                                    <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                    <img src="${product.img}"
                                        alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                                        class = "h-[400px] object-center object-cover group-hover:opacity-75">
                                    </div>
                                    <p class="mt-1 text-lg font-medium text-gray-900">${product.title}</p>
                                    <h3 class="mt-4 text-sm text-gray-700">${product.desc}</h3><br>
                                    <p class="mt-1 text-lg font-medium text-gray-900">${product.price}$</p>
                                    </a><button id="123" type="submit"
                      class="mt-6 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add to cart</button>
                            </div>`).join("")}
                            </div>
                    </div>
                </div>
        `;
    },
};
export default ProductList;