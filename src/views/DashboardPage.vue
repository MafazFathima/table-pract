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
