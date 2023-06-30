import Link from "next/link"

const Header = () => {
    return (
        <div className="bg-primary text-white display-4">
            <Link href="/">献立メーカー（仮）</Link>
            <Link href="/login">Login</Link>
        </div>
    )
}

export default Header