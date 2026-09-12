import type { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export default function ErrorMessage({ children }: Props) {
    return (
        <div role="alert" className="alert alert-error alert-soft">
            {children}
        </div>
    );
}