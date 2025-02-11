import React, { useEffect, useRef } from 'react';
import DownArrow from '../icons/DownArrow';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Hero = () => {
    gsap.registerPlugin(ScrollTrigger);

    const videoRef = useRef(null);
    const heroRef = useRef(null);

    useEffect(() => {
        gsap.to(heroRef.current, {
            y: "-80%", // Moves the video up as the user scrolls
            ease: "none",
            scrollTrigger: {
                trigger: videoRef.current,
                start: "top top",
                end: "bottom top",
                markers : true,
                scrub: 1, // Smooth animation effect
            },
        });

        // gsap.to(videoRef.current, {
        //     scrollTrigger: {
        //       trigger: heroRef.current, // The whole section is the trigger
        //       start: "top top",
        //       end: "bottom top",
        //       pin: true, // Keeps the video fixed in the background
        //       scrub: 1, // Smooth effect
        //     },
        //   });
    }, []);

    return (
        <div className="w-[100%] h-[100%] relative">
            {/* Hero Content */}
            <div className="w-[100%] h-[50%] sm:h-[60%] lg:h-[75%] bg-[#101010] overflow-hidden sm:px-10 px-5 relative z-10" ref={heroRef}>
                <div className="w-[100%] h-full flex flex-col justify-between">
                    <div className="text-[80px] sm:text-[120px] md:text-[160px] lg:text-[220px] xl:text-[300px] 2xl:text-[350px] leading-[100px] sm:leading-[200px] md:leading-[200px] lg:leading-[400px] font-extrabold text-center text-[#fff]">
                        rejouice
                    </div>
                    <div className="grid grid-cols-11 text-sm items-center text-[#fff] py-6">
                        <div className="col-span-5 md:col-span-3">
                            Strategy, Design,
                            <br />
                            and Performance.
                        </div>

                        <div className="col-span-5 md:col-span-3">
                            Two Engagement
                            <br />
                            Models: Cash or Equity.
                        </div>

                        <div className="col-span-1 text-sm flex justify-end md:col-span-5">
                            <DownArrow />
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Video with Parallax Effect */}
            <div
                ref={videoRef}
                className="absolute top-0 left-0 w-full h-[80%] sm:h-[100%] overflow-hidden -z-20"
            >
                <video className="w-full h-full object-cover" loop autoPlay muted playsInline>
                    <source
                        src="https://res.cloudinary.com/decode/video/upload/v1739268710/2894887-uhd_3840_2160_24fps_u3x8oy.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>
        </div>
    );
};

export default Hero;
