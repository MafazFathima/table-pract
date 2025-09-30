<script setup>
import { ref } from 'vue';
import DatePicker from 'primevue/datepicker';


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
        


        <div class="flex items-center h-20 w-full px-6 bg-blue-900 space-x-4">
            
            <div class="relative flex items-center">
                <input 
                    type="text" 
                    v-model="ticketIdSearch"
                    placeholder="Search by Ticket ID" 
                    class="px-4 py-2 text-sm w-48 rounded-4xl bg-[#F7F7F8] focus:outline-none h-10"
                />
                
            </div>
            
            <span class="text-white text-sm whitespace-nowrap">Select date range</span>

            <div class="flex items-center space-x-1">
                <div class="relative">
                    <input 
                        type="text" 
                        v-model="startDate"
                        placeholder="MM-DD-YYYY " 
                        class="px-4 py-2 text-sm w-32 rounded-4xl bg-[#F7F7F8] focus:outline-none h-10"
                    />
                    <i class="fas fa-calendar-alt absolute right-1 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                </div>

                <div class="relative">
                    <input 
                        type="text" 
                        v-model="endDate"
                        placeholder="MM-DD-YYYY" 
                        class="px-4 py-2 text-sm w-32 rounded-md focus:outline-none h-10"
                    />
                    <i class="fas fa-calendar-alt absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                </div>
            </div>

            <button 
                @click="clearInput('start'); clearInput('end')"
                class="w-8 h-8 rounded-full bg-blue-800 text-white flex items-center justify-center hover:bg-blue-700 transition"
                title="Clear Dates"
            >
                <i class="fas fa-times text-xs"></i>
            </button>

            <button 
                @click="handleAdvanceFilter"
                class="w-8 h-8 rounded-full bg-blue-800 text-white flex items-center justify-center hover:bg-blue-700 transition"
                title="Search"
            >
                <i class="fas fa-search text-xs"></i>
            </button>

            <button 
                @click="handleAdvanceFilter"
                class="flex items-center space-x-2 px-5 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition duration-150 shadow-md h-10"
            >
                <i class="fas fa-sliders-h text-sm"></i> 
                <span>Advance Filter</span>
            </button>
            
            <button 
                @click="resetFilters"
                class="px-5 py-2 bg-yellow-500 text-white font-medium rounded-md hover:bg-yellow-600 transition duration-150 shadow-md h-10"
            >
                Reset
            </button>
        </div>
    </div>
</template>

<style scoped></style>