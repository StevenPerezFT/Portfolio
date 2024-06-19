import Card from "@/components/common/card";
import { ArrowRightOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function Projects() {
    return (
        <>
            <section className="py-20  rounded-lg flex justify-center">
                <h2 className="text-3xl font-bold text-porfolioBlue-100 transition-all duration-700 hover:scale-110">Projects</h2>
            </section>
            <div className=" grid md:flex md:grid-cols-3 gap-10 justify-around mb-10 ">
                <div className="py-3">
                    <Card header="Chat"
                        body="In this project I have created a real-time chat. As an additional fact I only focused on the backend so the frontend is really basic." tags={['TypeScript', 'NestJS', 'JWT', 'Next.js', 'Prisma', 'Socket.IO']} links={["https://github.com/StevenPerezFT/Chat"]} />
                </div>
                <div className="py-3">
                    <Card header="Translate"
                        body="I created a clone of a translator. This project is focused on the frontend." tags={['React', 'Tsx', 'ts', 'NestJS', 'translateApi']} links={["https://github.com/StevenPerezFT/translate"]} />
                </div>
                <div className="py-3">
                    <Card header="Games"
                        body="I created the game Pong and the game Snake. I based the implementation on the games that powerhdeleon made." tags={['HTML', 'JavaScript']} links={["https://github.com/StevenPerezFT/Snake-game", "https://github.com/StevenPerezFT/Pong-Game"]} />
                </div>
            </div>
            <section className="w-full flex justify-center pb-10">
                <button className="p-3 rounded-lg bg-customColor1-700">
                    <Link href="/projects">Know more about my projects</Link>
                    <ArrowRightOutlined style={{ fontSize: '16px', paddingLeft: '5px' }} />
                </button>
            </section>
        </>
    )
}