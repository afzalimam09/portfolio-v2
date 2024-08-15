"use client";
import { useRouter } from "next/navigation";
import { BiArrowBack } from "react-icons/bi";

const BackButton = () => {
    const router = useRouter();
    const handleBack = () => {
        router.back();
    };
    return (
        <button onClick={handleBack} className="h2 article-title">
            <BiArrowBack />
        </button>
    );
};

export default BackButton;
