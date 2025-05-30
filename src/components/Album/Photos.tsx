import { useState } from "react";
import type { iPhoto } from "./interface";
import { Image } from 'antd';

export default function Photos(p: { ls: iPhoto[] }) {
    return (
        <div className="flex flex-wrap gap-2 text-sm mt-4">
            <Image.PreviewGroup>
                {p.ls.map((v) => {
                    return (
                        <div
                            className="col-span-1 self-center w-37.5 relative box-content">
                            <Image src={v.thumbnailUrl} className="w-37.5" alt={v.title} srcSet="" />
                        </div>
                    )
                })}
            </Image.PreviewGroup>

        </div>
    )
}