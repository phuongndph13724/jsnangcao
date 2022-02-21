import Footer from "../component/footer";
import Header from "../component/header";
import {
  reRender
} from "../untils";
import {
  decreaseQuantitys,
  increaseQuantitys,
  removeItemInCarts
} from "../untils/cart";

const CartPage = {
  render() {
    let cart = [];
    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart'));
    }
    return /*html*/ `
        ${Header.render()}
        <div class="flex flex-col">
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
    
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xl font-medium text-gray-500 uppercase tracking-wider">STT</th>
              <th scope="col" class="px-6 py-3 text-left text-xl font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th scope="col" class="px-6 py-3 text-left text-xl font-medium text-gray-500 uppercase tracking-wider">Image</th>
              <th scope="col" class="px-6 py-3 text-left text-xl font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th scope="col" class="px-6 py-3 text-left text-xl font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
              <th scope="col" class="px-6 py-3 text-left text-xl font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th scope="col" class="relative px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
          ${cart.map((item,index) =>/*html*/ `
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
                <span class="px-2 inline-flex text-xl leading-5 font-semibold rounded-full "> ${item.quantity}</span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <button data-id="${item.id}" class="text-3xl text-green-500 btn btn-increase">+</button>
             <button data-id="${item.id}" class="text-3xl text-red-500 btn btn-decrease">-</button>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" class="text-indigo-600 hover:text-indigo-900"><button data-id="${item.id}" class="btn btn-remove">Xóa</button></a>
              </td>
            </tr>
            `).join('')}
          </tbody>
        </table>
        <hr>
        <div class="ml-44 mb-6">
        <button id="" type="submit"
                      class="mt-6 w-5/6 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Thanh Toán</button>
                      </div>
      </div>
    </div>
  </div>
</div>
        ${Footer.render()}
            
        `
  },
  afterRender() {
    Header.afterRender();
    const btns = document.querySelectorAll('.btn');
    btns.forEach(button => {
      button.addEventListener('click', function () {
        const id = button.dataset.id;
        if (button.classList.contains('btn-increase')) {
          increaseQuantitys(id, () => {
            reRender(CartPage, "#app");
          });
        } else if (button.classList.contains('btn-decrease')) {
          decreaseQuantitys(id, () => {
            reRender(CartPage, "#app");
          });
        } else {
          removeItemInCarts(id, () => {
            reRender(CartPage, "#app");
          })
        }
      })
    })
  }
}
export default CartPage;