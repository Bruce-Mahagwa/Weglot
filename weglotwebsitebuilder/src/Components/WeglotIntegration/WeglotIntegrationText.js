import { motion, useInView} from "motion/react"
import { useRef } from "react";
const WeglotIntegrationText = ({scrollPercentage}) => {
    const splittedText = "WEGLOT".split('');
    const pullupVariant = {
        initial: { y: 10, opacity: 0 },
        animate: (i) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.05,
            },
        }),
    };

    const ref = useRef(null);
    const isInView = useInView(ref);

    return (
        <>
            <div className="h-96 w-1/2 flex flex-col justify-between sticky top-[172px]">
                <motion.h1 className="font-bold text-blue-700 text-4xl sm:text-7xl lg:text-8xl xl:text-9xl px-2 md:px-4 lg:px-8">
                    {splittedText.map((current, i) => (
                        <motion.span
                            key={i}
                            ref={ref}
                            variants={pullupVariant}
                            initial="initial"
                            animate={isInView ? 'animate' : ''}
                            custom={i}
                        >
                            {current === ' ' ? <span>&nbsp;</span> : current}
                        </motion.span>
                    ))}
                </motion.h1>

                <div className="mb-8 text-base md:text-lg lg:text-xl px-2 md:px-4 lg:px-8">
                    {scrollPercentage >= 0 && scrollPercentage <= 0.20 &&
                        <p>Weglot integrates seamlessly with Webflow so your <br />multilingual website is up and running in <br />minutes.</p>
                    }
                    {scrollPercentage >= 0.21 && scrollPercentage <= 0.40 &&
                        <><p className="mb-2">Everything on your website is detected and <br /> translated instantly.</p>
                            <p>Visually edit your translations through a <br /> live preview of your website.</p></>
                    }
                    {scrollPercentage >= 0.41 && scrollPercentage <= 0.60 &&
                        <p>Your translated pages are automatically indexed on Google, <br />following multilingual SEO best practices.</p>
                    }
                    {scrollPercentage >= 0.61 && scrollPercentage <= 0.80 &&
                        <>
                            <p className="mb-2">Translate automatically — then review & <br />approve your translations.</p>
                            <p>Invite team members or order human <br />translators.</p>
                        </>
                    }
                    {scrollPercentage >= 0.81 &&
                        <p>Style your buttons! We have a Weglot <br />UI Kit for you.</p>
                    }
                </div>
            </div>
        </>
    )
}
export default WeglotIntegrationText;
