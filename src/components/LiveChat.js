import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { generateRandomName, getQuote } from "../utils/helpers";
import { addMessage } from "../utils/liveChatSlice";

const LiveChatMessage = ({ name, message }) => {
  console.log(name, message);
  return (
    <div className="flex mx-2 border border-grey-200">
      <img className=" w-12 " src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg" alt="icon" />
      <span className="pl-2">{name}</span>
      <span className="pl-2">{message}</span>
    </div>
  );
};

const LiveChat = () => {
  const messageData = useSelector((store) => store.liveChat.messages);
  const dispatch = useDispatch();
  const [addedMessage, setAddedMessage] = useState("");

  useEffect(() => {
    const chatTimer = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: getQuote(),
        })
      );
    }, 1500);

    return () => {
      clearInterval(chatTimer);
    };
  }, []);
  return (
    <>
      <div className="h-[700px] overflow-y-auto">
        {messageData.map((data, index) => (
          <LiveChatMessage key={index} name={data.name} message={data.message} />
        ))}
      </div>

      <div className="flex">
        <input type="text" value={addedMessage} onChange={(e) => setAddedMessage(e.target.value)} />
        <button
          className="p-2 mx-2 border rounded-lg"
          onClick={() => {
            dispatch(
              addMessage({
                name: "Vidhya",
                message: addedMessage,
              })
            );
            setAddedMessage("");
          }}
        >
          Send
        </button>
      </div>
    </>
  );
};

export default LiveChat;
