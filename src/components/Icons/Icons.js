export const SearchIcon = ({ width = '1.6rem', height = '1.6rem', className }) => {
    return (
        <svg
            color="currentColor"
            fill="currentColor"
            className={className}
            height={height}
            width={width}
            viewBox="0 0 24 24"
        >
            <path
                d="M19 10.5A8.5 8.5 0 1110.5 2a8.5 8.5 0 018.5 8.5z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            ></path>
            <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                x1="16.511"
                x2="22"
                y1="16.511"
                y2="22"
            ></line>
        </svg>
    );
};

export const HomeActiveIcon = ({ height = '2.4rem', width = '2.4rem' }) => (
    <svg width={width} height={height} color="currentColor" fill="currentColor" role="img" viewBox="0 0 24 24">
        <path d="M22 23h-6.001a1 1 0 01-1-1v-5.455a2.997 2.997 0 10-5.993 0V22a1 1 0 01-1 1H2a1 1 0 01-1-1V11.543a1.002 1.002 0 01.31-.724l10-9.543a1.001 1.001 0 011.38 0l10 9.543a1.002 1.002 0 01.31.724V22a1 1 0 01-1 1z"></path>
    </svg>
);

export const HomeIcon = ({ height = '2.4rem', width = '2.4rem' }) => (
    <svg width={width} height={height} color="currentColor" fill="currentColor" role="img" viewBox="0 0 24 24">
        <path
            d="M9.005 16.545a2.997 2.997 0 012.997-2.997h0A2.997 2.997 0 0115 16.545V22h7V11.543L12 2 2 11.543V22h7.005z"
            fill="none"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="2"
        ></path>
    </svg>
);

export const MessageIcon = ({ height = '2.4rem', width = '2.4rem' }) => (
    <svg height={height} width={width} color="currentColor" fill="currentColor" viewBox="0 0 24 24">
        <path
            d="M12.003 2.001a9.705 9.705 0 110 19.4 10.876 10.876 0 01-2.895-.384.798.798 0 00-.533.04l-1.984.876a.801.801 0 01-1.123-.708l-.054-1.78a.806.806 0 00-.27-.569 9.49 9.49 0 01-3.14-7.175 9.65 9.65 0 0110-9.7z"
            fill="none"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeWidth="1.739"
        ></path>
        <path
            d="M17.79 10.132a.659.659 0 00-.962-.873l-2.556 2.05a.63.63 0 01-.758.002L11.06 9.47a1.576 1.576 0 00-2.277.42l-2.567 3.98a.659.659 0 00.961.875l2.556-2.049a.63.63 0 01.759-.002l2.452 1.84a1.576 1.576 0 002.278-.42z"
            fillRule="evenodd"
        ></path>
    </svg>
);

export const MessageActiveIcon = ({ height = '2.4rem', width = '2.4rem' }) => (
    <svg height={height} width={width} color="currentColor" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.003 1.131a10.487 10.487 0 00-10.87 10.57 10.194 10.194 0 003.412 7.771l.054 1.78a1.67 1.67 0 002.342 1.476l1.935-.872a11.767 11.767 0 003.127.416 10.488 10.488 0 0010.87-10.57 10.487 10.487 0 00-10.87-10.57zm5.786 9.001l-2.566 3.983a1.577 1.577 0 01-2.278.42l-2.452-1.84a.63.63 0 00-.759.002l-2.556 2.049a.659.659 0 01-.96-.874L8.783 9.89a1.576 1.576 0 012.277-.42l2.453 1.84a.63.63 0 00.758-.003l2.556-2.05a.659.659 0 01.961.874z"></path>
    </svg>
);

export const UploadIcon = ({ height = '2.4rem', width = '2.4rem' }) => (
    <svg height={height} width={width} color="currentColor" fill="currentColor" viewBox="0 0 24 24">
        <path
            d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        ></path>
        <line
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            x1="6.545"
            x2="17.455"
            y1="12.001"
            y2="12.001"
        ></line>
        <line
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            x1="12.003"
            x2="12.003"
            y1="6.545"
            y2="17.455"
        ></line>
    </svg>
);

