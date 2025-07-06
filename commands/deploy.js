const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "deploy", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }


    

    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Etc/GMT');

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
Hello ${nomAuteurMessage},,
*ᴅᴇᴘʟᴏʏᴍᴇɴᴛ sᴛᴇᴘs* 
╭───────────────────☆
★ᴡʜᴇɴ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ ᴅᴇᴘʟᴏʏ ᴀɴʏ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ ᴄʜᴇᴄᴋ ᴏɴ ɪᴛs ʀᴇᴘᴏ ᴀɴᴅ ᴄʜᴇᴄᴋ ᴏɴ ɪᴛs ᴅᴇᴘʟᴏʏᴍᴇɴᴛ ᴘʀᴏᴄᴇᴅᴜʀᴇ ᴀɴᴅ ᴍᴀᴋᴇ sᴜʀᴇ ʏᴏᴜ ʜᴀᴠᴇ ᴛʜᴇ ᴅᴇᴘʟᴏʏᴍᴇɴᴛ sɪᴛᴇ ᴇ.ɢ; https://github.com/PrinceXtremeX/XTREME-XMD-V2  , ʀᴇɴᴅᴇʀ.ᴄᴏᴍ , ᴋᴏʏᴇʙ.ᴄᴏᴍ ᴀɴᴅ ᴍᴀɴʏ ᴍᴏʀᴇ:
✔ғɪʀsᴛ ᴛʏᴘᴇ ᴛʜᴇ sᴄ ,ʀᴇᴘᴏ ᴏʀ sᴄʀɪᴘᴛ ᴄᴏᴍᴍᴀɴᴅ ᴀɴᴅ ʏᴏᴜ ᴡɪʟʟ ɢᴇᴛ ʀᴀʜᴇᴇᴍ xᴍᴅ ʀᴇᴘᴏsɪᴛᴏʀʏ 
✔ғʀᴏᴍ ᴛʜᴇʀᴇ ʏᴏᴜ ᴀʀᴇ ʀᴇǫᴜɪʀᴇᴅ ᴛᴏ ɢᴇᴛ ʏᴏᴜʀ *sᴇssɪᴏɴ ɪᴅ* ʙᴜᴛ ʜᴏᴡ,??..
         𝐇𝐎𝐖 𝐓𝐎 𝐆𝐄𝐓 𝐒𝐄𝐒𝐒𝐈𝐎𝐍 𝐈𝐃
