var React = require('react'),
    ReactDom = require('react-dom'),
    LeftMenus = require('./modules/left');
var App = React.createClass({
  render:function(){
    return(
      <div className="content">
        <div className="syshead">
          <div className="clearfix">
            <p className="right"><span> 小玩</span><a title="退出系统" href="javascript:void(0);" className="outsys"> 退出<img src="public/img/3.gif" width="16" height="16" alt="" /></a></p>
          </div>
        </div>
        <div className="sysmain clearfix">
          <div className="sysmenua">
            <LeftMenus />
          </div>
          <div className="article-right new-article">
            <input type="text" name="title" placeholder="标题区域" className="t-title" />
            <div className="toolbar">
              <div className="pull-right publish-button-item publish-article"><a href="javascript:void(null)" data-action="publicize" id="publish-button"><span className="fa fa-mail-forward"> 发布文章</span></a></div>
            </div>
            <textarea name="content" placeholder="内容区域" className="t-content"></textarea>
          </div>
          <div className="article-right article-list clearfix">
            <div className="sysmenub">
              <p className="smenubtit"> 文章列表</p>
              <ul>
                <li><a href="javascript:void(0);" className="current"> 文章一</a></li>
                <li><a href="javascript:void(0);"> 文章二</a></li>
              </ul>
            </div>
            <div className="sysinfo"></div>
          </div>
        </div>
      </div>
    )
  }
});
ReactDom.render(<App />,document.getElementById('all'));