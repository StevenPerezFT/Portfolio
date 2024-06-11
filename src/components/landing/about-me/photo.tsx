import Image from "next/image";

function Photo() {
    return (
        <div className="photo my-6">
            <Image className="rounded-full mx-auto" src="/persona.jpeg" alt="Your Name" width='300' height='100' />
        </div>
    );
}

export default Photo;