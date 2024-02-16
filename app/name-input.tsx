interface Props {
    name: string | undefined
}
export default function NameInput(props: Props) {
    return (
        <input placeholder={props.name || "you name"} className="outline-offset-2 absolute top-[30px] left-[30px] outline-none focus:outline-2 p-2 rounded-[10px] focus:dark:outline-white  border-none" />
    )
}