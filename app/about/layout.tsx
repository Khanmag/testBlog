import Link from "next/link";
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "About us",
    description: "page with info about us",
}

export default function AboutLayout({ children, }: { children: React.ReactNode }) {
    return <div>
        <h1>About us</h1>
        <ul>
            <li><Link href={"/about/contacts"}>Contacts</Link></li>
            <li><Link href={"/about/team"}>Team</Link></li>
        </ul>
        {children}
    </div>
}