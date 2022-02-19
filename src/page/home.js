import Banner from "../component/banner";
import Footer from "../component/footer";
import Header from "../component/header";
import NewsList from "../component/newList";

const HomePage = {
    async render() {
        return /* html */`
        ${Header.render()}
        <div class="banner">
             ${Banner.render()}
        </div>
        <div class="news">
             ${await NewsList.render()}
        </div>
        ${Footer.render()}
        `;
    },
};
export default HomePage;