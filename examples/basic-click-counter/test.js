/// <reference path="../../build/react.js" />
/// <reference path="../../build/react-dom.js" />

var CommentBox = React.createClass({
    render: function () {
        return (
            <div className="commentBox">
            Hello, i am a comment box.
        </div>
        );
    }
});

ReactDOM.render(
    <CommentBox />,
    document.getElementById('content')
);

