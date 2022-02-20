import Footer from "../component/footer";
import Header from "../component/header";

const AboutPage = {
    render() {
        return `
        
        ${Header.render()}

        About Page
        ${Footer.render()}
        `;
      }, afterRender() {
          Header.afterRender();
      }
};
export default AboutPage;