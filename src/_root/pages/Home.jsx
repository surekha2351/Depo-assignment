import React from "react";
import { Avatar} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
function Home() {
  return (
    <div className="flex w-full flex-col h-screen justify-between bg-blue-900">
      <section className="flex justify-between items-center px-2 py-2 bg-dark-4 h-20">
        <div className="flex">
          <Avatar className="border-2 border-white"></Avatar>

          <div className="px-3 ">
            <h2>Student Learnings</h2>
            <p className="text-light-3 max-w-[200px] text-xs truncate">
              Online
            </p>
          </div>
        </div>
        <div className="self-start text-sm pr-2">12/3/2023</div>
      </section>
      <div className="flex flex-col gap-4 px-2">
        <div className="flex justify-end">Hii</div>
        <div className="flex flex-start">Hello</div>
      </div>
      <div>
        {" "}
        <div className="flex items-center border-t border-gray-300 px-4 py-3">
          <input
            type="text"
            placeholder="Type a message"
            // value={message}
            // onChange={handleMessageChange}
            className="flex-grow px-3 py-2 bg-gray-200 focus:outline-none border rounded-md mr-4 text-black"
          />
          <Button
            // onClick={handleSendMessage}
            className="shad-button_secondary"
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
