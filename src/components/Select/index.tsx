interface ISelect {
    icon: any
    option: any
    name: string
    label: string
    onChange: void | any
    value: string | number
    defaultValue: string | number
}

const Select = (props: ISelect) => {
    return (
        <div className="flex flex-col gap-2 px-4">
            <label htmlFor={props.name} className="font-semibold text-white">{props.label}</label>
            <div className="rounded-full flex items-center p-[12px_16px] bg-white w-full transition-all duration-300 focus-within:ring-2 focus-within:ring-[#FF8E62]">
                <div className="w-6 h-6 flex shrink-0 mr-[6px]">
                    {props.icon}
                </div>
                <select name={props.name} defaultValue={props.defaultValue} onChange={props.onChange} className=" bg-white font-semibold w-full outline-none cursor-pointer">
                    {
                        props.option.map((el: any, idx: number) => (
                            <option value={el.value} key={idx} selected>{el.label}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}

export default Select