import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children, selector }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        return () => setMounted(false);
    }, []);

    const element = document.getElementById(selector);

    return element && children && mounted
        ? createPortal(children, element)
        : null;
};

export default Portal;
