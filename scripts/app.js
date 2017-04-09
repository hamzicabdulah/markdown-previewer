let Markdown = React.createClass({
  getInitialState: function () {
    const initialResult = 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*';
    return {result: initialResult};
  },
  updateResult: function (e) {
    this.setState({
      result: e.target.value
    });
  },
  render: function () {
    return (
      <div>
        <textarea onChange={this.updateResult} value={this.state.result}></textarea>
        <div className="result" dangerouslySetInnerHTML={{__html: marked(this.state.result, {sanitize: true})}}></div>
      </div>
    );
  }
});

ReactDOM.render(<Markdown />, document.getElementById('app'));
