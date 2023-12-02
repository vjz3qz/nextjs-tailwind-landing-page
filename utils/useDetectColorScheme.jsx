import { useEffect } from 'react';

function useDetectColorScheme() {
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        function updateFavicon(e) {
            const favicon = document.getElementById('favicon');
            favicon.href = e.matches ? '/path/to/dark/favicon.ico' : '/path/to/light/favicon.ico';
        }

        mediaQuery.addListener(updateFavicon);
        updateFavicon(mediaQuery);

        return () => mediaQuery.removeListener(updateFavicon);
    }, []);
}

export default useDetectColorScheme;
