import Navigo from "navigo";
import NewsDetailPage from "./page/newsDetail";
import AboutPage from "./page/about";
import ContactPage from "./page/contact";
import HomePage from "./page/home";
import NotFoundPage from "./page/notFound";
import ProductPage from "./page/product";
import Header from "./component/header";
import Footer from "./component/footer";
import NewsList from "./component/admin/newsList";
import SignIn from "./page/signin";
import SignUp from "./page/signup";
import NewsAdd from "./component/admin/newsAdd";
import NewsEditPage from "./component/admin/newsEdit";
import Admin from "./admin";

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
    "/admin": () => {
        print(Admin.render());
    },
    "/contact": () => {
        print(ContactPage.render());
    },
    "/news/:id": (value) => {
        print(NewsDetailPage.render(value.data.id));
    },
    "/signin": () => {
        print(SignIn.render());
    },
    "/signup": () => {
        print(SignUp.render());
    },
    "/admin/newslist": () => {
        print(NewsList.render());
    },
    "/admin/newsadd": () => {
        print(NewsAdd.render());
    },
    "/admin/news/:id/edit": (value) => {
        print(NewsEditPage.render(value.data.id));
    },

});
router.notFound(() => print(NotFoundPage.render()));
router.resolve();