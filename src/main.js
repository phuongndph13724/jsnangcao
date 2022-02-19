import Navigo from "navigo";
import NewsDetailPage from "./page/newsDetail";
import AboutPage from "./page/about";
import ContactPage from "./page/contact";
import HomePage from "./page/home";
import NotFoundPage from "./page/notFound";
import ProductPage from "./page/products";
import NewsList from "./component/admin/news";
import SignIn from "./page/signin";
import SignUp from "./page/signup";
import NewsAdd from "./component/admin/news/newsAdd";
import NewsEditPage from "./component/admin/news/newsEdit";
import NavAdmin from "./component/navadmin";
import DashBoardPage from "./page/admin/dashboard.js";
import AdminProducts from "./component/admin/products";
import AdminOrder from "./component/admin/order";
import ProductDetailPage from "./page/products";

const router = new Navigo("/", {
    linksSelector: "a",
});

const print = async (content, id) => {
    document.querySelector("#app").innerHTML = await content.render(id);
    if (content.afterRender) await content.afterRender(id);
};

router.on("/admin/*", () => {}, {
    before: (done) => {
        if (localStorage.getItem('user')) {
            const userId = JSON.parse(localStorage.getItem('user')).id;
            if (userId === 1) {
                done();
            } else {
                document.location.href = "/"
            }
        }
    }
})
router.on({
    "/": () => {
        print(HomePage);
    },
    "/about": () => {
        print(AboutPage);
    },
    "/products": () => {
        print(ProductPage);
    },
    "/NavAdmin": () => {
        print(NavAdmin);
    },
    "/contact": () => {
        print(ContactPage);
    },
    "/news/:id": ({
        data: {
            id,
        },
    }) => {
        print(NewsDetailPage, data.id);
    },
    "/products/:id": ({
        data: {
            id,
        },
    }) => print(ProductDetailPage, data.id),

    "/signin": () => {
        print(SignIn);
    },
    "/signup": () => {
        print(SignUp);
    },
    "/admin/news": () => {
        print(NewsList);
    },
    "/admin/news/newsadd": () => {
        print(NewsAdd);
    },
    "/admin/news/:id/edit": ({
        data
    }) => print(NewsEditPage, data.id),
    "/admin/dashboard": () => print(DashBoardPage),
    "/admin/order": () => print(AdminOrder),
    "/admin/products": () => print(AdminProducts),

});
router.notFound(() => print(NotFoundPage));
router.resolve();