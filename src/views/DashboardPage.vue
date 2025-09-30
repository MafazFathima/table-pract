<script setup>
import { ref, onMounted } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

// Import JSON data directly
import ticketsData from '../data/table.json';

const tickets = ref([]);

onMounted(() => {
  // Load data from JSON into reactive variable
  tickets.value = ticketsData;
});
</script>

<template>
  <div class="card">
    <DataTable
      :value="tickets"
      paginator
      :rows="10"
      :rowsPerPageOptions="[5, 10, 20, 50]"
      tableStyle="min-width: 100%"
      showGridlines
      emptyMessage="No tickets available"
    >
      <Column selectionMode="multiple" headerStyle="width: 3px height=13px"></Column>
     <Column field="transactionId" header="Transaction ID"></Column>
      <Column field="ticketId" header="Ticket ID"></Column>
      <Column field="createdOn" header="Created On"></Column>
      <Column field="completedBy" header="Completed By"></Column>
      <Column field="value" header="Value"></Column>
      <Column field="status" header="Status"></Column>

      <!-- Custom Actions column -->
      <Column header="Actions">
        <template #body="slotProps">
          <span v-for="action in slotProps.data.actions" :key="action" style="margin-right:8px;">
            {{ action }}
          </span>
        </template>
      </Column>
    </DataTable>
  </div>
</template>
<style scoped>
:deep(.p-datatable-thead > tr > th) {
  background-color: #E7E7E7 !important;
  color: #01135D !important;
  font-family:'Kanit' !important;
  text-transform: capitalize;
  font-size: 10px;
  vertical-align: middle !important;
  text-align: center; 
  padding-top: 8px;
  padding-bottom: 8px;
}

:deep(.p-datatable-tbody > tr > td) {
  font-family: 'Kanit' !important;
  vertical-align: middle !important;
  font-size: 14px;
  text-align: center; 
  color: #25213B;
  border-left: none !important;
  border-right: none !important;
  border-bottom: 1px solid #ccc !important;
}
:deep(.p-checkbox-box) {
    width: 13px !important;
    height: 13px !important;
    border-width: 0.98px !important; 
    border-radius: 1.95px !important; 
}
:deep(.p-paginator) {
   
    width: 1375px !important; 
    height: 45px !important; 
    display: flex !important;
    justify-content: flex-start !important; 
    align-items: center !important; 
    text-align: left !important; 
}


</style>

