// this is a serverless function
// this is dynamic route

export default function handler(req, res) {
  const { pid } = req.query
  res.end(`Received: ${pid}`)
}
