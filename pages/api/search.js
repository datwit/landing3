
import posts from '../../cache/data.json' 

posts.map(post => (
  post.Stringtags='',
  post.tags.map(tag =>( 
    post.Stringtags = post.Stringtags + tag.toString()
  ))
))

export default (req, res) => {
  const params = req.query.p
  const results = req.query.q ?
    posts.filter(post => post[params].toLowerCase().includes(req.query.q)) : []
  res.statusCode = 200

  console.log(JSON.stringify({ results }))
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ results }))
}