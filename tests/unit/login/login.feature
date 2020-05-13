      #language: zh-TW
      功能: 成功登入至預設畫面

      場景大綱: 用戶登入醫院管理系統
      假設 用戶的身分為 <identity>
      當 用戶輸入 <userName> 與 <password>
      當 前台驗證用戶名稱與密碼
      當 Post api
      那麼 成功登入後，預設畫面的側邊選單功能應為 <response>

      例子:
      | identity | userName | password       | response                                      |
      | admin    | admin    | Admin1234      | Admin's function list , the format is JSON .  |
      | staff    | staff    | Staff0000      | Staff's function list , the format is JSON .  |
      | doctor   | Jun0825  | MyPassword1234 | Dcotor's function list , the format is JSON . |