import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Button,
} from "@gothammm/hati";
import { PreviewContainer } from "./PreviewContainer";

export const DialogPreview = () => {
  return (
    <PreviewContainer
      id="dialog"
      classList={{
        "col-span-1": true,
      }}
    >
      <h2 class="mb-4 text-xl font-medium">Dialog</h2>
      <Dialog>
        {(useDialog) => {
          const { close } = useDialog();
          return (
            <>
              <DialogTrigger>
                <Button>Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Dialog Title</DialogTitle>
                  <DialogDescription>Dialog Description</DialogDescription>
                </DialogHeader>
                <div class="mt-6 grid grid-cols-2 gap-4">
                  <Button variant="outline" onClick={close}>
                    Cancel
                  </Button>
                  <Button onClick={close}>Confirm</Button>
                </div>
              </DialogContent>
            </>
          );
        }}
      </Dialog>
    </PreviewContainer>
  );
};
