
/**
 * 
 * テスト用クライアントページ
 * 実行確認が終りましたら、削除を推奨いたします。
 * 
 */

import axios from "axios";
import { useEffect, useState } from "react";

export default function test() {
    
  const [testGetResult,setTestGetResult] = useState([]);
  const [testPostForm, setTestPostForm] = useState("");
  const [testPostResult, setTestPostResult] = useState([]);
  const [testClientGet, setTestClientGet] = useState("");

  //ページをビルドした時に一回だけ実行する
  useEffect(() => {
    const testUseEffect = async () => {
      
      await axios.get('http://localhost:4000/test')
      .then(res => {
        setTestGetResult(res.data);
      }).catch(error => {
        setTestGetResult("サーバーサイドGETレスポンスエラー");
      });

      await axios.get('/api/hello')
      .then(res => {
        console.log(res.data);
        setTestClientGet(res.data.msg);
      })
      .catch(error => {
        setTestClientGet("クライアントサイドGETレスポンスエラー");
      });
    }

    testUseEffect();
  },[]);

  // フォームを入力している時のプログラム(入力系なら必須)
  const handleTestFormChange = (event) => {
    setTestPostForm(event.target.value);
  }

  // ボタンを押したときのプログラム
  const handleSubmit = async (event) => {
    event.preventDefault();

    try{
      const res = await axios.post('http://localhost:4000/test',{
        text : testPostForm
      });

      if(res.status !== 200) {
        throw new Error('フォームの送信に失敗しました');
      }

      console.log(res.data);
      setTestPostResult(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  // 表示するページ部分
  return (
    <>
      <div>
        <h1>
          クライアント起動確認完了
        </h1>
        <p>クライアントは正常に動作しました。</p>
      </div>

      <div>
        <h1>対サーバーGET送信確認</h1>
        <p>サーバー側のテストGETAPIにアクセスして、適切なレスポンス結果が得られるかを確かめます。(本来ならばuseEffectを使用します)</p>
        <p>リクエストURL : GET http://localhost:4000/test</p>
        <p>レスポンス : { testGetResult }</p>
      </div>

      <div>
        <h1>対サーバーPOST送信確認</h1>
        <p>サーバーに入力データをPOSTして適切なレスポンス結果が得られるかを確かめます。</p>
        <p>リクエストURL : POST http://localhost:4000/test </p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="test" value={testPostForm} onChange={handleTestFormChange}/>
          <button type="submit">submit</button>
        </form>
        <p>レスポンス : { testPostResult }</p>
      </div>

      <div>
        <h1>対クライアントサーバーGET送信</h1>
        <p>クライアントサーバー側独自のAPIを呼び出して適切なレスポンス結果が得られるかを確かめます</p>
        <p>リクエストURL : GET /api/hello</p>
        <p>レスポンス : { testClientGet }</p>
      </div>
    </>
  )
}