import Link from "next/link";
export default function MealsPage() {
    return <main>
        <h1>Meals Page</h1>
        <p>
            <Link href="meals/share">Share</Link>
        </p>
        <p>
            <Link href="meals/something">Page 1</Link> 
        </p>
        <p>
            <Link href="meals/somethingelse">Page 2</Link> 
        </p>
    </main>;
}