import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!!</h4>
          Are you Sure!!!
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          time="Today 12:00 PM"
          textMessage="Good Blog!!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          time="Today 06:00 PM"
          textMessage="Nice Blog!!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Pina"
          time="Yesterday 08:00 AM"
          textMessage="Hello Sir"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
