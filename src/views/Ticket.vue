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
  <div class="pb-5 pl-5 pr-5-5">
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
     <Column field="transactionId" header="Transaction ID" ></Column>
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
/*
 * FIX: The header style definition was repeated, and the centering
 * might be blocked by internal elements. This ensures the TH has
 * text-align: center and is correctly styled.
 */
:deep(.p-datatable-thead > tr > th) {
  /* Common Header Styles */
  background-color: #E7E7E7 !important;
  color: #01135D !important;
  font-family: 'Kanit' !important;
  text-transform: capitalize;
  font-size: 10px;

  /* Centering Fix and Alignment */
  vertical-align: middle !important;
  text-align: center !important; /* This is the primary rule for horizontal centering */
  padding-top: 8px;
  padding-bottom: 8px;
}

/* Ensure the content inside the column header is also centered if it uses an internal wrapper */
/* This specific selector may be needed depending on PrimeVue's internal structure for the header text */
:deep(.p-column-header-content) {
  justify-content: center !important; /* If using flex, this centers content */
  text-align: center !important; /* For text inside the content wrapper */
  width: 100%; /* Important for centering to work */
}

/* Existing Body Styles */
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

/* Existing Checkbox Styles */
:deep(.p-checkbox-box) {
  width: 13px !important;
  height: 13px !important;
  border-width: 0.98px !important;
  border-radius: 1.95px !important;
}

/* Existing Paginator Styles */
:deep(.p-paginator) {
  padding:0 !important;
  width: 1375px !important;
  height: 45px !important;
  display: flex !important;
  justify-content: flex-start !important;
  align-items: center !important;
  text-align: left !important;
}


:deep(.p-datatable-column-header-content ){
 display: block;
}

</style>


