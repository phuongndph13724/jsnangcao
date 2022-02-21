import Banner from "../component/banner";
import Footer from "../component/footer";
import Header from "../component/header";
import NewsList from "../component/newList";
import ProductList from "../component/productList";

const HomePage = {
    async render() {
        return /* html */ `
        <div id="header">
            ${Header.render()}
        </div><br>
        <br>
        <div class="news">
             ${await NewsList.render()}
        </div><br>
        <div class="pruduct">
             ${await ProductList.render()}
        </div>
        ${Footer.render()}
        `;
    },
    afterRender() {
        Header.afterRender();
        Banner.afterRender();
    }
};
export default HomePage;