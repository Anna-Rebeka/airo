import {useLayoutEffect, useState} from "react";

export function increaseIndex(nmb: number, documents: any) {
    if (!documents || (nmb + 1) === Object.values(documents).length) {
        return 0;
    }
    return nmb + 1;
}

export function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }

        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

export function useWindowSizeScrollResize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.pageYOffset]);
        }

        window.addEventListener('scroll', updateSize);
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => {
            window.removeEventListener('scroll', updateSize);
            window.removeEventListener('resize', updateSize);
        }
    }, []);
    return size;
}

export default useWindowSize;