export const UploadActiveIcon = ({ height = '2.4rem', width = '2.4rem' }) => (
    <svg height={height} width={width} color="currentColor" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.003 5.545l-.117.006-.112.02a1 1 0 00-.764.857l-.007.117V11H6.544l-.116.007a1 1 0 00-.877.876L5.545 12l.007.117a1 1 0 00.877.876l.116.007h4.457l.001 4.454.007.116a1 1 0 00.876.877l.117.007.117-.007a1 1 0 00.876-.877l.007-.116V13h4.452l.116-.007a1 1 0 00.877-.876l.007-.117-.007-.117a1 1 0 00-.877-.876L17.455 11h-4.453l.001-4.455-.007-.117a1 1 0 00-.876-.877zM8.552.999h6.896c2.754 0 4.285.579 5.664 1.912 1.255 1.297 1.838 2.758 1.885 5.302L23 8.55v6.898c0 2.755-.578 4.286-1.912 5.664-1.298 1.255-2.759 1.838-5.302 1.885l-.338.003H8.552c-2.754 0-4.285-.579-5.664-1.912-1.255-1.297-1.839-2.758-1.885-5.302L1 15.45V8.551c0-2.754.579-4.286 1.912-5.664C4.21 1.633 5.67 1.05 8.214 1.002L8.552 1z"></path>
    </svg>
);

export const ExploreIcon = ({ height = '2.4rem', width = '2.4rem' }) => (
    <svg height={height} width={width} color="currentColor" fill="currentColor" viewBox="0 0 24 24">
        <polygon
            fill="none"
            points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        ></polygon>
        <polygon fillRule="evenodd" points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"></polygon>
        <circle
            cx="12.001"
            cy="12.005"
            fill="none"
            r="10.5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        ></circle>
    </svg>
);

export const ExploreActiveIcon = ({ height = '2.4rem', width = '2.4rem' }) => (
    <svg height={height} width={width} color="currentColor" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.173 13.164l1.491-3.829-3.83 1.49zM12.001.5a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012.001.5zm5.35 7.443l-2.478 6.369a1 1 0 01-.57.569l-6.36 2.47a1 1 0 01-1.294-1.294l2.48-6.369a1 1 0 01.57-.569l6.359-2.47a1 1 0 011.294 1.294z"></path>
    </svg>
);

export const HeartIcon = ({ height = '2.4rem', width = '2.4rem', className, ...props }) => (
    <svg
        className={className}
        height={height}
        width={width}
        color="currentColor"
        fill="currentColor"
        viewBox="0 0 24 24"
        {...props}
    >
        <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
    </svg>
);

export const HeartActiveIcon = ({ height = '2.4rem', width = '2.4rem', className, ...props }) => (
    <svg
        className={className}
        height={height}
        width={width}
        color="currentColor"
        fill="currentColor"
        viewBox="0 0 48 48"
        {...props}
    >
        <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
    </svg>
);

export const MediaIcon = ({ height = '7.7rem', width = '9.6rem' }) => (
    <svg height={height} width={width} color="currentColor" fill="currentColor" viewBox="0 0 97.6 77.3">
        <path
            d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z"
            fill="currentColor"
        ></path>
        <path
            d="M84.7 18.4L58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5l-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z"
            fill="currentColor"
        ></path>
        <path
            d="M78.2 41.6L61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6l-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z"
            fill="currentColor"
        ></path>
    </svg>
);

export const ProfileIcon = ({ height = '1.6rem', width = '1.6rem' }) => (
    <svg color="currentColor" fill="currentColor" height={height} width={width} viewBox="0 0 24 24">
        <circle
            cx="12.004"
            cy="12.004"
            fill="none"
            r="10.5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="2"
        ></circle>
        <path
            d="M18.793 20.014a6.08 6.08 0 00-1.778-2.447 3.991 3.991 0 00-2.386-.791H9.38a3.994 3.994 0 00-2.386.791 6.09 6.09 0 00-1.779 2.447"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="2"
        ></path>
        <circle
            cx="12.006"
            cy="9.718"
            fill="none"
            r="4.109"
            stroke="currentColor"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="2"
        ></circle>
    </svg>
);

