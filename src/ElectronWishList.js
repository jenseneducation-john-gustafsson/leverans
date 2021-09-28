import { useState, useEffect} from "react";

   const ElectronWishList = () => {

    let require = window.require;
    console.log(require);


    const { ipcRenderer } = require('electron');
    const remote = require('@electron/remote');

    const { app } = remote;
    const { dialog } = remote;

    const fs = require('fs');
    const path = require('path');


    const [menuChoice, setMenuChoice] = useState('');

    useEffect(() => {
      let items = this.state.totalQuantity;
      let wishlist = items.map(item => item.textContent)
      console.log(items);

    ipcRenderer.on('menuChoice', (ipcEvent, menuItem) => {
      console.log('You chose the menu item ' + menuItem + '.');

      let fileExtensionToUse = 'not';

      if (menuItem === 'Download wishlist as file') {
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
            JSON.stringify({ wishlist }, null, '  '),
            'utf-8'
          );
        }
      }

      // if (menuItemLabel === 'Upload wishlist to cart') {
      //   let filePaths = dialog.showOpenDialogSync({
      //     properties: ['openFile'],
      //     options: { filters: { extensions: [fileExtensionToUse] } }
      //   });
      //   if (filePaths) {
      //     let json = fs.readFileSync(filePaths[0], 'utf-8');
      //     let data = JSON.parse(json);
      //     document.querySelector('.text-to-remember').value = data.textArea;
      //   }
      // }
    });
    return () => ipcRenderer.off('menuChoice');
    }, []);

     return (
       <div>
         <p>Choose "Wishlist" up in the menu if you want to download/upload a wishlist.</p>
       </div>
     )
   }

   export default ElectronWishList