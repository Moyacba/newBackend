const mongoose = require('mongoose')

/* mongoose.set("useFindAndModify", false) */

mongoose.connect('mongodb+srv://ModotecnoDB:m39623718@cluster0.ze1hx.mongodb.net/ModotecnoDB?authSource=admin&replicaSet=atlas-xdug78-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true', {
    /* useCreateIndes: true,
    useNewUrlParser: true, */
    
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error("aqui" + err))

