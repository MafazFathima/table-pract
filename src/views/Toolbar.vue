<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import download from "../assets/download.svg";
import print from "../assets/printer.svg";
import remove from "../assets/removeTag.svg";
import redeem from "../assets/redeem.svg";
// --- State for the Search Bar ---
const searchTerm = ref('');
const searchCategory = ref('All');

const router = useRouter();

const categories = [
    { label: 'All', value: 'All' },
    { label: 'Users', value: 'Users' },
    { label: 'Tickets', value: 'Tickets' },
    { label: 'Files', value: 'Files' },
];

const handleSearch = () => {
    console.log(`Searching for: "${searchTerm.value}" in category: ${searchCategory.value}`);
};

// --- Actions for the Toolbar ---
const createTicket = () => {
  // ✅ Navigate to FileTicket.vue
  router.push({ name: 'FileTicket' });  // or router.push('/file-ticket')
};

const downloadReport = () => {
    alert('Downloading report...');
};

const handleIconClick = (iconName) => {
    alert(`Icon clicked: ${iconName}`);
};
</script>

<template>
    <div class="grid grid-cols-3 items-center h-16 w-full px-6 bg-white ">

        <div class="justify-self-start">
            <button 
                @click="createTicket"
                class="flex items-center space-x-2 px-4 py-2 bg-gray-200 text-blue-900 font-medium rounded-4xl hover:bg-gray-300 transition duration-150 shadow-sm"
            >
                <i class="fas fa-plus text-sm"></i> 
                <span>Create Ticket</span>
            </button>
        </div>

        <div class="justify-self-center">
            <h2 class="text-xl flex font-semibold text-center text-blue-900 ">
                Ticket List
            </h2>
        </div>

        <div class="justify-self-end flex items-center space-x-4">
            
            
            <button 
                @click="handleIconClick('Filter')" 
                class="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-600 transition duration-150"
            >
                <img
        :src="redeem"
        alt="redeemsymbol"
        class=" object-cover"
      />
            </button>
             <button 
                @click="handleIconClick('Settings')" 
                class="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-600 transition duration-150"
            >
               <img
        :src="remove"
        alt="reemovesymbol"
        class=" object-cover"
      />
            </button>
             <button 
                @click="handleIconClick('Layout')" 
                class="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-600 transition duration-150"
            >
                <img
        :src="print"
        alt="printsymbol"
        class=" object-cover"
      />
            </button>

            <button 
                @click="downloadReport"
                class="flex items-center h-[37] w-[168]  space-x-2 px-4 py-2 bg-blue-900 text-white font-medium rounded-4xl hover:bg-blue-800 transition duration-150 shadow-md"
            >
            <img
        :src="download"
        alt="downloadsymbol"
        class=" object-cover"
      />
                
                <span>Download Report</span>
            </button>

            

        </div>
    </div>

</template>

<style scoped>

</style>
<!-- *********************************************************************************************************** -->