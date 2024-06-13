<template>
    <q-layout class="mainContainer">
      <q-page-container>
        <q-page>
          <div class="q-pa-sm">
            <q-input dark
                      color="primary"
                      debounce="300" 
                      v-model="filter" 
                      placeholder="Buscar Cliente">
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>
          <q-table
          :grid="$q.screen.lt.md"
            color="primary"
            card-class="bg-grey-10 text-grey"
            table-class="text-grey-4"
            flat bordered
            title="Lista de clientes"
            :rows="rows"
            :columns="columns"
            row-key="nombre"
            hide-header
            v-model:pagination="pagination"
            :loading="loading"
            :filter="filter"
            binary-state-sort
            @request="onRequest"
            ref="tableRef"
            @row-click="(evt, row, index) => test(row)"
          />
          
        </q-page>
      </q-page-container>
    </q-layout>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router'

export default {
  name: 'ClientesView',
  setup() {
    const columns = [
      {
        nombre: 'nombre',
        required: true,
        label: 'Nombre',
        align: 'left',
        field: 'nombre',
        format: val => `${val}`,
        sortable: true
      },
      { name: 'estado', align: 'center', label: 'Estado', field: 'estado', sortable: true },
    ]
    const originalRows = [
      {
        nombre: 'Luis Manuel Torres Perez',
        estado: 'Activo',
        id: 1
      },
      {
        nombre: 'Ana María Perez Campos',
        estado: 'En proceso',
        id: 2
      },
      {
        nombre: 'Ana María Perez Campos',
        estado: 'En proceso',
        id: 3
      },
      {
        nombre: 'Ana María Perez Campos',
        estado: 'En proceso',
        id: 4
      },
      {
        nombre: 'Ana María Perez Campos',
        estado: 'En proceso',
        id: 5
      },
      {
        nombre: 'Ana María Perez Campos',
        estado: 'En proceso',
        id: 6
      },
      {
        nombre: 'Ana María Perez Campos',
        estado: 'En proceso',
        id: 7
      },
      {
        nombre: 'Ana María Perez Campos',
        estado: 'En proceso',
        id: 8
      },
      {
        nombre: 'Cupcake',
        estado: 'Terminado',
        id: 9
      },
    ]
    const router = useRouter()
    const filter = ref('')
    const tableRef = ref()
    const rows = ref([])
    const loading = ref(false)
    const pagination = ref({
      sortBy: 'desc',
      descending: false,
      page: 1,
      rowsPerPage: 8,
      rowsNumber: 10
    })
    const test = (cliente) => {
      // console.log('salio', cliente);
      router.push(`/admin/cliente/${cliente.id}`)
    }
    // emulate ajax call
    // SELECT * FROM ... WHERE...LIMIT...
    function fetchFromServer (startRow, count, filter, sortBy, descending) {
      const data = filter
        ? originalRows.filter(row => row.name.includes(filter))
        : originalRows.slice()

      // handle sortBy
      if (sortBy) {
        const sortFn = sortBy === 'desc'
          ? (descending
              ? (a, b) => (a.name > b.name ? -1 : a.name < b.name ? 1 : 0)
              : (a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0)
            )
          : (descending
              ? (a, b) => (parseFloat(b[ sortBy ]) - parseFloat(a[ sortBy ]))
              : (a, b) => (parseFloat(a[ sortBy ]) - parseFloat(b[ sortBy ]))
            )
        data.sort(sortFn)
      }

      return data.slice(startRow, startRow + count)
    }

    // emulate 'SELECT count(*) FROM ...WHERE...'
    function getRowsNumberCount (filter) {
      if (!filter) {
        return originalRows.length
      }
      let count = 0
      originalRows.forEach(treat => {
        if (treat.name.includes(filter)) {
          ++count
        }
      })
      return count
    }

    function onRequest (props) {
      const { page, rowsPerPage, sortBy, descending } = props.pagination
      const filter = props.filter

      loading.value = true

      // emulate server
      setTimeout(() => {
        // update rowsCount with appropriate value
        pagination.value.rowsNumber = getRowsNumberCount(filter)

        // get all rows if "All" (0) is selected
        const fetchCount = rowsPerPage === 0 ? pagination.value.rowsNumber : rowsPerPage

        // calculate starting row of data
        const startRow = (page - 1) * rowsPerPage

        // fetch data from "server"
        const returnedData = fetchFromServer(startRow, fetchCount, filter, sortBy, descending)

        // clear out existing data and add new
        rows.value.splice(0, rows.value.length, ...returnedData)

        // don't forget to update local pagination object
        pagination.value.page = page
        pagination.value.rowsPerPage = rowsPerPage
        pagination.value.sortBy = sortBy
        pagination.value.descending = descending

        // ...and turn of loading indicator
        loading.value = false
      }, 1500)
    }

    onMounted(() => {
      // get initial data from server (1st page)
      tableRef.value.requestServerInteraction()
    })

    return { columns, rows, filter, tableRef, loading, pagination, onRequest, test };
  },
};
</script>

<style scoped>
/* @media (max-width: 768px) {
  .mainContainer {
    width: 98vw; 
  }
}

@media (min-width: 769px) {
  .mainContainer {
    width: 100%;
  }
} */
</style>
  