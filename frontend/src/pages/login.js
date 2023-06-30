import { useRouter } from 'next/router'

const Login = () => {
    const router = useRouter()

    const doLogin = (e) => {
        e.preventDefault()
        router.push("/main")
    }

    return (
        <div className='container'>
            <h1>ユーザー情報登録</h1>
            <form>
                <div className='form-group'>
                    <label for="name">名前：</label>
                    <input type="text" id="name" placeholder="山田　太郎" />
                </div>
                <div className='form-group'>
                    <label for="height">身長：</label>
                    <input type="text" id="height" placeholder="170" />
                </div>
                <div className='form-group'>
                    <label for="weight">体重：</label>
                    <input type="text" id="weight" placeholder="65" />
                </div>
                <button className="btn btn-primary" onClick={doLogin}>登録</button>
            </form>
        </div>
    )
}

export default Login