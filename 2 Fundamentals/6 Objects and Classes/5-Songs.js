function songs(arrSongs) {

    let songsNumb = Number(arrSongs.shift());
    let typeList = arrSongs.pop();
    let songsArr = [];

    class Song {
        constructor(typeSong, name, time) {
            this.typeSong = typeSong;
            this.name = name;
            this.time = time;
        }
    }

    for (i = 0; i < songsNumb; i++) {
        let [typeSong, name, time] = arrSongs[i].split("_");
        let song = new Song(typeSong, name, time);
        songsArr.push(song);
    }

    if (typeList === "all") songsArr.forEach((el) => console.log(el.name));
    else {
        let filteredSongs = songsArr.filter((el) => el.typeSong === typeList);
        filteredSongs.forEach((el) => console.log(el.name));
    }
}

songs([3,'favourite_DownTown_3:14','favourite_Kiss_4:16','favourite_Smooth Criminal_4:01','favourite']);
console.log("------------------------");
songs([4,'favourite_DownTown_3:14','listenLater_Andalouse_3:24','favourite_In To The Night_3:58',
        'favourite_Live It Up_3:48','listenLater']);
console.log("------------------------");
songs([2,'like_Replay_3:15','ban_Photoshop_3:48','all']);
