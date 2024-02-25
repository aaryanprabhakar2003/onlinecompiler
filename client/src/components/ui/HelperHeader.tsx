
import { SaveAll, Share2 } from "lucide-react";
import { Button } from "./button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"


export default function HelperHeader() {
  return (
    <div className="__helper_header h-[50px] bg-black text-white p-2  flex justify-between items-center">
        <div className="__btn_container  flex gap-2">
            <Button variant="success" className="flex justify-center items-center gap-1"><SaveAll size={16} />Save</Button>
            <Button variant="secondary" className="flex justify-center items-center gap-1 "><Share2 size={16} />Share</Button>

        </div>
        <div className="__tab_switcher">
        <Select defaultValue="html">
  <SelectTrigger className="w-[180px] bg-gray-800 outline-none focus:ring-0">
    <SelectValue/>
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="html">HTML</SelectItem>
    <SelectItem value="css">CSS</SelectItem>
    <SelectItem value="javascript">JAVASCRIPT</SelectItem>
  </SelectContent>
</Select>
        </div>
    </div>
  )
}
