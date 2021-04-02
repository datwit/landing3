
import posts from '../../cache/data.json' 


export default (req, res) => {
  const results = req.query.q ?
    posts.filter(post => post.title.toLowerCase().includes(req.query.q)) : []
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ results }))

 
}