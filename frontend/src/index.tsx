import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const rootContainer = document.getElementById("root");
const root = createRoot(rootContainer!);

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 0
        }
    }
});

root.render(
    <QueryClientProvider client={queryClient}>
        <App/>
    </QueryClientProvider>
);