export const SaveIcon = ({ height = '1.6rem', width = '1.6rem', className, ...props }) => (
    <svg
        className={className}
        color="currentColor"
        fill="currentColor"
        height={height}
        viewBox="0 0 24 24"
        width={width}
        {...props}
    >
        <polygon
            fill="none"
            points="20 21 12 13.44 4 21 4 3 20 3 20 21"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        ></polygon>
    </svg>
);

export const SaveActiveIcon = ({ height = '1.6rem', width = '1.6rem', className, ...props }) => (
    <svg
        color="#262626"
        fill="#262626"
        height={height}
        viewBox="0 0 24 24"
        width={width}
        className={className}
        {...props}
    >
        <path d="M20 22a.999.999 0 01-.687-.273L12 14.815l-7.313 6.912A1 1 0 013 21V3a1 1 0 011-1h16a1 1 0 011 1v18a1 1 0 01-1 1z"></path>
    </svg>
);

export const SettingIcon = ({ height = '1.6rem', width = '1.6rem' }) => (
    <svg color="currentColor" fill="currentColor" height={height} viewBox="0 0 24 24" width={width}>
        <circle
            cx="12"
            cy="12"
            fill="none"
            r="8.635"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        ></circle>
        <path
            d="M14.232 3.656a1.269 1.269 0 01-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 01-.796.66m-.001 16.688a1.269 1.269 0 01.796.66l.505.996h1.862l.505-.996a1.269 1.269 0 01.796-.66M3.656 9.768a1.269 1.269 0 01-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 01.66.796m16.688-.001a1.269 1.269 0 01.66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 01-.66-.796M7.678 4.522a1.269 1.269 0 01-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 01-.096 1.03m11.8 11.799a1.269 1.269 0 011.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 01.096-1.03m-14.956.001a1.269 1.269 0 01.096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 011.03.096m11.799-11.8a1.269 1.269 0 01-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 01-1.03-.096"
            fill="none"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="2"
        ></path>
    </svg>
);
export const SwapIcon = ({ height = '1.6rem', width = '1.6rem' }) => (
    <svg color="currentColor" fill="currentColor" height={height} viewBox="0 0 24 24" width={width}>
        <path d="M8 8.363a1 1 0 00-1-1H4.31a8.977 8.977 0 0114.054-1.727 1 1 0 101.414-1.414A11.003 11.003 0 003 5.672V3.363a1 1 0 10-2 0v5a1 1 0 001 1h5a1 1 0 001-1zm14 6.274h-5a1 1 0 000 2h2.69a8.977 8.977 0 01-14.054 1.727 1 1 0 00-1.414 1.414A11.004 11.004 0 0021 18.33v2.307a1 1 0 002 0v-5a1 1 0 00-1-1z"></path>
    </svg>
);

export const TickIcon = ({ height = '2.4rem', width = '2.4rem' }) => (
    <svg color="currentColor" fill="currentColor" height={height} viewBox="0 0 24 24" width={width}>
        <path d="M12.001.504a11.5 11.5 0 1011.5 11.5 11.513 11.513 0 00-11.5-11.5zm5.706 9.21l-6.5 6.495a1 1 0 01-1.414-.001l-3.5-3.503a1 1 0 111.414-1.414l2.794 2.796L16.293 8.3a1 1 0 011.414 1.415z"></path>
    </svg>
);

