const Kelly = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Kelly.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://i.imgur.com/6pfzK9s.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `𝐾𝐸𝐿𝐿𝑌 𝑀𝑊𝑂𝐿


*𝙾𝚆𝙽𝚆𝚁 𝙽𝚄𝙼𝙱𝙴𝚁* :https://wa.me/919947511243.


*𝙺𝙴𝙻𝙻𝚈 𝙼𝚆𝙾𝙻 𝙶𝚁𝙾𝚄𝙿* :https://chat.whatsapp.com/EXjFwp6nhYm36uxUyLvaHM


*𝙶𝙸𝚃 𝙻𝙸𝙽𝙺* : https://github.com/FAYA-SER/KELLY-MWOL.

■□■□■□■□■□■□■□■□■□■□
𝑲𝒆𝒍𝒍𝒚 𝑴𝒘𝒐𝒍 𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚 𝑭𝒂𝒚𝒂𝒔 𝒔𝒊𝒓 💫

`}) 

}));
