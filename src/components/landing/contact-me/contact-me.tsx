'use client'
import QRCodeEmail from "@/components/common/qr";

function Contact() {
    return (
        <div className="w-full" id="contact-me" >
            <h2 className="text-porfolioBlue-100  text-2xl font-bold mb-4 ">Contact</h2>
            <section className="w-full pb-5 ">
                <div className="justify-around flex">
                    <span className="grid place-items-center mx-5">
                        <p className="pb-4 text-porfolioOrange-200">
                            LinkedIn
                        </p>
                        <div className="border-2">
                            <QRCodeEmail link="www.linkedin.com/in/perez-steven" size={70} />
                        </div>
                    </span>
                    <span className="grid place-items-center mx-5">
                        <p className="pb-4 text-porfolioOrange-200">
                            GitHub
                        </p>
                        <div className="border-2">
                            <QRCodeEmail link="https://github.com/StevenPerezFT" size={70} />
                        </div>
                    </span>
                </div>
            </section>
        </div>
    );
}

export default Contact;
