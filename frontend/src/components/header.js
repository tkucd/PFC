// import Link from "next/link"
import Image from 'next/image'

const Header = () => {
    return (
        <nav class="navbar navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <Image src="/logo.png" width={128} height={64} alt="ロゴ画像" />
                </a>
            </div>
        </nav>
    )
}

export default Header