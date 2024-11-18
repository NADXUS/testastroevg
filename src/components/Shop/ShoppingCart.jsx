import React, { useState } from "react";
import FloatingButton from "./FloatingButton";
import CartDrawer from "./CartDrawer";
import useCart from "../../Hooks/useCart";

const ShoppingCart = () => {
  const [open, setOpen] = useState(false);
  const [shoppingCart] = useCart();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Botón flotante */}
      <FloatingButton onClick={handleDrawerOpen} cartItemCount={shoppingCart.length} />

      {/* Drawer del carrito */}
      <CartDrawer open={open} onClose={handleDrawerClose} shoppingCart={shoppingCart} />
    </>
  );
};

export default ShoppingCart;
