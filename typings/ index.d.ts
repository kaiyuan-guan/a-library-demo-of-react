// index.d.ts

declare module 'guan-library' {
    import React from 'react';

    interface ButtonProps {
        onClick?: () => void;
        text?: string;
        backgroundcolor?: string;
        width?: string;
        height?: string;
    }

    const Button: React.FC<ButtonProps>;

    export { Button };
}
