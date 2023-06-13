import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

export default function Button(
    {
        name, 
        srcs, 
        className
    }:{ 
        name?:string; 
        srcs:string | Url; 
        className?:string
    }) {
    return (
        <Link href={srcs} className={className} >
            {name}
        </Link>
    );
}