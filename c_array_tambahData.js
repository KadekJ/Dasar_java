let barang = [
    { nama: "Rinsoo", harga: 5000},
    { nama: "Moonlight", harga: 4000}
]

console.log("Isi array barang");
console.log(barang);
console.log("Jumlah data = " + barang.length);

console.log("------------------------------");

//tambah data baru
barang.push(
    {nama: "Lantai", harga: 7000}
)

console.log("Isi array barang saat ini");
console.log(barang);
console.log("Jumlah data saat ini = " + barang.length);
