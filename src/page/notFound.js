import Footer from "../component/footer";
import Header from "../component/header";

const NotFoundPage = {
    render() {
        return `
        ${Header.render()}
        Not-Page
        ${Footer.render()}`;
    },
};
export default NotFoundPage;