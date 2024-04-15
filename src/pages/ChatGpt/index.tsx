

import { ChatOpenAI } from "langchain/chat_models/openai";
import './index.scss'
import { useEffect } from "react";

const ChatGpt = function() {
    useEffect(() => {
        console.log('ChatOpenAI>>>', ChatOpenAI)
    }, [])
    return (
        <div className="ChatGpt">
            ChatGpt
        </div>
    )
}

export default ChatGpt