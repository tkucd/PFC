// import Link from "next/link"
import Image from 'next/image'

const Header = () => {
    return (
        <div className="bg-primary text-white display-4">
            <Image src="/logo.png" width={128} height={64} alt="ロゴ画像" />
        </div>
    )
}

export default Header