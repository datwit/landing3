
import posts from '../../cache/data.json' 

posts.map(post => (
  post.Stringtagss='',
  post.tags.map(tag =>( 
    post.Stringtags = post.Stringtagss + tag.toString()
  ))
))

export default (req, res) => {
  //console.log(posts, req.query.q, req.query.p)
  const params = req.query.p
  const results = req.query.q ?
    posts.filter(post => post[params].toLowerCase().includes(req.query.q)) : []
  res.statusCode = 200

  console.log(JSON.stringify({ results }))
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ results }))
}