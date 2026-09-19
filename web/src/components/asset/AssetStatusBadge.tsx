type Props = {
    status: string;
    children: React.ReactNode;
};

export default function AssetStatusBadge({ status, children }: Props) {
    let badgeClass = '';

    switch (status) {
        case 'available':
            badgeClass = 'badge-success';
            break;

        case 'assigned':
            badgeClass = 'badge-info';
            break;

        case 'reserved':
        case 'under_repair':
        case 'under_maintenance':
            badgeClass = 'badge-warning';
            break;

        case 'defective':
        case 'quarantined':
        case 'stolen':
        case 'retired':
            badgeClass = 'badge-error';
            break;

        default:
            badgeClass = 'badge-neutral';
    }

    return (
        <span className={`badge badge-soft badge-lg gap-2 ${badgeClass}`}>
            {children}
        </span>
    );
}
