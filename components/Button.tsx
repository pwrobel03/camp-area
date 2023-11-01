import React from 'react'
type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant: 'btn_dark_green'

}
import Image from 'next/image';

const Button = ({ type, title, icon, variant }: ButtonProps) => {
    return (
        <button type={type} className={`flex items-center gap-2 justify-center rounded-full border ${variant}`}>
            {icon && <Image
                loading={"lazy"}
                src={icon}
                alt={title}
                width={24}
                height={32}
                className="w-full h-auto"
            />}
            <label className='bold-16'>{title}</label>
        </button >
    )
}

export default Button
