import { useEffect, useRef } from 'react';

const useDocumentTitle = (title) => {
    const previousTitleRef = useRef(document.title);

    useEffect(() => {
        const previousTitle = previousTitleRef.current;
        document.title = title;

        return () => {
            document.title = previousTitle;
        };
    }, [title]);

    useEffect(() => {
        previousTitleRef.current = document.title;
    }, []);
};

export default useDocumentTitle;