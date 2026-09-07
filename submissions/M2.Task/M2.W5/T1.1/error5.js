Promise.reject("Halo Error");

// disini kalo dijalankan nanti di terminal akan muncul eror `UnhandledPromiseRejectionWarning: Halo Error`
// muncul eror kaya gitu karna Promise di-reject, 
// tapi gak ada .catch() atau try...catch yang menangani error tersebut