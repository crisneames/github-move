import React from 'react';
import './App.css';
import Header from './components/Header.js'
let baseURL = 'http://localhost:3003'

class App extends React.Component {
  constructor (props) {
  super(props)
  this.state = {
    title: '',
    url: '',
    bookmarks: []
  }

 this.handleChange = this.handleChange.bind(this)
 this.handleSubmit = this.handleSubmit.bind(this)
 this.handleAddBookmark = this.handleAddBookmark.bind(this)
}
componentDidMount(){
  this.getBookmark()
}
async getBookmark (){
  try {
    // the async request code you want to try
    let response = await fetch(`${baseURL}/bookmark`)
    let data = await response.json()
    this.setState({bookmarks: data})
  }catch(e){
    // what happens when you get an error
    console.error(e)
  }
}
handleChange(event) {
  this.setState({[event.target.id]: event.target.value})
}

async handleSubmit(event) {
  event.preventDefault()
  try{
      let response =   await fetch(baseURL + '/bookmark', {
          method: 'POST',
          body: JSON.stringify({title: this.state.title, url: this.state.url}),
          headers: {
              'Content-Type': 'application/json'
            }
          })
          let data =  await response.json()
          this.handleAddBookmark(data)
          this.setState({
            title: '',
            url: ''
          })

  } catch (error) {
    console.log(error);
  }

}
handleAddBookmark(bookmark) {
  const copyBookmarks = [bookmark, ...this.state.bookmarks]
  this.setState({
    bookmarks: copyBookmarks,
    title: '',
    url: ''
  })
}
  render() {

    return (
        <div>
            <Header />

            <h4>Add A New Bookmark</h4>
            <form onSubmit={this.handleSubmit}>
            <label htmlFor="title"></label>
            <input type="text" id="title" name="title" onChange={this.handleChange} value={this.state.title} placeholder="website"/>

            <label htmlFor="url"></label>
            <input type="text" id="url" name="url" onChange={this.handleChange} value={this.state.url} placeholder="https://"/>
            <input type="submit" value="Add!"/>
            </form>

            <table className="table table-hover text-centered">
              <tbody>
            {
              this.state.bookmarks.map(

                (bookmark, key) => {
                  return (
                    <tr key={key}>
                      <td><a href={bookmark.url} className="list-group-item list-group-item-action">{bookmark.title}  </a></td>
                         


                    </tr>
                  )
                }

              )
            }
            </tbody>
          </table>
          </div>
  )
}
}
export default App
