import { useState, useEffect } from "react";


//Redux wishlist
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

const ElectronWishList = () => {

    const wishlist = useSelector((state) => state.wishlist.wishlistItems)
    const cartItems = useSelector((state) => state.cart.items)

    const dispatch = useDispatch();

    const [menuChoice, setMenuChoice] = useState('');
    const [incData, setIncData] = useState("")

    let require = window.require;
    const { ipcRenderer } = require('electron');
    const remote = require('@electron/remote');
    const fs = require('fs');

    const { dialog } = remote;

    ipcRenderer.on('menuChoice', (ipcEvent, menuItem) => {
      setMenuChoice(menuItem);
    })


   useEffect(() => {
     const test = [{test1: 'product1'}, {test2: 'product2'}]
     const mapping = test.map(test => test.test1)
     console.log(wishlist + "rad 26")


      console.log('You chose the menu item ' + menuChoice + '.');

      console.log(wishlist + "rad 34")

      let fileExtensionToUse = 'not';

      if (menuChoice === 'Download wishlist as file') {
        let filePath = dialog.showSaveDialogSync({
          properties: ['createDirectory']
        });
        if (filePath) {
          if (
            filePath.slice(-fileExtensionToUse.length - 1) !==
            '.' + fileExtensionToUse
          ) {
            filePath += '.' + fileExtensionToUse;
          }
          console.log(wishlist + "rad 49")
          fs.writeFileSync(
            filePath,
            JSON.stringify( wishlist  , null, '  '),
            'utf-8'
          );
        }
      }

      if (menuChoice === 'Upload wishlist to cart') {
        let filePaths = dialog.showOpenDialogSync({
          properties: ['openFile'],
          options: { filters: { extensions: [".not"] } }
        });
        if (filePaths) {
          let json = fs.readFileSync(filePaths[0], 'utf-8');
          let data = JSON.parse(json);
          // setIncData(JSON.stringify(data));
          console.log(data);
          data.map(item => dispatch(cartActions.addItemToCart(item)));

          setTimeout(() => {
            console.log(cartItems)
          }, 2000);
        }
      }

    // return () => ipcRenderer.off('menuChoice');
  }, [menuChoice]);

  return (
    <div>
      <p>Choose "Wishlist" up in the menu if you want to download/upload a wishlist.</p>
    </div>
  )
}

export default ElectronWishList