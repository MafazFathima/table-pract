<script setup>
import { ref, onMounted } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { getTickets } from '../api/authApi'; // import your API function

const tickets = ref([]);
const isLoading = ref(false);
const error = ref('');

const fetchTickets = async () => {
  isLoading.value = true;
  try {
    // You can pass location UIDs if needed
    const data = await getTickets();
    console.log("Tickets API response:", data);
    // Map API fields to match your DataTable columns
    tickets.value = data.map(ticket => ({
      transactionId: ticket.transactionId,
      ticketId: ticket.ticketId,
      createdOn: ticket.ticketCreatedDatetime,
      completedBy: ticket.discretionaryData.completedBy || '',
      value: ticket.faceValue,
      status: ticket.ticketStatus,
      actions: [], // Add any actions if needed
    }));
  } catch (err) {
    console.error('Error fetching tickets:', err);
    console.error('Full Axios error response:', err.response);
    error.value = 'Failed to load tickets.';
  } finally {
    isLoading.value = false;
  }
};

onMounted(fetchTickets);
</script>

<template>
  <div class="pb-5 pl-5 pr-5-5">
    <DataTable
      :value="tickets"
      paginator
      :rows="10"
      :rowsPerPageOptions="[5, 10, 20, 50]"
      tableStyle="min-width: 100%"
      showGridlines
      :loading="isLoading"
      emptyMessage="No tickets available"
    >
      <Column selectionMode="multiple" headerStyle="width: 3px; height: 13px"></Column>
      <Column field="transactionId" header="Transaction ID"></Column>
      <Column field="ticketId" header="Ticket ID"></Column>
      <Column field="createdOn" header="Created On"></Column>
      <Column field="completedBy" header="Completed By"></Column>
      <Column field="value" header="Value"></Column>
      <Column field="status" header="Status"></Column>

      <Column header="Actions">
        <template #body="slotProps">
          <span v-for="action in slotProps.data.actions" :key="action" style="margin-right:8px;">
            {{ action }}
          </span>
        </template>
      </Column>
    </DataTable>

    <div v-if="error" class="text-red-500 mt-3">{{ error }}</div>
  </div>
</template>
