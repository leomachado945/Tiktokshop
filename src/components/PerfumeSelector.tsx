import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { perfumes } from "@/data/perfumes";

interface PerfumeSelectorProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PerfumeSelector = ({ open, onOpenChange }: PerfumeSelectorProps) => {
  const [selectedPerfume, setSelectedPerfume] = useState("");

  const handleConfirm = () => {
    if (selectedPerfume) {
      const perfume = perfumes.find(p => p.id.toString() === selectedPerfume);
      if (perfume) {
        const params = window.location.search;
        window.location.href = perfume.checkoutUrl + params;
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            Escolha seu perfume
          </DialogTitle>
        </DialogHeader>

        <RadioGroup value={selectedPerfume} onValueChange={setSelectedPerfume}>
          <div className="space-y-3">
            {perfumes.map((perfume) => (
              <div
                key={perfume.id}
                className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors ${
                  selectedPerfume === perfume.id.toString() ? "border-primary bg-muted/50" : "border-border"
                }`}
                onClick={() => setSelectedPerfume(perfume.id.toString())}
              >
                <RadioGroupItem value={perfume.id.toString()} id={perfume.id.toString()} />
                <img
                  src={perfume.image}
                  alt={perfume.name}
                  className="w-16 h-16 object-contain"
                />
                <Label
                  htmlFor={perfume.id.toString()}
                  className="flex-1 cursor-pointer text-sm font-medium"
                >
                  {perfume.name}
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>

        <div className="flex gap-2 mt-4">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="flex-1"
          >
            Cancelar
          </Button>
          <Button
            onClick={handleConfirm}
            disabled={!selectedPerfume}
            className="flex-1"
          >
            Confirmar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PerfumeSelector;
