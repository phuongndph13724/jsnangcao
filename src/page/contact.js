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
};
export default ContactPage;