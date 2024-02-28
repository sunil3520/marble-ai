import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
import {ChakraProvider} from "@chakra-ui/react"

root.render(
    <React.StrictMode>
        <ChakraProvider>
        <App />
        </ChakraProvider>
       
    </React.StrictMode>,
);
