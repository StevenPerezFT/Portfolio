function WorkExperience() {
    return (
        <div>
            <h2 className="pb-10 text-3xl font-bold mb-4 transition-all duration-700 hover:scale-110">Work experience</h2>
            <section className="my-6 bg-customColor1-200 p-6 border-2 border-customColor3-900 rounded-lg md:ml-10">
                <div >
                    <p className="text-xl font-semibold pb-4">Code Pocket</p>
                    <span className="flex items-center py-1">
                        <p className="flex">Role:</p><p className="text-customColor4-900 pl-1 text-sm md:text-md">Junior full stack developer.</p>
                    </span>
                    <span className="flex items-center py-1">
                        <p className="flex">Duration:</p><p className="text-customColor4-900 pl-1 text-sm md:text-md">November 2023 - February 2024.</p>
                    </span>
                    <span className="flex items-center py-1">
                        <p className="flex">Description:</p><p className="text-customColor4-900 pl-1 text-sm md:text-md"> Start up web developer.</p>
                    </span>
                </div>
            </section>
        </div>
    );
}

export default WorkExperience;
