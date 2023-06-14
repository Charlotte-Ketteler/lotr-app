import {introduction} from "/lib/data";

import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Lord of The Rings</h1>
        <p>{introduction}</p>
        <h2>All Volumes</h2>
        <ul> <Link href="/volumes/the-fellowship-of-the-ring">
            <li>The Fellowship Of The Ring</li></Link>
            <Link href="/volumes/the-two-towers">
            <li>The Two Towers</li></Link>
            <Link href="/volumes/the-return-of-the-king">
                <li>The Return Of the King</li>
            </Link>
        </ul>
    </div>
    
  );
}
