import type { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

export default function PageHeadline({ children }: Props) {
    return <h1 className="text-3xl font-bold p-4">{children}</h1>;
}
