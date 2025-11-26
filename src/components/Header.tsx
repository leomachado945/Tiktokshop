import { X, Share2, ShoppingCart, MoreHorizontal } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-muted/30 backdrop-blur-sm">
      <div className="flex items-center justify-between px-4 py-3">
        <button className="p-1 hover:bg-muted/50 rounded-lg transition-colors">
          <X className="w-6 h-6 text-foreground" />
        </button>
        
        <div className="flex items-center gap-4">
          <button className="p-1 hover:bg-muted/50 rounded-lg transition-colors">
            <Share2 className="w-6 h-6 text-foreground" />
          </button>
          <button className="p-1 hover:bg-muted/50 rounded-lg transition-colors">
            <ShoppingCart className="w-6 h-6 text-foreground" />
          </button>
          <button className="p-1 hover:bg-muted/50 rounded-lg transition-colors">
            <MoreHorizontal className="w-6 h-6 text-foreground" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
