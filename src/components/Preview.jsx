import React, { Component } from 'react'
import  {marked}    from 'marked'

export default class Preview extends Component {

  constructor(props) {
    super(props)
    
    this.state =
    {
      input:
      `# Welcome to my React Markdown Previewer!
      \n## This is a sub-heading...
      \n### And here's some other cool stuff:
      
      \nHeres some code, \`<div></div>\`, between 2 backticks.
      
      \n\`\`\`
      // this is multi-line code:
      
      function anotherExample(firstLine, lastLine) {
        if (firstLine == \'\`\`\`\' && lastLine == \'\`\`\`\') {
          return multiLineCode;
        }
      }
      \`\`\`
      
      \nYou can also make text **bold**... whoa!
      \nOr _italic_.
      \nOr... wait for it... **_both!_**
      \n feel free to go crazy ~~crossing stuff out~~.
      
      \nThere's also [links](https://www.freecodecamp.org), and
      \n> Block Quotes!
      
      
      
      \n- And of course there are lists.
        \n- Some are bulleted.
          \n- With different indentation levels.
           \n   - That look like this.
      
      
      \n1. And there are numbered lists too.
      \n1. Use just 1s if you want!
      \n1. And last but not least, let's not forget embedded images:
      \n![freeCodeCampLogo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

     
      
     `
    }
    this.handleChange=this.handleChange.bind(this)
  } 
  
  handleChange=(e)=>
  {
    this.setState({input:e.target.value})
  }
  render() {
    marked.setOptions({
      breaks: true  
      })
    return (
      <>
     
      <textarea style={{resize: 'vertical'}} onChange={this.handleChange} value={this.state.input} id="editor" rows={10} cols={20} >
       
     </textarea>
      <div id='preview'  dangerouslySetInnerHTML={{__html:marked(this.state.input)}}>
     
      </div>
      </>
    )
  }
}
