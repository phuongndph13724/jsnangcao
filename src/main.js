import Navigo from "navigo";
import NewsDetailPage from "./page/newsDetail";
import AboutPage from "./page/about";
import ContactPage from "./page/contact";
import HomePage from "./page/home";
import NotFoundPage from "./page/notFound";
import ProductPage from "./page/product";
import Header from "./component/header";
import Footer from "./component/footer";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.querySelector("#app").innerHTML = content;
    document.querySelector("#header").innerHTML = Header.render();
    document.querySelector("#footer").innerHTML = Footer.render();
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/about": () => {
        print(AboutPage.render());
    },
    "/product": () => {
        print(ProductPage.render());
    },
    "/contact": () => {
        print(ContactPage.render());
    },
    "/news/:id": (value) => {
        console.log(value.data.id);
        print(NewsDetailPage.render(value.data.id));
    },
});
router.notFound(() => print(NotFoundPage.render()));
router.resolve();