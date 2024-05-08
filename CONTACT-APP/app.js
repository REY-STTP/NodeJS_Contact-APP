const yargs =  require('yargs');
const contacts = require('./contacts');

// Mengambil argumen dari command line
yargs.command({
    command: 'add',
    describe: 'Menambahkan contact baru',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string'
        },
        email: {
            describe: 'Alamat Lengkap',
            demandOption: false,
            type: 'string'
        },
        noHP: {
            describe: 'Nomor Handphone',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        contacts.simpanContact(argv.nama, argv.email, argv.noHP);
    },
})
.demandCommand();

// Menambahkan semua daftar Nama dan No HP contact
yargs.command({
    command: 'list',
    describe: 'Menampilkan semua daftar Nama dan No HP Contact',
    handler() {
        contacts.listContact();
    },
});

// Menampilkan detail contact berdasarkan nama
yargs.command({
    command: 'detail',
    describe: 'Menampilkan detail Contact berdasarkan Nama',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        contacts.detailContact(argv.nama);
    },
});

// Menghapus contact berdasarkan nama
yargs.command({
    command: 'delete',
    describe: 'Menghapus sebuah Contact berdasarkan Nama',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        contacts.deleteContact(argv.nama);
    },
});


yargs.parse();