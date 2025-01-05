const LanguageSwitcher = () => {
    return ( 
        <div className = "language_switcher w-full relative bg-slate-100 justify-between gap-4 px-2 py-4 md:px-4 lg:px-8 lg:py-8"
        >
            <div className  = "lanuage_switcher_intro w-1/2 font-bold h-max top-96 text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl">
                <h1>We designed and animated Webflow language switcher elements just for you</h1>                
            </div>
            <div className = "w-1/2 grid self-start md:grid-cols-2 justify-items-end gap-4">
                <div className = "w-full h-40 lg:gap-16 lg:h-80 bg-purple-50 hover:bg-purple-100 flex justify-center items-center">
                    <p className = "font-bold">EN</p>
                </div>
                <div className = "w-full h-40 lg:gap-16 lg:h-80 bg-purple-50 hover:bg-purple-100 flex justify-center items-center">
                    <p className = "font-bold">English</p>
                </div>
                <div className = "w-full h-40 lg:gap-16 lg:h-80 bg-purple-50 hover:bg-purple-100 flex justify-center items-center">
                    <p className = "font-bold">FR</p>
                </div>
                <div className = "w-full h-40 lg:gap-16 lg:h-80 bg-purple-50 hover:bg-purple-100 flex justify-center items-center">
                    <p className = "font-bold">French</p>
                </div>
                <div className = "w-full h-40 lg:gap-16 lg:h-80 bg-purple-50 hover:bg-purple-100 flex justify-center items-center">
                    <p className = "font-bold">ES</p>
                </div>
                <div className = "w-full h-40 lg:gap-16 lg:h-80 bg-purple-50 hover:bg-purple-100 flex justify-center items-center">
                    <p className = "font-bold">Spanish</p>
                </div>
                <div className = "w-full h-40 lg:gap-16 lg:h-80 bg-purple-50 hover:bg-purple-100 flex justify-center items-center">
                    <p className = "font-bold">ZH</p>
                </div>
                <div className = "w-full h-40 lg:gap-16 lg:h-80 bg-purple-50 hover:bg-purple-100 flex justify-center items-center">
                    <p className = "font-bold">Chinese</p>
                </div>
                <div className = "w-full h-40 lg:gap-16 lg:h-80 bg-purple-50 hover:bg-purple-100 flex justify-center items-center">
                    <p className = "font-bold">DE</p>
                </div>
                <div className = "w-full h-40 lg:gap-16 lg:h-80 bg-purple-50 hover:bg-purple-100 flex justify-center items-center">
                    <p className = "font-bold">German</p>
                </div>
            </div>
        </div>
    )
}
export default LanguageSwitcher;