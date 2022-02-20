import {
    get
} from "../api/posts";
import Footer from "../component/footer";
import Header from "../component/header";

const NewsDetailPage = {
    async render(id) {
        const {
            data
        } = await get(id);
        return /* html */ `
        ${Header.render()}
            <div class="grid grid-cols-2">
            <div>
                <img src="${data.img}"/>
            </div>
            <div class="px-3 py-3">
               <h1 class="text-4xl text-ellipsis">${data.title}</h1><br>
                <p class="px-1 italic">${data.desc}</p> 
            </div>
            </div>
        ${Footer.render()}
        `;
    },
};
export default NewsDetailPage;