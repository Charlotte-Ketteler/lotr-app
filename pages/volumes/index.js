import {introduction} from "../../lib/data";

export default function LordOfTheRings(){

    return (
        <>
        <h1>Lord of The Rings</h1>
        <p>{introduction}</p>
        <h2>All Volumes</h2>
        <ul>
            <li>The Fellowship Of The Ring<Link href="./the-fellowship-of-the-ring"></Link></li>
        </ul>
        </>
    )
}