

import { animate, hover } from "motion"
import { splitText } from "motion-plus"
import { useMotionValue } from "motion/react"
import { useEffect, useRef } from "react"

export default function ScatterText() {
    const containerRef = useRef(null)
    const velocityX = useMotionValue(0)
    const velocityY = useMotionValue(0)
    const prevEvent = useRef(0)

    useEffect(() => {
        if (!containerRef.current) return

        const h1 = containerRef.current.querySelector(".scatter-heading")
        if (!h1) return

        const { chars } = splitText(h1)

        const handlePointerMove = (event) => {
            const now = performance.now()
            const timeSinceLastEvent = (now - prevEvent.current) / 1000
            prevEvent.current = now
            velocityX.set(event.movementX / timeSinceLastEvent)
            velocityY.set(event.movementY / timeSinceLastEvent)
        }

        document.addEventListener("pointermove", handlePointerMove)

        const cleanupHover = hover(chars, (element) => {
            const speed = Math.sqrt(
                velocityX.get() ** 2 + velocityY.get() ** 2
            )
            if (speed < 10) return

            const angle = Math.atan2(velocityY.get(), velocityX.get())
            const distance = speed * 0.1

            animate(
                element,
                {
                    x: Math.cos(angle) * distance,
                    y: Math.sin(angle) * distance,
                },
                { type: "spring", stiffness: 100, damping: 50 }
            )

            setTimeout(() => {
                animate(
                    element,
                    { x: 0, y: 0 },
                    { type: "spring", stiffness: 80, damping: 30 }
                )
            }, 300)
        })

        return () => {
            document.removeEventListener("pointermove", handlePointerMove)
            cleanupHover?.()
        }
    }, [])

    return (
        <div
            ref={containerRef}
            className="flex justify-center items-center w-full max-w-md text-left text-green-400 font-bold mx-auto px-4 py-10"
        >
            <h1 className="scatter-heading text-[25px] lg:text-[50px]   font-semibold text-center">
                Hi there! I'm Loving coding....Contact me
            </h1>
        </div>
    )
}
