import MenuOutlined from '@ant-design/icons/MenuOutlined';
import Link from 'next/link';

export default function Navigation() {
    return (
        <>
            <label>
                <input type="checkbox" className="peer hidden" />
                <i className="text-2xl mr-4 cursor-pointer flex justify-center items-center md:hidden">
                    <MenuOutlined />
                </i>
                <nav className="hidden peer-checked:block absolute -bottom-16 rounded-md shadow-lg w-full bg-white z-10 left-0 md:block md:static md:bg-transparent md:w-80 md:p-0 md:shadow-none md:mt-2">
                    <ul className="flex flex-col  w-full md:flex-row md:justify-end">
                        <li className="w-full md:flex md:items-center md:justify-center">
                            <Link
                                href="/"
                                className="px-2 md:px-4 md:py-2 text-bl text-customColor3-900 block hover:bg-customColor3-500 lg:bg-customColor3-500 py-1  rounded-lg"
                            >
                                About me
                            </Link>
                        </li>

                        <li className="w-full md:flex md:items-center md:justify-center">
                            <Link
                                href="/#contact-me"
                                className="px-2 md:px-4 md:py-2 text-bl text-customColor3-900 block hover:bg-customColor3-500 lg:bg-customColor3-500 py-1 rounded-lg"
                            >
                                Contact me
                            </Link>
                        </li>
                    </ul>
                </nav>
            </label>
        </>
    );
}
