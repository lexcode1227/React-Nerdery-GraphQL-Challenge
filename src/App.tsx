import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

function App() {
  const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>Rick and Morty</h1>
      </div>
    </ApolloProvider>
  );
}

export default App;
