import { ReactNode } from "react"

interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement & HTMLTextAreaElement> {
    title: string,
    isTextArea?: boolean,
    mainClass?: string,
    iconBefore?: ReactNode,
    iconAfter?: ReactNode
}

export function InputWithLabel({ title, isTextArea, iconBefore, iconAfter, ...rest }: InputProps) {
    return (
        <>
            {isTextArea ?
                <textarea className="textarea textarea-bordered bg-transparent" placeholder={title} {...rest}></textarea>
                :
                <label className="input input-bordered flex items-center gap-2 bg-transparent">
                    {iconBefore}
                    <input className="grow" placeholder={title} {...rest} />
                    {iconAfter}
                </label>
            }
        </>
    )
}