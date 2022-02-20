import {
    get
} from '../../api/product';
import {
    addTocart
} from '../../untils/cart';
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import Header from '../../component/header';
import Footer from '../../component/footer';

const DetailProduct = {
    async render(id) {
        const {
            data
        } = await get(id);
        return /* html */ `
        ${Header.render()}
            <div class=" z-10 inset-0 overflow-y-auto" role="dialog" aria-modal="true">
      <div class="flex min-h-screen text-center md:block md:px-2 lg:px-4" style="font-size: 0">
        <div
          class="flex text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-full">
          <div
            class="w-full relative flex items-center">
            <div class=" grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
              <div class="h-4/6 aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4
                lg:col-span-5">
                <img src="${data.img}"
                  alt="Two each of gray, white, and black shirts arranged on table." class="object-center object-cover">
              </div>
              <div class="sm:col-span-8 lg:col-span-7">
                <h2 class="text-2xl font-extrabold text-gray-900 sm:pr-12">${data.title}</h2><br>

                <section aria-labelledby="information-heading" class="mt-2">
                  <h3 id="information-heading" class="sr-only">Product information</h3>

                  <p class="text-2xl text-red-500">${data.price} $</p>


                </section>

                <section aria-labelledby="options-heading" class="mt-10">
                  <h3 id="options-heading" class="sr-only">Product options</h3>

                  <form>
                    <!-- Colors -->
                    <div>
                      <h4 class="text-sm text-gray-900 font-medium">Color</h4>

                      <fieldset class="mt-4">
                        <legend class="sr-only">Choose a color</legend>
                        <div class="flex items-center space-x-3">
                          <!--
                        Active and Checked: "ring ring-offset-1"
                        Not Active and Checked: "ring-2"
                      -->
                          <label
                            class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                            <input type="radio" name="color-choice" value="White" class="sr-only"
                              aria-labelledby="color-choice-0-label">
                            <p id="color-choice-0-label" class="sr-only">White</p>
                            <span aria-hidden="true"
                              class="h-8 w-8 bg-white border border-black border-opacity-10 rounded-full"></span>
                          </label>

                          <!--
                        Active and Checked: "ring ring-offset-1"
                        Not Active and Checked: "ring-2"
                      -->
                          <label
                            class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                            <input type="radio" name="color-choice" value="Gray" class="sr-only"
                              aria-labelledby="color-choice-1-label">
                            <p id="color-choice-1-label" class="sr-only">Gray</p>
                            <span aria-hidden="true"
                              class="h-8 w-8 bg-gray-200 border border-black border-opacity-10 rounded-full"></span>
                          </label>

                          <!--
                        Active and Checked: "ring ring-offset-1"
                        Not Active and Checked: "ring-2"
                      -->
                          <label
                            class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900">
                            <input type="radio" name="color-choice" value="Black" class="sr-only"
                              aria-labelledby="color-choice-2-label">
                            <p id="color-choice-2-label" class="sr-only">Black</p>
                            <span aria-hidden="true"
                              class="h-8 w-8 bg-gray-900 border border-black border-opacity-10 rounded-full"></span>
                          </label>
                        </div>
                      </fieldset>
                    </div>

                    <!-- Sizes -->
                    <div class="mt-10">
                      <div class="flex items-center justify-between">
                        <h4 class="text-sm text-gray-900 font-medium">Size</h4>
                        <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</a>
                      </div>

                      <fieldset class="mt-4">
                        <legend class="sr-only">Choose a size</legend>
                        <div class="grid grid-cols-4 gap-4">
                          <!-- Active: "ring-2 ring-indigo-500" -->
                          <label
                            class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                            <input type="radio" name="size-choice" value="XXS" class="sr-only"
                              aria-labelledby="size-choice-0-label">
                            <p id="size-choice-0-label">XXS</p>

                            <!--
                          Active: "border", Not Active: "border-2"
                          Checked: "border-indigo-500", Not Checked: "border-transparent"
                        -->
                            <div class="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
                          </label>

                          <!-- Active: "ring-2 ring-indigo-500" -->
                          <label
                            class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                            <input type="radio" name="size-choice" value="XS" class="sr-only"
                              aria-labelledby="size-choice-1-label">
                            <p id="size-choice-1-label">XS</p>

                            <!--
                          Active: "border", Not Active: "border-2"
                          Checked: "border-indigo-500", Not Checked: "border-transparent"
                        -->
                            <div class="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
                          </label>
                        </div>
                      </fieldset>
                      <fieldset class=" relative mt-4">
                        <h4 class="text-sm text-gray-900 font-medium">Số lượng</h4><br>
                        <input id="inputValue" type="number" class="p-1 border-black-500 border bg-gray-200"
                          aria-labelledby=" font-red-100 size-red-600-label">
                      </fieldset>
                      <fieldset class=" relative mt-4">
                        <dt>
                          <p class="ml-1 text-lg leading-6 font-medium text-gray-900">Thông tin sản phẩm</p>
                        </dt>
                        <dd class="mt-2 ml-16 text-base text-gray-500">${data.desc}
                        </dd>
                      </fieldset>
                    </div>
                    <button id="btnAddToCart" type="submit"
                      class="mt-6 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add
                      to cart</button>
                  </form>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        ${Footer.render()}
        `;
    },

    afterRender(id) {
        const btnAddToCart = document.querySelector('#btnAddToCart');
        const inputValue = document.querySelector('#inputValue');
        btnAddToCart.addEventListener('click', async () => {
            const {
                data
            } = await get(id);
            addTocart({
                ...data,
                quantity: inputValue.value ? +inputValue.value : 1
            }, () => {
                toastr.success(`Đã thêm sản phẩm +${data.title}+ vào giỏ hàng`);
            })
        })
    }
};
export default DetailProduct;