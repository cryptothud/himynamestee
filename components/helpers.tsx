import { IKImage } from "imagekitio-react";
import { MouseEventHandler, useState } from "react";


export const ImageWithProxyFallback = ({ src, width, height, className, style, onClick, alt, lazyLoad }: { src: string, width?: string | number, height?: string | number, className?: string, style?: any, onClick?: MouseEventHandler<HTMLImageElement>, alt?: string, lazyLoad?: boolean }) => {
    const [switched, setSwitched] = useState(false)
    // // If the proxy image fails to load, switch to the original image
    const handleError = (event: any) => {
        if (!switched) {
            event.target.src = src;
            setSwitched(true)
        }
    };

    if (src?.includes("https://")) {
        return (
            <img
                src={src}
                className={className}
                style={style}
                onClick={onClick}
                alt={alt ?? ""}
            />
        )
    }

    return (
        <IKImage
            path={src}
            transformation={[{
                "height": height?.toString() ?? undefined,
                "width": width?.toString() ?? undefined
            }]}
            loading="lazy"
            lqip={{ active: lazyLoad ?? true }}
            onError={handleError}
            className={className}
            style={style}
            onClick={onClick}
            alt={alt ?? ""}
        />
    )
};