import { ChatTeardropText } from "phosphor-react";
import { Popover } from "@headlessui/react"
import { WidgetForm } from "./WidgetForm";

export function Widget() {

  return (
    <Popover className="fixed  bottom-20 right-5 flex flex-col items-end">

      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>

      <Popover.Button className="bg-violet-500 rounded-full px-3 h-12 text-white flex items-center group" >

        <ChatTeardropText className="w-6  h-6" />

        <span className="max-w-0 overflow-hidden group-hover:max-w-sm transition-all duration-500">Feedback</span>


      </Popover.Button>
    </Popover>
  );
}