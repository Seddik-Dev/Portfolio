import React from "react";
import { LayoutGrid } from "./ui/layout-grid";
import img1 from "../../public/images/cars.png";
import img2 from "../../public/images/hotel.png";
import img3 from "../../public/images/pfe.png";
import img4 from "../../public/images/stage.png";
import img5 from "../../public/images/recipedia.png";
import img6 from "../../public/images/watches.png";

export function LayoutGridDemo() {
    return (
        <div className="min-h-screen py-20 pb-32 w-full">
            <LayoutGrid cards={cards} />
        </div>
    );
}

const baseTitle = "font-semibold text-white text-3xl md:text-5xl";
const baseParagraph = "text-neutral-300 text-base md:text-lg leading-relaxed";
const baseWrapper = "space-y-4 max-w-xl";

const SkeletonOne = () => (
    <div className={baseWrapper}>
        <p className={baseTitle}>Car Rental Platform</p>
        <p className={baseParagraph}>A modern car renting platform with real-time pricing, booking flows, and performance-optimized UI.</p>
    </div>
);

const SkeletonTwo = () => (
    <div className={baseWrapper}>
        <p className={baseTitle}>Hotel Reservation System</p>
        <p className={baseParagraph}>A smooth and intuitive hotel booking experience designed with high-end UI patterns and seamless UX.</p>
    </div>
);

const SkeletonThree = () => (
    <div className={baseWrapper}>
        <p className={baseTitle}>PFE Project Showcase</p>
        <p className={baseParagraph}>A full academic and technical presentation of my final year project, built with clean architecture.</p>
    </div>
);

const SkeletonFour = () => (
    <div className={baseWrapper}>
        <p className={baseTitle}>Internship Experience</p>
        <p className={baseParagraph}>Highlights of my internship journey, including achievements, technologies, and real-world projects.</p>
    </div>
);

const SkeletonFive = () => (
    <div className={baseWrapper}>
        <p className={baseTitle}>Recipedia — AI Recipe App</p>
        <p className={baseParagraph}>An intelligent cooking assistant that generates recipes based on available ingredients using AI.</p>
    </div>
);
const Skeletonsix = () => (
    <div className={baseWrapper}>
        <p className={baseTitle}>Timeless Luxury Watches </p>
        <p className={baseParagraph}>   A clean and elegant platform showcasing premium watches with smooth navigation and refined design.</p>
    </div>
);

const cards = [
    {
        id: 1,
        content: <SkeletonOne />,
        className: "col-span-1 md:col-span-2 h-40 md:h-56",
        thumbnail: img1,
    },
    {
        id: 2,
        content: <SkeletonTwo />,
        className: "col-span-1 h-40 md:h-56",
        thumbnail: img2,
    },
    {
        id: 3,
        content: <SkeletonThree />,
        className: "col-span-1 h-40 md:h-56",
        thumbnail: img3,
    },
    {
        id: 4,
        content: <SkeletonFour />,
        className: "col-span-1 md:col-span-2 h-40 md:h-56",
        thumbnail: img4,
    },
    {
        id: 5,
        content: <SkeletonFive />,
        className: "col-span-1 md:col-span-2 h-40 md:h-56",
        thumbnail: img5,
    },
    {
        id: 6,
        content: <Skeletonsix />,
        className: "col-span-1 h-40 md:h-56",
        thumbnail: img6,
    },
];

