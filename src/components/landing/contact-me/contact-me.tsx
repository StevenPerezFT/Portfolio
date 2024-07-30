'use client'
import QRCodeEmail from "@/components/common/qr";
import { BookOutlined, GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import { Button, Divider } from "antd";

function Contact() {
    return (
        <footer className="w-full" id="contact-me">
            <h2 className="text-porfolioBlue-100  text-2xl font-bold mb-10 ">Contact and links</h2>
            <section className="w-full pb-5 ">
                <div className="justify-around flex">
                    <span className="grid place-items-center mx-5">
                        <p className="pb-4 text-porfolioOrange-200">
                            LinkedIn
                        </p>
                        <div className="border-2">
                            <QRCodeEmail link="https://www.linkedin.com/in/perez-steven" size={70} />
                        </div>
                        <Divider plain>o</Divider>
                        <Button type="link" href="https://www.linkedin.com/in/perez-steven">
                            <LinkedinOutlined style={{ fontSize: '25px', color: 'black' }} />
                        </Button>
                    </span>
                    <span className="grid place-items-center mx-5">
                        <p className="pb-4 text-porfolioOrange-200">
                            GitHub
                        </p>
                        <div className="border-2">
                            <QRCodeEmail link="https://github.com/StevenPerezFT" size={70} />
                        </div>
                        <Divider plain>o</Divider>
                        <Button type="link" href="https://github.com/StevenPerezFT">
                            <GithubOutlined style={{ fontSize: '25px', color: 'black' }} />
                        </Button>
                    </span>
                    <span className="grid place-items-center mx-5">
                        <p className="pb-4 text-porfolioOrange-200">
                            My CV
                        </p>
                        <div className="border-2">
                            <QRCodeEmail link="https://drive.google.com/file/d/11waHkFnS_Dpj_5hYw6qFGQ0Z2uGCQcYk/view?usp=sharing" size={70} />
                        </div>
                        <Divider plain>o</Divider>
                        <Button type="link" href="https://drive.google.com/file/d/11waHkFnS_Dpj_5hYw6qFGQ0Z2uGCQcYk/view?usp=sharing">
                            <BookOutlined style={{ fontSize: '25px', color: 'black' }} />
                        </Button>
                    </span>
                </div>
            </section>
        </footer>
    );
}

export default Contact;
