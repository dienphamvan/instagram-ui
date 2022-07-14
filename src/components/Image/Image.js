import { useState } from 'react';
import images from '~/assets';

function Image({ src, alt = 'Photo', customFallback = images.noImagePlaceholder, ...props }) {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(customFallback);
    };

    return <img src={src ? src : fallback} alt={alt} onError={handleError} {...props} />;
}

export default Image;
