const multer = require('multer');
const path = require('path')

const storage = multer.diskStorage({
    destination: path.resolve(__dirname, '../../public/images'),
    filename: function (req, file, cb) {
        const extensaoArquivo = file.originalname.split('.')[1];
        const novoNomeArquivo = require('crypto')
            .randomBytes(64)
            .toString('hex');
        cb(null, `${novoNomeArquivo}.${extensaoArquivo}`)
    }
});

const upload = multer({ storage });

module.exports = upload