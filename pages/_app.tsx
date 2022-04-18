import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import { PersistGate } from "redux-persist/integration/react";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store, persistor } from "../redux/store";

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
