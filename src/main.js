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
import {
    data
} from "jquery";
import DetailProduct from "./page/products/productDetail";
import CartPage from "./page/cart";
import ProductsAdd from "./component/admin/products/productsAdd";
import EditPdroductsPage from "./component/admin/products/editProducts";

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
    "/admin": () => {
        print(NavAdmin);
    },
    "/contact": () => {
        print(ContactPage);
    },
    "/news/:id": ({
        data
    }) => {
        console.log(data);
        print(NewsDetailPage, data.id);
    },
    "/products/:id": ({
            data
        }) =>
        print(DetailProduct, data.id),

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
    "/admin/products/productadd": () => print(ProductsAdd),
    "/admin/products/:id/edit": ({
        data
    }) => print(EditPdroductsPage, data.id),
    "/cart": () => print(CartPage)

});
router.notFound(() => print(NotFoundPage));
router.resolve();