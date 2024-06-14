<script setup>
</script>

  <template>
  <q-layout view="lHr lpr fFf" style=" min-width: 70vw;">

    <q-header reveal elevated class="bg-primary text-grey-4" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <q-icon name="supervisor_account"  size="2rem"/>
          </q-avatar>
          Clients
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="center" active-color="blue-grey-8" indicator-color="blue-grey-9">
        <q-route-tab to="/admin" label="Clientes" />
        <q-route-tab to="/registro" label="Registrar" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-9 text-grey-4 q-pa-xs">
      <q-toolbar>
        <q-toolbar-title>
          <div>Desarrollado por TecLegal</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<style scoped>

.fixed-bottom{
  position: absolute;
  /* overflow:scroll */
}
</style>
