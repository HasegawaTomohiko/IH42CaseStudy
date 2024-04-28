// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    msg : "これはクライアント独自で設定したリクエスト(/api/hello)のテストレスポンスです。$RES{IH42_CLENT_API}"
  });
}
