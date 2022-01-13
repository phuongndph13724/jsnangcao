import Banner from "../component/banner";
import NewsList from "../component/newList";

const HomePage = {
    render() {
        return /* html */`
        <div class="banner">
             ${Banner.render()}
        </div>
        <div class="news">
             ${NewsList.render()}
        </div>
        `;
    },
};
export default HomePage;