<template>
    <div>
        <div class="produk-card">
            <h2>Putaran 3: Praktek</h2>
            <p><strong>Nama Produk: </strong> {{ namaProduk }}</p>
            <p><strong>Harga: </strong> Rp {{ harga }}</p>
            <p><strong>Status stok: </strong>{{ stokTersedia ? 'Tersedia' : 'Habis' }}</p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    namaProduk: {
        type: String,
        required: true
    },
    harga: {
        type: Number,
        default: 0
    },
    stokTersedia: {
        type: Boolean,
        default: true
    }
})
</script>

<style scoped>
.produk-card {
    margin-bottom: 15px;
    padding: 10px;
    padding-bottom: 10px;
    max-width: 300px;
    margin: 15px auto 30px auto;
    text-align: left;
}
</style>