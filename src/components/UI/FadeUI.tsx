import React, { useEffect, useState } from 'react'

interface FadeProps {
    show: boolean
    children: any
}

const FadeUI: React.FunctionComponent<FadeProps> = ({ show, children }) => {
    const [shouldRender, setRender] = useState(show)

    useEffect(() => {
        if (show) setRender(true)
    }, [show])

    const onAnimationEnd = () => {
        if (!show) setRender(false)
    }

    return shouldRender ? (
        <div
            style={{ animation: `${show ? 'fadeIn' : 'fadeOut'} 1s` }}
            onAnimationEnd={onAnimationEnd}
        >
            {children}
        </div>
    ) : null
}

export default FadeUI
