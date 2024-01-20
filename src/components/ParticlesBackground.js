import React, { useEffect, useState, useMemo } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const ParticlesBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options = useMemo(() => ({
        autoPlay: true,
        background: {
            color: {
                value: "#0a2239" // Dark blue background
            },
            opacity: 0.7
        },
        detectRetina: true,
        fpsLimit: 60,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push"
                },
                onHover: {
                    enable: true,
                    mode: "repulse"
                }
            },
            modes: {
                push: {
                    quantity: 4
                },
                repulse: {
                    distance: 120,
                    duration: 0.6
                }
            }
        },
        particles: {
            color: {
                value: ["#ffffff", "#00bcd4", "#ff9800"] // AI theme colors: white, blue, orange
            },
            links: {
                color: "#00bcd4", // Link color as blue
                distance: 150,
                enable: true,
                opacity: 0.6,
                width: 1.5
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce"
                },
                random: true,
                speed: 3,
                straight: false
            },
            number: {
                density: {
                    enable: true,
                    area: 800
                },
                value: 100
            },
            opacity: {
                value: 0.6
            },
            shape: {
                type: ["circle", "triangle"] // Adding triangles to complement circles
            },
            size: {
                value: { min: 1, max: 5 }
            }
        },
        pauseOnBlur: true,
        pauseOnOutsideViewport: true,
        zLayers: 3
    }), []);

    return (
        init && <Particles id="tsparticles" options={options} />
    );
};

export default ParticlesBackground;

