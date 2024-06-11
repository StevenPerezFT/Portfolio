import Image from "next/image";


export default function ProjectComponent() {
    return (
        <>
            <div className="max-w-full max-h-screen">
                <section className="w-full flex pl-5 md:px-20">
                    <h6 className="pt-28 text-5xl">
                        Chat
                    </h6>
                </section>
                <section className="flex w-full px-5 justify-center pt-10 md:pt-10 text-lg ">
                    <div className="flex  flex-col text-base">
                        <p className="flex w-full justify-center text-2xl md:justify-start  md:text-4xl text-customColor1-900 mb-4">
                            MVP
                        </p>
                        <p className="max-w-screen-xl pb-2">
                            The development of this project aims to have a real-time chat.
                        </p>
                        <div className="md:pl-4">
                            <li>
                                Create the data base
                            </li>
                            <li>
                                Implemente the security using Jwt
                            </li>
                            <li>
                                Implement the chat usign socket.Io
                            </li>
                            <li>
                                Developer the user interface (optional)
                            </li>

                        </div>

                        <p className="md:justify-start  md:text-4xl flex w-full justify-center text-2xl text-customColor1-900 mt-8 mb-4">
                            Database
                        </p>
                        <p>
                            The development began with the implementation of the database, initially I created it using PostgreSQL but then I decided to use Prisma.
                        </p>
                        <p>
                            This was the database at the beginning, although it underwent some changes later.
                        </p>
                        <div className="mt-8 mb-4 flex justify-center" >
                            <Image src='/data-base.jpg' width={800} height={800} alt="Image of the chat's data base"
                            />
                        </div>

                        <p className="md:justify-start  md:text-4xl flex w-full justify-center text-xl text-customColor1-900 mt-8 mb-4">
                            User authentication and authorization
                        </p>
                        <p className="mt-2 mb-4 text-customColor1-900 text-xl pt-2">
                            New user registration.
                        </p>
                        <div className="md:pl-10">
                            <p>
                                For security implementation and new user creation, I used the JWT standard.
                            </p>
                            <li className="mt-2 mb-2">
                                The enpoints are guarded by Guards.
                            </li>
                            <li className="mt-2 mb-2">
                                In order for a user to register, they must first meet certain requirements:
                            </li>
                            <p>
                                Email: This must be a string containing @gmail.com.
                                <br />
                                Password: This password must be greater than 3 characters and less than 64 characters..
                                <br />
                                Nombre: The name must be greater than 3 characters and less than 64.
                                <br />
                            </p>
                            <p className="pt-2">
                                All data is validated by the requirements I have given to class-validator.
                                <br />
                                If the user data is valid, validation is performed in the backend, such as the user's email not existing.
                                <br />
                                If everything is correct, the password is hashed and a new user is created in the auth table.
                                <br />
                                The already created token is returned to be used at the Login.

                            </p>
                        </div>
                        <p className="md:justify-start  md:text-4xl text-lg text-customColor1-900 mt-5 mb-4">
                            Login with JWT for authentication.
                        </p>
                        <div className="md:pl-10">

                            <p className="mb-4">
                                For a user to log in, the user must enter the data previously provided during registration.
                            </p>
                            <div className="ml-2">
                                <li>
                                    Data is validated with React Hook Form and zod resolver and class validator in the backend.
                                </li>
                                <li>
                                    If the data is correct and the zod validators do not present any problems, the form is sent to the endpoint.
                                </li>
                                <li>
                                    In the backend, the email is validated to see if it exists and the password is compared to the saved password.
                                </li>
                            </div>
                            <p className="mt-3 mb-4">
                                If everything is correct and if the user does not exist in the users table.
                            </p>
                            <li className="ml-2">
                                In the backend there is an endpoint that is protected with a Guard and it validates that the data it receives contains the token and the id of the Auth table.
                            </li>
                            <li className="ml-2">
                                The ID is extracted with a custom Decorator that saves the Guard ID at the time it validates the Token.
                            </li>
                            <li className="ml-2">
                                If everything is correct, a new user is created in the users table.
                            </li>
                            <li className="ml-2">
                                A token is created on the frontend that is validated by a Middleware that allows the user to navigate the application.
                            </li>

                        </div>

                        <p className="md:justify-start  md:text-4xl flex w-full justify-center text-2xl text-customColor1-900 mt-8 mb-4">
                            Chat room management
                        </p>
                        <div className="md:pl-10">
                            <p className="mb-3">
                                At this point the user must already be authenticated, so to create a table that belongs to the user, the user ID is extracted from the token and used to create a new table.
                            </p>
                            <li className="ml-2">
                                If the user id already exists in the table only the message is saved.
                            </li>
                            <p className="text-customColor1-900 text-xl pt-2">
                                Real-Time Messaging.
                            </p>
                            <li className="ml-2">
                                Messages are transmitted using socket.Io.
                            </li>
                            <p className="text-customColor1-900 text-xl pt-2">
                                Create and join chat rooms.

                            </p>
                            <li className="ml-2">
                                The chat room is managed on the same socket.Io
                            </li>
                            <p className="text-customColor1-900 text-xl pt-2">
                                Sending and receiving instant messages.
                            </p>
                            <li className="ml-2">
                                To send a message I created a form that receives the message and by default all messages are sent to the 'general' room.

                            </li>
                            <li className="ml-2">
                                If the user changes rooms, only users who know the name of that room can see the messages sent.

                            </li>
                        </div>

                        <p className="md:justify-start  md:text-4xl flex w-full justify-center text-2xl text-customColor1-900 mt-8 mb-4">
                            User interface (optional)
                        </p>
                        <div className="md:md:pl-10">

                            <p className="pb-3">
                                The goal of this project is the implementation of the backend and the implementation of security in the frontend.
                                Therefore the visual area is not being developed.
                            </p>
                            <li className="ml-2">
                                Implement the visual area with what is necessary to access the application and to send and receive messages.
                            </li>
                            <li className="ml-2">
                                Use Next Js to use the react library router.
                            </li>
                        </div>

                    </div>
                </section >
                <section className="w-full flex pl-5 md:px-20">
                    <h6 className="pt-16 text-5xl">
                        Games
                    </h6>
                </section>


                <section className="px-5">
                    <p className="w-full  md:ml-20 py-10">
                        Each game is developed with HTML, JavaScript and Canvas.
                    </p>
                    <div className="w-full md:flex md:flex-col md:justify-center md:items-center">
                        <div >
                            <p className="md:justify-start  md:text-4xl flex w-full justify-center text-2xl text-customColor1-900 mt-8 mb-4">
                                Pong game
                            </p>

                            <div className="pb-10">
                                <Image src="/Pong-Game.jpg" width={800} height={800} alt="Pong game screenShot" />
                            </div>
                            <p className="md:justify-start  md:text-4xl flex w-full justify-center text-2xl text-customColor1-900 mt-8 mb-4">
                                Snake Game
                            </p>
                            <div className="w-full flex justify-end items-end mb-10">
                                <Image src="/snake-game.jpg" width={800} height={800} alt="Snake game screenShot" />
                            </div>
                        </div>

                    </div>
                </section>
            </div >
        </>
    )
}