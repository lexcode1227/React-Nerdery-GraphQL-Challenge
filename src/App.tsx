import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Characters from "./pages/Characters";

function App() {
  const client = new ApolloClient({
    uri: import.meta.env.VITE_REACT_APP_GRAPHQL_URI,
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Characters />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
