import Image from "next/image";

function Photo() {
    return (
        <div className="mx-2">
            <Image src="/MyPhoto.jpeg" alt="My photo" width='350' height='300' />
        </div>
    );
}

export default Photo;