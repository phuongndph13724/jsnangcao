import Banner from "../component/banner";
import Footer from "../component/footer";
import Header from "../component/header";
import NewsList from "../component/newList";
import ProductList from "../component/productList";
import ProductPage from "./products";

const HomePage = {
    async render() {
        return /* html */ `
        <div id="header">
        </div>
        ${Header.render()}
        <div class="banner">
             ${Banner.render()}
        </div>
        <div class="news">
             ${await NewsList.render()}
        </div>
        <div class="pruduct">
             ${await ProductList.render()}
        </div>
        ${Footer.render()}
        `;
    },
    afterRender() {
        Header.afterRender();
    }
};
export default HomePage;