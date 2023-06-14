import {volumes} from "lib/data.js";
import Link from "next/link";

export default function TheFellowshipOfTheRings(){
    const slug = volumes.find(({slug}) => slug === "the-fellowship-of-the-ring");
    
    return (
        <>
        <Link href="../index"><p>All Volumes</p></Link>
        <h1>{slug.title}</h1>
        <p></p>
        </>
    )
}