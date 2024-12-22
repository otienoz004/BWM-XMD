const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUWY+jOBj8L35NesKZQKSWFkjI2QlnrtVo5YABcx8mhLTy30eku9X9sDPb+2YZXF+5qlyvIM1whVaoBeNXkJf4AgnqlqTNERgDufY8VII+cCGBYAza1ezES7MLR1L+RDNTRNN1Lusz43o73nZCkxlX99AcRw4bPYN7H+T1OcbOHwAV5nx1dlR7opNiabbZoODJwBhxPWqjXrYxOqauRLHzsmKyZ3DvECEucepP8wAlqITxCrUaxOX36CuTgVMEVtQLemR/HhzkMnY0dRDkS4PfUpUyoio1ik66FXPfo6+dtO0yNFouEHW91q1VzzivKNGYOZzs1pNSYWNROXLZy0OPex9U2E+Ru3BRSjBpv627ufartWZsbDgIC359ZpSD4hSUmB0VjLgdvYHamS1W29TWv0e8t6UtU5kfm8MmuW2jeMXAneG3vcBaHm/yaZExuzmrO3S0b74S18qPrET/R3dhVrF1IS8YD472gbAVvEGz3InScB4KjI/2ztzEXKVcjMT/Hv2zNF+pN/b6Esa236ucXe1KipaFhIrppopFzTIcPH9Z7meLT/qQ1OWfWFrmIk0vDVL9InfVYbKao5I9nfZOeFu10XRvMOhFHunberlSU77k8CxwrXKdrvdW0kJzZ9nSekbZc0Hk695MlgQ4jSXp+XGjCLULF4zpex+UyMcVKSHBWfrY49k+gO7FRE6JyENeoHrC7Yht8yxfL96SPc4WFTZebGSGAhwcpGM8QfKgmkzmQfQM+iAvMwdVFXLnuCJZ2b6gqoI+qsD47599kKIreTOuG8fSfeDhsiJ2WudxBt0PVz8+QsfJ6pSYbeoo3QKVYEx9biNCcOpXnY51CksnwBekBJBUYOzBuEL3PnDRBTuowwP/nI83qE5zY4iDidLMgnWu3vyOcpClb7/QAqQFD4pPzkhknzhnJD4JLuKeHMgORZZ3zxQrgD7A72+mO/NbC50JhSwbTriwiLTwsD/BhqXObJCY1cOGN+1RiVwwJmWN+uAMnajOrSxC6R9wlxK5jPR4wJ8Q2RQkEBtHebFHZbmNvuC+eQrGr589pWRuhyetD5wl8Bbog+QRQdzdnOG5Ec0IAstw1Jj7q/rRdDrCPP+RItLBvmveHXARgTiuuhLTvDCgKb3cQL9ujkcJS9JKkrocfHj0Efa3MIWFqeRcz4mlncCPWFVcbRmJWXInOTBM2ZDbcN2aWqhcG/3fQMAYNNetMqglVs43lL4Z2uQg5qrijRrBn6WOG5X+0jCQsJcyCiZwcTntkXQd0HI17YlKmAiBONSWQ5yzZ1MNr+xWi4Y7xX/upr1l5euwXL8Mk41C2JY1YMTIUF7wm1iGC3O3X4kwF6aa4cPL1bZNpC7kxDrBOuzF4awo5MPET3Jmeitk/uYMVa8nDxF0CuEx7KMG4vf6xY8H8vqeLA+jR5ulsHPoP7z5mnHq3v8C8V6Pv8mRfBxGfoG0dKmr3haJV88Mib/BaKYfbdu3dSdrhSjkmsqZgvv9Zx/kMSReViZgDGDqlhl2QR/EsCLS5zO1cIIqApMcjOkRywkCRfHC/RcK1Uth3AcAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