export const LoadingIcon = () => {
    <svg viewBox="0 0 100 100">
        <rect
            fill="#555555"
            height="10"
            opacity="0"
            rx="5"
            ry="5"
            transform="rotate(-90 50 50)"
            width="28"
            x="67"
            y="45"
        ></rect>
        <rect
            fill="#555555"
            height="10"
            opacity="0.125"
            rx="5"
            ry="5"
            transform="rotate(-45 50 50)"
            width="28"
            x="67"
            y="45"
        ></rect>
        <rect
            fill="#555555"
            height="10"
            opacity="0.25"
            rx="5"
            ry="5"
            transform="rotate(0 50 50)"
            width="28"
            x="67"
            y="45"
        ></rect>
        <rect
            fill="#555555"
            height="10"
            opacity="0.375"
            rx="5"
            ry="5"
            transform="rotate(45 50 50)"
            width="28"
            x="67"
            y="45"
        ></rect>
        <rect
            fill="#555555"
            height="10"
            opacity="0.5"
            rx="5"
            ry="5"
            transform="rotate(90 50 50)"
            width="28"
            x="67"
            y="45"
        ></rect>
        <rect
            fill="#555555"
            height="10"
            opacity="0.625"
            rx="5"
            ry="5"
            transform="rotate(135 50 50)"
            width="28"
            x="67"
            y="45"
        ></rect>
        <rect
            fill="#555555"
            height="10"
            opacity="0.75"
            rx="5"
            ry="5"
            transform="rotate(180 50 50)"
            width="28"
            x="67"
            y="45"
        ></rect>
        <rect
            fill="#555555"
            height="10"
            opacity="0.875"
            rx="5"
            ry="5"
            transform="rotate(225 50 50)"
            width="28"
            x="67"
            y="45"
        ></rect>
    </svg>;
};

export const MoreActionIcon = ({ className }) => (
    <svg className={className} color="#262626" fill="#262626" height="24" viewBox="0 0 24 24" width="24">
        <circle cx="12" cy="12" r="1.5"></circle>
        <circle cx="6" cy="12" r="1.5"></circle>
        <circle cx="18" cy="12" r="1.5"></circle>
    </svg>
);

export const CommentIcon = ({ className }) => (
    <svg className={className} color="#262626" fill="#262626" height="24" viewBox="0 0 24 24" width="24">
        <path
            d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
            fill="none"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="2"
        ></path>
    </svg>
);

export const SharingIcon = ({ className }) => (
    <svg className={className} color="#262626" fill="#262626" height="24" viewBox="0 0 24 24" width="24">
        <line
            fill="none"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="2"
            x1="22"
            x2="9.218"
            y1="3"
            y2="10.083"
        ></line>
        <polygon
            fill="none"
            points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="2"
        ></polygon>
    </svg>
);

export const EmojiIcon = ({ className }) => (
    <svg className={className} color="#262626" fill="#262626" height="24" viewBox="0 0 24 24" width="24">
        <path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path>
    </svg>
);

//Inbox
export const NewMessage = ({ className }) => (
    <svg className={className} color="#262626" fill="#262626" height="24" role="img" width="24">
        <path
            d="M12.202 3.203H5.25a3 3 0 00-3 3V18.75a3 3 0 003 3h12.547a3 3 0 003-3v-6.952"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        ></path>
        <path
            d="M10.002 17.226H6.774v-3.228L18.607 2.165a1.417 1.417 0 012.004 0l1.224 1.225a1.417 1.417 0 010 2.004z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        ></path>
        <line
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            x1="16.848"
            x2="20.076"
            y1="3.924"
            y2="7.153"
        ></line>
    </svg>
);

export const MoreIcon = ({ className }) => (
    <svg className={className} color="#262626" fill="#262626" height="24" viewBox="0 0 24 24" width="24">
        <circle
            cx="12.001"
            cy="12.005"
            fill="none"
            r="10.5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        ></circle>
        <circle cx="11.819" cy="7.709" r="1.25"></circle>
        <line
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            x1="10.569"
            x2="13.432"
            y1="16.777"
            y2="16.777"
        ></line>
        <polyline
            fill="none"
            points="10.569 11.05 12 11.05 12 16.777"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        ></polyline>
    </svg>
);

export const SendMessageIcon = () => (
    <svg color="#262626" fill="#262626" height="96" role="img" viewBox="0 0 96 96" width="96">
        <circle
            cx="48"
            cy="48"
            fill="none"
            r="47"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        ></circle>
        <line
            fill="none"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="2"
            x1="69.286"
            x2="41.447"
            y1="33.21"
            y2="48.804"
        ></line>
        <polygon
            fill="none"
            points="47.254 73.123 71.376 31.998 24.546 32.002 41.448 48.805 47.254 73.123"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="2"
        ></polygon>
    </svg>
);
