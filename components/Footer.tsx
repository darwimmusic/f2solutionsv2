"use client";
import React, { useEffect, useRef, useState } from 'react';

const FlipLink = ({ children, href }: { children: string; href: string }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group text-black relative block overflow-hidden whitespace-nowrap text-3xl font-black uppercase"
        style={{ lineHeight: 0.85 }}
    >
        <div className="flex">
            {children.split("").map((letter, i) => (
                <span
                    key={i}
                    className="inline-block transition-transform duration-300 ease-in-out group-hover:-translate-y-[110%]"
                    style={{ transitionDelay: `${i * 25}ms` }}
                >
                    {letter === ' ' ? '\u00A0' : letter}
                </span>
            ))}
        </div>
        <div className="absolute inset-0 flex">
            {children.split("").map((letter, i) => (
                <span
                    key={i}
                    className="inline-block translate-y-[110%] transition-transform duration-300 ease-in-out group-hover:translate-y-0"
                    style={{ transitionDelay: `${i * 25}ms` }}
                >
                    {letter === ' ' ? '\u00A0' : letter}
                </span>
            ))}
        </div>
    </a>
);

const WaveAnimation = ({ barCount = 23 }: { barCount?: number }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const waveRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [isVisible, setIsVisible] = useState(false);
    const animationFrameRef = useRef<number | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.2 }
        );

        const currentRef = containerRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    useEffect(() => {
        let t = 0;
        const animateWave = () => {
            const waveElements = waveRefs.current;
            let offset = 0;

            waveElements.forEach((element, index) => {
                if (element) {
                    offset += Math.max(0, 20 * Math.sin((t + index) * 0.3));
                    element.style.transform = `translateY(${index + offset}px)`;
                }
            });

            t += 0.1;
            animationFrameRef.current = requestAnimationFrame(animateWave);
        };

        if (isVisible) {
            animateWave();
        } else if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
            animationFrameRef.current = null;
        }

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [isVisible]);

    return (
        <div
            ref={containerRef}
            aria-hidden="true"
            className="overflow-hidden h-[100px]"
        >
            <div className="mt-0">
                {Array.from({ length: barCount }).map((_, index) => (
                    <div
                        key={index}
                        ref={(el) => { waveRefs.current[index] = el; }}
                        className="wave-segment"
                        style={{
                            height: `${index + 1}px`,
                            backgroundColor: "rgb(0, 0, 0)",
                            transition: "transform 0.1s ease",
                            willChange: "transform",
                            marginTop: "-2px",
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

const Footer: React.FC = () => {
    return (
        <footer className="bg-white text-black relative">
            <WaveAnimation />

            <div className="container mx-auto px-6 py-6">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <div className="mb-8 md:mb-0">
                        <p>&copy; {new Date().getFullYear()} F2 SOLUTIONS EM TECNOLOGIA E CONTEÚDO. Todos os direitos reservados</p>
                        <a href="#" className="text-sm text-gray-600 hover:text-black">Política de Privacidade</a>
                    </div>
                    <div className="flex flex-col items-center md:items-end space-y-2">
                        <FlipLink href="https://www.instagram.com/f2solutions/">Instagram</FlipLink>
                        <FlipLink href="https://www.facebook.com/F2solutions">Facebook</FlipLink>
                        <FlipLink href="https://www.youtube.com/@f2_solutions">YouTube</FlipLink>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
