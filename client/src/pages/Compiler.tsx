import CodeEditor from "@/components/ui/CodeEditor";
import HelperHeader from "@/components/ui/HelperHeader";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";


export default function Compiler() {
  return (

    <ResizablePanelGroup
      direction="horizontal">
      <ResizablePanel defaultSize={50} className="h-[calc(100dvh-60px)] min-w-[350px]">
        <HelperHeader/>
      <CodeEditor/>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50} className="h-[calc(100dvh-60px)] min-w-[350px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis inventore quam veritatis iusto unde animi vitae repellat, sint quisquam alias!
      </ResizablePanel>
    </ResizablePanelGroup>
   

  )
}
          