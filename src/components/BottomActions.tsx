import { useState } from "react";
import { Store, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import HelmetSelector from "./HelmetSelector";
import { Perfume } from "@/data/perfumes";

interface BottomActionsProps {
  perfume: Perfume;
}

const BottomActions = ({ perfume }: BottomActionsProps) => {
  const [selectorOpen, setSelectorOpen] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border z-50 shadow-lg">
      <div className="flex items-center gap-2 px-3 py-2.5 pb-safe">
        {/* Loja Button */}
        <button className="flex flex-col items-center justify-center gap-0.5 px-2 hover:bg-muted/50 rounded transition-colors min-w-[50px]">
          <Store className="w-4 h-4 text-foreground" />
          <span className="text-[10px] text-foreground">Loja</span>
        </button>
        
        {/* Chat Button */}
        <button className="flex flex-col items-center justify-center gap-0.5 px-2 hover:bg-muted/50 rounded transition-colors min-w-[50px]">
          <MessageSquare className="w-4 h-4 text-foreground" />
          <span className="text-[10px] text-foreground">Chat</span>
        </button>
        
        {/* Comprar agora */}
        <Button 
          variant="default" 
          className="flex-1 h-10 font-medium text-sm bg-primary hover:bg-primary/90 text-primary-foreground"
          onClick={() => setSelectorOpen(true)}
        >
          Comprar agora
        </Button>
      </div>

      <HelmetSelector 
        open={selectorOpen} 
        onOpenChange={setSelectorOpen}
        perfume={perfume}
      />
    </div>
  );
};

export default BottomActions;
