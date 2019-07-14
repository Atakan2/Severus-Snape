const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`${client.user.tag}Sunucuya giriş yaptı!`);
});
// TEXT AREA TEXT AREA TEXT AREA OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
// TEXT AREA TEXT AREA TEXT AREA OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
// TEXT AREA TEXT AREA TEXT AREA OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
// TEXT AREA TEXT AREA TEXT AREA OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
client.on('message', msg => {

  if (msg.content.toLowerCase() === '_yetkili') {
    msg.reply('\`\`\` @y , Buraya Bakarmısınız\`\`\` ');
  }
  if (msg.content.toLowerCase() === '_discord') {
    msg.reply('\`\`\`Botun Kurucusunun Asıl Sunucusu : https://discord.gg/WvcgAKa\`\`\` ');
  }
  if (msg.content.toLowerCase() === 'bnasılsın') {
    msg.reply('\`\`\`İyidir Senden\`\`\`');
  }
  if (msg.content.toLowerCase() === '_kurucu') {
    msg.reply('\`\`\`2643#2643\`\`\`');
  }
  if (msg.content.toLowerCase() === '_youtube') {
    msg.reply('\`\`\`Şuan Youtube Kanalımız Yok\`\`\`');
  }
  if (msg.content.toLowerCase() === '_instagram') {
    msg.reply('\`\`\`Şuan İnstagram Hesabımız Yok\`\`\`');
  }
  if (msg.content.toLowerCase() === '_mail') {
    msg.reply('\`\`\`Kurucu İle Görüşmek İstiyorsan Kurucuma Mesaj Atabilirsin : Kurucumu Öğrenmek İstersen : _kurucu / Kurucumun Sunucusa Gitmek İstiyor İsen : _discord   yazman yeterli .\`\`\`');
  }
  if (msg.content.toLowerCase() === '_kurallar') {
    msg.reply('\`\`\`--------------------------------\`\`\`');
  }
  if (msg.content.toLowerCase() === '_twitter') {
    msg.reply('\`\`\`Şuan Twitter Hesabımız Yok\`\`\`');
  }
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('\`\`\`Aleyküm Selam\`\`\`');
  }
  if (msg.content.toLowerCase() === 'bnapıyosun') {
    msg.reply('\`\`\`Yaratıcımın Ufukumu Genişletmesini Bekliyorum Peki Ya Sen ?\`\`\`');
  }
  if (msg.content.toLowerCase() === 'bnapıyon') {
    msg.reply('\`\`\`Yaratıcımın Ufukumu Genişletmesini Bekliyorum Peki Ya Sen ?\`\`\`');
  }
  if (msg.content.toLowerCase() === 'naber') {
    msg.reply('\`\`\`İyidir Senden\`\`\`');
  }
  if (msg.content.toLowerCase() === '_üyeler') {
    msg.reply('\`\`\`Üyeler Kanalına Girip Bütün Üyeleri Görebilirsin\`\`\`');
  }
  if (msg.content.toLowerCase() === '_ekip') {
    msg.reply('\`\`\`Şuanda Ekip Belli Değil\`\`\`');
  }
  if (msg.content.toLowerCase() === 'byetkililer') {
    msg.reply('\`\`\`Şuan Yetkililer Belli Değil\`\`\`');
  }

  ///BÜYÜLER BÜYÜLER BÜYÜLER BÜYÜLER BÜYÜLER *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
  ///BÜYÜLER A DUEL DUEL DUEL UEL DUEL DUEL UEL DUEL DUEL UEL DUEL DUEL UEL DUEL DUEL UEL DUEL DUEL UEL DUEL DUEL UEL DUEL DUELUEL DUEL DUEL
  if (msg.content.toLowerCase() === '_büyüler a') {
    msg.reply('\`\`\`Büyüler : Accio , Aguamenti , Alarte Ascendarev , Alohomora , Aklapakla , Anapneo , Ascendio , Avada Kedavra ,\`\`\`https://tenor.com/view/hogwarts-harrypotter-ronweasley-hermionegranger-gif-5435630');
  }
  if (msg.content.toLowerCase() === 'accio') {
    msg.reply('\`\`\` Asanın Ucuna Bakan Nesneyi Yanına Getirdin : \`\`\`https://giphy.com/gifs/harry-potter-daniel-radcliffe-144waw4kQiQVgY');
  }
  if (msg.content.toLowerCase() === 'aguamenti') {
    msg.reply('\`\`\` Asandan Su Çıkardın : \`\`\`https://giphy.com/gifs/harry-potter-daniel-radcliffe-144waw4kQiQVgY');
  }
  if (msg.content.toLowerCase() === 'alarte ascendarev') {
    msg.reply('\`\`\` Gösterilen Nesneyi Fırlattın : \`\`\` https://giphy.com/gifs/harry-potter-daniel-radcliffe-144waw4kQiQVgY');
  }
  if (msg.content.toLowerCase() === 'alohomora') {
    msg.reply('\`\`\` Kilitli Olan Kapıyı Açtın : \`\`\` https://giphy.com/gifs/harry-potter-daniel-radcliffe-144waw4kQiQVgY');
  }
  if (msg.content.toLowerCase() === 'aklapakla') {
    msg.reply('\`\`\` Pis bir bölgeyi temizledin : \`\`\` https://giphy.com/gifs/harry-potter-daniel-radcliffe-144waw4kQiQVgY');
  }
  if (msg.content.toLowerCase() === 'anapneo') {
    msg.reply('\`\`\` Boğazına bir şey kaçan birini kurtardın : \`\`\` https://giphy.com/gifs/harry-potter-daniel-radcliffe-144waw4kQiQVgY');
  }
  if (msg.content.toLowerCase() === 'ascendio') {
    msg.reply('\`\`\` Asanın Ucuna Bakan Kişiyi Yükseğe Fırtlattın  : \`\`\` https://giphy.com/gifs/harry-potter-daniel-radcliffe-144waw4kQiQVgY');
  }
  if (msg.content.toLowerCase() === 'avada kedavra_2643e') {
    msg.reply('\`\`\` Asanın Ucuna Bakan Kişiyi Öldürdün : \`\`\` https://giphy.com/gifs/harry-potter-daniel-radcliffe-144waw4kQiQVgY');
  }
/// Büyüler B
/// Büyüler B
/// Büyüler B
/// Büyüler B
  if (msg.content.toLowerCase() === '_büyüler b') {
    msg.reply('\`\`\` Bombarda , Bombarda Maxima , Brackium Emendo , Bubbles  : \`\`\` https://tenor.com/view/hogwarts-harrypotter-ronweasley-hermionegranger-gif-5435630');
  }
  if (msg.content.toLowerCase() === 'bombarda') {
    msg.reply('\`\`\` Asanın Ucuna Bakan Bölgede Küçük Bir Patlama Yarattın : \`\`\` https://giphy.com/gifs/harry-potter-daniel-radcliffe-144waw4kQiQVgY');
  }
  if (msg.content.toLowerCase() === 'bombarda maxima') {
    msg.reply('\`\`\` Asanın Ucuna Bakan Bölgede Büyük Patlama Yarattın  : \`\`\` https://giphy.com/gifs/harry-potter-daniel-radcliffe-144waw4kQiQVgY');
  }
  if (msg.content.toLowerCase() === 'brackium emendo') {
    msg.reply('\`\`\` Asanın Ucuna Bakan Kişinin Kolunu Düzgün Halle Soktun : \`\`\` https://giphy.com/gifs/harry-potter-daniel-radcliffe-144waw4kQiQVgY');
  }
  if (msg.content.toLowerCase() === 'bubbles') {
    msg.reply('\`\`\` Asanın Ucundan Balon Çıkarttın : \`\`\` https://giphy.com/gifs/harry-potter-daniel-radcliffe-144waw4kQiQVgY');
  }
/// Büyüler C
/// Büyüler C
/// Büyüler C
/// Büyüler C
  if (msg.content.toLowerCase() === '_büyüler c') {
    msg.reply('\`\`\` Calvorios , Carpe Portus , Cendravero , Colloportus , Confringo: \`\`\` https://tenor.com/view/hogwarts-harrypotter-ronweasley-hermionegranger-gif-5435630');
  }
  if (msg.content.toLowerCase() === 'calvorios') {
    msg.reply('\`\`\` Asanın Ucuna Bakan Kişiyi Ölene Kadar Kel Bırakttın : \`\`\` https://giphy.com/gifs/harry-potter-daniel-radcliffe-144waw4kQiQVgY');
  }
  if (msg.content.toLowerCase() === 'carpe portus') {
    msg.reply('\`\`\` Asanın Hedef Aldığı Yere Işınlandın : \`\`\` https://giphy.com/gifs/harry-potter-daniel-radcliffe-144waw4kQiQVgY');
  }
  if (msg.content.toLowerCase() === 'cendravero') {
    msg.reply('\`\`\` Asanın Hedef Aldığı Yerde Küçük Küçük Patlamalar Yarattın : \`\`\` https://giphy.com/gifs/harry-potter-daniel-radcliffe-144waw4kQiQVgY');
  }
  if (msg.content.toLowerCase() === 'colloportus') {
    msg.reply('\`\`\` Bulunduğun Odayı Mühürledin Artık Kimse Giremez Sadece Sen Açabilirsin [ALAHOMORA ÇALIŞMAZ] : \`\`\` https://giphy.com/gifs/harry-potter-daniel-radcliffe-144waw4kQiQVgY');
  }
  if (msg.content.toLowerCase() === 'confringo') {
    msg.reply('\`\`\` Asanın Ucuna Bakan Bölgede Ateş Patlamaları Yarattın : \`\`\` https://giphy.com/gifs/harry-potter-daniel-radcliffe-144waw4kQiQVgY');
  }




  if (msg.content.toLowerCase() === '_büyüler') {
    msg.reply('\`\`\` [_büyüler a,b,c,d,e] : \`\`\` https://tenor.com/view/snape-asparagus-harry-potter-gif-7251242 ');
  }




  if (msg.content.toLowerCase() === '_büyüler d') {
    msg.reply('\`\`\` Defodio , Duro , Depulso , Diminuendo , Ducklifors : \`\`\` https://tenor.com/view/hogwarts-harrypotter-ronweasley-hermionegranger-gif-5435630 ');
  }
  if (msg.content.toLowerCase() === 'defodio') {
    msg.reply('\`\`\` Asanın Hedeflediği Yerde Çukur Oluşurturdun : \`\`\` https://giphy.com/gifs/harry-potter-daniel-radcliffe-144waw4kQiQVgY');
  }
  if (msg.content.toLowerCase() === 'duro') {
    msg.reply('\`\`\` Asanın Hedeflediği Cisimi Taşa Cevirdin : \`\`\` https://giphy.com/gifs/harry-potter-daniel-radcliffe-144waw4kQiQVgY');
  }
  if (msg.content.toLowerCase() === 'depulso') {
    msg.reply('\`\`\` Bulduğun En Yakın Eşyayı İttin : \`\`\` https://giphy.com/gifs/harry-potter-daniel-radcliffe-144waw4kQiQVgY');
  }
  if (msg.content.toLowerCase() === 'diminuendo') {
    msg.reply('\`\`\` Asanın Hedeflediği Cisimi Küçülttün: \`\`\` https://giphy.com/gifs/harry-potter-daniel-radcliffe-144waw4kQiQVgY');
  }
  if (msg.content.toLowerCase() === 'ducklifors') {
    msg.reply('\`\`\` Asanın Hedeflediği Yaratığı Ördeğe Döndürdün: \`\`\` https://giphy.com/gifs/harry-potter-daniel-radcliffe-144waw4kQiQVgY');
  }

//
//

if (msg.content.toLowerCase() === '_büyüler e') {
  msg.reply('\`\`\` Engorgio , Entomorphis , Epoximise , Erecto , Evanesco , Everte Statum , Expecto Patronum , Expelliarmus , Extinguish : \`\`\` https://tenor.com/view/hogwarts-harrypotter-ronweasley-hermionegranger-gif-5435630 ');
}
if (msg.content.toLowerCase() === 'engorgio') {
  msg.reply('\`\`\` Asanın Hedeflediği Hedefi Çok Büyük Cisime Döndürdün: \`\`\` https://giphy.com/gifs/harry-potter-daniel-radcliffe-144waw4kQiQVgY');
}
if (msg.content.toLowerCase() === 'entomorphis') {
  msg.reply('\`\`\` Önündeki Kişiyi Kısa Bir Süreliğine HamamBöceğine Dönüştürdün: \`\`\` https://giphy.com/gifs/harry-potter-daniel-radcliffe-144waw4kQiQVgY');
}
if (msg.content.toLowerCase() === 'epoximise') {
  msg.reply('\`\`\` Önündeki Tahtayla Sağ Tarafında Bulunan Demiri Birbirlerine Yapıştırdın: \`\`\` https://giphy.com/gifs/harry-potter-daniel-radcliffe-144waw4kQiQVgY');
}
if (msg.content.toLowerCase() === 'erecto') {
  msg.reply('\`\`\` Hızlıca Ve Zahmetsizce Cadır Kurdun: \`\`\` https://giphy.com/gifs/harry-potter-daniel-radcliffe-144waw4kQiQVgY');
}
if (msg.content.toLowerCase() === 'evanesco') {
  msg.reply('\`\`\` Önündeki Nesne / Canlıyı Buharlaştırıp Yok Ettin : \`\`\` https://giphy.com/gifs/harry-potter-daniel-radcliffe-144waw4kQiQVgY');
}
if (msg.content.toLowerCase() === 'everte statum') {
  msg.reply('\`\`\` Asanın Hedeflediği Canlıyı Taklalar Attırdın : \`\`\` https://giphy.com/gifs/harry-potter-daniel-radcliffe-144waw4kQiQVgY');
}
if (msg.content.toLowerCase() === 'expecto patronum') {
  msg.reply('\`\`\` En Güzel Anını Hatırlayıp Karşındaki Ruh Emiciyi Uzaklaştırdın : \`\`\` https://giphy.com/gifs/harry-potter-daniel-radcliffe-144waw4kQiQVgY');
}
if (msg.content.toLowerCase() === 'expelliarmus') {
  msg.reply('\`\`\` Karşındaki Rakibi Geri İtip Düşürdün : \`\`\` https://giphy.com/gifs/harry-potter-daniel-radcliffe-144waw4kQiQVgY');
}
if (msg.content.toLowerCase() === 'extinguish') {
  msg.reply('\`\`\` Asanın Hedeflediği Ateşi Söndürdün : \`\`\` https://giphy.com/gifs/harry-potter-daniel-radcliffe-144waw4kQiQVgY');
}

if (msg.content.toLowerCase() === '_kurallar') {
  msg.reply('\`\`\`  Öğretmenler : Belirtilen Büyüler Sınıflarına Göre Verilmeli İdir [Örnek: ] (Alohomora [5,6.Sınıf]) \`\`\` ');
}
if (msg.content.toLowerCase() === '_kurallar') {
  msg.reply('\`\`\`  Herkeze Geçerli :  Büyüler Size Rol Olarak Verilir Eğer Rolunuz Dışındaki Bir Büyü Kullanır İseniz Kicklenirsiniz ve 1 . Sınıf Olarak Yine Başlarsınız  , ,, ) \`\`\` ');
}
if (msg.content.toLowerCase() === '_kurallar') {
  msg.reply('\`\`\`  Herkeze Geçerli : [5.Davet : 2.Sınıf ] [12.Davet : 3.Sınıf] [18.Davet : 4.Sınıf] Geri Kalan Sınıflar İse Aktifliğinize Göre Verilicektir .  \`\`\` ');
}
if (msg.content.toLowerCase() === '_kurallar') {
  msg.reply('\`\`\`  Öğrencilere Geçerli : Ders Saatinde Size Bildirim Gelecektir Eğer Gelmezseniz 10 Dakika Jailde Kalırsınız  \`\`\` ');
}
if (msg.content.toLowerCase() === '_kurallar') {
  msg.reply('\`\`\`  Örnek : [1,2,3,4] Sınıflara Ders Verilicektir Lütfen Saat 12.30 Da Sınıfta Olunuz [Büyü Verilicektir]  \`\`\` ');
}
if (msg.content.toLowerCase() === '_kurallar') {
  msg.reply('\`\`\`   Duel : İlk Olarak Karşıdaki Kişi İle Anlaşıldıktan Sonra Aranızdan Biri _duel @???? Yazar sonra Kişinin Kabul Etmesi Beklenir Kabul Etme : _a @??????  Ve Saniye Sayar , Saniye Sayması Bittikten Hemen Sonra Büyüsünü Yazan Kazanır  Ve İlk Büyü Onunki Kabul Edilir Ve Sıra Halinde Devam Edilir \`\`\`');
}
if (msg.content.toLowerCase() === '_kurallar') {
  msg.reply('\`\`\`  Duel Yaparken Sadece Şu Harflerle Başlayanları Kullana Bilirsiniz [A,B,C,D,E] ve Başlarına 3 Koyunuz [Örnek]  3accio_???? \`\`\` ');
}
if (msg.content.toLowerCase() === '_kurallar') {
  msg.reply('\`\`\`  [Duel Yaparken Şunlar Olabilir :] Yaralı  / AğırYaralı / Çok Ağır Yaralı \`\`\` ');
}
if (msg.content.toLowerCase() === '_kurallar') {
  msg.reply('\`\`\`  [Yaralı :] Büyü Kullanabilir Ama Derslere Giremez ,  \`\`\`');
}
if (msg.content.toLowerCase() === '_kurallar') {
  msg.reply('\`\`\`    [Ağır Yaralı :] Sadece  1. ve 2. Sınıfta Öğrendiği Büyüleri Kullanabilir ,  Derslere Giremez  \`\`\` ');
}
if (msg.content.toLowerCase() === '_kurallar') {
  msg.reply('\`\`\`      [Çok Ağır Yaralı :] Büyü Kullanamaz Ve Derslere Giremez  \`\`\` ');
}
if (msg.content.toLowerCase() === '_kurallar') {
  msg.reply('\`\`\`       Tabi Bunların Hepsi 25 Dakika Süresince Etki Eder  \`\`\` ');
}

if (msg.content.toLowerCase() === '_kurallar') {
  msg.reply('\`\`\`       Her Cumartesi Saat : 19.00 Da Sohbet Alanında Olanların Rolu +1 Artıcak Olmayanlar İse Rolü -1 Azalacak   \`\`\` https://tenor.com/view/harrypotter-azkaban-harry-potter-map-gif-5398305');
}

if (msg.content.toLowerCase() === '_') {
  msg.reply('\`\`\` Bu Benim Prefixim  \`\`\` https://tenor.com/view/harrypotter-azkaban-harry-potter-map-gif-5398305');
}

if (msg.content.toLowerCase() === '_nasıloynanır') {
  msg.reply('\`\`\` Oynanması Çok Kolay /  \`\`\` https://tenor.com/view/harrypotter-azkaban-harry-potter-map-gif-5398305');
}

if (msg.content.toLowerCase() === '_yardım') {
  msg.reply('\`\`\` Sen Bir Büyücü / Cadısın Yardıma İhtiyacın Yok  \`\`\` https://tenor.com/view/harry-potter-ginny-wheasly-surprised-gif-6118847');
}






















  if (msg.content.toLowerCase() === 'böyleişte') {
    msg.reply('\`\`\`hmm\`\`\`');
  }
  if (msg.content.toLowerCase() === 'böyle işte') {
    msg.reply('\`\`\`hmm\`\`\`');
  }
  ///
  ///
  if (msg.content.toLowerCase() === '3accio') {
    msg.reply('\`\`\` Bu Burada Çalışmaz  : \`\`\`https://tenor.com/view/harry-potter-gif-14410316');
  }
  if (msg.content.toLowerCase() === '3aguamenti') {
    msg.reply('\`\`\` Asandan Su Çıkarıp Boğdun [ YARALADIN , YENDİN ]: \`\`\`https://tenor.com/view/harry-potter-gif-14410316');
  }
  if (msg.content.toLowerCase() === '3alarte ascendarev') {
    msg.reply('\`\`\` Gösterilen Nesneyi Fırlattın Karşındaki Kişinin Büyüsü Sana Etki Etmedi : \`\`\` https://tenor.com/view/harry-potter-gif-14410316');
  }
  if (msg.content.toLowerCase() === '3alohomora') {
    msg.reply('\`\`\` Bu Burada Çalışmaz : \`\`\` https://tenor.com/view/harry-potter-gif-14410316');
  }
  if (msg.content.toLowerCase() === '3aklapakla') {
    msg.reply('\`\`\` Bu Burada Çalışmaz : \`\`\` https://tenor.com/view/harry-potter-gif-14410316');
  }
  if (msg.content.toLowerCase() === '3anapneo') {
    msg.reply('\`\`\` Bu Burada Çalışmaz : \`\`\` https://tenor.com/view/harry-potter-gif-14410316');
  }
  if (msg.content.toLowerCase() === '3ascendio') {
    msg.reply('\`\`\` Karşındaki Kişiyi Yükseğe Fırlattın [ AĞIR YARALADIN , YENDİN ]  : \`\`\` https://tenor.com/view/harry-potter-gif-14410316');
  }
  if (msg.content.toLowerCase() === '3avada kedavra') {
    msg.reply('\`\`\` Karşındaki Kişiyi Öldürüyordun Ama Garip Bişi Öldürmeni Engelledi [ AĞIR YARALADIN , YENDİN ] : \`\`\` https://tenor.com/view/harry-potter-gif-14410316');
  }
  ///
  ///
  if (msg.content.toLowerCase() === '3bombarda') {
    msg.reply('\`\`\` Karşındaki Kişiyi [ YARALADIN , YENDİN ] : \`\`\` https://tenor.com/view/harry-potter-gif-14410316');
  }
  if (msg.content.toLowerCase() === '3bombarda maxima') {
    msg.reply('\`\`\` Karşındaki Kişiyi [AĞIR YARALADIN , YENDİN ] : \`\`\` https://tenor.com/view/harry-potter-gif-14410316');
  }
  if (msg.content.toLowerCase() === '3brackium emendo') {
    msg.reply('\`\`\` Karşındaki Kişiyi İncitemedin Bile : \`\`\` https://tenor.com/view/harry-potter-gif-14410316');
  }
  if (msg.content.toLowerCase() === '3bubbles') {
    msg.reply('\`\`\` Karşındaki Kişiyi İncitemedin Bile : \`\`\` https://tenor.com/view/harry-potter-gif-14410316');
  }
/// Büyüler C
/// Büyüler C
/// Büyüler C
/// Büyüler C
  if (msg.content.toLowerCase() === '3calvorios') {
    msg.reply('\`\`\` Bu Büyü Burada Çalışmaz : \`\`\` https://tenor.com/view/harry-potter-gif-14410316');
  }
  if (msg.content.toLowerCase() === '3carpe portus') {
    msg.reply('\`\`\` Karşındaki Kişinin Uyguladığı Büyüden Kaçtın : \`\`\` https://tenor.com/view/harry-potter-gif-14410316');
  }
  if (msg.content.toLowerCase() === '3cendravero') {
    msg.reply('\`\`\` Karşındaki Kişiyi Yaraladın Sıra Karşındaki Kişide : \`\`\` https://tenor.com/view/harry-potter-gif-14410316');
  }
  if (msg.content.toLowerCase() === '3colloportus') {
    msg.reply('\`\`\` Bu Büyü Burada Çalışmaz : \`\`\` https://tenor.com/view/harry-potter-gif-14410316');
  }
  if (msg.content.toLowerCase() === '3confringo') {
    msg.reply('\`\`\` Karşındaki Kişinin Etrafında Ateş Patlamaları Yarattın [ YENDİN ] : \`\`\` https://tenor.com/view/harry-potter-gif-14410316');
  }


  if (msg.content.toLowerCase() === '3defodio') {
    msg.reply('\`\`\` Karşındaki Kişinin Bulunduğu Alanda Çukur Oluşturdun [ YENDİN ] : \`\`\` https://tenor.com/view/harry-potter-gif-14410316');
  }
  if (msg.content.toLowerCase() === '3duro') {
    msg.reply('\`\`\` Asanın Hedeflediği Cisimi Taşa Cevirdin Sıra Rakipte : \`\`\` https://tenor.com/view/harry-potter-gif-14410316');
  }
  if (msg.content.toLowerCase() === '3depulso') {
    msg.reply('\`\`\` Bulduğun En Yakın Eşyayı Rakipine İttin Rakibinin Sonraki Büyüsünü Engelledin : \`\`\` https://tenor.com/view/harry-potter-gif-14410316');
  }
  if (msg.content.toLowerCase() === '3diminuendo') {
    msg.reply('\`\`\` Bu Burada Çalışmaz : \`\`\` https://tenor.com/view/harry-potter-gif-14410316');
  }
  if (msg.content.toLowerCase() === '3ducklifors') {
    msg.reply('\`\`\` Bu Burada Çalışmaz: \`\`\` https://tenor.com/view/harry-potter-gif-14410316');
  }

  if (msg.content.toLowerCase() === '3engorgio') {
    msg.reply('\`\`\` Karşındaki Rakibin Ayakabısını Büyülttün Karşındaki Rakibinin Yaptığı Büyüyü Engelledin : \`\`\` https://giphy.com/gifs/harry-potter-daniel-radcliffe-144waw4kQiQVgY');
  }
  if (msg.content.toLowerCase() === '3entomorphis') {
    msg.reply('\`\`\` Karşındaki Rakibi Kısa Bir Süreliğine HamamBöceğine Dönüştürdün [ YENDİN ]: \`\`\` https://giphy.com/gifs/harry-potter-daniel-radcliffe-144waw4kQiQVgY');
  }
  if (msg.content.toLowerCase() === '3epoximise') {
    msg.reply('\`\`\` Bunu Burada Kullanamazsın: \`\`\` https://giphy.com/gifs/harry-potter-daniel-radcliffe-144waw4kQiQVgY');
  }
  if (msg.content.toLowerCase() === '3erecto') {
    msg.reply('\`\`\` Hızlıca Ve Zahmetsizce Cadır Kurdun Rakibin Kafası Karıştı Rakibinin Yaptığı Büyüyü Engelledin: \`\`\` https://giphy.com/gifs/harry-potter-daniel-radcliffe-144waw4kQiQVgY');
  }
  if (msg.content.toLowerCase() === '3evanesco') {
    msg.reply('\`\`\` Karşındaki Rakibi Buharlaştırıp Yok Ettin Rakibini  [YARALADIN , YENDİN]: \`\`\` https://giphy.com/gifs/harry-potter-daniel-radcliffe-144waw4kQiQVgY');
  }
  if (msg.content.toLowerCase() === '3everte statum') {
    msg.reply('\`\`\` Karşındaki Rakibine Taklalar Attırdın [ YENDİN ]: \`\`\` https://giphy.com/gifs/harry-potter-daniel-radcliffe-144waw4kQiQVgY');
  }
  if (msg.content.toLowerCase() === '3expecto patronum') {
    msg.reply('\`\`\` En Güzel Anını Hatırlayıp Karşındaki Ruh Emiciyi Uzaklaştırdın : \`\`\` https://giphy.com/gifs/harry-potter-daniel-radcliffe-144waw4kQiQVgY');
  }
  if (msg.content.toLowerCase() === '3expelliarmus') {
    msg.reply('\`\`\` Karşındaki Rakibinin Elindeki Asayı Aldın [ YENDİN ]: \`\`\` https://giphy.com/gifs/harry-potter-daniel-radcliffe-144waw4kQiQVgY');
  }
  if (msg.content.toLowerCase() === '3extinguish') {
    msg.reply('\`\`\` Karşındaki Rakibinin Uyguladığı Yakma Büyüsünü Engelledin [Yakma Büyüsü Uygulamadıysa Hiç Birşey Olmadı Sıra Rakibinde ] : \`\`\` https://giphy.com/gifs/harry-potter-daniel-radcliffe-144waw4kQiQVgY');
  }
  ///BÜYÜLER A DUEL DUEL DUEL UEL DUEL DUEL UEL DUEL DUEL UEL DUEL DUEL UEL DUEL DUEL UEL DUEL DUEL UEL DUEL DUEL UEL DUEL DUELUEL DUEL DUEL  ///BÜYÜLER A DUEL DUEL DUEL UEL DUEL DUEL UEL DUEL DUEL UEL DUEL DUEL UEL DUEL DUEL UEL DUEL DUEL UEL DUEL DUEL UEL DUEL DUELUEL DUEL DUEL
    ///BÜYÜLER A DUEL DUEL DUEL UEL DUEL DUEL UEL DUEL DUEL UEL DUEL DUEL UEL DUEL DUEL UEL DUEL DUEL UEL DUEL DUEL UEL DUEL DUELUEL DUEL DUEL
      ///BÜYÜLER A DUEL DUEL DUEL UEL DUEL DUEL UEL DUEL DUEL UEL DUEL DUEL UEL DUEL DUEL UEL DUEL DUEL UEL DUEL DUEL UEL DUEL DUELUEL DUEL DUEL

  if (msg.content.toLowerCase() === '_duel') {
    msg.reply('\`\`\` Duel Yapıcağınız Kişinin Duelini :\`\`\`');
  }
  if (msg.content.toLowerCase() === '_duel') {
    msg.reply('\`\`\`Kabul Etmek İçin : _a /// Reddetmek İçin : _r  \`\`\`');
  }
  if (msg.content.toLowerCase() === '_duel') {
    msg.reply('\`\`\` Üst Üste Kaçma Büyüsü Kullanılmaz Eğer Kullanılırsa Aktif Olan Yetkiliye Bildirilmelidir [MAX:3]\`\`\`');
  }
  if (msg.content.toLowerCase() === '_duel') {
    msg.reply('\`\`\`Büyü Kullanmak İçin [Örnek : 3büyü ]\`\`\`');
  }
  if (msg.content.toLowerCase() === '_duel') {
    msg.reply('\`\`\`İlk Yazan Başlar Ve Sıra İle Devam Eder Taki Yenene Kadar\`\`\`');
  }

  if (msg.content.toLowerCase() === '_a') {
    msg.reply('\`\`\`Ozaman Üç Dediğimde Başlar\`\`\`');
  }
  if (msg.content.toLowerCase() === '_a') {
    msg.reply('\`\`\`Tekrar Söyliyorum İlk Yazan Başlar Ve Sıra İle Devam Eder\`\`\`');
  }
  if (msg.content.toLowerCase() === '_a') {
    msg.reply('\`\`\`Eğer Kendine Verilmeyen Bir Büyü Kullanılırsa Aktif Olan Yetkiliye Söylenmelidir\`\`\`');
  }
  if (msg.content.toLowerCase() === '_a') {
    msg.reply('\`\`\`[[[[[[[[[[[[[[[[[[[[[[[[[[[[1]]]]]]]]]]]]]]]]]]]]]]]]]]]]\`\`\`');
  }
  if (msg.content.toLowerCase() === '_a') {
    msg.reply('\`\`\`[[[[[[[[[[[[[[[[[[[[[2]]]]]]]]]]]]]]]]]]]]]\`\`\`');
  }
  if (msg.content.toLowerCase() === '_a') {
    msg.reply('\`\`\`[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]\`\`\`');
  }

  if (msg.content.toLowerCase() === '_r') {
    msg.reply('\`\`\`Eğer Death Eatherlerden Biri İle Karşılaştıysan Kabul Etmek Zorundasın\`\`\`');
  }
  if (msg.content.toLowerCase() === '_r') {
    msg.reply('\`\`\`[[[[[Yukarıdaki Cümle Kesinlikle Üzerinde Durulmalıdır]]]]]\`\`\`');
  }
  if (msg.content.toLowerCase() === '_r') {
    msg.reply('\`\`\`[[[Eğer Etmediysen Veya Kapadıysan Death Eather Seni En Yakın Yetkiliye Şikayet Etme Hakkı Vardır]]]\`\`\`');
  }
  if (msg.content.toLowerCase() === '_r') {
    msg.reply('\`\`\`[Eğer Öğrencilerden Biri Yaptıysa Kabul Etmek Zorunda Deilsin]\`\`\`');
  }
  if (msg.content.toLowerCase() === '_r') {
    msg.reply('\`\`\`[Kabul Etmedin : Kabul Etmek İçin _a , Yeni Duello İçin _duel .]\`\`\`');
  }

     if (msg.content.startsWith('_cezalandır')) {
       msg.reply('\`\`\` Bir Daha Yaparsan Elindeki 1 Büyü Alınır  \`\`\` https://tenor.com/view/harrypotter-slap-snape-ron-gif-4811228 ');
     }










  if (msg.content.toLowerCase() === '_şarkı') {
    msg.reply('\`\`\`Yaratıcım İlerleyen Günlerde Şarkı Botu Çıkaracak Galiba Öyle Duydum\`\`\`');
  }
  if (msg.content.toLowerCase() === 'bnerelisin') {
    msg.reply('\`\`\`London\`\`\`');
  }
  if (msg.content.toLowerCase() === '_anı') {
    msg.reply('\`\`\`Bana Anını Anlatabilirsin İçini Bana Dökebilirsin\`\`\`');
  }

  if (msg.content.toLowerCase() === 'lag') {
    msg.reply('\`\`\`chate lag yazman internet hızını etkilemez\`\`\`');
  }
  if (msg.content.toLowerCase() === 'lag') {
    msg.reply('\`\`\`birdaha yapma olurmu\`\`\` ');
  }
  if (msg.content.toLowerCase() === 'selam') {
    msg.reply('\`\`\`Aleyküm Selam\`\`\`');
  }
  if (msg.content.toLowerCase() === '_avatar') {
    msg.reply('\`\`\`Avatar :\`\`\`');
  }


















});
// AVATAR AREA AVATAR AREA OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
// AVATAR AREA AVATAR AREA OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
// AVATAR AREA AVATAR AREA OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
// AVATAR AREA AVATAR AREA OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
client.on('message', message => {
  // "eğer avatarım" yazarsa
  if (message.content === '_avatar') {
    // Onun Avatarının URL sini yolla
    message.reply(message.author.avatarURL);
  }
});
// YENİ GELENLER AREA YENİ GELENLER AREA OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
// YENİ GELENLER AREA YENİ GELENLER AREA OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
// YENİ GELENLER AREA YENİ GELENLER AREA OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
// YENİ GELENLER AREA YENİ GELENLER AREA OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO


// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'üyeler');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`\`\`\`Servere Hoşgeldin, ${member} , \`\`\` https://tenor.com/view/harry-potter-hermione-emma-watson-smile-excited-gif-3844324 `);
});
// BOSS AREA BOSS AREA BOSS AREA OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
// BOSS AREA BOSS AREA BOSS AREA OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
// BOSS AREA BOSS AREA BOSS AREA OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
// BOSS AREA BOSS AREA BOSS AREA OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // If the message content starts with "!kick"
  if (message.content.startsWith('_kick')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member.kick('BOSS').then(() => {
          // We let the message author know we were able to kick the person
          message.reply(`\`\`\`Kicklendi ${user.tag}\`\`\``);
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to kick the member,
          // either due to missing permissions or role hierarchy
          message.reply('\`\`\`Bu Üyeyi Kickleyemezsin\`\`\`');
          // Log the error
          console.error(err);
        });
      } else {
        // The mentioned user isn't in this guild
        message.reply('\`\`\`Bu Kullanıcı Bu Grupta Değil!\`\`\`');
      }
    // Otherwise, if no user was mentioned
    } else {
      message.reply('\`\`\`Kicklemek İçin Kullanıcı Adı Girmedin\`\`\`');
    }
  }
});
client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // if the message content starts with "!ban"
  if (message.content.startsWith('_ban')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         * Read more about what ban options there are over at
         * https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=ban
         */
        member.ban({
          reason: 'They were bad!',
        }).then(() => {
          // We let the message author know we were able to ban the person
          message.reply(`\`\`\`Banlandı${user.tag}\`\`\``);
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to ban the member,
          // either due to missing permissions or role hierarchy
          message.reply('\`\`\`Bu Üyeyi Banlıyamazsın\`\`\`');
          // Log the error
          console.error(err);
        });
      } else {
        // The mentioned user isn't in this guild
        message.reply('\`\`\`Bu Kullanıcı Bu Grup\'ta Değil!!\`\`\`');
      }
    } else {
    // Otherwise, if no user was mentioned
      message.reply('\`\`\`Banlamak İçin Kullanıcı Adı Girmedin\`\`\`');
    }
  }
});




client.login(process.env.BOT_TOKEN);
