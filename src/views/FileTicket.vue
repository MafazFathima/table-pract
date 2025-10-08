<script setup>
import { ref, computed } from "vue";
import InputNumber from "primevue/inputnumber";
import Button from "primevue/button";
import Select from "primevue/select"; // ✅ Using Select component
import arrow from "../assets/arrow.svg";

// Location options
const locations = ref([
  { name: "New York" },
  { name: "Los Angeles" },
  { name: "Chicago" },
]);

const selectedLocation = ref(null);

// Ticket data
const tickets = ref([
  { id: 1, amount: 100, count: 0 },
  { id: 2, amount: 20, count: 0 },
  { id: 3, amount: 5, count: 0 },
]);

// Service Fee
const serviceFee = ref(0);

// Total Calculation
const total = computed(() => {
  return (
    tickets.value.reduce((sum, t) => sum + t.amount * t.count, 0) +
    serviceFee.value
  );
});

// Reset form
const clearForm = () => {
  selectedLocation.value = null;
  tickets.value.forEach((t) => (t.count = 0));
};
</script>
<!-- **************************************************************** -->
<template>
  <div class="flex flex-col items-center min-h-screen bg-white p-4 sm:p-10">
    <!-- Title -->
    <h2
      class="text-center text-lg font-semibold text-blue-900 mb-8 w-full max-w-4xl"
    >
      Create new ticket
    </h2>

    <!-- Card Container -->
    <div
      class="relative bg-[#FFFFFF] rounded-xl border border-gray-300 shadow-lg h-[523px] w-[555px] max-w-xl"
    >
      <div class=" flex items-center space-x-4">
        <label
          class="absolute text-[#000000] font-[400] w-[117.15074157714844px] h-[21px] text-[14px] top-[32px] left-[44.87px]" style="font-family: 'Kanit', sans-serif;"
        >Select location</label>
          <Select
          v-model="selectedLocation"
          :options="locations"
          optionLabel="name"
          placeholder="Select"
          class="absolute w-[211.8683624267578px] font-[400] h-[37px]  text-[14px] top-[24px] mb-6 text-[#25213B] left-[175.73px]" style="font-family: 'Kanit', sans-serif;"
        />
      </div>

      <!-- Ticket Table -->
      <div>
        <h3 class="font-[20px] w-[413.5987243652344px] h-[30px] top-[69pxpx] left-[42.42px] text-[#000000]  pl-6 mb-2" style="font-family: 'Kanit', sans-serif;">
          Select your ticket quantity
        </h3>
        <div class="overflow-hidden">
          <!-- Header -->
          <div
            class="grid grid-cols-3 bg-[#EFF0F1] text-[#01135D]  w-[555px] h-[29px] top-[121px] text-[10px] font-[500]" style="font-family: 'Kanit', sans-serif;"
          >
            <div class=" flex justify-center items-center text-center">Ticket</div>
            <div class=" flex justify-center items-center text-center">Count</div>
            <div class=" flex justify-center items-center text-center">Value</div>
          </div>

          <!-- Ticket Rows -->
          <div
            v-for="ticket in tickets"
            :key="ticket.id"
            class="grid grid-cols-3 items-center px-4 py-3 border-t"
          >
            <div class="flex items-center space-x-2">
              <span class="bg-blue-800 text-white text-sm px-3 py-1 rounded-md">
                Ticket Amount
              </span>
              <span class="font-bold">${{ ticket.amount }}</span>
            </div>
            <div class="flex justify-center">
              <InputNumber
                v-model="ticket.count"
                :min="0"
                showButtons
                buttonLayout="horizontal"
                decrementButtonClass="p-button-danger p-button-rounded p-button-outlined"
                incrementButtonClass="p-button-success p-button-rounded p-button-outlined"
                incrementButtonIcon="pi pi-plus"
                decrementButtonIcon="pi pi-minus"
                class="w-28"
              />
            </div>
            <div class="text-right font-medium">
              ${{ (ticket.amount * ticket.count).toFixed(2) }}
            </div>
          </div>
        </div>
      </div>

      <!-- Summary -->
      <div class="mt-6 space-y-2 p-6 text-sm">
        <div class="flex justify-between  h-[21px] top-[376px] left-[42.42px] font-[300] text-[14px] text-[#000000]" style="font-family: 'Kanit', sans-serif;"
          >
          <span>Service charge fee</span>
          <span>${{ serviceFee.toFixed(2) }}</span>
        </div>
        <div class="flex justify-between font-[500] text-[16px] text-[#000000]" style="font-family: 'Kanit', sans-serif;"
          >
          <span>Total transaction</span>
          <span>${{ total.toFixed(2) }}</span>
        </div>
      </div>

      <!-- Buttons -->
      <div class="flex justify-between ml-10 mr-10">
        <Button
          class="w-[185px] h-[37px] font-[500] text-[14px] flex items-center justify-center hover:bg-[#01135D] hover:text-white" style="font-family: 'Kanit', sans-serif;"
          @click="clearForm"
          ><span>Clear</span>
        </Button>
        <Button
          class="flex items-center justify-center hover:bg-[#01135D] hover:text-white w-[276.91082763671875px] h-[37px] " style="font-family: 'Kanit', sans-serif;"

          :disabled="total === 0 || !selectedLocation"
        >
          <span>Submit</span>
          <img :src="arrow" alt="arrowsymbol" />
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Optional custom styling for InputNumber buttons */
:deep(.p-inputnumber-button) {
  width: 211.8683624267578px;
  height: 37px;
}
:deep(.p-select) {
  /* gray-300 */
  border-radius: 30px; /* rounded-lg */
  background: #f7f7f8;
}
:deep(.p-button) {
  border-radius: 30px !important;
  background: #e3e3e3;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 10px;
  padding-left: 8px;
  gap: 6px;
  border:none;
  font-weight: 400;
  font-size: 14px;
  font-family: "kanit";
}

:deep(.border-t) {
  border-color: #eff0f1;
}
:deep(.p-select-label) {
font-size: 14px;
}
:deep(.p-component:disabled) {
  opacity: 1 !important;
}
</style>
<!-- ********************************************************************************************************** -->
