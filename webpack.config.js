const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mf-google-maps',

  exposes: {
    './GeocercaGoogleComponent': './src/app/views/geocerca-google/geocerca-google.component',
  },

  shared: {
    // 👇 1️⃣ Forzamos la versión correcta ANTES que shareAll
    "@angular/google-maps": { 
      singleton: true, 
      strictVersion: true, 
      requiredVersion: "21.0.0" 
    },

    // 👇 2️⃣ Luego añadimos el resto del paquete compartido
    ...shareAll({ 
      singleton: true, 
      strictVersion: true, 
      requiredVersion: 'auto' 
    })
  }

});
