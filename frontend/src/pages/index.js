import Head from 'next/head'
import { useState } from "react"
import Header from '../components/header'
import Footer from '../components/footer'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [ingredients, setIngredients] = useState("") // 献立の材料 
  const [pfc, setPFC] = useState(false) // pfcを考慮するかどうか
  const [menu, setMenu] = useState([])

  const doSubmit = (e) => {
      fetch('http://localhost:5000/', {
          method: "POST",
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(
              {
                  'ingredients': ingredients,
              }
          )
      })
      .then(res => res.json())
      .then(data => setMenu(data.menu))

      e.preventDefault()
  }

  const doChangePFC = (e) => {
    setPFC(e.target.checked)
  }

  const doChangeIngredients = (e) => {
      setIngredients(e.target.value)
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="container m-5">
          {/* <h1>材料入力</h1> */}
          <form onSubmit={doSubmit}>
              <div>
                <label HTMLFor="input" className='form-label'>冷蔵庫の中身の使いたい食材を入力してください（食材ごとに句点を入れてください）</label>
                <textarea id="input" className="form-control" placeholder="例）じゃがいも、にんじん、牛乳" onChange={doChangeIngredients} />
              </div>
              <div className="form-group">
                  <input type="checkbox" className="form-check-input" onChange={doChangePFC} id="pfc-check"/>
                  <label htmlFor="fpc-check">PFCを気にする</label>
              </div>
              {pfc && 
                <div className='container'>
                    <div className='form-group'>
                        <label htmlFor="height">身長：</label>
                        <input type="text" id="height" placeholder="170" />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="weight">体重：</label>
                        <input type="text" id="weight" placeholder="65" />
                    </div>
                </div>}
              <button className="btn btn-primary">検索</button>
          </form>
          {menu.length != 0 && 
            <div>
                <hr/>
                <h1>献立候補</h1>
                {menu.map((value, index) => 
                  <div key={index} className='card'>
                    <div className='card-body'>
                      <h5 className='card-title'>「{value.dish}」</h5>
                      <h6 className='card-subtitle'>材料：{value.ingredients}</h6>
                      <p className='card-text'>レシピ：{value.recipe}</p>
                    </div>
                  </div>
                )}
                <button className="btn btn-primary">他の候補を教えて</button>
            </div>}
      </div>
      <Footer />
    </>
  )
}
