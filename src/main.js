import Navigo from "navigo";
import NewsDetailPage from "./page/newsDetail";
import AboutPage from "./page/about";
import ContactPage from "./page/contact";
import HomePage from "./page/home";
import NotFoundPage from "./page/notFound";
import ProductPage from "./page/product";
import NewsList from "./component/admin/news";
import SignIn from "./page/signin";
import SignUp from "./page/signup";
import NewsAdd from "./component/admin/news/newsAdd";
import NewsEditPage from "./component/admin/news/newsEdit";
import NavAdmin from "./component/navadmin";
import DashBoardPage from "./page/admin/dashboard";
import AdminProducts from "./component/admin/products";
import AdminOrder from "./component/admin/order";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.querySelector("#app").innerHTML = content;
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
    "/NavAdmin": () => {
        print(NavAdmin.render());
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
    "/admin/news": () => {
        print(NewsList.render());
    },
    "/admin/news/newsadd": () => {
        print(NewsAdd.render());
    },
    "/admin/news/:id/edit": (value) => {
        print(NewsEditPage.render(value.data.id));
    },
    "/admin/dashboard": () => print(DashBoardPage.render()),
    "/admin/order": () => print(AdminOrder.render()),
    "/admin/products": () => print(AdminProducts.render()),

});
router.notFound(() => print(NotFoundPage.render()));
router.resolve();