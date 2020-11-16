import Vue from "vue";
import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";

Vue.use(VueApollo);

const uri = "https://pangaea-interviews.now.sh/api/graphql";

const apolloClient = new ApolloClient({
  uri
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});


export default apolloProvider;