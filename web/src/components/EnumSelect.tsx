type Props = {
    id: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: Record<string, string>;
    useKeyAsValue?: boolean;
};

export function EnumSelect({
    id,
    name,
    value,
    onChange,
    options,
    useKeyAsValue = false,
}: Props) {
    return (
        <select
            id={id}
            name={name}
            className="input"
            value={value}
            onChange={onChange}
        >
            <option value="">Please choose</option>

            {Object.entries(options).map(([key, value]) => (
                <option
                    key={key}
                    value={useKeyAsValue ? key : value}
                >
                    {value}
                </option>
            ))}
        </select>
    );
}