✞ ᴏᴘᴇɴ ᴛʜɪs ʟɪɴᴋ 👉 https://lezkush.onrender.com   ᴛʜᴇɴ ᴛᴀᴘ ᴏɴ ᴘᴀɪʀ ᴄᴏᴅᴇ.
✞ ᴇɴᴛᴇʀ ʏᴏᴜʀ ᴡʜᴀᴛsᴀᴘᴘ ɴᴜᴍʙᴇʀ ᴡɪᴛʜ ᴛʜᴇ ᴄᴏᴜɴᴛʀʏ ᴄᴏᴅᴇ ᴇ.ɢ;  529633982655 ᴛʜᴇɴ ᴛᴀᴘ sᴜʙᴍɪᴛ 
✞ʀᴀʜᴇᴇᴍ-xᴍᴅ ᴏᴡɴᴇʀ , *xᴛʀᴇᴍᴇ* ,ᴡɪʟʟ sᴇɴᴅ ʏᴏᴜ ᴛʜᴇ ᴄᴏᴅᴇ ɪᴍᴍᴇᴅɪᴀᴛᴇʟʏ.ᴄᴏᴘʏ ᴛʜᴇ ᴄᴏᴅᴇ ᴀɴᴅ ᴡʜᴀᴛsᴀᴘᴘ ᴡɪʟʟ ʙʀɪɴɢ ᴀ ɴᴏᴛɪғɪᴄᴀᴛɪᴏɴ 
✞ᴛᴀᴘ ᴏɴ ᴛʜᴇ ɴᴏᴛɪғɪᴄᴀᴛɪᴏɴ ᴀɴᴅ ᴘᴀsᴛᴇ ᴛʜᴇ ᴄᴏᴅᴇ ᴛʜᴀᴛ xᴛʀᴇᴍᴇ-xᴍᴅ ᴏᴡɴᴇʀ sᴇɴᴛ ʏᴏᴜ.
✞ ᴀғᴛᴇʀ ᴀ sᴜᴄᴄᴇssғᴜʟ ʟᴏɢɪɴ xᴛʀᴇᴍᴇ-xᴍᴅ ᴏᴡɴᴇʀ 🤔 ʀᴀʜᴇᴇᴍ ᴡɪʟʟ sᴇɴᴅ ʏᴏᴜ ᴀ *sᴇssɪᴏɴ ɪᴅ* .sᴏᴍᴇ ᴡɪʟʟ ᴡᴏɴᴅᴇʀ ᴡʜᴇʀᴇ ᴛʜᴇ ʜᴇʟʟ ɪs ᴛʜᴀᴛ sᴇssɪᴏɴ ,,,...ɪᴛ ɪs ᴊᴜsᴛ ʀɪɢʜᴛ ᴀᴛ ʏᴏᴜʀ ɪɴʙᴏx /ᴅᴍ {ʏᴏᴜʀ ᴏᴡɴ ɴᴜᴍʙᴇʀ ғᴏʀ ᴡʜᴀᴛsᴀᴘᴘᴘ} 😂
✞ᴄᴏᴘʏ ᴛʜᴇ sᴇssɪᴏɴ ɪᴅ {ᴛʜᴇ ᴏɴᴇ ᴡɪᴛʜ ᴜɴʀᴇᴀᴅᴀʙʟᴇ ᴄᴏᴅᴇs ᴀɴᴅ ʟᴏɴɢ ᴄᴏᴘʏ ɪᴛ ᴀɴᴅ sᴇɴᴅ ɪᴛ ᴛᴏ ʏᴏᴜʀ ᴅᴇᴘʟᴏʏᴇʀ ᴏʀ ᴅᴇᴘʟᴏʏ
     𝐇𝐎𝐖 𝐓𝐎 𝐃𝐄𝐏𝐋𝐎𝐘 xᴛʀᴇᴍᴇ-xᴍᴅ
✔ ɴᴏᴡ ᴄʜᴇᴄᴋ ᴏɴ ʀᴀʜᴇᴇᴍ-xᴍᴅ ʀᴇᴘᴏsɪᴛᴏʀʏ ɪɴ ɢɪᴛʜᴜʙ ғᴏʀᴋ ᴀɴᴅ ɢɪᴠᴇ ᴀ sᴛᴀʀ ᴛᴏ ᴛʜɪs ʀᴇᴘᴏsɪᴛᴏʀʏ ʙᴇғᴏʀᴇ ᴅᴏɪɴɢ ᴀɴʏᴛʜɪɴɢ 🌟ᴏʀ ᴇʟsᴇ xᴛʀᴇᴍᴇ-xᴍᴅ ᴏᴡɴᴇʀ ᴡᴏɴ'ᴛ ᴀʟʟᴏᴡ ʏᴏᴜ ᴛᴏ ᴅᴇᴘʟᴏʏ ʜɪs ʙᴏᴛ🤖.
✔ᴛᴀᴘ ᴏɴ ʜᴇʀᴏᴋᴜ ᴅᴇᴘʟᴏʏ ᴛᴀʙ  ɢɪᴠᴇɴ ᴛʜᴇʀᴇ. ғɪʀsᴛ ᴛʜɪɴɢ ʏᴏᴜ sʜᴏᴜʟᴅ ᴅᴏ ɪs ɢᴇᴛᴛɪɴɢ ʏᴏᴜʀ *ʜᴇʀᴏᴋᴜ ᴀᴘɪ ᴋᴇʏ* ɪɴsᴇʀᴛ ɪᴛ ᴛᴏ ᴛʜᴇ ʀᴇǫᴜɪʀᴇᴅ sᴘᴀᴄᴇ .
✔ᴇɴᴛᴇʀ ᴛʜᴇ ᴠᴀʟɪᴅ *ʜᴇʀᴏᴋᴜ ᴀᴘᴘ ɴᴀᴍᴇ* ᴀɴᴅ ᴀɢᴀɪɴ ʀᴇᴘᴇᴀᴛ ɪᴛ ᴛᴏ ᴛʜᴇ ʙʟᴀɴᴋ sᴘᴀᴄᴇ ᴀsᴋɪɴɢ ғᴏʀ ᴀᴘᴘ ɴᴀᴍᴇ ᴀᴄᴄᴏʀᴅɪɴɢʟʏ. ғɪʟʟ ᴇᴠᴇʀʏᴛʜɪɴɢ ᴀɴᴅ ᴘʀᴇss ᴏɴ ᴛʜᴇ ʙᴇʟᴏᴡ ᴛᴀʙ ᴅᴇᴘʟᴏʏ
✔ɪɴ sᴏᴍᴇ ʜᴇʀᴏᴋᴜ ᴀᴘᴘs ᴛʜᴇ ʙᴜʟᴅ ʟᴏɢs ᴍɪɢʜᴛ ɴᴏᴛ sʜᴏᴡ ʙᴜᴛ ɪᴛ ᴡɪʟʟ ᴇᴠᴇɴᴛᴜᴀʟʟʏ ᴅᴇᴘʟᴏʏ 
✔ɴᴏᴡ ᴄʟɪᴄᴋ ᴏɴ ᴛʜɪs ᴅᴇᴠs ɴᴜᴍʙᴇʀ ᴀɴᴅ ɢɪᴠᴇ xᴛʀᴇᴍᴇ-xᴍᴅ ᴏᴡɴᴇʀ ᴄʀᴇᴅɪᴛs https://wa.me/529633982655
╰────────────────────☆`;
let menuMsg = `> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ xᴛʀᴇᴍᴇ*`;
   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *princextreme*, déveloper xtreme xmd" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *princextreme*, déveloper xtreme xmd" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(infoMsg + menuMsg);
    
}

}); 

