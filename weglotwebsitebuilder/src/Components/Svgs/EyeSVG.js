const EyeSVG = () => {
    return (
        <div className = "flex items-center relative">
            <ul className = "bg-white list-none h-max w-2/6 lg:w-1/6">
                <li className = "border-2 border-b-gray-300 py-1 text-center">EN</li>
                <li className = "border-2 border-b-gray-300 py-1 text-center">ZH</li>
                <li className = "border-2 border-b-gray-300 py-1 text-center">FR</li>
                <li className = "border-2 border-b-gray-300 py-1 text-center">IT</li>
            </ul>
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 211.36 254.66" className = "h-max w-2/6">
                <defs>
                    <linearGradient id="a" x2="211.36" y1="127.33" y2="127.33" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#e9eafe" stopOpacity="0"/>
                    <stop offset="1" stopColor="#0924ff"/>
                    </linearGradient>
                </defs>
                <path fill="url(#a)" d="M206.77 119.39L0 0v254.66l206.77-119.38a9.17 9.17 0 000-15.89z" opacity=".5"/>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92.34 118.76" className = "w-12 sm:w-16 lg:w-28">
                <defs>
                    <clipPath id="a" transform="translate(-18.91 -20.32)">
                        <path fill="none" d="M18.76 106.1L19.06 0l92.33 53.31-.3 106.1-92.33-53.31z"/>
                    </clipPath>
                </defs>
                <g clipPath="url(#a)">
                    <path fill="#3c46fb" d="M46.01 90.55C27.31 79.75 9.9 58.1.58 34.06l-.56-1.38.56-.78c9.43-13.22 26.91-14.75 45.61-3.95s36.12 32.44 45.44 56.48l.56 1.42-.56.78c-9.43 13.21-26.91 14.72-45.62 3.92m.31-84.22C20.82-8.38.09 3.44 0 32.73s20.52 65 46 79.7 46.24 2.91 46.32-26.39-20.52-65-46-79.71"/>
                    <path fill="#fff" d="M46.09 79.08c-9.44-5.47-17.09-18.71-17-29.59s7.67-15.25 17.13-9.81 17.11 18.7 17.08 29.57-7.73 15.29-17.21 9.83m.08-51.13C27.49 17.15 10.01 18.68.58 31.86l-.56.78.56 1.42c9.32 24 26.73 45.69 45.43 56.49s36.19 9.29 45.62-3.92l.56-.78-.56-1.42c-9.32-24-26.73-45.68-45.44-56.48"/>
                    <path fill="#3c46fb" d="M46.22 39.68c-9.46-5.44-17.13-1.06-17.13 9.81s7.56 24.12 17 29.59 17.15 1.07 17.19-9.81-7.6-24.11-17.06-29.59"/>
                </g>
            </svg>

        </div>
    )
}
export default EyeSVG;