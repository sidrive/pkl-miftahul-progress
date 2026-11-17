<template>
  <div style="padding: 24px; max-width: 500px;">
    <DsCard variant="outlined">
      <h2>Tes Komponen SIMASET</h2>
      <DsInput label="Kode Aset" placeholder="Contoh: AST-001" />
      <DsSelect
        label="Kategori"
        :options="[
          { value: 'elektronik', label: 'Elektronik' },
          { value: 'furnitur', label: 'Furnitur' }
        ]"
      />
      <div style="display: flex; gap: 8px; align-items: center;">
        <DsButton variant="primary">Simpan</DsButton>
        <DsBadge status="aktif" />
      </div>
    </DsCard>
  </div>
</template>

<script setup>
import DsButton from './components/Ds/DsButton.vue'
import DsCard from './components/Ds/DsCard.vue'
import DsInput from './components/Ds/DsInput.vue'
import DsSelect from './components/Ds/DsSelect.vue'
import DsBadge from './components/Ds/DsBadge.vue'
</script>