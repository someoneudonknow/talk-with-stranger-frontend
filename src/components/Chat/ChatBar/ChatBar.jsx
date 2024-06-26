import { Send } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import ChatMessageItem from "../ChatMessageItem/ChatMessageItem";

const ChatBar = ({ messages }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Stack
        spacing={1}
        sx={{
          overflow: "auto",
          paddingBottom: "10px",
          width: "100%",
          display: "flex",
        }}
      >
        {messages.map((message, i) => (
          <ChatMessageItem
            key={i}
            avatarSrc={message.avatar}
            active={message.isSender}
            messageRight={!message.isSender}
            sendAt={message.sendAt}
            text={message.text}
            username={message.userName}
          />
        ))}
      </Stack>
      <div ref={messagesEndRef} />
    </Box>
  );
};

export default ChatBar;
