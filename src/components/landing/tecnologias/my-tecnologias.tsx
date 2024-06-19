import Image from "next/image";

function Technologies() {
    return (
        <>
            <h2 className="py-16 text-3xl font-bold mb-4 md:pl-5 flex justify-center transition-all duration-700 hover:scale-110">Technologies I use</h2>
            <div className="my-6 p-1 bg-customColor4-500 rounded-xl ">

                <section>
                    <ul className="md:px-8 list-disc list-inside grid grid-cols-4 items-center lg:flex lg:justify-between bg-customColor1-500 rounded-lg border-2 border-customColor1-700">
                        <li className="flex justify-center p-5 md:p-8">
                            <Image src='/next.svg' alt="nextjs icon" width="90" height="50" className="transition-all duration-700 hover:scale-110" />
                        </li>
                        <li className="flex justify-center p-5 md:p-8">
                            <Image src='/nest.svg' alt="nestjs icon" width="70" height="50" className="transition-all duration-700  hover:scale-110" />
                        </li>
                        <li className="flex justify-center p-5 md:p-8">
                            <Image src='/javascript-js.svg' alt="javascript icon" width="70" height="50" className="transition-all duration-700  hover:scale-110" />
                        </li>
                        <li className="flex justify-center p-5 md:p-8">
                            <Image src='/typescript-icon.svg' alt="typescript icon" width="70" height="50" className="transition-all duration-700 hover:scale-110" />
                        </li>
                        <li className="flex justify-center p-5 md:p-8">
                            <Image src='/tailwind.svg' alt="tailwind icon" width="70" height="50" className="transition-all duration-700  hover:scale-110" />
                        </li>
                        <li className="flex justify-center p-5 md:p-8">
                            <Image src='/node-js.svg' alt="node-js icon" width="70" height="50" className="transition-all duration-700  hover:scale-110" />
                        </li>
                        <li className="flex justify-center p-5 md:p-8">
                            <Image src='/postgresql.svg' alt="postgresql icon" width="70" height="50" className="transition-all duration-700  hover:scale-110" />
                        </li>
                    </ul>
                </section>
            </div>
        </>
    );
}

export default Technologies;
