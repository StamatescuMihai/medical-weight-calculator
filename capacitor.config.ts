import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.lotad.weightcalc',
  appName: 'Medical Weight Calculator',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
