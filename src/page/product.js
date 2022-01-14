import Footer from "../component/footer";
import Header from "../component/header";
import data from "../data";

const ProductPage = {
    render() {
        return /* html */`
        ${Header.render()}
        
      <h2 class="text-3xl font-bold my-4">Tin tức học tập</h2>
      <div class="grid grid-cols-3 gap-8">
          ${data.map((post) => /* html */`
          <div class="border border-gray-400">
              <div class=" py-4 px-5">
                  <a href ="/news/${post.id}">
                  <img src="${post.img}" class="mx-auto" alt=""
                      width="274px" height="150px"> </a>
                  <strong class="py-1.5"> <a href="/news/${post.id}"> ${post.title}</a> </strong>
                  <p>${post.desc}</p>
              </div>
          </div>
          `).join("")}
      </div>
      ${Footer.render()}
  `;
    },
};
export default ProductPage;