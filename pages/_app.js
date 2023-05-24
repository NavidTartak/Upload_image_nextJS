import { Store } from "@/redux/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import Loader from "@/components/main/Loader";
import localFont from "next/font/local";
const iranSansWeb = localFont({ src: "../public/fonts/IRANSansWeb.woff" });
export default function App({ Component, pageProps }) {
  const persistor = persistStore(Store);
  return (
    <Provider store={Store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <div className={iranSansWeb.className}>
          <Component {...pageProps} />
        </div>
      </PersistGate>
    </Provider>
  );
}
