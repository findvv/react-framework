var React = require('react');
module.exports = React.createClass({
  render:function(){
    return(
      <ul>
        <li className="li-add"><a href="javascript:void(0);" className="current"> 新建文章</a></li>
        <li className="li-list"><a href="javascript:void(0);"> 文章列表</a></li>
      </ul>
    )
  }
})