import { Alert, Button } from "@mui/material";

interface ErrorStateProps {
  error: string;
  onRetry: () => void;
}

export default function ErrorState({ error, onRetry }: ErrorStateProps) {
  return (
    <Alert
      severity="error"
      action={
        <Button color="inherit" size="small" onClick={onRetry}>
          RETRY
        </Button>
      }
    >
      {error}
    </Alert>
  );
}
