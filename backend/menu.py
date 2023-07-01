import openai

openai.api_key = "API_KEY"

def get_menu(ingredients):
    res = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {
                "role": "system",
                "content":  """
                            食材リストが与えられた際に，以下のフォーマットに従って値を抽出せよ。

                            # フォーマット
                            {
                                'menu': [
                                    {
                                        'ingredients': 食材リストにある食材から1品または2品または3品または4品,
                                        'dish': 食材を使った料理名,
                                        'recipe': 料理の作り方,
                                    },
                                ]
                            }
                            キーは必ず含ませる。
                            JSON以外の情報は削除する。
                            ingredientsには元のテキストに含まれる文字列だけを値として使う。
                            該当する情報がない場合nullにする。
                            """
            },
            {
                "role": "user",
                "content": f"食材リスト: {ingredients}"
            },
        ],
    )
    return res["choices"][0]["message"]["content"]

if __name__ == "__main__":
    ingredients = "トマト、鶏肉、ブロッコリー、ニンジン"
    print(get_menu(ingredients))