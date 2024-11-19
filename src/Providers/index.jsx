import { ConfigProvider } from "./../Providers/ConfigProvider";
import { SessionProvider } from "./../Providers/SessionProvider";
import { CartProvider } from "./../Providers/CartProvider";
import { SnackbarProvider } from "notistack";

function MasterProvider({ children }) {
  return (
    <SessionProvider>
      <CartProvider>
        <ConfigProvider>
          <SnackbarProvider maxSnack={3}>{children}</SnackbarProvider>
        </ConfigProvider>
      </CartProvider>
    </SessionProvider>
  );
}

export default MasterProvider;
