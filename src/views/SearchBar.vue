<script setup>
import { ref } from 'vue';
import DatePicker from 'primevue/datepicker';
import filter from "../assets/filter.svg";
import reset from "../assets/reset.svg"


// --- State for the Top Search Bar (Image 1) ---
const topSearchTerm = ref('');
const searchCategory = ref('All');
const categories = [
    { label: 'All', value: 'All' },
    { label: 'Users', value: 'Users' },
    { label: 'Tickets', value: 'Tickets' },
];

const handleTopSearch = () => {
    console.log(`Top Search: "${topSearchTerm.value}" in category: ${searchCategory.value}`);
};

// --- State for the Advanced Filter Bar (Image 2) ---
const ticketIdSearch = ref('');
const startDate = ref('');
const endDate = ref('');
const selectedDate = ref(null);

const handleAdvanceFilter = () => {
    console.log('Applying Advanced Filter:', {
        ticketId: ticketIdSearch.value,
        start: startDate.value,
        end: endDate.value
    });
};

const resetFilters = () => {
    ticketIdSearch.value = '';
    startDate.value = '';
    endDate.value = '';
    console.log('Filters have been reset.');
};

// --- Helper for clearing individual inputs ---
const clearInput = (field) => {
    if (field === 'id') ticketIdSearch.value = '';
    if (field === 'start') startDate.value = '';
    if (field === 'end') endDate.value = '';
};

</script>

<template>
    <div class="w-full">
         <div class="flex items-center h-[64px] w-[1440px] px-6 bg-[#01135D] space-x-10">
            
            <div class="relative flex items-center space-x-1">
                <input 
                    type="text" 
                    v-model="ticketIdSearch"
                    placeholder="Search by Ticket ID" 
                    class="px-4 py-2 text-sm w-[189px] rounded-4xl bg-[#F7F7F8] focus:outline-none h-10"
                />
                
            <button 
                @click="handleAdvanceFilter"
                class="w-8 h-8 rounded-full bg-[#464F70] text-white flex items-center justify-center hover:bg-blue-700 transition"
                title="Search"
            >
                <i class="fas fa-search text-xs"></i>
            </button>

            <button 
                @click="clearInput('start'); clearInput('end')"
                class="w-8 h-8 rounded-full bg-[#464F70] text-white flex items-center justify-center hover:bg-blue-700 transition"
                title="Clear Dates"
            >
                <i class="fas fa-times text-xs"></i>
            </button>
</div>
            <div class="relative flex items-center space-x-1">
            <span class="text-white text-sm whitespace-nowrap">Select date range</span>

           
  <div class="relative date-picker-container">
    <DatePicker 
      v-model="startDate" 
      showIcon 
      fluid 
      iconDisplay="input" 
      dateFormat="mm-dd-yy"
      placeholder="MM-DD-YYYY"
      class="custom-calendar-style"
    />
  </div>

    <div>
        <div class="relative date-picker-container">
    <DatePicker 
      v-model="endDate" 
      showIcon 
      fluid 
      iconDisplay="input" 
      dateFormat="mm-dd-yy"
      placeholder="MM-DD-YYYY"
      class="custom-calendar-style"
    />
  </div>
        </div>
        
            <button 
                @click="handleAdvanceFilter"
                class="w-8 h-8 rounded-full bg-[#464F70] text-white flex items-center justify-center hover:bg-blue-700 transition"
                title="Search"
            >
                <i class="fas fa-search text-xs"></i>
            </button>

            <button 
                @click="clearInput('start'); clearInput('end')"
                class="w-8 h-8 rounded-full bg-[#464F70] text-white flex items-center justify-center hover:bg-blue-700 transition"
                title="Clear Dates"
            >
                <i class="fas fa-times text-xs"></i>
            </button>
</div>
<div class="relative flex items-center space-x-5">
            <button 
                @click="handleAdvanceFilter"
                class="flex items-center justify-center text-sm space-x-2 pt-8px pr-10px pb-8px pl-8px bg-blue-500 font-kanit text-white font-medium rounded-4xl hover:bg-blue-600 transition duration-150 shadow-md w-[168px] h-[37px]"
            >
            <img :src="filter" class="object-cover w-[20px] h-[20px]">
              
                <span>Advance Filter</span>
            </button>
            
            <button 
                @click="resetFilters"
                class=" flex items-center justify-center  bg-[#FFA200] text-white font-medium rounded-4xl hover:bg-yellow-600 transition duration-150  w-[102px] shadow-md h-[37px]"
            >
            <img :src="reset" class="object-cover w-[20px] h-[20px]">
                <span>Reset</span>
            </button>
            </div>
        </div>
    </div>
</template>

<style scoped>

:deep(.p-datepicker-input-icon-container){
    color: black
}
/* ========================================================== */
/* PRIME VUE DATEPICKER OVERRIDES WITH :DEEP() */
/* This styles the *default* icon generated by PrimeVue. */
/* ========================================================== */

/* 1. Target the main input element for styling (white, rounded, size) */
.custom-calendar-style :deep(.p-inputtext) {
    /* White Background, Borders, and Full Roundness */
    color: black !important; 
    background-color: #F7F7F8 !important;
    border: 1px solid #d1d5db !important; 
    border-radius: 30px !important; 
font-size: 12px;
font-weight: 400;
font-family: "Kanit";
    /* Sizing and Spacing */
    height: 37px !important; 
    width: 137px !important; 
    padding-top: 8px !important;
    padding-bottom: 8px !important;
    padding-left: 8px !important;
     padding-right: 10px !important;
    
    box-shadow: none !important;
}

/* 2. Target the ICON CONTAINER (.p-input-icon) for color and position */
.custom-calendar-style :deep(.p-input-icon) {
    /* Position the icon to match the screenshot */
    right: 0.5rem !important; 
    top: 50% !important;
    transform: translateY(-50%) !important;
    color: black!important; 
    font-size: 1rem !important; 
    
    /* Ensure the icon itself is clickable/visible */
    pointer-events: auto !important;
    cursor: pointer !important;
}

/* 3. Ensure no unwanted focus/hover effects */
.custom-calendar-style :deep(.p-inputtext):focus {
    box-shadow: none !important;
    border-color: #d1d5db !important;
}
</style>