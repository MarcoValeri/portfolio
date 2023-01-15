import ContactForm from '../../components/contact-form/contact-form';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

import './contact.scss';

const Contact = () => {
    return (
        <>
            <Header subTitle="Contact" />
            {/* <section className="contact">
                <ContactForm />
            </section> */}
            <div className="contact">
                <div className="contact__container-email">
                    <p className="body-1">I'm seeking out opportunities to collaborate with companies / agencies / individuals, not just work for them.</p>
                    <p className="body-1">I want to bring my skills as Full Stack Developer and SEO and work together to solve real business-problems.</p>
                    <p className="body-1">Feel free to reach out through any platforms bellow:</p>
                    <p className="body-1"><a className="contact__email link-no-style link-highlight" href="mailto:info@marcovaleri.net">info@marcovaleri.net</a></p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact;