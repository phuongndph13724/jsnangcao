import {
    reRender
} from "../utils";
import {
    decreaseQuantity,
    increaseQuantity,
    removeItemInCart
} from "../utils/cart";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const CartPage = {
    render() {
        let cart = [];
        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'));
        }
        return `
        <table>
            <thead>
            <tr>
                <th>Tên sản phẩm</th>
                <th>Giá sản phẩm</th>
                <th>Số lượng</th>
                <th></th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            ${cart.map(item => `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.price}</td>
                    <td><input type="number" value="${item.quantity}" /></td>
                    <td>
                        <button data-id="${item.id}" class="btn btn-increase">Tăng</button>
                        <button data-id="${item.id}" class="btn btn-decrease">Giảm</button>
                    </td>
                    <td>
                        <button data-id="${item.id}" class="btn btn-remove">Xóa</button>
                    </td>
                </tr>
            `).join("")}
            </tbody>
        </table>
        `
    },
    afterRender() {
        const btns = document.querySelectorAll('.btn');
        btns.forEach(btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click', () => {
                if (btn.classList.contains('btn-increase')) {
                    increaseQuantity(id, () => {
                        reRender(CartPage, "#app");
                        toastr.success("Tăng số lượng thành công");
                    })
                } else if (btn.classList.contains('btn-decrease')) {
                    decreaseQuantity(id, () => {
                        reRender(CartPage, "#app");
                        toastr.success("Giảm số lượng thành công");
                    })
                } else {
                    removeItemInCart(id, () => {
                        reRender(CartPage, "#app");
                        toastr.success("Xóa sản phẩm thành công");
                    })
                }
            })
        })
    }
}
export default CartPage;