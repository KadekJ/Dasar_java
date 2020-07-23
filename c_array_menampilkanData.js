let siswa = [
    { nama_depan: "Jannice", nama_belakang: "Wu"},
    { nama_depan: "Parto", nama_belakang: "Lan"},
    { nama_depan: "Xu", nama_belakang: "Aeri"}
]

//menampilkan nama lengkap dari array
siswa.map(
    (sis, index) => {
        console.log(sis.nama_depan + " " + sis.nama_belakang);
    }
)