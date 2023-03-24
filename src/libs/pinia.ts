import { createPinia } from "pinia";
import type { App } from "vue";

export function setupPinia(app: App<Element>) {
    app.use(createPinia());
}