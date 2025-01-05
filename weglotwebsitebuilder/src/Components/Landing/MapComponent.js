// dependencies
import {motion, MotionConfig} from "motion/react";
const MapComponent = ({countScrollPosition}) => {    
    return ( 
        <MotionConfig transition = {{duration: 0.5, ease: "easeOut"}}>        
            <motion.div className = "fixed slate"
                initial = {countScrollPosition === 0 ? {x: "-50%", y: "-50%"} : countScrollPosition === 1 ? {x: "-50%", y: "-50%"} : countScrollPosition === 2 ? {x: "-25%", y: "-65%"} : {}}
                animate = {countScrollPosition === 1 ? {x: "-25%", y: "-65%"} : countScrollPosition >= 2 ? {x: "-5%", y: "-75%"} : {}}  
            >                
                {countScrollPosition === 0 && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 331.24 672.16" className = "w-1/2 h-1/2">
                    <path fill="#d0d4f4" d="M103.24 58.51l1.82-6.09-44.62 3.05 5.01 5.51 37.79-2.47zM118.2 48.44l3.86-14.26-13.37 6.95.98 3.67 8.53 3.64zM173.42 630.09l-21.33 34.94 17 7.13 16.46-33.17-5.86-10.3-6.27 1.4z"/>
                    <path fill="#d0d4f4" d="M214.56 386l-9.29-15.42L148 332.32l-38 5.86-12-18.46H87.45L87 300.27h13.38l8.15-3.45-11.29-12-18.52.74-9.75 4.08L46 267.16l39.87-14L83.82 270l34.2-3.27 14.82-56.14 7.68 3.92 38.61-41.82-6.55-8.69 28.18-15.1 2.25 3.29 11.57-3.91-3.77-17.46-8.55-12.82-4 6-12.66-21.78 4.81 1.27 3.05-4.25-1.46-12.6 5.87-2.79L191 57.9l-21.5-20.12-6.22 8.69-14-12.9-13.54 12.64 12.81 25.85 8.79 22.69 8.52 2.25L176 99.67l-.42 7.44-26.91 43.79-5.47-2.31 2-8.34-19.86-12L133.29 82l-10.58-37.35-12.56 29.73L95 93.68l2-3.81-41.5 2.39-25.65 28.88L13 168.17l3.79 62.48 16 64.88 8.62-1.18c1.7 5.67 10 32 9.93 32.17l36.51 32.88 31.94-6.11-7.3-11.29 11.77 8-4.47 3.33-4.73 114.55 38 189.73 27.15-40.39 3.39-56.36 2.57.18 23.38-43.66 28-24.6 11.5-80.78-23.88-17zM69.82 290.47l-.13-.13 9.13-.92.11.16z"/>
                    <path fill="#d0d4f4" d="M104.46 302.24l.93 5.25 13.38-.7 3.01-3.05-6.22-4.82-11.1 3.32zM229.85 14.28l-2.49-11.76-69.85 16.45 6.66 7.7-23.06 2.22 1.54 5.57 22.4-6.77 13.18 15.26 25.62-7.29 4.67 25.1 5.57.05 8.96 9.73-3.34 10.08 10.35 35.03 6.76 3.91 67.05-29.53 1.56-20.26 25.8-20.06.01-42.18-101.39 6.75zM153.98 103.8l12.43-1.2-1.96-4-10.47 5.2z"/>
                    <path fill="#f5f6fd" d="M53.01 321.52l4.57-27.2-24.81 1.21-6.41-30.98 46.2-17.21 11.26 22.64 24.91-70.54 4.14 3.32 54.76-46.64-8.12-14.28 30.99-24.78-13.82-30.2-7.91 8.26-8-.93-4.38-11.11-8.37-1.84-29 49.48-5.9-2.61 2.17-9.43-25.71-16.62 34.22-28.01-1.09-29.4-7.76 14.32-53.83 7.09 2.18-4.3-58.33 75.31L0 254.61l73.85 107.21 14-2.42-23.46-37.93-11.38.05zM180.83 409.49l3.49-6.68-13.53-21.47-63.4-42.76-19.54 20.82-5.1 129.43 61.84 170.04 8.46-1.3 3.66-63.68 13.01-6.56 25.56-65.68 18.9-11.46 3.52-77.57-19.25-22.9-17.62-.23zM304.01 45.5l-9.25-8.27 36.48-29.7-.18-2.3-130.82 11.02 3.94 7.01 6.01.05 20.02 25.63-10.5 31.68 8.6 9.41 70.01-38.52-8.44-3.21 1.8-5 12.33 2.2z"/>
                    <path fill="#f5f6fd" d="M148.14 69.08l.41 2.98 26.5 7.33 3.29-4.81-1.41-12.63 14.11-4.05-21.5-20.12-23.84 2.92 3.58-7.13-13.54 12.64 38.41 14.71-26.01 8.16zM66.37 290.68l12.45-1.26 7.98 10.85 13.55.02.35-1.78-22.01-12.98-12.32 5.15zM202.26 118.02l-11.22 16.67 19.77-3.9-8.55-12.77zM147.08 22.85l-5.97 6.04 29.29-2.82-23.32-3.22zM152.09 665.03l3.33 6.32 13.67.81-12.59-9.68-4.41 2.55zM105.39 307.49l13.38-.7-14.31-4.55.93 5.25zM122.06 34.18l-13.37 6.95 8.13 2.78 5.24-9.73zM225.24 0L170.4 5.23l-14.45 15.4 71.41-18.11L225.24 0zM96.74 39.15l-21.75 2.61-14.55 13.71 44.62-3.05-8.32-13.27z"/>
                </svg>}
                {countScrollPosition === 1 && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 568.66 554.85" className = "w-full">
                    <path fill="#d0d4f4" d="M432.2 330l-28.14-54 7.33-8.82 5.25 4.28 27.49-36.67-4.13-5.37.31-6-9-16.16 5.3-8.44-13.23-5.44 4-9 3.93 1.48 1.35 5.2 7.94-1.87 8.62 15 30-1.61L469 176.1l-15.65-4 7.63-.86 2.51-24.08-26.25-24.06 2.29-9.47 18.09-7.88 31.48-16.34 20.26 39.08 13.26-9.62-9-52.56-41.94-.51-70.97-16.56-79.27 3.11-.26-1.35 7.33-5.91-1-1.67-22.39-29.73-4.94 19.58L285 30l-6.24 19.14-18.4 7.69.2-.39-1-13.22L267 13.48l-16.16-.1-10.6 17.29 1.28 28-11.82 9.48L195 70.2l1.69 5.66-18.9-42.78L139.24 65l-10.82 17.78 10.39 10.65-12.9 12.57-9.52-27.8L91.49 98l2.2 18.5-6.25 12.93 15.36-2.64 10.15-6.6-17.65 21.3 8.73 7.37-10.81 10.42-6.76 8.62 5.78 28.1 14.47-3.46 18.64-29.45 2-.91L140 201.1l-7.1 6.39 7.11 4.23 21.78-19.15-3.43-3.35 1.1-.86 15.45 15.19-2.16 1.16 5.16 7 3.5-1.78 7.3 7.17-9.81-2.72-80.19 15.55-15.14-.41L121.11 211l-.7-7.56-13.78-7.39-96.22 39L0 299.18 21.14 362l66.13 42.1 51.12 100.53L180 544.14 210.92 420l-4.46-33.23 35.34-75.49-16.17 5.57-41.1-84.85.73-.31 5.11 7.73 1-6.68 36.37 71.74 29.11 3.43-1.59-59.91-19.29.7-3.42-19 71.28 35.3 15.31 57.31 5.25 2.22 6.76 1.47 1.74 9.23 27.6 7.41 2.64-5.14-3.7-10.69-5.08-1 16-34 11.36 1.44L405.64 324zM257 77.41l1.41-7.75-2.41-4.31 1.69-3.35 4.9 12z"/>
                    <path fill="#d0d4f4" d="M413.19 278.3l1.31 4.26 26.44.56 3.48-8.9-26.39.47-4.84 3.61zM424.16 402.04l9.33 7.51 15.77 5.96 13.58-4.97-7.71-7.59-30.97-.91zM487.62 379.06l-22.33-13.75 8.64-16.98-14.26-9.08-11.46 1.32-18.51 16.25 5.14 19.43 18.09 13.35 5.63-11.07-.2 5.54 17.79 17.19 11.47-22.2zM134.23 195.04l-7.25-.01 5.99 5.09 1.26-5.08zM216.29 436.53l3.4 36.32 29.21 25.3 16.6-63.02-28.97-18.06-20.24 19.46zM210.81 59.12l9.98 3.8.47-11.18 16.69-2.21 2.24-7.42-15.58 1.09-5.41 4.37-18.82-.51 3.32 13.21 7.11-1.15zM174.86 16.43l4.89-6.54L151.84 0l-.63 8.04 9.63 11.84 14.02-3.45zM90.36 76.15l5.88-19.56-20.05 3.68 7.7 17.29 6.47-1.41zM449.45 284.33l-1.25 6.83 8.24 13.46 25.83 3.41 6.12-.02-10.68-25.39-28.26 1.71zM405 346.23l-8.13 4.68 14.25 41.58 22.71 8.24-28.83-54.5zM505.06 424.45l-7.5 9.9-20.81-15.55-25.62 20.9-5.36-2.81-32.68 32.57 8.08 44.08 25.42 29.08 34.68 1.65 46.42-65.58-9.95-49.68-12.68-4.56zM526.66 375.74l-14.1 6.76-5.56-5.28-6.69.9-2.75 4.62L513 393.63l-6.74 8.59 24.16 10.83 3.18-3.75-.91-26.88-6.03-6.68zM477.08 144.96l-18-15.48 17.38 30.97.62-15.49zM460.9 252.49l-13.47-.75-2.74 7.95 2.54 5 25.96-1.77 1.96-13.85-1.76-.78-12.49 4.2zM502.27 149.88l-8.51 6.68 2.43 14.92 9.18-3.85 6.28-3.5-1.59-2.44 3.51-3.58-11.3-8.23zM469.94 324.38l14.05 11.5 13.26 4.27-3.49-15.77-18.66-5.29-5.16 5.29z"/>
                    <path fill="#d0d4f4" d="M505.06 377.22l-2.16-15.2-17.47-4.32-4.86 6.73 15.27 9.05 9.22 3.74zM506.76 200.6l7.81-11.3-7.64-18.92-17.09 13.17.72 10.84-9.29 9.9 3.16 5.73 20.66-2.45 1.67-6.97z"/>
                    <path fill="#f5f6fd" d="M432.2 329.99l11.56-18.27-13.12-35.97 7.23-9.96 5.17 4.83 27.1-41.43-4.08-6.12.31-6.77-8.84-18.26 5.22-9.53-13.03-6.15 3.91-10.14 3.87 1.68 1.33 5.87 7.83-2.11 12.51 24.95 4.16-13.31-9.97-11.36 5.84-19.61 7.52-.96 2.47-27.22-25.82-27.22 2.25-10.7 36.15-20.02 20.85 46.66 2.32-34.68-7.74-21.99-19.94-24.01-69.89-18.7-78.13 3.53-.26-1.55 7.22-6.67-.96-1.89-25.57-6.14-24.55 6.92 2.01 5.64-22.17 10.62 6.27 17.5-5.51 3.88 1.39-8.75-7.7-15.97-8.55 3.09-12.09 11.13-34.16 2.37 1.66 6.4-14.71 6.47-11.18-9.01 18.82.51-41.41-14.49-38.23 45.33 7.78 7.46 4.37-3.68 3.99 10.92 6.55 3.16 8.4-16.72-4.23-8.07 11.94-18.4 3.04.22-3.33 21.41 17.57 3.67-23.67 26.5-21.59-.45 4.99-4.18.39-4.44-6.19 3.17.82-8.48-39.17 43.83 8.66 10.57-6.93 13.13-14.42 2.22.23 27.4 7.95 4.9 44.19-35.26 15.16 25.88 6.7-9.78-16.69-20.46-.12-4.75 2.01-1.04 27.4 35.38.54-9.6 14.48-3.56-2-6.92 9.75-21.51 4.32 9.08 6.84-1.91-4.5-3.61 11.2-7.2-2.41 13.39 12.09 14.61-40.67 9.69 2.32 8.43 26.04 10.79-2.4 17.93-42.09 2.25-3 8.84-24.1-20.89-.7-8.54-4.52-4.85-39.92 7.14-88.61 35.65-10.13 65.39 25.5 52.2 74.61 33.1 72.01 161.72 11.31-.66 48.94-105.07-4.39-37.54 34.84-85.3-15.94 6.29L215 225.7l6 1.18 35.83 81.06 37.2-42.42-10.05-21.44-19.01.79-3.37-21.44 70.25 39.85 15.09 64.77 5.17 2.5 31.97-67.88 16.53 31.32 8.03 1.16 23.56 34.84zM512.59 459.13l-3.72 1.17-3.7-5.03-.9-18.69-29.2 24.08-2.69-2.07-22.59 33.59-3.2 50.44 34.68 1.65 6.35 10.58 24.96-22.74 15.11-53.42-9.95-49.68-5.15 30.12zM568.66 429.46l-35.97-47.04-10.41 8.32-5.26-5.74-1.43 5.23 18.01 19.07-3.18 3.75 38.24 16.41zM446.5 364.72l.81 18.36 5.62 6.52 13.86-3.07 7.14-38.2-9.18-1.97-18.25 18.36z"/>
                    <path fill="#f5f6fd" d="M248.9 498.15l10.42-7.33 6.18-55.69-14.74 22.54-1.86 40.48zM435.07 385.15L405 346.23l-.79 1.24 29.62 53.26 1.24-15.58zM506.76 200.6l3.56-.03 4.25-11.27-5.77-18.71-1.87-.21 1.02 17.65-17.27 15.37 14.41 4.17 1.67-6.97zM127.53 110.73l2.21-5.55-13.35-26.98 2.16 20.91-6.16 14.6 15.14-2.98zM179.75 9.89l-8.63-7.37L151.84 0l11.37 13.96 16.54-4.07zM487.62 379.06l-9.28-2.68-2.19 24.88 5.11-4.32 6.36-17.88zM250.5 22.33l16.45-8.85-2.26-2.31-13.9 2.21-10.6 17.29 9.84 4.29.47-12.63zM462.84 410.54l-29.35-.99 29.35 11.3v-10.31zM88.9 52.5l-12.71 7.77 20.05-3.68-7.34-4.09zM488.39 308.01l-10.68-25.39-2.33 2.49-1.23 7.72 8.12 15.2 6.12-.02zM493.76 324.38l-9.77 11.5 13.26 4.27-3.49-15.77zM513.57 158.11l-11.3-8.23 3.1 17.75 6.28-3.5 1.92-6.02zM357.96 327.28l2.53 15.36 2.64-5.14-3.7-10.69-1.47.47zM475.15 249.07l-1.76-.78-2.7 8.98 2.5 5.65 1.2-.8.76-13.05zM440.94 283.12l1.25.11 3.03-7.51-.8-1.5-4.78 4.08 1.3 4.82zM502.9 362.02l-7.06 11.46 9.22 3.74-2.16-15.2zM155.85 186.81l5.91 5.75 1.24-5.74-7.15-.01zM195.8 197.6l-7.83-1.06 6.84 6.57.62-2.71.37-2.8z"/>
                </svg>}
                {countScrollPosition >= 2 && countScrollPosition <= 11 && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175.8 169.55" className = "w-full">
                    <defs>
                        <linearGradient id="a" x1="-4829.45" x2="-4659.9" y1="-3660.56" y2="-3660.56" gradientTransform="rotate(45 -6850.965 4041.767)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#f8f8fd"/>
                        <stop offset=".63" stopColor="#e9eafe"/>
                        <stop offset=".99" stopColor="#e9eafe"/>
                        <stop offset="1" stopColor="#e9eafe"/>
                        </linearGradient>
                        <clipPath id="b">
                        <ellipse cx="84.77" cy="84.78" fill="none" rx="84.77" ry="84.78"/>
                        </clipPath>
                    </defs>
                    <ellipse cx="84.77" cy="84.78" fill="url(#a)" rx="84.77" ry="84.78"/>
                    <g fill="#3c46fb" clipPath="url(#b)">
                        <path d="M95.02 69.96l4.67 4.05.58-1.72 8.15-.43.47-3.48-5.05-2.09-.45-1.63 7.88-1.88-2.34-2.83.47-2.6-2.17 1.4.87.7-1.32.37-.84-1.76-1.89 4.17.39 1.34-2.81.69-.1 1.86-5.31-6.86-.39.21.02.92 3.23 3.96-1.29 1.9-2.94-5.02-8.56 6.83-1.54-.95-.05-5.31 2.8-.43 1.34-2.54-1.68-2.05 7.59-8.49-.16 1.64 1.2-.61-.07.86-.97.81 4.18.09 4.59-5.14-3.41-.71.65-4.15-.59-.04-2.31 3.56.82 1.57-1.63 3.24-1.27-.61-.77-2.12-.85.71-1.51-1.44 7.41-8.79 8.02 2.81-3.64-.1 2.16 1.75 2.85-1.26-.32-1.24 6.62-.46 2.34-2.15 1.66-.6 1.49 3.09-.27 1.7 1.07-.75-1.21-3.39 4.29-2.06-.39-1.09 4.76-1.35 4.95 1.2.19.36-1.4 1.29.05.3 15.14-.68 13.54 3.62 3.86 4.66 1.5 4.26-.44 6.72-4.04-9.04-7.01 3.88-.44 2.07 5.01 5.27-.48 5.28-1.46.18-1.13 3.8 1.93 2.2-.8 2.58-2.43-4.83-1.52.41-.25-1.14-.75-.33-.81 2.09-.42-.34 3 1.41-1.02 1.85 1.71 3.54-.05 1.31.79 1.18-5.25 8.03-1.01-.94-1.4 1.93 2.54 6.97-2.24 3.54-4.56-6.75-1.56-.22-3.2-6.07-6.19 13.15-1-.48-2.93-12.55-13.61-7.72.65 4.15 3.69-.15 1.94 4.15-7.2 8.22-6.95-15.7-1.16-.23 7.71 18.63 3.08-1.22-6.75 16.53.85 7.27-9.48 20.36-2.19.13-7.66-37.68-8.74-.07-4.94-10.12 7.12-19.57L94 67.36l.88.94.14 1.66zM35.44 99.25l2.62 4.16-.68 1.29 3.42.05 3.73 4.44-.68 15.03-3.66 2.22-4.96 12.72-2.52 1.28-.71 12.33-1.64.26-11.98-32.95.99-25.08-2.71.47L2.35 74.69l.96-22.77 11.3-14.59-.42.83 10.43-1.37 1.5-2.78.21 5.7-6.63 5.42 4.98 3.22-.42 1.83 1.15.51 5.62-9.59 1.62.36.85 2.15 1.55.18 1.53-1.6 2.68 5.85-6.01 4.8 1.58 2.77-10.61 9.04-.81-.65-4.82 13.67-2.18-4.39-8.96 3.34 1.25 6 4.8-.23-.88 5.27 2.2-.01L19.37 95l3.79-4.04 12.28 8.29zM164.93 133.86l2.93-10.35-1.93-9.63-1 5.84-.72.22-.72-.97-.17-3.62-5.66 4.66-.52-.4-4.38 6.51-.62 9.78 6.72.31 1.23 2.05 4.84-4.4zM58.51 34.72l.35-.97 2.39.43-1.79-1.61 7.07-5.75-.04-.45-25.34 2.14.76 1.36 1.16.01 3.88 4.96-2.03 6.14 1.66 1.82 13.57-7.46-1.64-.62zM166.81 106.47l-1.02-1.12-.28 1.02 3.49 3.69-.61.73 7.41 3.18-6.97-9.12-2.02 1.62zM152.13 101.42l.15 3.56 1.09 1.26 2.69-.59 1.38-7.4-1.78-.38-3.53 3.55z"/>
                        <path d="M35.2 32.68l-4.62.57.69-1.39-2.62 2.45 7.44 2.85-5.04 1.59.08.57 5.13 1.42.64-.93-.27-2.45 2.73-.78-4.16-3.9zM117.06 115.07l-2.86 4.36-.36 7.85 2.02-1.42 1.2-10.79zM163.48 70.97l.32-1.35h.69l.82-2.19-1.11-3.62-.37-.04.2 3.42-3.34 2.98 2.79.8zM90.32 52.21l.43-1.08-2.59-5.22.42 4.05-1.19 2.83 2.93-.58zM100.44 32.67l-1.67-1.43-3.74-.49 2.2 2.71 3.21-.79zM158.3 103.68l-.43 4.82.99-.83 1.23-3.47-1.79-.52M112.15 36.7l1.91.83.09-2.45 3.18-1.71-.43-.45-2.7.43-2.05 3.35zM84.26 41.72l-1.42-.79-2.47 1.5 3.89-.71zM15.21 81.68l2.41-.24 1.54 2.1h2.63l.07-.34-4.27-2.51-2.38.99zM160.24 90.43l-2.07-4.91-.45.48-.24 1.49 1.58 2.95 1.18-.01zM39.36 51.46l3.83-.76-1.65-2.47-2.18 3.23zM161.28 93.61l-1.89 2.22 2.57.83-.68-3.05zM165.12 61.39l-2.19-1.59.6 3.43 1.22-.67.37-1.17zM32.46 155.44l2.65.16-2.44-1.88-.85.5.64 1.22zM22.77 84.94l2.59-.14-2.77-.88.18 1.02zM97.19 66.95h-1.38l1.14 1.12.24-1.12zM103.36 70.11l.12-.53.07-.54-1.52-.2 1.33 1.27zM45.99 25.36l-10.63 1.01-2.8 2.99 13.84-3.51-.41-.49zM14.06 36.11l8.64-.59-1.61-2.58-4.21.51-2.82 2.66z"/>
                    </g>
                </svg>}
            </motion.div>
        </MotionConfig>
    )
}
export default MapComponent;