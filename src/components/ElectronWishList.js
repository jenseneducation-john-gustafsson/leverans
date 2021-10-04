import { useState, useEffect } from "react";

//Redux wishlist

import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

const ElectronWishList = () => {

    const wishlist = useSelector((state) => state.wishlist.wishlistItems)

    const dispatch = useDispatch();

    const [menuChoice, setMenuChoice] = useState('');
    const [menuChoiceUpdate, setMenuChoiceUpdate] = useState(0)

    let require = window.require;
    const { ipcRenderer } = require('electron');
    const remote = require('@electron/remote');
    const fs = require('fs');

    const { dialog } = remote;

    ipcRenderer.removeAllListeners('menuChoice');

    ipcRenderer.on('menuChoice', (ipcEvent, menuItem) => {
      setMenuChoice(menuItem);
      setMenuChoiceUpdate(Math.random());
    })


   useEffect(() => {

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
          data.map(item => dispatch(cartActions.addItemToCart(item)));
        }
      }
  }, [menuChoiceUpdate]);
}

export default ElectronWishList