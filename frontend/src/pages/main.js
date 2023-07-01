import { useState } from "react"

const Input = () => {

    const [ingredients, setIngredients] = useState("") // 献立の材料 
    const [flag, setFlag] = useState(false)
    const [menu, setMenu] = useState([
        {
            "ingredients": ["トマト", "鶏肉", "ブロッコリー", "ニンジン"],
            "dish": "トマト鶏のブロッコリーニンジン炒め",
            "recipe": "1. トマト、鶏肉、ブロッコリー、ニンジンを準備します。\n2. フライパンに油を熱し、鶏肉を炒めます。\n3. 鶏肉がこんがりと焼けたら、野菜を加えて炒めます。\n4. 食材が炒められたら、調味料を加えて炒め合わせます。\n5. 火を止めて完成です。"
        },
    ])

    const doSubmit = (e) => {
        // fetch('http://', {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(
        //         {
        //             'ingredients': ingredients,
        //         }
        //     )
        // })
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log(data)
        //         setMenu(data)
        //     })

        setMenu(
            [
                {
                "ingredients": ["トマト", "鶏肉", "ブロッコリー", "ニンジン"],
                "dish": "トマト鶏のブロッコリーニンジン炒め",
                "recipe": "1. トマト、鶏肉、ブロッコリー、ニンジンを準備します。\n2. フライパンに油を熱し、鶏肉を炒めます。\n3. 鶏肉がこんがりと焼けたら、野菜を加えて炒めます。\n4. 食材が炒められたら、調味料を加えて炒め合わせます。\n5. 火を止めて完成です。"
                },
                {
                "ingredients": ["サーモン", "じゃがいも", "ピーマン"],
                "dish": "サーモンじゃがいもピーマンのグリル",
                "recipe": "1. サーモン、じゃがいも、ピーマンを準備します。\n2. グリルパンにサーモンを並べ、じゃがいもとピーマンを添えます。\n3. グリルで両面を焼きます。\n4. 火が通ったら取り出して完成です。"
                },
                {
                "ingredients": ["牛ひき肉", "レモン", "アボカド", "トマト"],
                "dish": "牛ひき肉レモンアボカドトマトのサラダ",
                "recipe": "1. 牛ひき肉、レモン、アボカド、トマトを準備します。\n2. 牛ひき肉を炒めます。\n3. 炒めた牛ひき肉に、レモン、アボカド、トマトを加えます。\n4. 調味料を加えてよく混ぜ、冷蔵庫で冷やします。\n5. 冷えたら完成です。"
                }
            ])
        setFlag(true)
        e.preventDefault()
    }

    const doChangeIngredients = (e) => {
        setIngredients(e.target.value)
    }

    return (
        <div className="container">
            <h1>材料入力</h1>
            <form onSubmit={doSubmit}>
                <p>冷蔵庫の中身の使いたい食材を入力してください（食材ごとに句点を入れてください）</p>
                <textarea name="input" className="form-control" placeholder="じゃがいも、にんじん、牛乳" onChange={doChangeIngredients} />
                <div className="form-group">
                    <input type="checkbox" className="form-check-input" id="pfc-check"/>
                    <label htmlFor="fpc-check">PFCを気にする</label>
                </div>
                <button className="btn btn-primary">検索</button>
            </form>
            {flag && 
            <div>
                <hr/>
                <h1>献立候補</h1>
                {console.log(typeof menu)}
                {menu.map((value) => {
                    <p>{value.dish}</p>
                })}
                <button className="btn btn-primary">他の候補を教えて</button>
            </div>}
        </div>
    )
}

export default Input