import React from "react";

const EachComment = ({ data }) => {
  return (
    <div className="flex my-5 shadow-lg bg-gray-100">
      <img className=" w-12 " src={data.img} alt="icon" />
      <p className="pl-2">{data.text}</p>
    </div>
  );
};

const CommentsList = ({ data }) => {
  return data.map((eachData, index) => (
    <div>
      <EachComment key={index} data={eachData} />

      <div className="mt-5 pl-5 border-l-2 border-gray-400">
        <CommentsList  key={"comments-list " + index} data={eachData.replies} />
      </div>

    </div>
  ));
};

export default CommentsList;
