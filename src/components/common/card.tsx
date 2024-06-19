'use client'
import { FC } from "react"
import QRCodeEmail from "./qr";

interface ICard {
    header: string,
    body: string,
    tags?: string[];
    links?: string[];
}

const Card: FC<ICard> = ({ header, body, tags, links }) => {
    return <>
        <div className="max-w-sm min-w-min max-h-auto rounded overflow-hidden shadow-lg bg-customColor1-200 p-6 border-2 border-customColor1-700 ">
            <div className="md:px-1 pb-4">
                <div className="font-bold text-xl mb-2 flex justify-center text-porfolioOrange-300">{header}</div>
                <p className="text-base text-porfolioYellow-400">{body}</p>
            </div>
            {tags && tags.length > 0 && (
                <div className="px-1 pt-4 pb-2">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 bg-customColor2-600"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
            )}
            {links && links?.length > 0 && (
                <div className="max-w-sm max-h-auto flex justify-start pl-2 py-2 border-t-2 border-customColor1-600 border-porfolioBlue-600 ">
                    {links.map((link, index) => (
                        <div key={index} className="flex items-center">
                            <QRCodeEmail link={`${link}`} size={50} />
                            <div className="pl-2 text-porfolioYellow-400 text-sm ">
                                <p>Link to the GitHub repository</p>
                            </div>
                        </div>
                    ))}
                </div>

            )}
        </div>
    </>
}

export default Card;
