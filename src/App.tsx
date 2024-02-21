import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RootRouter from "./routes/RootRouter";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Enable refetch on window focus
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RootRouter />
    </QueryClientProvider>
  );
}

export default App;
