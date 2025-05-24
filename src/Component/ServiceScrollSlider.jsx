import { useEffect, useRef, useState } from "react";
import '../ComponentStyle/ServiceScrollSlider.css'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceScrollSlider() {
    const sectionRef = useRef(null);
    const wrapperRef = useRef(null);
    const textRef = useRef(null);
    const [isScrolling, setIsScrolling] = useState(false);
    const marginArr = ['0px', '-60px', '-120px']

    const dataArr = [
        {
            title: "Surgery",
            description: "Trust our skilled veterinary team for your pet’s surgical needs. From routine spays and neuters to advanced procedures, we ensure safety and comfort with modern equipment, pre-anesthetic screening, and attentive post-op care"
         },
        {
            title: "Pet Vaccination",
            description: "Keep your pet safe with our personalized vaccination programs, tailored to their age, lifestyle, and risk. We’ll guide you through essential vaccines and create a schedule to protect against preventable diseases."
        },
        {
            title: "Pet Grooming",
            description: " Professional grooming keeps your pet healthy and comfortable. We offer baths, trims, nail clipping, and more in a calm, caring environment to prevent skin issues and keep them looking their best."
        },
        {
            title: "In-House Diagnostics",
            description: "Our advanced in-house diagnostics—blood tests, X-rays, ultrasound, and more—provide fast, accurate results, helping us quickly diagnose and treat your pet, often during the same visit."
        },
        {
            title: "Pet Food & Diet Consultation",
            description: "Proper nutrition is key to your pet’s health. Our vets provide expert diet advice tailored to needs like weight, allergies, or medical conditions—keeping your pet strong and healthy. "
        },
        {
            title: "Pet IPD (In-Patient Department / Hospitalization)",
            description: " Our In-Patient Department offers 24/7 care for pets needing ongoing medical attention. With constant monitoring and expert support, we ensure a safe, comfortable recovery environment. "
        },
        {
            title: "Pet Transportation",
            description: "Our pet transportation service makes vet visits easy and stress-free, providing safe, comfortable transport to and from our clinic for appointments, surgeries, or emergencies."
        },
        {
            title: " Pet Cremation",
            description: " We offer compassionate pet cremation services with individual or communal options, ensuring your beloved companion is honored with dignity and care. "
        },
        {
            title: "Pet Registration",
            description: "  Ensuring your pet is properly registered is an important step for their safety and identification. We can assist you with the necessary paperwork and procedures for pet registration, helping you comply with local regulations and increasing the chances of reunification should your pet ever go missing."
        },
        {
            title: "Consultation",
            description: "Our experienced veterinarians are here to offer expert advice and address all your concerns regarding your pet's health, behavior, or general well-being. Whether it's a routine check-up, a specific health issue, or just guidance on pet care, our consultations provide valuable insights and personalized recommendations."
        },
        {
            title: "24x7 Emergency Services",
            description: "Emergencies can happen anytime. Our 24/7 emergency services ensure your pet gets immediate, expert care for accidents, sudden illnesses, or urgent conditions."
        },
    ]

    useEffect(() => {
        const section = sectionRef.current;
        const wrapper = wrapperRef.current;
        const text = textRef.current;
        if (!section || !wrapper || !text) return;

        const totalScrollDistance = wrapper.scrollWidth - window.innerWidth;

        gsap.to(wrapper, {
            x: `-${totalScrollDistance}px`,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: () => `+=${totalScrollDistance}`,
                scrub: 1,
                pin: true,
                anticipatePin: 1,
                onUpdate: (self) => {
                    if (self.getVelocity() !== 0) {
                        setIsScrolling(true);
                    }
                },
            },
        });

        gsap.to(text, {
            backgroundSize: "100% 100%",
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: () => `+=${totalScrollDistance}`,
                scrub: 1,
            },
        });
        let scrollTimeout;
        const handleScroll = () => {
            setIsScrolling(true);
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                setIsScrolling(false);
            }, 100);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            ScrollTrigger.killAll();
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="horizontal-scroller-wrapper">
            <section className="scroller-wrapper"
                ref={sectionRef}>
                <div className="service-text-wrapper">
                    <h2 ref={textRef} className="stroke-fill-text ">
                        service
                    </h2>
                </div>

                <div className="scroller-display"
                    ref={wrapperRef}>
                    <div className="scroll-width" ></div>
                    {dataArr.map((value, index) => (
                        <div
                            key={index}
                            className="scroll-item"
                            style={{
                                marginTop: marginArr[index % marginArr.length],
                                transform: `scale(${isScrolling ? 0.9 : 1})`,
                            }}>
                            <small className="mb-3 fw-bold">0{index + 1}</small>
                            <h4 className="service-hedding text-warp" >{value.title}</h4>
                            <p className="service-description text-warp" >{value.description}</p>
                        </div>
                    ))}
                    <div className="scoll-item-wrapper-width"></div>
                </div>
            </section>
        </div>
    );
}



