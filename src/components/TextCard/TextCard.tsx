import React from 'react'

type Props = {
    title: string,
    subtitle: string
    content: string,
    onClickTrash: React.MouseEventHandler<HTMLButtonElement>
    onClick: React.MouseEventHandler<HTMLDivElement>
}

const TextCard = ({ title, subtitle, content, onClickTrash, onClick }: Props) => {
    return (
        <div
            className="relative flex h-full flex-col rounded-md border border-gray-200 bg-white p-2.5 hover:border-gray-400 sm:rounded-lg sm:p-5">
            <span className="text-md mb-0 font-semibold text-gray-900 hover:text-black sm:mb-1.5 sm:text-xl">
                {title}
            </span>
            <span className="text-sm leading-normal text-gray-400 sm:block">
                {subtitle}
            </span>
            <span className="text-sm leading-normal text-gray-400 sm:block">
                {content}
            </span>
        </div>
    )

}
export default TextCard