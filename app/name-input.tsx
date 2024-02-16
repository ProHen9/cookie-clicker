interface Props {
    name: string | undefined
}
export default function NameInput(props: Props) {
    return (
        <input placeholder={props.name || "you name"} className="outline-offset-2 p-2 rounded-[10px] dark:outline-white outline-dashed border-none" />
    )
}