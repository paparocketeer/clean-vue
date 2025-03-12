import { FallbackProps } from 'react-error-boundary';

interface ErrorBoundaryFallbackProps
  extends Pick<FallbackProps, 'resetErrorBoundary'> {
  error?: { message?: string };
}

export function ErrorBoundaryFallback({ error }: ErrorBoundaryFallbackProps) {
  const errorMessage = error?.message ?? 'Unknown rendering error';

  return (
    <div role='alert'>
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{errorMessage}</pre>
    </div>
  );
}
