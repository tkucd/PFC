import { useState } from "react"

const Input = () => {

    const [flag, setFlag] = useState(false) // 検索結果を出力するかどうか

    const doSubmit = (e) => {
        setFlag(true)
        e.preventDefault()
    }

    return (
        <div className="container">
            <h1>検索画面</h1>
            <form onSubmit={doSubmit}>
                <p>冷蔵庫の中身の使いたい食材を入力してください（食材ごとに句点を入れてください）</p>
                <textarea name="input" className="form-control" placeholder="じゃがいも、にんじん、牛乳"/>
                <div className="form-group">
                    <input type="checkbox" className="form-check-input" id="pfc-check"/>
                    <label htmlFor="fpc-check">PFCを気にする</label>
                </div>
                <button className="btn btn-primary">検索</button>
            </form>
            {flag && 
            <div>
                <h1>検索結果出力</h1>
                <p>献立候補1</p>
                <p>献立候補2</p>
                <p>献立候補3</p>
                <button className="btn btn-primary">他の候補を教えて</button>
            </div>}
        </div>
    )
}

export default Input