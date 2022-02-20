import Footer from "../component/footer";
import Header from "../component/header";

const ContactPage = {
    render() {
        return `
        ${Header.render()}
        Contact
        ${Footer.render()}
        `;
    },
    afterRender() {
        Header.afterRender();
    }
};
export default ContactPage;