import {
    get
} from '../../api/product';
// import {
//     addToCart
// } from '../../utils/cart';
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const ProductDetailPage = {
   async render(id) {
           const {
               data: product
           } = await get(id);
           console.log(data.id)
        return /* html */ `
        ${Header.render()}
            <div class="grid grid-cols-2">
            <div>
                < img src = "${product.img}" / >
            </div>
            <div class="px-3 py-3">
               <h1 class="text-4xl text-ellipsis">${product.title}</h1><br>
                <p class="px-1 italic">${product.desc}</p> 
            </div>
            </div>
        ${Footer.render()}
        `;
    },
};
export default ProductDetailPage;